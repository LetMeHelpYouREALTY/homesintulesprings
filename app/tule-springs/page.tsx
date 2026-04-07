import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = routeMetadata('/tule-springs');

export default function TuleSpringsPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/tule-springs" />
      <PageBanner title="Tule Springs" subtitle="North Las Vegas, Nevada Real Estate & Community" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Tule Springs Listings</h2>
            <p>See the latest home listings in Tule Springs and North Las Vegas, Nevada.</p>
          </div>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
          </div>
          <p className="mt-4">Explore <Link href="/tule-springs-villages">Tule Springs villages</Link>, <Link href="/tule-springs-schools">schools near Tule Springs</Link>, <Link href="/tule-springs-amenities">parks and amenities in Tule Springs</Link>, <Link href="/why-tule-springs">why buyers choose Tule Springs</Link>, and <Link href="/tule-springs-new-homes">new homes in North Las Vegas</Link>.</p>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Find Your Tule Springs Home</h2>
            <p>Dr. Jan Duffy will help you find the right home in Tule Springs or North Las Vegas, Nevada.</p>
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
