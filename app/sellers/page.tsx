import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = routeMetadata('/sellers');

export default function SellersPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/sellers" />
      <PageBanner title="Sell Your Tule Springs Home" subtitle="North Las Vegas, Nevada Seller Strategy" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Tule Springs Listings</h2>
            <p>Home listings in Tule Springs and North Las Vegas update frequently; Dr. Duffy can help you interpret what&apos;s active and what&apos;s already under contract.</p>
          </div>
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
            <p>Get a free, no-obligation market analysis for your Tule Springs or North Las Vegas home.</p>
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
              <CalendlyScheduleButton className="btn btn-outline-light btn-lg">Schedule time with me</CalendlyScheduleButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
