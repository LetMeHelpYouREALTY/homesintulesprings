import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';
import { NearbyAmenitiesSection } from '@/components/amenities/NearbyAmenitiesSection';

export const metadata = routeMetadata('/listings');

export default function ListingsPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/listings" />
      <PageBanner
        title="Homes for Sale"
        subtitle="Latest Home Listings in Tule Springs & North Las Vegas"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Listings' }]}
      />
      <section className="buyer-section listings-intro">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Search Tule Springs & North Las Vegas Listings</h2>
            <p>Browse Tule Springs and North Las Vegas, Nevada home listings and filter by price, beds, baths, and more.</p>
          </div>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
          </div>
          <p className="mt-4">
            Narrow your search: <Link href="/tule-springs-homes-for-sale">Tule Springs homes for sale</Link>, <Link href="/tule-springs-new-homes">new homes in North Las Vegas</Link>, <Link href="/tule-springs-villages">Tule Springs villages</Link>, <Link href="/tule-springs-schools">schools near Tule Springs</Link>, and <Link href="/tule-springs-amenities">Tule Springs amenities</Link>. Ready to buy?{' '}
            <CalendlyScheduleButton className="link-primary link-underline">Schedule with Dr. Jan Duffy</CalendlyScheduleButton> or call <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <NearbyAmenitiesSection heading="Homes Near Everyday Amenities" />
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
