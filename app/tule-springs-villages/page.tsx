import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata = {
  title: { absolute: 'Tule Springs Villages | North Las Vegas' },
  description: 'Explore the distinct villages and neighborhoods of Tule Springs, North Las Vegas. Find homes for sale in each village with guidance from Dr. Jan Duffy, REALTOR®.',
  openGraph: { url: 'https://www.homesintulesprings.com/tule-springs-villages' },
};

export default function TuleSpringsVillagesPage() {
  return (
    <>
      <PageBanner title="Tule Springs Villages" subtitle="North Las Vegas Neighborhoods" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Listings by Village</h2>
            <p>Live MLS listings across Tule Springs villages.</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}><strong>Listing disclaimer:</strong> All listing data is deemed reliable but not guaranteed. Listings displayed are from the MLS. &copy; 2026 the listing broker. All rights reserved.</p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC,OTHER" price-min="300000" price-max="900000" />
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Find Your Village</h2>
            <p>Dr. Jan Duffy knows every Tule Springs neighborhood.</p>
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
