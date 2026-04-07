import type { BreadcrumbItem } from '@/lib/breadcrumbs';
import type { MarketingPath } from '@/lib/page-seo';

const TULE_HUB: BreadcrumbItem = { name: 'Tule Springs', path: '/tule-springs' };

/** Breadcrumb trails for inner pages (home is omitted). */
export const BREADCRUMB_TRAILS: Record<Exclude<MarketingPath, ''>, BreadcrumbItem[]> = {
  '/buyers': [
    { name: 'Home', path: '/' },
    { name: 'Buyers', path: '/buyers' },
  ],
  '/sellers': [
    { name: 'Home', path: '/' },
    { name: 'Sellers', path: '/sellers' },
  ],
  '/listings': [
    { name: 'Home', path: '/' },
    { name: 'Listings', path: '/listings' },
  ],
  '/about': [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ],
  '/contact': [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ],
  '/tule-springs': [
    { name: 'Home', path: '/' },
    { name: 'Tule Springs', path: '/tule-springs' },
  ],
  '/tule-springs-homes-for-sale': [
    { name: 'Home', path: '/' },
    TULE_HUB,
    { name: 'Homes for Sale', path: '/tule-springs-homes-for-sale' },
  ],
  '/tule-springs-villages': [
    { name: 'Home', path: '/' },
    TULE_HUB,
    { name: 'Villages', path: '/tule-springs-villages' },
  ],
  '/tule-springs-schools': [
    { name: 'Home', path: '/' },
    TULE_HUB,
    { name: 'Schools', path: '/tule-springs-schools' },
  ],
  '/tule-springs-amenities': [
    { name: 'Home', path: '/' },
    TULE_HUB,
    { name: 'Amenities', path: '/tule-springs-amenities' },
  ],
  '/why-tule-springs': [
    { name: 'Home', path: '/' },
    TULE_HUB,
    { name: 'Why Tule Springs', path: '/why-tule-springs' },
  ],
  '/tule-springs-real-estate': [
    { name: 'Home', path: '/' },
    TULE_HUB,
    { name: 'Real Estate', path: '/tule-springs-real-estate' },
  ],
  '/tule-springs-neighborhoods': [
    { name: 'Home', path: '/' },
    TULE_HUB,
    { name: 'Neighborhoods', path: '/tule-springs-neighborhoods' },
  ],
  '/north-las-vegas-tule-springs': [
    { name: 'Home', path: '/' },
    TULE_HUB,
    { name: 'North Las Vegas & Tule Springs', path: '/north-las-vegas-tule-springs' },
  ],
  '/tule-springs-new-homes': [
    { name: 'Home', path: '/' },
    TULE_HUB,
    { name: 'New Homes', path: '/tule-springs-new-homes' },
  ],
};

export function getBreadcrumbTrail(path: Exclude<MarketingPath, ''>): BreadcrumbItem[] {
  return BREADCRUMB_TRAILS[path];
}
