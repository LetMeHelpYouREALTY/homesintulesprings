import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata = {
  title: { absolute: 'Tule Springs New Homes | North Las Vegas' },
  description: 'New homes and new construction in Tule Springs, North Las Vegas. Find brand-new listings with Dr. Jan Duffy.',
  openGraph: { url: 'https://www.homesintulesprings.com/tule-springs-new-homes' },
};

export default function TuleSpringsNewHomesPage() {
  return (
    <>
      <PageBanner title="Tule Springs New Homes" subtitle="New Construction North Las Vegas" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tule Springs', href: '/tule-springs' }, { label: 'New Homes' }]} />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>New & Recent Listings in Tule Springs</h2>
            <p>Browse new construction and recently listed homes.</p>
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
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Find Your New Home</h2>
            <p>Dr. Jan Duffy can guide you through new construction and resale.</p>
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
