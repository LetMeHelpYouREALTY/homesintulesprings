import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site-contact';
import { LISTING_DISCLAIMER, REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = createPageMetadata({
  title: 'Buy a Home in Tule Springs | Buyer Services',
  description:
    'Browse homes for sale in Tule Springs and North Las Vegas with real-time MLS search and local guidance from Dr. Jan Duffy.',
  path: '/buyers',
});

export default function BuyersPage() {
  return (
    <>
      <PageBanner title="Buy a Home in Tule Springs" subtitle="Your Dream Home Awaits in North Las Vegas" />
      <section className="buyer-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">For Sale Now</span>
            <h2>Search Available Homes</h2>
            <p>Browse real-time MLS listings in Tule Springs and surrounding areas</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}>
            <strong>Listing disclaimer:</strong> {LISTING_DISCLAIMER}
          </p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
          </div>
          <div className="benefits-row">
            <div className="benefit-item">
              <i className="fas fa-bolt"></i>
              <h4>Real-Time Listings</h4>
              <p>See new homes the moment they hit the market</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-heart"></i>
              <h4>Save Favorites</h4>
              <p>Create an account to save and compare homes</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-bell"></i>
              <h4>Instant Alerts</h4>
              <p>Get notified when new listings match your criteria</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-calendar"></i>
              <h4>Schedule Tours</h4>
              <p>Book showings directly through the platform</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Find Your Home?</h2>
            <p>Dr. Jan Duffy will guide you every step of the way.</p>
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
