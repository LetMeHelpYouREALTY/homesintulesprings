import type { AmenityCategoryId } from '@/lib/community-map';
import {
  CURATED_NEARBY_PLACES,
  filterCuratedByCategory,
  formatPlaceAddress,
  type CuratedPlace,
} from '@/lib/curated-nearby-amenities';

type CuratedAmenityListProps = {
  category: AmenityCategoryId;
  /** Limit items shown in compact homepage sections */
  limit?: number;
  listId?: string;
};

function PlaceRow({ place }: { place: CuratedPlace }) {
  const address = formatPlaceAddress(place);
  const mapsQuery = encodeURIComponent(`${place.name}, ${address}`);
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${place.name}, ${address}`)}`;

  return (
    <li className="curated-amenity-item">
      <strong>{place.name}</strong>
      <span className="curated-amenity-address">{address}</span>
      {place.note ? <span className="curated-amenity-note">{place.note}</span> : null}
      <a
        href={directionsHref}
        className="curated-amenity-directions"
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions
      </a>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
        className="curated-amenity-map-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google Maps
      </a>
    </li>
  );
}

export function CuratedAmenityList({ category, limit, listId }: CuratedAmenityListProps) {
  const items = filterCuratedByCategory(category);
  const visible = limit ? items.slice(0, limit) : items;

  if (visible.length === 0) {
    const fallback = CURATED_NEARBY_PLACES.slice(0, limit ?? 6);
    return (
      <ul className="curated-amenity-list" id={listId} aria-live="polite">
        {fallback.map((place) => (
          <PlaceRow key={place.id} place={place} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="curated-amenity-list" id={listId} aria-live="polite">
      {visible.map((place) => (
        <PlaceRow key={place.id} place={place} />
      ))}
    </ul>
  );
}
