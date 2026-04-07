import type { Metadata } from 'next';
import { NAV_ROUTES } from '@/lib/site-contact';
import { createPageMetadata } from '@/lib/seo';

/** All marketed routes with SEO copy in one place (title + meta description). */
const SEO_BY_PATH: Record<
  '/' | '/buyers' | '/sellers' | '/listings' | '/about' | '/contact' | '/tule-springs' | '/tule-springs-homes-for-sale' | '/tule-springs-villages' | '/tule-springs-schools' | '/tule-springs-amenities' | '/why-tule-springs' | '/tule-springs-real-estate' | '/tule-springs-neighborhoods' | '/north-las-vegas-tule-springs' | '/tule-springs-new-homes',
  { title: string; description: string }
> = {
  '/': {
    title: 'Homes in Tule Springs | North Las Vegas Real Estate | Dr. Jan Duffy',
    description:
      'Search Tule Springs and North Las Vegas homes for sale, explore the community, and connect with Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties.',
  },
  '/buyers': {
    title: 'Buy a Home in Tule Springs | Buyer Services',
    description:
      'Browse homes for sale in Tule Springs and North Las Vegas, Nevada with local search tools and neighborhood guidance from Dr. Jan Duffy.',
  },
  '/sellers': {
    title: 'Sell Your Home in Tule Springs | Home Valuation',
    description:
      'Request a home valuation and seller strategy for Tule Springs and North Las Vegas, Nevada with Dr. Jan Duffy.',
  },
  '/listings': {
    title: 'Listings | Tule Springs Homes for Sale',
    description:
      'Search homes for sale in Tule Springs and North Las Vegas, Nevada with local listing updates and guidance from Dr. Jan Duffy.',
  },
  '/about': {
    title: 'About Dr. Jan Duffy | Tule Springs REALTOR®',
    description:
      'Meet Dr. Jan Duffy, REALTOR® serving Tule Springs and North Las Vegas, Nevada with Berkshire Hathaway HomeServices Nevada Properties.',
  },
  '/contact': {
    title: 'Contact Dr. Jan Duffy | Tule Springs Real Estate',
    description:
      'Contact Dr. Jan Duffy for Tule Springs and North Las Vegas, Nevada real estate. Call, email, or schedule a 15-minute Calendly conversation.',
  },
  '/tule-springs': {
    title: 'Tule Springs | North Las Vegas Real Estate & Community',
    description:
      'Explore Tule Springs, North Las Vegas, Nevada neighborhoods, schools, amenities, and homes for sale with local guidance from Dr. Jan Duffy.',
  },
  '/tule-springs-homes-for-sale': {
    title: 'Tule Springs Homes for Sale | North Las Vegas Listings',
    description:
      'Search Tule Springs homes for sale with local listing updates in North Las Vegas, Nevada and support from Dr. Jan Duffy.',
  },
  '/tule-springs-villages': {
    title: 'Tule Springs Villages | North Las Vegas Neighborhoods',
    description:
      'Explore Tule Springs villages and neighborhoods in North Las Vegas, Nevada and find homes with Dr. Jan Duffy.',
  },
  '/tule-springs-schools': {
    title: 'Tule Springs Schools | North Las Vegas Schools',
    description:
      'Explore schools serving Tule Springs and find homes near preferred school zones in North Las Vegas, Nevada with Dr. Jan Duffy.',
  },
  '/tule-springs-amenities': {
    title: 'Tule Springs Amenities | Parks, Trails & Lifestyle',
    description:
      'Discover Tule Springs amenities, parks, trails, and recreation, then search nearby homes with Dr. Jan Duffy.',
  },
  '/why-tule-springs': {
    title: 'Why Live in Tule Springs | North Las Vegas Community',
    description:
      'Learn why buyers choose Tule Springs in North Las Vegas, Nevada, from neighborhood features to local lifestyle and housing options.',
  },
  '/tule-springs-real-estate': {
    title: 'Tule Springs Real Estate | North Las Vegas Market',
    description:
      'Review Tule Springs real estate market context and browse live listings with Dr. Jan Duffy in North Las Vegas, Nevada.',
  },
  '/tule-springs-neighborhoods': {
    title: 'Tule Springs Neighborhoods | North Las Vegas Areas',
    description:
      'Explore Tule Springs neighborhoods and find the right North Las Vegas, Nevada area for your lifestyle with Dr. Jan Duffy.',
  },
  '/north-las-vegas-tule-springs': {
    title: 'North Las Vegas & Tule Springs | Real Estate Guide',
    description:
      'Explore North Las Vegas, Nevada and Tule Springs real estate with local market guidance and live listings from Dr. Jan Duffy.',
  },
  '/tule-springs-new-homes': {
    title: 'Tule Springs New Homes | New Construction North Las Vegas',
    description:
      'Browse new construction and newly listed homes in Tule Springs, North Las Vegas, Nevada with guidance from Dr. Jan Duffy.',
  },
};

export type MarketingPath = (typeof NAV_ROUTES)[number];

export function routeMetadata(path: MarketingPath): Metadata {
  const key = path === '' ? '/' : path;
  const entry = SEO_BY_PATH[key as keyof typeof SEO_BY_PATH];
  if (!entry) {
    throw new Error(`Missing SEO entry for path: ${path === '' ? '(home)' : path}`);
  }
  return createPageMetadata({
    title: entry.title,
    description: entry.description,
    path: path === '' ? '/' : path,
  });
}
