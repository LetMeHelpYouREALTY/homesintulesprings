import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site-contact';
import { LISTING_DISCLAIMER, REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = createPageMetadata({
  title: 'Why Live in Tule Springs | North Las Vegas Community',
  description:
    'Learn why buyers choose Tule Springs in North Las Vegas, from neighborhood features to local lifestyle and housing options.',
  path: '/why-tule-springs',
});

export default function WhyTuleSpringsPage() {
  return (
    <>
      <PageBanner title="Why Live in Tule Springs" subtitle="North Las Vegas Community" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Find Your Home in Tule Springs</h2>
            <p>Live MLS listings in one of North Las Vegas best communities.</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}><strong>Listing disclaimer:</strong> {LISTING_DISCLAIMER}</p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Call Tule Springs Home?</h2>
            <p>Dr. Jan Duffy will help you find the right fit.</p>
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
