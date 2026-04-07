import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site-contact';
import { LISTING_DISCLAIMER, REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = createPageMetadata({
  title: 'Tule Springs | North Las Vegas Real Estate & Community',
  description:
    'Explore Tule Springs, North Las Vegas neighborhoods, schools, amenities, and homes for sale with local guidance from Dr. Jan Duffy.',
  path: '/tule-springs',
});

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
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}><strong>Listing disclaimer:</strong> {LISTING_DISCLAIMER}</p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
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
              <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary btn-lg"><i className="fas fa-phone"></i> Call {BUSINESS.phoneDisplay}</a>
              <Link href="/contact" className="btn btn-outline-light btn-lg">Contact Dr. Duffy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
