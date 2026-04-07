import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = routeMetadata('/about');

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/about" />
      <PageBanner title="About Dr. Jan Duffy" subtitle="Your Tule Springs Real Estate Expert" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Tule Springs Listings</h2>
            <p>Home listings in Tule Springs and North Las Vegas update frequently. Use search as a starting point, then confirm next steps with Dr. Duffy.</p>
          </div>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
          </div>
        </div>
      </section>
      <section className="agent-brief" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 text-center">
              <img src="/images/agents/zillowDr Jan new.jpg" alt="Dr. Jan Duffy, REALTOR® professional headshot" className="agent-photo" style={{ width: '300px', height: '300px' }} />
              <div className="agent-stats" style={{ justifyContent: 'center', marginTop: '30px' }}>
                <div className="agent-stat"><strong>Local</strong><span>Tule Springs Focus</span></div>
                <div className="agent-stat"><strong>17+</strong><span>Years</span></div>
                <div className="agent-stat"><strong>Trusted</strong><span>Guidance</span></div>
              </div>
            </div>
            <div className="col-lg-7">
              <h2>Meet Dr. Jan Duffy</h2>
              <p className="agent-title">REALTOR® | Berkshire Hathaway HomeServices Nevada Properties</p>
              <p>With years of experience in the Las Vegas Valley market, Dr. Jan Duffy serves buyers and sellers in Tule Springs and North Las Vegas, Nevada with local insight and hands-on guidance.</p>
              <p>As a resident of the Tule Springs area, Dr. Duffy offers unparalleled insider knowledge of the community&apos;s <Link href="/tule-springs-villages">villages</Link>, <Link href="/tule-springs-schools">schools</Link>, <Link href="/tule-springs-amenities">amenities</Link>, and lifestyle. Her clients benefit from her deep understanding of local market trends, neighborhood developments, and property values.</p>
              <p>Backed by the trusted Berkshire Hathaway HomeServices brand and a global network of 50,000+ agents, Dr. Duffy provides world-class marketing, expert negotiation, and personalized service tailored to each client&apos;s unique needs.</p>
              <h3 style={{ marginTop: '30px' }}>Credentials & Affiliations</h3>
              <ul className="feature-list-inline">
                <li><i className="fas fa-check-circle"></i> Nevada Real Estate License S.0197614.LLC</li>
                <li><i className="fas fa-check-circle"></i> Berkshire Hathaway HomeServices Nevada Properties</li>
                <li><i className="fas fa-check-circle"></i> Greater Las Vegas Association of REALTORS®</li>
                <li><i className="fas fa-check-circle"></i> National Association of REALTORS®</li>
              </ul>
              <div className="agent-actions" style={{ marginTop: '30px' }}>
                <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary"><i className="fas fa-phone"></i> {BUSINESS.phoneDisplay}</a>
                <a href={`mailto:${BUSINESS.email}`} className="btn btn-outline-primary"><i className="fas fa-envelope"></i> Email Dr. Duffy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose">
        <div className="container">
          <div className="section-title"><h2>Why Clients Choose Dr. Duffy</h2></div>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon"><i className="fas fa-home"></i></div>
                <h3>Local Expert</h3>
              <p>Lives in Tule Springs and knows local villages, schools, and neighborhoods inside and out.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon"><i className="fas fa-users"></i></div>
                <h3>Personalized Service</h3>
                <p>Every client receives dedicated attention and customized solutions for their unique needs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
                <h3>BHHS Backing</h3>
                <p>The trust and resources of Berkshire Hathaway HomeServices behind every transaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Work Together?</h2>
            <p>Whether buying or selling, Dr. Jan Duffy is here to help</p>
            <div className="cta-buttons">
              <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary btn-lg"><i className="fas fa-phone"></i> Call {BUSINESS.phoneDisplay}</a>
              <CalendlyScheduleButton className="btn btn-outline-light btn-lg">Schedule time with me</CalendlyScheduleButton>
            </div>
          </div>
        </div>
      </section>
      <div className="floating-actions">
        <a href={`tel:${BUSINESS.phoneE164}`} className="fab-btn fab-phone pulse-animation" aria-label={`Call Dr. Duffy at ${BUSINESS.phoneDisplay}`}><i className="fas fa-phone"></i></a>
      </div>
    </>
  );
}
