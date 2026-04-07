import Link from 'next/link';
import { BUSINESS, SITE_URL } from '@/lib/site-contact';

const OPEN_HOUSES_MAP_URL =
  'https://www.google.com/maps/d/embed?mid=12gQ1w5bzxrQ41HSGCdEJWFfhMtSkBwI&ehbc=2E312F';

/**
 * Local open house map block with buyer-friendly copy and internal links.
 */
export function OpenHousesMapSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Open Houses This Weekend in Tule Springs and North Las Vegas',
            description:
              'Weekend open house map for Tule Springs and nearby North Las Vegas communities.',
            url: `${SITE_URL}/`,
            areaServed: ['Tule Springs, North Las Vegas, NV'],
          }),
        }}
      />
      <section className="open-houses-section" aria-labelledby="open-houses-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">This Weekend</span>
            <h2 id="open-houses-heading">Where are open houses this weekend in Tule Springs?</h2>
            <p>
              Here is the live open house map for Tule Springs and nearby North Las Vegas neighborhoods. Tap any pin for
              details, then call <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a> to plan your tour route.
            </p>
          </div>
          <div className="open-houses-map-frame">
            <iframe
              src={OPEN_HOUSES_MAP_URL}
              title="Open houses this weekend in Tule Springs and North Las Vegas"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
          <p className="text-center mt-4">
            Looking for specific price ranges or villages? Start with{' '}
            <Link href="/listings">homes for sale in Tule Springs</Link>, review{' '}
            <Link href="/tule-springs-neighborhoods">Tule Springs neighborhoods</Link>, or{' '}
            <Link href="/contact">contact Dr. Jan Duffy</Link> for a same-day showing plan.
          </p>
        </div>
      </section>
    </>
  );
}
