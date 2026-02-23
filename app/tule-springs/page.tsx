import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata = {
  title: { absolute: 'Tule Springs | North Las Vegas Real Estate & Community' },
  description: 'Explore Tule Springs, North Las Vegas. Villages, schools, amenities, and homes for sale. Your guide with Dr. Jan Duffy.',
  openGraph: { url: 'https://www.homesintulesprings.com/tule-springs' },
};

export default function TuleSpringsPage() {
  return (
    <>
      <PageBanner title="Tule Springs" subtitle="North Las Vegas Real Estate & Community" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Tule Springs Listings</h2>
            <p>Live MLS listings in Tule Springs and North Las Vegas.</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}><strong>Listing disclaimer:</strong> All listing data is deemed reliable but not guaranteed. Listings displayed are from the MLS. &copy; 2026 the listing broker. All rights reserved.</p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC,OTHER" price-min="300000" price-max="900000" />
          </div>
          <p className="mt-4">Explore <Link href="/tule-springs-villages">villages</Link>, <Link href="/tule-springs-schools">schools</Link>, <Link href="/tule-springs-amenities">amenities</Link>, <Link href="/why-tule-springs">why live here</Link>, and <Link href="/tule-springs-new-homes">new homes</Link>.</p>
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
