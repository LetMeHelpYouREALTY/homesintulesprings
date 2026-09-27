'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  AMENITY_CATEGORIES,
  buildEmbedMapUrl,
  DEFAULT_AMENITY_CATEGORY,
  getCategoryById,
  TULE_SPRINGS_COMMUNITY,
  type AmenityCategoryId,
} from '@/lib/community-map';
import { searchCategory } from '@/lib/amenity-places-search';
import { loadGoogleMaps, mapsAuthFailed } from '@/lib/google-maps-loader';
import { CuratedAmenityList } from '@/components/amenities/CuratedAmenityList';

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? '';
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() ?? '';

const MAP_HEIGHT_COMPACT = 420;
const MAP_HEIGHT_FULL = 520;

type AmenityMapExplorerProps = {
  variant?: 'compact' | 'full';
  showAllCategories?: boolean;
};

type MapMarker = {
  title: string;
  lat: number;
  lng: number;
  address?: string;
  directionsUrl?: string;
  isCommunity?: boolean;
};

function buildInfoWindowContent(place: MapMarker): HTMLElement {
  const root = document.createElement('div');
  root.className = 'amenity-info-window';

  const title = document.createElement('strong');
  title.textContent = place.title;
  root.appendChild(title);

  if (place.address) {
    const addressEl = document.createElement('p');
    addressEl.textContent = place.address;
    root.appendChild(addressEl);
  }

  const dirUrl =
    place.directionsUrl ??
    `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;
  const link = document.createElement('a');
  link.href = dirUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Directions';
  const linkWrap = document.createElement('p');
  linkWrap.appendChild(link);
  root.appendChild(linkWrap);

  return root;
}

export function AmenityMapExplorer({
  variant = 'full',
  showAllCategories = true,
}: AmenityMapExplorerProps) {
  const mapHeight = variant === 'compact' ? MAP_HEIGHT_COMPACT : MAP_HEIGHT_FULL;
  const filterGroupId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);

  const [category, setCategory] = useState<AmenityCategoryId>(DEFAULT_AMENITY_CATEGORY);
  const [useInteractive, setUseInteractive] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [useEmbedFallback, setUseEmbedFallback] = useState(!MAPS_API_KEY || mapsAuthFailed);
  const [placesLoadFailed, setPlacesLoadFailed] = useState(false);

  const center = TULE_SPRINGS_COMMUNITY.center;
  const embedUrl = buildEmbedMapUrl(center.lat, center.lng);

  const enterFallback = useCallback(() => {
    setUseEmbedFallback(true);
    setUseInteractive(false);
    setMapReady(false);
    if (mapInstanceRef.current) {
      mapInstanceRef.current = null;
    }
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
      communityMarkerRef.current = null;
    }
    if (mapContainerRef.current) {
      mapContainerRef.current.replaceChildren();
    }
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showCommunityMarker = useCallback((map: google.maps.Map) => {
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
    }
    const marker = new google.maps.Marker({
      map,
      position: center,
      title: TULE_SPRINGS_COMMUNITY.name,
      zIndex: 1000,
    });
    communityMarkerRef.current = marker;
    const iw = infoWindowRef.current ?? new google.maps.InfoWindow();
    infoWindowRef.current = iw;
    marker.addListener('click', () => {
      iw.setContent(
        buildInfoWindowContent({
          title: TULE_SPRINGS_COMMUNITY.name,
          lat: center.lat,
          lng: center.lng,
          address: TULE_SPRINGS_COMMUNITY.centerLabel,
          isCommunity: true,
        }),
      );
      iw.open({ map, anchor: marker });
    });
  }, [center]);

  const plotMarkers = useCallback(
    (map: google.maps.Map, places: MapMarker[]) => {
      clearMarkers();
      const iw = infoWindowRef.current ?? new google.maps.InfoWindow();
      infoWindowRef.current = iw;

      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.title,
          zIndex: place.isCommunity ? 1000 : 1,
        });
        marker.addListener('click', () => {
          iw.setContent(buildInfoWindowContent(place));
          iw.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers],
  );

  const loadPlacesForCategory = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      showCommunityMarker(map);
      setPlacesLoadFailed(false);
      try {
        const places = await searchCategory(center, categoryId);
        const markers = places.flatMap((p) => {
          const loc = p.location;
          if (!loc) return [];
          const json = loc.toJSON?.() ?? { lat: loc.lat(), lng: loc.lng() };
          const row: MapMarker = {
            title: p.displayName ?? 'Place',
            lat: json.lat,
            lng: json.lng,
            address: p.formattedAddress ?? undefined,
            directionsUrl: p.googleMapsURI ?? undefined,
          };
          return [row];
        });
        plotMarkers(map, markers);
      } catch {
        setPlacesLoadFailed(true);
        plotMarkers(map, [
          {
            title: TULE_SPRINGS_COMMUNITY.name,
            lat: center.lat,
            lng: center.lng,
            address: TULE_SPRINGS_COMMUNITY.centerLabel,
            isCommunity: true,
          },
        ]);
      }
    },
    [center, plotMarkers, showCommunityMarker],
  );

  const initMap = useCallback(async () => {
    if (useEmbedFallback || !MAPS_API_KEY || !mapContainerRef.current || mapInstanceRef.current) {
      return;
    }
    try {
      await loadGoogleMaps(MAPS_API_KEY);
      const mapOptions: google.maps.MapOptions = {
        center,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      };
      if (MAP_ID) {
        mapOptions.mapId = MAP_ID;
      }
      const map = new google.maps.Map(mapContainerRef.current, mapOptions);
      mapInstanceRef.current = map;
      setMapReady(true);
      await loadPlacesForCategory(map, category);
    } catch {
      enterFallback();
    }
  }, [category, center, enterFallback, loadPlacesForCategory, useEmbedFallback]);

  useEffect(() => {
    if (useEmbedFallback) {
      return;
    }
    const onAuthFailure = () => enterFallback();
    window.addEventListener('gmaps:auth-failure', onAuthFailure);
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
  }, [enterFallback, useEmbedFallback]);

  useEffect(() => {
    if (mapsAuthFailed) {
      enterFallback();
    }
  }, [enterFallback]);

  useEffect(() => {
    if (!MAPS_API_KEY || useEmbedFallback) {
      return;
    }
    const node = panelRef.current;
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible && !useInteractive) {
          setUseInteractive(true);
        }
      },
      { rootMargin: '120px', threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [useEmbedFallback, useInteractive]);

  useEffect(() => {
    if (!useInteractive || useEmbedFallback) {
      return;
    }
    void initMap();
  }, [useInteractive, useEmbedFallback, initMap]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !mapReady || useEmbedFallback) {
      return;
    }
    void loadPlacesForCategory(map, category);
  }, [category, loadPlacesForCategory, mapReady, useEmbedFallback]);

  const categoriesToShow = showAllCategories
    ? AMENITY_CATEGORIES
    : AMENITY_CATEGORIES.slice(0, 6);

  const showEmbed = useEmbedFallback || !mapReady;

  return (
    <div className="amenity-map-explorer">
      <div
        className="amenity-filter-chips"
        role="tablist"
        aria-label="Filter nearby amenities by category"
      >
        {categoriesToShow.map((cat) => {
          const selected = category === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={`${filterGroupId}-${cat.id}`}
              aria-selected={selected}
              aria-controls="amenity-map-panel"
              className={`amenity-chip${selected ? ' amenity-chip-active' : ''}`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        ref={panelRef}
        id="amenity-map-panel"
        role="tabpanel"
        aria-labelledby={`${filterGroupId}-${category}`}
        className="amenity-map-panel"
        style={{ minHeight: mapHeight }}
      >
        <div
          className="open-houses-map-frame amenity-map-frame"
          style={{ display: showEmbed ? 'block' : 'none' }}
        >
          <iframe
            src={embedUrl}
            title={`Map of ${TULE_SPRINGS_COMMUNITY.name}, ${TULE_SPRINGS_COMMUNITY.city}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height={mapHeight}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
        <div
          ref={mapContainerRef}
          className="amenity-map-canvas"
          style={{
            height: mapHeight,
            width: '100%',
            display: showEmbed ? 'none' : 'block',
          }}
          aria-label={`Interactive map of ${getCategoryById(category).label} near ${TULE_SPRINGS_COMMUNITY.name}`}
        />
      </div>

      <div className="curated-amenity-section">
        <h3 className="curated-amenity-heading">
          Featured {getCategoryById(category).label.toLowerCase()} near {TULE_SPRINGS_COMMUNITY.name}
          {placesLoadFailed ? ' (verified list)' : ''}
        </h3>
        <CuratedAmenityList
          category={category}
          limit={variant === 'compact' ? 4 : undefined}
          listId="curated-amenity-list"
        />
      </div>
    </div>
  );
}
