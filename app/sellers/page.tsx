import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site-contact';
import { LISTING_DISCLAIMER, REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = createPageMetadata({
  title: 'Sell Your Home in Tule Springs | Home Valuation',
  description:
    'Request a home valuation and seller strategy for Tule Springs and North Las Vegas with Dr. Jan Duffy.',
  path: '/sellers',
});

export default function SellersPage() {
  return (
    <>
      <PageBanner title="Sell Your Tule Springs Home" subtitle="Get Top Dollar with Expert Marketing & Negotiation" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Tule Springs Listings</h2>
            <p>Live MLS listings updated in real time.</p>
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
      <section className="seller-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge seller-badge">Home Value</span>
            <h2>What&apos;s Your Home Worth?</h2>
            <p>Get a free, no-obligation market analysis</p>
          </div>
          <div className="realscout-widget-container">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-home-value agent-encoded-id={BUSINESS.realscoutAgentEncodedId} />
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Sell?</h2>
            <p>Get your free home valuation and expert marketing plan.</p>
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
