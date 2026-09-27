/**
 * Hyperlocal map center for the Tule Springs master-planned area (North Las Vegas, NV 89084).
 * Coordinates sourced from OpenStreetMap/Nominatim for 2627 Nature Park Dr — the site's published
 * office NAP in Aliante / Tule Springs (see lib/site-contact.ts).
 */
export const TULE_SPRINGS_COMMUNITY = {
  name: 'Tule Springs',
  city: 'North Las Vegas',
  region: 'NV',
  postalCode: '89084',
  center: {
    lat: 36.2888512,
    lng: -115.176425,
  },
  centerLabel: 'Tule Springs & Aliante area',
  coordinateSource:
    'OpenStreetMap geocode of 2627 Nature Park Dr, North Las Vegas, NV 89084 (site office NAP)',
  searchRadiusMeters: 5000,
} as const;

export type AmenityCategoryId =
  | 'parks'
  | 'grocery'
  | 'restaurants'
  | 'healthcare'
  | 'fitness'
  | 'shopping'
  | 'schools'
  | 'golf'
  | 'cafes'
  | 'pharmacies'
  | 'parking';

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  placeTypes: string[];
  ariaLabel: string;
};

/** Tule Springs / Aliante area — parks and daily needs first; schools use CCSD zoning lookup. */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'parks',
    label: 'Parks',
    placeTypes: ['park'],
    ariaLabel: 'Show parks near Tule Springs',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    placeTypes: ['grocery_store', 'supermarket'],
    ariaLabel: 'Show grocery stores near Tule Springs',
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    placeTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Tule Springs',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    placeTypes: ['hospital', 'doctor'],
    ariaLabel: 'Show healthcare near Tule Springs',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    placeTypes: ['gym', 'fitness_center'],
    ariaLabel: 'Show fitness centers near Tule Springs',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    placeTypes: ['shopping_mall'],
    ariaLabel: 'Show shopping near Tule Springs',
  },
  {
    id: 'schools',
    label: 'Schools',
    placeTypes: ['school', 'primary_school', 'secondary_school'],
    ariaLabel: 'Show schools near Tule Springs',
  },
  {
    id: 'golf',
    label: 'Golf',
    placeTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Tule Springs',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    placeTypes: ['cafe', 'coffee_shop'],
    ariaLabel: 'Show cafes near Tule Springs',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    placeTypes: ['pharmacy'],
    ariaLabel: 'Show pharmacies near Tule Springs',
  },
  {
    id: 'parking',
    label: 'Parking',
    placeTypes: ['parking'],
    ariaLabel: 'Show parking near Tule Springs',
  },
];

export const DEFAULT_AMENITY_CATEGORY: AmenityCategoryId = 'parks';

export function getCategoryById(id: AmenityCategoryId): AmenityCategory {
  const found = AMENITY_CATEGORIES.find((c) => c.id === id);
  if (!found) {
    return AMENITY_CATEGORIES[0];
  }
  return found;
}

export function buildEmbedMapUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

export function buildDirectionsUrl(lat: number, lng: number, label?: string): string {
  const destination = label ? encodeURIComponent(label) : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}
