import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';
import { NearbyAmenitiesSection } from '@/components/amenities/NearbyAmenitiesSection';

export const metadata = routeMetadata('/why-tule-springs');

export default function WhyTuleSpringsPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/why-tule-springs" />
      <PageBanner title="Why Live in Tule Springs" subtitle="North Las Vegas, Nevada Community" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Find Your Home in Tule Springs</h2>
            <p>See the latest home listings in one of North Las Vegas, Nevada&apos;s most desirable planned communities.</p>
          </div>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
          </div>
        </div>
      </section>
      <NearbyAmenitiesSection />
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Call Tule Springs Home?</h2>
            <p>Dr. Jan Duffy will help you find the right fit in Tule Springs and nearby North Las Vegas neighborhoods.</p>
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
