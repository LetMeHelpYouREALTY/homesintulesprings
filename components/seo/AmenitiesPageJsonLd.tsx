import { TULE_SPRINGS_COMMUNITY } from '@/lib/community-map';
import {
  CURATED_NEARBY_PLACES,
  AMENITY_FAQS,
} from '@/lib/curated-nearby-amenities';
import { BUSINESS, BUSINESS_IDS, SITE_URL } from '@/lib/site-contact';

/** Page-level FAQ, ItemList, community Place, and agent areaServed for /amenities. */
export function AmenitiesPageJsonLd() {
  const pageUrl = `${SITE_URL}/amenities`;

  const communityPlace = {
    '@type': 'Place',
    '@id': `${pageUrl}#community`,
    name: `${TULE_SPRINGS_COMMUNITY.name}, ${TULE_SPRINGS_COMMUNITY.city}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: TULE_SPRINGS_COMMUNITY.city,
      addressRegion: TULE_SPRINGS_COMMUNITY.region,
      postalCode: TULE_SPRINGS_COMMUNITY.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: TULE_SPRINGS_COMMUNITY.center.lat,
      longitude: TULE_SPRINGS_COMMUNITY.center.lng,
    },
  };

  const itemList = {
    '@type': 'ItemList',
    name: `Featured places near ${TULE_SPRINGS_COMMUNITY.name}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => {
      const address: Record<string, string> = {
        '@type': 'PostalAddress',
        addressLocality: place.city,
        addressRegion: place.region,
        postalCode: place.postalCode,
        addressCountry: 'US',
      };
      if (place.streetAddress) {
        address.streetAddress = place.streetAddress;
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': place.schemaType,
          name: place.name,
          url: place.sourceUrl,
          address,
        },
      };
    }),
  };

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: AMENITY_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const agentAreaServed = {
    '@type': 'RealEstateAgent',
    '@id': BUSINESS_IDS.agent,
    name: BUSINESS.name,
    areaServed: {
      '@type': 'Place',
      name: BUSINESS.serviceArea,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: TULE_SPRINGS_COMMUNITY.center.lat,
        longitude: TULE_SPRINGS_COMMUNITY.center.lng,
      },
    },
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [communityPlace, itemList, faqPage, agentAreaServed],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
