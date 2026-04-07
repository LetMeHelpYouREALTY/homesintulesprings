import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS } from '@/lib/site-contact';
import { LISTING_DISCLAIMER, REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = routeMetadata('/north-las-vegas-tule-springs');

export default function NorthLasVegasTuleSpringsPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/north-las-vegas-tule-springs" />
      <PageBanner title="North Las Vegas & Tule Springs" subtitle="Real Estate Guide" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tule Springs', href: '/tule-springs' }, { label: 'North Las Vegas' }]} />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>North Las Vegas & Tule Springs Listings</h2>
            <p>Live MLS listings in the area.</p>
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
            <h2>Explore North Las Vegas Real Estate</h2>
            <p>Dr. Jan Duffy serves Tule Springs and greater North Las Vegas.</p>
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
