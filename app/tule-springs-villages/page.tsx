import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site-contact';
import { LISTING_DISCLAIMER, REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = createPageMetadata({
  title: 'Tule Springs Villages | North Las Vegas Neighborhoods',
  description:
    'Explore Tule Springs villages and neighborhoods in North Las Vegas and find homes with Dr. Jan Duffy.',
  path: '/tule-springs-villages',
});

export default function TuleSpringsVillagesPage() {
  return (
    <>
      <PageBanner title="Tule Springs Villages" subtitle="North Las Vegas Neighborhoods" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Listings by Village</h2>
            <p>Live MLS listings across Tule Springs villages.</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}><strong>Listing disclaimer:</strong> {LISTING_DISCLAIMER}</p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Find Your Village</h2>
            <p>Dr. Jan Duffy knows every Tule Springs neighborhood.</p>
            <div className="cta-buttons">
              <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary btn-lg"><i className="fas fa-phone"></i> Call {BUSINESS.phoneDisplay}</a>
              <Link href="/contact" className="btn btn-outline-light btn-lg">Contact Dr. Duffy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
