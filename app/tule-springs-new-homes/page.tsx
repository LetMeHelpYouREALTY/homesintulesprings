import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site-contact';
import { LISTING_DISCLAIMER, REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = createPageMetadata({
  title: 'Tule Springs New Homes | New Construction North Las Vegas',
  description:
    'Browse new construction and newly listed homes in Tule Springs, North Las Vegas with guidance from Dr. Jan Duffy.',
  path: '/tule-springs-new-homes',
});

export default function TuleSpringsNewHomesPage() {
  return (
    <>
      <PageBanner title="Tule Springs New Homes" subtitle="New Construction North Las Vegas" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tule Springs', href: '/tule-springs' }, { label: 'New Homes' }]} />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>New & Recent Listings in Tule Springs</h2>
            <p>Browse new construction and recently listed homes.</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}>
            <strong>Listing disclaimer:</strong> {LISTING_DISCLAIMER}
          </p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Find Your New Home</h2>
            <p>Dr. Jan Duffy can guide you through new construction and resale.</p>
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
