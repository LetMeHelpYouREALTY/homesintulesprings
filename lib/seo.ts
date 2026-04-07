import type { Metadata } from 'next';
import { BUSINESS, BUSINESS_IDS, getAgentHeadshotUrl, OPENING_HOURS_SCHEMA, SITE_URL } from '@/lib/site-contact';

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | '/';
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Homes in Tule Springs',
      title,
      description,
      images: [{ url: '/images/tule-springs-hero.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/tule-springs-hero.jpg'],
    },
  };
}

export function getBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'Homes in Tule Springs | Dr. Jan Duffy, REALTOR®',
      template: '%s | Homes in Tule Springs',
    },
    description:
      'Search homes for sale in Tule Springs, North Las Vegas. Browse MLS listings, request a home valuation, and connect with Dr. Jan Duffy.',
    alternates: { canonical: '/' },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    category: 'Real Estate',
    other: {
      'contact:phone_number': BUSINESS.phoneDisplay,
    },
  };
}

const postalAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: BUSINESS.officeAddress.streetAddress,
  addressLocality: BUSINESS.officeAddress.city,
  addressRegion: BUSINESS.officeAddress.region,
  postalCode: BUSINESS.officeAddress.postalCode,
  addressCountry: BUSINESS.officeAddress.country,
};

/**
 * Global JSON-LD graph: Organization (brokerage), LocalBusiness/office entity, RealEstateAgent, WebSite.
 * Keeps @ids stable for GEO/entity consistency.
 */
export function getOrgGraph() {
  const agentImage = getAgentHeadshotUrl();

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': BUSINESS_IDS.org,
        name: BUSINESS.legalName,
        url: SITE_URL,
      },
      {
        '@type': 'LocalBusiness',
        '@id': BUSINESS_IDS.localBusiness,
        name: `${BUSINESS.name} | ${BUSINESS.legalName}`,
        image: agentImage,
        url: SITE_URL,
        telephone: BUSINESS.phoneE164,
        email: BUSINESS.email,
        address: postalAddress,
        openingHours: [...OPENING_HOURS_SCHEMA],
        parentOrganization: { '@id': BUSINESS_IDS.org },
      },
      {
        '@type': 'RealEstateAgent',
        '@id': BUSINESS_IDS.agent,
        name: BUSINESS.name,
        image: agentImage,
        url: SITE_URL,
        telephone: BUSINESS.phoneE164,
        email: BUSINESS.email,
        license: BUSINESS.license,
        worksFor: { '@id': BUSINESS_IDS.localBusiness },
        memberOf: { '@id': BUSINESS_IDS.org },
        areaServed: { '@type': 'Place', name: BUSINESS.serviceArea },
        address: postalAddress,
      },
      {
        '@type': 'WebSite',
        '@id': BUSINESS_IDS.website,
        name: 'Homes in Tule Springs',
        url: SITE_URL,
        publisher: { '@id': BUSINESS_IDS.agent },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/listings?search={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}
