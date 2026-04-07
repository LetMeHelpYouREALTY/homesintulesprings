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

export const BUSINESS_IDS = {
  org: `${SITE_URL}/#organization`,
  agent: `${SITE_URL}/#agent`,
  website: `${SITE_URL}/#website`,
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
  '/why-tule-springs',
  '/tule-springs-real-estate',
  '/tule-springs-neighborhoods',
  '/north-las-vegas-tule-springs',
  '/tule-springs-new-homes',
] as const;
