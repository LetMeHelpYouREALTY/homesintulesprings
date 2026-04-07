import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS, SOCIAL_URLS } from '@/lib/site-contact';
import { LISTING_DISCLAIMER, REALSCOUT_LISTING_PROPS } from '@/lib/realscout';

export const metadata = createPageMetadata({
  title: 'Contact Dr. Jan Duffy | Tule Springs Real Estate',
  description:
    'Contact Dr. Jan Duffy for Tule Springs and North Las Vegas real estate support. Call, email, or send a message for buyer and seller guidance.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Dr. Jan Duffy" subtitle="Let's Talk About Your Real Estate Goals" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Tule Springs Listings</h2>
            <p>Live MLS listings updated in real time.</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}>
            <strong>Listing disclaimer:</strong> {LISTING_DISCLAIMER}
          </p>
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
                      <i className="fas fa-phone"></i>
                      <div><strong>Phone</strong><br /><a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a></div>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <div><strong>Email</strong><br /><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <div><strong>Office</strong><br />{BUSINESS.officeAddress.streetAddress}<br />{BUSINESS.officeAddress.city}, {BUSINESS.officeAddress.region} {BUSINESS.officeAddress.postalCode}</div>
                    </li>
                  </ul>
                  <div className="contact-action-buttons">
                    <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary"><i className="fas fa-phone"></i> Call</a>
                    <a href={`https://www.google.com/maps/dir//${encodeURIComponent(`${BUSINESS.officeAddress.streetAddress}, ${BUSINESS.officeAddress.city}, ${BUSINESS.officeAddress.region} ${BUSINESS.officeAddress.postalCode}`)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary"><i className="fas fa-directions"></i> Directions</a>
                    <a href="https://www.google.com/search?q=Dr+Jan+Duffy+Berkshire+Hathaway+North+Las+Vegas+reviews" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary"><i className="fas fa-star"></i> View Google Reviews</a>
                  </div>
                  <div className="office-hours">
                    <h4>Office Hours</h4>
                    <p>
                      <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM<br />
                      <strong>Saturday:</strong> 10:00 AM - 3:00 PM<br />
                      <strong>Sunday:</strong> By Appointment
                    </p>
                  </div>
                  <div className="social-links" style={{ marginTop: '30px' }}>
                    <a href={SOCIAL_URLS.facebook} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href={SOCIAL_URLS.instagram} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href={SOCIAL_URLS.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-form">
                  <h3>Send a Message</h3>
                  <form id="contact-form" action="#" method="post" aria-label="Contact Dr. Jan Duffy">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
                          <input id="contact-name" type="text" className="form-control" name="name" placeholder="Your Name *" autoComplete="name" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="contact-phone" className="visually-hidden">Phone Number</label>
                          <input id="contact-phone" type="tel" className="form-control" name="phone" placeholder="Phone Number *" autoComplete="tel" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email" className="visually-hidden">Email Address</label>
                      <input id="contact-email" type="email" className="form-control" name="email" placeholder="Email Address *" autoComplete="email" required />
                    </div>
                    <div className="form-group">
                      <select className="form-control" name="interest" id="interest" required aria-label="I'm interested in">
                        <option value="">I&apos;m interested in... *</option>
                        <option value="buying">Buying a Home</option>
                        <option value="selling">Selling My Home</option>
                        <option value="valuation">Free Home Valuation</option>
                        <option value="both">Buying and Selling</option>
                        <option value="question">General Question</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message" className="visually-hidden">Message</label>
                      <textarea id="contact-message" className="form-control" name="message" rows={5} placeholder="Your Message *" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers about working with Dr. Jan Duffy</p>
          </div>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <h3>What are your office hours?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Monday–Friday 9:00 AM–5:00 PM and Saturday 10:00 AM–3:00 PM. Sunday by appointment. Call <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phoneDisplay}</a> to schedule.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>How do I contact Dr. Jan Duffy for Tule Springs real estate?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Call {BUSINESS.phoneDisplay}, email {BUSINESS.email}, or visit the office at {BUSINESS.officeAddress.streetAddress}, {BUSINESS.officeAddress.city}, {BUSINESS.officeAddress.region} {BUSINESS.officeAddress.postalCode}. You can also use the contact form on this page.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Does Dr. Jan Duffy help buyers and sellers in Tule Springs?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Yes. Dr. Jan Duffy assists both home buyers and sellers in Tule Springs and North Las Vegas. She offers free home valuations for sellers and full buyer representation including MLS search and showings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Get Started?</h2>
            <p>Reach out today for a no-obligation conversation.</p>
            <div className="cta-buttons">
              <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary btn-lg"><i className="fas fa-phone"></i> Call {BUSINESS.phoneDisplay}</a>
              <a href={`mailto:${BUSINESS.email}`} className="btn btn-outline-light btn-lg">Email Dr. Duffy</a>
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
