import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = routeMetadata('/tule-springs-villages');

export default function TuleSpringsVillagesPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/tule-springs-villages" />
      <PageBanner title="Tule Springs Villages" subtitle="North Las Vegas, Nevada Neighborhoods" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Listings by Village</h2>
            <p>See the latest home listings across Tule Springs villages in North Las Vegas, Nevada.</p>
          </div>
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
            <p>Dr. Jan Duffy knows every Tule Springs neighborhood and village in North Las Vegas.</p>
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
