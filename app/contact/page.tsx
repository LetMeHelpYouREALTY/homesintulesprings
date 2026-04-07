import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { FaqAccordion } from '@/components/FaqAccordion';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS, SOCIAL_URLS } from '@/lib/site-contact';
import { REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = routeMetadata('/contact');

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/contact" />
      <PageBanner title="Contact Dr. Jan Duffy" subtitle="Let's Talk About Your Real Estate Goals" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Tule Springs Listings</h2>
            <p>Home listings update frequently; confirm status and price with Dr. Duffy before visiting a property.</p>
          </div>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings {...REALSCOUT_LISTING_PROPS} />
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-info">
                  <h2>Get In Touch</h2>
                  <p>Ready to buy or sell in Tule Springs? Have questions about the market? I&apos;m here to help!</p>
                  <ul className="contact-details">
                    <li>
                      <i className="fas fa-phone" aria-hidden="true"></i>
                      <div>
                        <strong>Phone</strong>
                        <br />
                        <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                      <div>
                        <strong>Email</strong>
                        <br />
                        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                      <div>
                        <strong>Office</strong>
                        <br />
                        {BUSINESS.officeAddress.streetAddress}
                        <br />
                        {BUSINESS.officeAddress.city}, {BUSINESS.officeAddress.region} {BUSINESS.officeAddress.postalCode}
                      </div>
                    </li>
                  </ul>
                  <div className="contact-action-buttons">
                    <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary">
                      <i className="fas fa-phone" aria-hidden="true"></i> Call
                    </a>
                    <CalendlyScheduleButton className="btn btn-primary">
                      <i className="fas fa-calendar-alt" aria-hidden="true"></i> Schedule (popup)
                    </CalendlyScheduleButton>
                    <a
                      href={`https://www.google.com/maps/dir//${encodeURIComponent(`${BUSINESS.officeAddress.streetAddress}, ${BUSINESS.officeAddress.city}, ${BUSINESS.officeAddress.region} ${BUSINESS.officeAddress.postalCode}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      <i className="fas fa-directions" aria-hidden="true"></i> Directions
                    </a>
                    <a
                      href="https://www.google.com/search?q=Dr+Jan+Duffy+Berkshire+Hathaway+North+Las+Vegas+reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      <i className="fas fa-star" aria-hidden="true"></i> View Google Reviews
                    </a>
                  </div>
                  <div className="office-hours">
                    <h4>Office Hours</h4>
                    <p>
                      <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                      <br />
                      <strong>Saturday:</strong> 10:00 AM - 3:00 PM
                      <br />
                      <strong>Sunday:</strong> By Appointment
                    </p>
                  </div>
                  <div className="social-links" style={{ marginTop: '30px' }}>
                    <a href={SOCIAL_URLS.facebook} aria-label="Facebook">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                    <a href={SOCIAL_URLS.instagram} aria-label="Instagram">
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href={SOCIAL_URLS.linkedin} aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                    <a href={SOCIAL_URLS.youtube} aria-label="YouTube">
                      <i className="fab fa-youtube" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-form border rounded p-4 bg-light">
                  <h3 className="h4">Schedule a conversation</h3>
                  <p className="text-muted">
                    Book a private 15-minute call on Calendly — the full calendar is also at the bottom of every page,
                    and you can use the blue &quot;Schedule time with me&quot; badge on the screen.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <CalendlyScheduleButton className="btn btn-primary btn-lg">Schedule time with me</CalendlyScheduleButton>
                    <a href="#schedule" className="btn btn-outline-primary btn-lg">
                      Jump to calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section" aria-labelledby="contact-faq-heading">
        <div className="container">
          <div className="section-title">
            <h2 id="contact-faq-heading">Frequently Asked Questions</h2>
            <p>Quick answers about working with Dr. Jan Duffy</p>
          </div>
          <FaqAccordion
            aria-labelledby="contact-faq-heading"
            items={[
              {
                question: 'What are your office hours?',
                answer: (
                  <p>
                    Monday–Friday 9:00 AM–5:00 PM and Saturday 10:00 AM–3:00 PM. Sunday by appointment. Call{' '}
                    <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a> or use Calendly to schedule.
                  </p>
                ),
              },
              {
                question: 'How do I contact Dr. Jan Duffy for Tule Springs real estate?',
                answer: (
                  <p>
                    Call {BUSINESS.phoneDisplay}, email {BUSINESS.email}, visit the office at {BUSINESS.officeAddress.streetAddress},{' '}
                    {BUSINESS.officeAddress.city}, {BUSINESS.officeAddress.region} {BUSINESS.officeAddress.postalCode}, or{' '}
                    <CalendlyScheduleButton className="text-decoration-underline">schedule a 15-minute Calendly call</CalendlyScheduleButton>.
                  </p>
                ),
              },
              {
                question: 'Does Dr. Jan Duffy help buyers and sellers in Tule Springs?',
                answer: (
                  <p>
                    Yes. Dr. Jan Duffy assists both home buyers and sellers in Tule Springs and North Las Vegas. She offers
                    home valuations for sellers and full buyer representation including home search and showings.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Get Started?</h2>
            <p>Reach out today for a no-obligation conversation.</p>
            <div className="cta-buttons">
              <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary btn-lg">
                <i className="fas fa-phone" aria-hidden="true"></i> Call {BUSINESS.phoneDisplay}
              </a>
              <CalendlyScheduleButton className="btn btn-outline-light btn-lg">Schedule with Calendly</CalendlyScheduleButton>
              <a href={`mailto:${BUSINESS.email}`} className="btn btn-outline-light btn-lg">
                Email Dr. Duffy
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="floating-actions">
        <a
          href={`tel:${BUSINESS.phoneE164}`}
          className="fab-btn fab-phone pulse-animation"
          aria-label={`Call Dr. Duffy at ${BUSINESS.phoneDisplay}`}
        >
          <i className="fas fa-phone" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
}
