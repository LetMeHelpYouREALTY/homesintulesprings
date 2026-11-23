import Image from 'next/image';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { FaqAccordion } from '@/components/FaqAccordion';
import { OpenHousesMapSection } from '@/components/OpenHousesMapSection';
import { BUSINESS, SITE_URL } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';
import { routeMetadata } from '@/lib/page-seo';

export const metadata = routeMetadata('');

const HOME_AREA_FAQ = [
  {
    question: 'What is Tule Springs Fossil Beds National Monument?',
    answer:
      'Tule Springs Fossil Beds National Monument protects about 22,650 acres and was established on December 19, 2014. The monument has no street address. The South Unit is accessed at Aliante Parkway and Moonlight Falls Avenue in North Las Vegas.',
  },
  {
    question: 'Where is Floyd Lamb Park at Tule Springs?',
    answer:
      'Floyd Lamb Park at Tule Springs is a 680-acre City of Las Vegas park at 9200 Tule Springs Road, Las Vegas, NV 89131. It is not in the City of North Las Vegas and is not part of The Villages at Tule Springs master plan.',
  },
  {
    question: 'Where is The Villages at Tule Springs?',
    answer:
      'The Villages at Tule Springs is a master plan in the City of North Las Vegas along the 215 Beltway. Home listings for this area are often filed in ZIP codes 89084 and 89086.',
  },
  {
    question: 'Is Floyd Lamb Park at Tule Springs in North Las Vegas?',
    answer:
      'No. Floyd Lamb Park at Tule Springs is operated by the City of Las Vegas at 9200 Tule Springs Road, Las Vegas, NV 89131, separate from the City of North Las Vegas and from The Villages at Tule Springs.',
  },
  {
    question: 'How do visitors reach Tule Springs Fossil Beds National Monument?',
    answer:
      'Because the monument has no street address, visitors use cross-street directions. The South Unit is at Aliante Parkway and Moonlight Falls Avenue in North Las Vegas.',
  },
] as const;

const homeAreaFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#home-area-faq`,
  mainEntity: HOME_AREA_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-slide" style={{ backgroundImage: "url('/images/tule-springs-park.jpg')" }}>
          <div className="container">
            <div className="hero-content text-center">
              <h1>Tule Springs Real Estate in North Las Vegas, Nevada</h1>
              <p className="hero-subtitle">Search local homes, get valuations, and connect with Dr. Jan Duffy</p>
              <div className="hero-actions">
                <a href="#buy" className="action-card">
                  <i className="fas fa-search" aria-hidden="true"></i>
                  <span>Search Homes</span>
                </a>
                <a href="#sell" className="action-card">
                  <i className="fas fa-home" aria-hidden="true"></i>
                  <span>Sell My Home</span>
                </a>
                <a href="#valuation" className="action-card">
                  <i className="fas fa-calculator" aria-hidden="true"></i>
                  <span>Home Value</span>
                </a>
                <a href={`tel:${BUSINESS.phoneE164}`} className="action-card">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="market-snapshot" aria-labelledby="tule-glance-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="tule-glance-heading">Tule Springs at a glance</h2>
            <p>Area landmarks and the master plan that frames home search in North Las Vegas.</p>
          </div>
          <ul className="text-start" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <li>
              <strong>Tule Springs Fossil Beds National Monument:</strong> about 22,650 acres, established December 19,
              2014; no street address; South Unit access at Aliante Parkway and Moonlight Falls Avenue, North Las Vegas.
            </li>
            <li>
              <strong>Floyd Lamb Park at Tule Springs:</strong> 680 acres at 9200 Tule Springs Road, Las Vegas, NV 89131 — a
              City of Las Vegas park, not North Las Vegas, and not part of The Villages at Tule Springs.
            </li>
            <li>
              <strong>The Villages at Tule Springs:</strong> a master plan in the City of North Las Vegas along the 215
              Beltway; home listings for the area are often filed in ZIP codes 89084 and 89086.
            </li>
          </ul>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="home-area-faq-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="home-area-faq-heading">Tule Springs area questions</h2>
            <p>Quick answers about parks, the monument, and home search with Dr. Jan Duffy</p>
          </div>
          <FaqAccordion
            aria-labelledby="home-area-faq-heading"
            items={HOME_AREA_FAQ.map((item) => ({
              question: item.question,
              answer: <p>{item.answer}</p>,
            }))}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(homeAreaFaqJsonLd).replace(/</g, '\\u003c') }}
          />
        </div>
      </section>

      <section id="buy" className="buyer-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">For Buyers</span>
            <h2>Search Tule Springs Homes For Sale</h2>
            <p>Browse available home listings in Tule Springs, North Las Vegas, and nearby ZIP 89084 areas.</p>
          </div>
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

      <section id="sell" className="seller-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge seller-badge">For Sellers</span>
            <h2>Thinking of Selling Your Home?</h2>
            <p>Get your home&apos;s value and see what&apos;s selling in your neighborhood</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div id="valuation" className="valuation-card">
                <div className="valuation-header">
                  <i className="fas fa-chart-line"></i>
                  <h3>What&apos;s Your Home Worth?</h3>
                </div>
                <p>Get a free, no-obligation market analysis of your Tule Springs home based on recent comparable sales.</p>
                <ul className="valuation-features">
                  <li><i className="fas fa-check"></i> Accurate market data</li>
                  <li><i className="fas fa-check"></i> Recent comparable sales</li>
                  <li><i className="fas fa-check"></i> Neighborhood trends</li>
                  <li><i className="fas fa-check"></i> No obligation</li>
                </ul>
                <div className="realscout-widget-container">
                  {/* @ts-expect-error RealScout custom element */}
                  <realscout-home-value agent-encoded-id={BUSINESS.realscoutAgentEncodedId} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sold-card">
                <div className="sold-header">
                  <i className="fas fa-tag"></i>
                  <h3>Recently Sold in Tule Springs</h3>
                </div>
                <p>See what homes are selling for in your area</p>
                <div className="realscout-widget-container">
                  {/* @ts-expect-error RealScout custom element */}
                  <realscout-office-listings
                    agent-encoded-id={BUSINESS.realscoutAgentEncodedId}
                    sort-order="NEWEST"
                    listing-status="Sold"
                    property-types="SFR,MF,TC,OTHER"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="benefits-row seller-benefits">
            <div className="benefit-item">
              <i className="fas fa-dollar-sign"></i>
              <h4>Top Dollar</h4>
              <p>Strategic pricing and local market positioning</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-camera"></i>
              <h4>Pro Marketing</h4>
              <p>Professional photos, 3D tours, and targeted ads</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-clock"></i>
              <h4>Fast Results</h4>
              <p>Guidance based on current local market conditions</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-handshake"></i>
              <h4>Expert Negotiation</h4>
              <p>Clear communication from consultation through closing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="market-snapshot" aria-labelledby="market-snapshot-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="market-snapshot-heading">Tule Springs Market Context</h2>
            <p>Medians, days on market, and inventory shift with seasonality and rates—ask for a current neighborhood brief.</p>
          </div>
          <p className="text-center text-muted" style={{ maxWidth: '640px', margin: '0 auto' }}>
            For pricing strategy and timing, Dr. Duffy can share recent comparable activity and listing trends for your specific
            village and price band—without relying on static site-wide statistics that may not match your home.
          </p>
        </div>
      </section>

      <OpenHousesMapSection />

      <section className="agent-brief">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <Image
                src="/images/agents/design 04_new 2.jpg"
                alt="Dr. Jan Duffy, REALTOR®"
                width={360}
                height={360}
                className="agent-photo"
                priority
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="col-md-8">
              <h2>Dr. Jan Duffy</h2>
              <p className="agent-title">Your Tule Springs Real Estate Expert</p>
              <p>Licensed since 2008 · 35 years in Las Vegas, I serve Tule Springs and North Las Vegas, Nevada. Whether you&apos;re buying your first home or selling to move up, I provide personalized service.</p>
              <div className="agent-stats">
                <div className="agent-stat">
                  <strong>Local</strong>
                  <span>Tule Springs Focus</span>
                </div>
                <div className="agent-stat">
                  <strong>Since 2008</strong>
                  <span>In Real Estate</span>
                </div>
                <div className="agent-stat">
                  <strong>Client-First</strong>
                  <span>Guidance</span>
                </div>
              </div>
              <div className="agent-actions">
                <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary"><i className="fas fa-phone"></i> {BUSINESS.phoneDisplay}</a>
                <a href={`mailto:${BUSINESS.email}`} className="btn btn-outline-primary"><i className="fas fa-envelope"></i> Email Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Make Your Move?</h2>
            <p>Whether buying or selling, I&apos;m here to help you every step of the way.</p>
            <div className="cta-buttons">
              <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary btn-lg"><i className="fas fa-phone"></i> Call {BUSINESS.phoneDisplay}</a>
              <CalendlyScheduleButton className="btn btn-outline-light btn-lg"><i className="fas fa-calendar-alt"></i> Schedule time with me</CalendlyScheduleButton>
            </div>
          </div>
        </div>
      </section>

      <div className="floating-actions">
        <a href={`tel:${BUSINESS.phoneE164}`} className="fab-btn fab-phone pulse-animation" aria-label={`Call Dr. Duffy at ${BUSINESS.phoneDisplay}`}>
          <i className="fas fa-phone"></i>
        </a>
      </div>
    </>
  );
}
