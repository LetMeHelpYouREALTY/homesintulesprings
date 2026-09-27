export const SITE_URL = 'https://www.homesintulesprings.com';

export const BUSINESS = {
  name: 'Dr. Jan Duffy',
  legalName: 'Berkshire Hathaway HomeServices Nevada Properties',
  license: 'S.0197614.LLC',
  email: 'DrDuffy@bhhsnv.com',
  phoneDisplay: '(702) 500-1942',
  phoneE164: '+17025001942',
  officeAddress: {
    streetAddress: '2627 Nature Park Dr',
    city: 'North Las Vegas',
    region: 'NV',
    postalCode: '89084',
    country: 'US',
  },
  serviceArea: 'Tule Springs, North Las Vegas',
  realscoutAgentEncodedId: 'QWdlbnQtMjI1MDUw',
} as const;

/** Matches visible office hours on key pages + GBP-style presentation. */
export const OPENING_HOURS_SCHEMA = ['Mo-Fr 09:00-17:00', 'Sa 10:00-15:00'] as const;

/** Primary agent headshot for JSON-LD and metadata (filename contains spaces). */
export function getAgentHeadshotUrl(): string {
  return `${SITE_URL}/images/agents/${encodeURIComponent('zillowDr Jan new.jpg')}`;
}

export const BUSINESS_IDS = {
  /** Brokerage / parent organization */
  org: `${SITE_URL}/#organization`,
  agent: `${SITE_URL}/#agent`,
  website: `${SITE_URL}/#website`,
  /** Office / local entity (NAP-aligned LocalBusiness-style node) */
  localBusiness: `${SITE_URL}/#localbusiness`,
} as const;

export const SOCIAL_URLS = {
  facebook: 'https://www.facebook.com/DrJanDuffy',
  instagram: 'https://www.instagram.com/drjanduffy',
  linkedin: 'https://www.linkedin.com/in/drjanduffy',
  youtube: 'https://www.youtube.com/@drjanduffy',
} as const;

export const NAV_ROUTES = [
  '',
  '/buyers',
  '/sellers',
  '/listings',
  '/about',
  '/contact',
  '/tule-springs',
  '/tule-springs-homes-for-sale',
  '/tule-springs-villages',
  '/tule-springs-schools',
  '/tule-springs-amenities',
  '/amenities',
  '/why-tule-springs',
  '/tule-springs-real-estate',
  '/tule-springs-neighborhoods',
  '/north-las-vegas-tule-springs',
  '/tule-springs-new-homes',
] as const;
