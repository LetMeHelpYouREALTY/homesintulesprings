import Image from 'next/image';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { OpenHousesMapSection } from '@/components/OpenHousesMapSection';
import { BUSINESS } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';
import { routeMetadata } from '@/lib/page-seo';

export const metadata = routeMetadata('');

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
                alt="Dr. Jan Duffy, REALTOR® — Berkshire Hathaway HomeServices Nevada Properties"
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
              <p>Serving Tule Springs and North Las Vegas, Nevada since 2008. Whether you&apos;re buying your first home or selling to move up, I provide personalized service backed by Berkshire Hathaway HomeServices.</p>
              <div className="agent-stats">
                <div className="agent-stat">
                  <strong>Local</strong>
                  <span>Tule Springs Focus</span>
                </div>
                <div className="agent-stat">
                  <strong>17+</strong>
                  <span>Years Experience</span>
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
