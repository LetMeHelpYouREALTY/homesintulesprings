import type { AmenityCategoryId } from '@/lib/community-map';

export type CuratedPlace = {
  id: string;
  name: string;
  category: AmenityCategoryId;
  /** schema.org @type for ItemList entries */
  schemaType: string;
  /** Official page used to verify name and mailing address */
  sourceUrl: string;
  streetAddress?: string;
  city: string;
  region: string;
  postalCode: string;
  note?: string;
};

/** Verified names and mailing addresses for fallback list + JSON-LD (no invented ratings or drive times). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    id: 'aliante-nature-discovery-park',
    name: 'Aliante Nature Discovery Park',
    category: 'parks',
    schemaType: 'Park',
    sourceUrl:
      'https://www.cityofnorthlasvegas.com/Home/Components/FacilityDirectory/FacilityDirectory/73/777',
    streetAddress: '2627 Nature Park Dr',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
    note: 'City of North Las Vegas park (about 20 acres).',
  },
  {
    id: 'craig-ranch-regional-park',
    name: 'Craig Ranch Regional Park',
    category: 'parks',
    schemaType: 'Park',
    sourceUrl: 'https://www.cityofnorthlasvegas.com/things-to-do/parks-and-recreation/parks/craig-ranch-regional-park',
    streetAddress: '628 W Craig Rd',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89032',
    note: 'City of North Las Vegas regional park (about 170 acres).',
  },
  {
    id: 'smiths-craig',
    name: "Smith's Food and Drug",
    category: 'grocery',
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.smithsfoodanddrug.com/stores/grocery/nv/north-las-vegas/shadowcreek/706/00334',
    streetAddress: '3013 W Craig Rd',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89032',
  },
  {
    id: 'walmart-craig',
    name: 'Walmart Supercenter',
    category: 'grocery',
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.walmart.com/store/2592-north-las-vegas-nv',
    streetAddress: '1807 W Craig Rd',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89032',
  },
  {
    id: 'aliante-casino-dining',
    name: 'Aliante Casino + Hotel + Spa',
    category: 'restaurants',
    schemaType: 'Restaurant',
    sourceUrl: 'https://aliante.boydgaming.com/',
    streetAddress: '7300 N Aliante Pkwy',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
    note: 'Multiple on-property dining venues.',
  },
  {
    id: 'centennial-hills-hospital',
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    schemaType: 'Hospital',
    sourceUrl: 'https://www.centennialhillshospital.com/about/contact-us',
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
    sourceUrl: 'https://www.sunrisehealthinfo.com/locations/mountainview-hospital/about-us/contact-us',
    streetAddress: '3100 N Tenaya Way',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89128',
  },
  {
    id: 'aliante-fitness',
    name: 'Aliante Fitness Center',
    category: 'fitness',
    schemaType: 'ExerciseGym',
    sourceUrl: 'https://aliante.boydgaming.com/',
    streetAddress: '7300 N Aliante Pkwy',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
    note: 'Fitness center at Aliante Casino + Hotel + Spa.',
  },
  {
    id: 'aliante-station-shopping',
    name: 'Aliante Casino + Hotel + Spa (retail & dining)',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    sourceUrl: 'https://aliante.boydgaming.com/',
    streetAddress: '7300 N Aliante Pkwy',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
  },
  {
    id: 'centennial-high',
    name: 'Centennial High School',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'https://www.centennialhighschool.org/apps/contact/',
    streetAddress: '10200 Centennial Pkwy',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89149',
    note: 'Clark County School District (CCSD). Verify assignment with CCSD Zoning Search.',
  },
  {
    id: 'legacy-high',
    name: 'Legacy High School',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'https://www.legacyhigh.net/apps/contact/',
    streetAddress: '150 W Deer Springs Way',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
    note: 'Clark County School District (CCSD). Verify assignment with CCSD Zoning Search.',
  },
  {
    id: 'angel-park-golf',
    name: 'Angel Park Golf Club',
    category: 'golf',
    schemaType: 'GolfCourse',
    sourceUrl: 'https://arcisgolf.com/clubs/angel-park-golf-club/hours-and-directions',
    streetAddress: '100 S Rampart Blvd',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89145',
  },
];

export function formatPlaceAddress(place: CuratedPlace): string {
  if (place.streetAddress) {
    return `${place.streetAddress}, ${place.city}, ${place.region} ${place.postalCode}`;
  }
  return `${place.city}, ${place.region} ${place.postalCode}`;
}

export function filterCuratedByCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.category === category);
}

export type AmenityFaq = { question: string; answer: string };

export const AMENITY_FAQS: AmenityFaq[] = [
  {
    question: 'What grocery stores are near Tule Springs?',
    answer:
      "Smith's Food and Drug on West Craig Road (3013 W Craig Rd, North Las Vegas) and Walmart Supercenter on West Craig Road (1807 W Craig Rd) are common grocery runs for Tule Springs and Aliante residents.",
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
      'Aliante Nature Discovery Park on Nature Park Drive and Craig Ranch Regional Park on West Craig Road are city parks near the Tule Springs and Aliante area; Tule Springs Fossil Beds National Monument preserves open desert nearby.',
  },
  {
    question: 'Which CCSD schools are assigned to Tule Springs addresses?',
    answer:
      'School assignments follow your street address in the Clark County School District. Use the CCSD Zoning Search at ccsd.net/zoning before you buy—boundaries change and nearby campuses such as Legacy High and Centennial High are not guaranteed for every Tule Springs parcel.',
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
