import type { AmenityCategoryId } from '@/lib/community-map';

export type CuratedPlace = {
  id: string;
  name: string;
  category: AmenityCategoryId;
  /** schema.org @type for ItemList entries */
  schemaType: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
  note?: string;
};

/** Verified names and mailing addresses for fallback list + JSON-LD (no invented ratings or drive times). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    id: 'tule-springs-regional-park',
    name: 'Tule Springs Regional Park',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: '8650 N Fort Apache Rd',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89149',
    note: 'Clark County regional park on the edge of the Tule Springs Fossil Beds area.',
  },
  {
    id: 'aliante-nature-discovery-park',
    name: 'Aliante Nature Discovery Park',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: '2627 Nature Park Dr',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
  },
  {
    id: 'craig-ranch-regional-park',
    name: 'Craig Ranch Regional Park',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: '628 W Craig Rd',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89032',
  },
  {
    id: 'eglington-preserve',
    name: 'Eglington Preserve',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: 'Eglington Preserve',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
    note: 'Open desert preserve adjacent to Tule Springs villages (trail access varies by entry point).',
  },
  {
    id: 'smiths-craig',
    name: "Smith's Food and Drug",
    category: 'grocery',
    schemaType: 'GroceryStore',
    streetAddress: '7450 W Craig Rd',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89129',
  },
  {
    id: 'walmart-craig',
    name: 'Walmart Supercenter',
    category: 'grocery',
    schemaType: 'GroceryStore',
    streetAddress: '1807 W Craig Rd',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89032',
  },
  {
    id: 'aliante-casino',
    name: 'Aliante Casino + Hotel',
    category: 'restaurants',
    schemaType: 'Restaurant',
    streetAddress: '7300 Aliante Pkwy',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
    note: 'Dining, entertainment, and hotel on Aliante Parkway.',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    schemaType: 'Hospital',
    streetAddress: '6900 N Durango Dr',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89149',
  },
  {
    id: 'mountainview-hospital',
    name: 'MountainView Hospital',
    category: 'healthcare',
    schemaType: 'Hospital',
    streetAddress: '3110 N Tenaya Way',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89128',
  },
  {
    id: 'lifetime-aliante',
    name: 'Life Time',
    category: 'fitness',
    schemaType: 'ExerciseGym',
    streetAddress: '7300 Aliante Pkwy',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
  },
  {
    id: 'aliante-station-shopping',
    name: 'Aliante Casino + Hotel (retail & dining)',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    streetAddress: '7300 Aliante Pkwy',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
  },
  {
    id: 'centennial-high',
    name: 'Centennial High School',
    category: 'schools',
    schemaType: 'School',
    streetAddress: '10200 Centennial Pkwy',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89149',
    note: 'Clark County School District (CCSD).',
  },
  {
    id: 'legacy-high',
    name: 'Legacy High School',
    category: 'schools',
    schemaType: 'School',
    streetAddress: '150 W Deer Springs Way',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
    note: 'Clark County School District (CCSD).',
  },
  {
    id: 'lowman-elementary',
    name: 'Zel & Mary Lowman Elementary School',
    category: 'schools',
    schemaType: 'School',
    streetAddress: '7000 Lowman Ln',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89149',
    note: 'Clark County School District (CCSD).',
  },
  {
    id: 'angel-park-golf',
    name: 'Angel Park Golf Club',
    category: 'golf',
    schemaType: 'GolfCourse',
    streetAddress: '1001 S Rampart Blvd',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89145',
  },
  {
    id: 'cvs-tenaya',
    name: 'CVS Pharmacy',
    category: 'pharmacies',
    schemaType: 'Pharmacy',
    streetAddress: '7310 N Durango Dr',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89149',
  },
];

export function formatPlaceAddress(place: CuratedPlace): string {
  return `${place.streetAddress}, ${place.city}, ${place.region} ${place.postalCode}`;
}

export function filterCuratedByCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.category === category);
}

export type AmenityFaq = { question: string; answer: string };

export const AMENITY_FAQS: AmenityFaq[] = [
  {
    question: 'What grocery stores are near Tule Springs?',
    answer:
      "Smith's on West Craig Road and Walmart Supercenter on West Craig Road in North Las Vegas are common grocery runs for Tule Springs and Aliante residents.",
  },
  {
    question: 'How far is Tule Springs from the Las Vegas Strip?',
    answer:
      'Most drivers reach the central Las Vegas Strip in roughly 25–35 minutes via I-15 or US-95, depending on traffic and your starting village (approximate).',
  },
  {
    question: 'Are there hospitals near Tule Springs?',
    answer:
      'Centennial Hills Hospital on North Durango Drive and MountainView Hospital on North Tenaya Way are full-service hospitals within a short drive of Tule Springs.',
  },
  {
    question: 'What parks and trails are close to Tule Springs?',
    answer:
      'Aliante Nature Discovery Park sits in the heart of the area, with Craig Ranch Regional Park and Tule Springs Regional Park nearby; Eglington Preserve offers desert open space along the community edge.',
  },
  {
    question: 'Which schools serve Tule Springs?',
    answer:
      'Tule Springs is in the Clark County School District; nearby CCSD schools include Lowman Elementary, Centennial High School, and Legacy High School—verify current zoning with CCSD before you buy.',
  },
  {
    question: 'How far is Harry Reid International Airport from Tule Springs?',
    answer:
      'Harry Reid International Airport is typically about 30–40 minutes by car via the 215 Beltway and I-15, traffic dependent (approximate).',
  },
  {
    question: 'Is Downtown Summerlin easy to reach from Tule Springs?',
    answer:
      'Downtown Summerlin is usually about 20–25 minutes west on the 215 Beltway during typical daytime traffic (approximate).',
  },
  {
    question: 'Where can I golf near Tule Springs?',
    answer:
      'Angel Park Golf Club on South Rampart Boulevard is one of the closest public golf options northwest of the Strip, a short drive from North Las Vegas.',
  },
];
