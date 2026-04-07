import type { Metadata } from 'next';
import { BUSINESS, BUSINESS_IDS, SITE_URL } from '@/lib/site-contact';

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
      'Search homes for sale in Tule Springs, North Las Vegas. Browse real-time MLS listings, request a home valuation, and connect with Dr. Jan Duffy.',
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

export function getOrgGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': BUSINESS_IDS.agent,
        name: BUSINESS.name,
        image: `${SITE_URL}/images/agents/zillowDr Jan new.jpg`,
        url: SITE_URL,
        telephone: BUSINESS.phoneE164,
        email: BUSINESS.email,
        areaServed: { '@type': 'Place', name: BUSINESS.serviceArea },
        memberOf: { '@id': BUSINESS_IDS.org },
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.officeAddress.streetAddress,
          addressLocality: BUSINESS.officeAddress.city,
          addressRegion: BUSINESS.officeAddress.region,
          postalCode: BUSINESS.officeAddress.postalCode,
          addressCountry: BUSINESS.officeAddress.country,
        },
      },
      {
        '@type': 'RealEstateAgent',
        '@id': BUSINESS_IDS.org,
        name: BUSINESS.legalName,
        url: SITE_URL,
      },
      {
        '@type': 'WebSite',
        '@id': BUSINESS_IDS.website,
        name: 'Homes in Tule Springs',
        url: SITE_URL,
        publisher: { '@id': BUSINESS_IDS.agent },
      },
    ],
  };
}
