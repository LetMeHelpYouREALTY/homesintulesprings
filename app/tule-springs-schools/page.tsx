import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = routeMetadata('/tule-springs-schools');

export default function TuleSpringsSchoolsPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/tule-springs-schools" />
      <PageBanner title="Tule Springs Schools" subtitle="North Las Vegas, Nevada Schools" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tule Springs', href: '/tule-springs' }, { label: 'Schools' }]} />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Homes Near Tule Springs Schools</h2>
            <p>Find homes in top school zones serving Tule Springs and North Las Vegas families.</p>
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
            <h2>Find a Home Near Great Schools</h2>
            <p>Dr. Jan Duffy can help you find homes in your preferred school zone in Tule Springs and North Las Vegas, Nevada.</p>
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
