import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site-contact';
import { LISTING_DISCLAIMER, REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = createPageMetadata({
  title: 'Tule Springs Homes for Sale | North Las Vegas Listings',
  description:
    'Search Tule Springs homes for sale with real-time MLS listings in North Las Vegas and local support from Dr. Jan Duffy.',
  path: '/tule-springs-homes-for-sale',
});

export default function TuleSpringsHomesForSalePage() {
  return (
    <>
      <PageBanner title="Tule Springs Homes for Sale" subtitle="Live MLS Listings in North Las Vegas" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">For Sale</span>
            <h2>Search Tule Springs Listings</h2>
            <p>Real-time MLS listings updated every 15 minutes.</p>
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
            <h2>Ready to Buy?</h2>
            <p>Contact Dr. Jan Duffy for showings and expert guidance.</p>
            <div className="cta-buttons">
              <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary btn-lg"><i className="fas fa-phone"></i> Call {BUSINESS.phoneDisplay}</a>
              <CalendlyScheduleButton className="btn btn-outline-light btn-lg">Schedule time with me</CalendlyScheduleButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
