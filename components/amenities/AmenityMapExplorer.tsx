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
import { CuratedAmenityList } from '@/components/amenities/CuratedAmenityList';

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? '';
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() ?? '';

const MAP_HEIGHT_COMPACT = 420;
const MAP_HEIGHT_FULL = 520;

type AmenityMapExplorerProps = {
  variant?: 'compact' | 'full';
  /** When true, category chips wrap in a single row on desktop */
  showAllCategories?: boolean;
};

type MapMarker = {
  title: string;
  lat: number;
  lng: number;
  address?: string;
  rating?: number;
  isCommunity?: boolean;
};

function loadMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('no window'));
  }
  if (window.google?.maps) {
    return Promise.resolve();
  }
  const existing = document.querySelector<HTMLScriptElement>('script[data-amenity-maps]');
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Maps script error')));
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.dataset.amenityMaps = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps'));
    document.head.appendChild(script);
  });
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
  const [loadFailed, setLoadFailed] = useState(!MAPS_API_KEY);

  const center = TULE_SPRINGS_COMMUNITY.center;
  const embedUrl = buildEmbedMapUrl(center.lat, center.lng);

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
        `<div class="amenity-info-window"><strong>${TULE_SPRINGS_COMMUNITY.name}</strong><p>${TULE_SPRINGS_COMMUNITY.centerLabel}</p></div>`,
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
          const ratingLine =
            place.rating != null ? `<p>Rating: ${place.rating.toFixed(1)}</p>` : '';
          const addressLine = place.address ? `<p>${place.address}</p>` : '';
          const dirUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;
          iw.setContent(
            `<div class="amenity-info-window"><strong>${place.title}</strong>${ratingLine}${addressLine}<p><a href="${dirUrl}" target="_blank" rel="noopener">Directions</a></p></div>`,
          );
          iw.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers],
  );

  const searchCategory = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const cat = getCategoryById(categoryId);
      showCommunityMarker(map);

      try {
        const placesLib = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
        const { Place } = placesLib;

        if (Place && typeof Place.searchNearby === 'function') {
          const { places } = await Place.searchNearby({
            fields: ['displayName', 'location', 'formattedAddress', 'rating'],
            locationRestriction: {
              center,
              radius: TULE_SPRINGS_COMMUNITY.searchRadiusMeters,
            },
            includedPrimaryTypes: cat.placeTypes,
            maxResultCount: 15,
          });

          const markers = places.flatMap((p) => {
            const loc = p.location;
            if (!loc) return [];
            const row: MapMarker = {
              title: p.displayName ?? 'Place',
              lat: loc.lat(),
              lng: loc.lng(),
              address: p.formattedAddress ?? undefined,
              rating: p.rating ?? undefined,
            };
            return [row];
          });

          plotMarkers(map, markers);
          return;
        }
      } catch {
        // Fall through to legacy nearbySearch
      }

      try {
        const service = new google.maps.places.PlacesService(map);
        const request: google.maps.places.PlaceSearchRequest = {
          location: center,
          radius: TULE_SPRINGS_COMMUNITY.searchRadiusMeters,
          type: cat.placeTypes[0],
        };
        service.nearbySearch(request, (results, status) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
            return;
          }
          const markers = results.flatMap((r) => {
            const loc = r.geometry?.location;
            if (!loc) return [];
            const row: MapMarker = {
              title: r.name ?? 'Place',
              lat: loc.lat(),
              lng: loc.lng(),
              address: r.vicinity,
              rating: r.rating,
            };
            return [row];
          });
          plotMarkers(map, markers);
        });
      } catch {
        setLoadFailed(true);
      }
    },
    [center, plotMarkers, showCommunityMarker],
  );

  const initMap = useCallback(async () => {
    if (!MAPS_API_KEY || !mapContainerRef.current || mapInstanceRef.current) {
      return;
    }
    try {
      await loadMapsScript(MAPS_API_KEY);
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
      await searchCategory(map, category);
    } catch {
      setLoadFailed(true);
      setUseInteractive(false);
    }
  }, [category, center, searchCategory]);

  useEffect(() => {
    if (!MAPS_API_KEY || loadFailed) {
      return;
    }
    const node = panelRef.current;
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible && !useInteractive && !loadFailed) {
          setUseInteractive(true);
        }
      },
      { rootMargin: '120px', threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [loadFailed, useInteractive]);

  useEffect(() => {
    if (!useInteractive || loadFailed) {
      return;
    }
    void initMap();
  }, [useInteractive, loadFailed, initMap]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !mapReady) {
      return;
    }
    void searchCategory(map, category);
  }, [category, mapReady, searchCategory]);

  const categoriesToShow = showAllCategories
    ? AMENITY_CATEGORIES
    : AMENITY_CATEGORIES.slice(0, 6);

  const showIframe = !MAPS_API_KEY || loadFailed || !mapReady;

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
        {showIframe ? (
          <div className="open-houses-map-frame amenity-map-frame">
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
        ) : null}
        <div
          ref={mapContainerRef}
          className="amenity-map-canvas"
          style={{
            height: mapHeight,
            width: '100%',
            display: showIframe ? 'none' : 'block',
          }}
          aria-label={`Interactive map of ${getCategoryById(category).label} near ${TULE_SPRINGS_COMMUNITY.name}`}
        />
      </div>

      <div className="curated-amenity-section">
        <h3 className="curated-amenity-heading">
          Featured {getCategoryById(category).label.toLowerCase()} near {TULE_SPRINGS_COMMUNITY.name}
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
