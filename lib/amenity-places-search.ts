import {
  getCategoryById,
  TULE_SPRINGS_COMMUNITY,
  type AmenityCategoryId,
} from '@/lib/community-map';

const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
): Promise<google.maps.places.Place[]> {
  const cat = getCategoryById(categoryId);
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
        locationRestriction: {
          center,
          radius: TULE_SPRINGS_COMMUNITY.searchRadiusMeters,
        },
        includedPrimaryTypes: cat.placeTypes,
        maxResultCount: 10,
        rankPreference: 'POPULARITY' as any,
      });
      return places;
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
