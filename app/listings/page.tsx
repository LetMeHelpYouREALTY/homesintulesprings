import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata = {
  title: 'Listings | Tule Springs Homes for Sale',
  description: 'Search Tule Springs and North Las Vegas homes for sale. Browse live MLS listings updated daily. Find your next home with Dr. Jan Duffy, Berkshire Hathaway HomeServices.',
  openGraph: { url: 'https://www.homesintulesprings.com/listings' },
};

export default function ListingsPage() {
  return (
    <>
      <PageBanner
        title="Homes for Sale"
        subtitle="Live MLS Listings in Tule Springs & North Las Vegas"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Listings' }]}
      />
      <section className="buyer-section listings-intro">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">MLS Listings</span>
            <h2>Search Tule Springs & North Las Vegas Listings</h2>
            <p>Browse real-time MLS listings. Updated in real time. Filter by price, beds, baths, and more.</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}>
            <strong>Listing disclaimer:</strong> All listing data is deemed reliable but not guaranteed. Listings displayed are from the MLS. &copy; 2026 the listing broker. All rights reserved.
          </p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="NEWEST"
              listing-status="For Sale"
              property-types="SFR,MF,TC,OTHER"
              price-min="300000"
              price-max="900000"
            />
          </div>
          <p className="mt-4">
            Narrow your search: <Link href="/tule-springs-homes-for-sale">Tule Springs homes for sale</Link>, <Link href="/tule-springs-new-homes">new homes</Link>, <Link href="/tule-springs-villages">villages</Link>, <Link href="/tule-springs-schools">schools</Link>, and <Link href="/tule-springs-amenities">amenities</Link>. Ready to buy? <Link href="/contact">Contact Dr. Jan Duffy</Link> at <a href="tel:+17025001942">(702) 500-1942</a>.
          </p>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Find Your Tule Springs Home</h2>
            <p>Dr. Jan Duffy will help you find the right home in Tule Springs or North Las Vegas.</p>
            <div className="cta-buttons">
              <a href="tel:+17025001942" className="btn btn-primary btn-lg"><i className="fas fa-phone"></i> Call (702) 500-1942</a>
              <Link href="/contact" className="btn btn-outline-light btn-lg">Contact Dr. Duffy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
