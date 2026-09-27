import Link from 'next/link';
import { AmenityMapExplorer } from '@/components/amenities/AmenityMapExplorer';
import { PageBanner } from '@/components/PageBanner';
import { CalendlyScheduleButton } from '@/components/CalendlyScheduleButton';
import { FaqAccordion } from '@/components/FaqAccordion';
import { AmenitiesPageJsonLd } from '@/components/seo/AmenitiesPageJsonLd';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { AMENITY_FAQS } from '@/lib/curated-nearby-amenities';
import { TULE_SPRINGS_COMMUNITY } from '@/lib/community-map';
import { routeMetadata } from '@/lib/page-seo';
import { BUSINESS } from '@/lib/site-contact';

export const metadata = routeMetadata('/amenities');

export default function AmenitiesPage() {
  const faqItems = AMENITY_FAQS.map((faq) => ({
    question: faq.question,
    answer: <p>{faq.answer}</p>,
  }));

  return (
    <>
      <AmenitiesPageJsonLd />
      <BreadcrumbJsonLd path="/amenities" />
      <PageBanner
        title={`Nearby Amenities in ${TULE_SPRINGS_COMMUNITY.name}, ${TULE_SPRINGS_COMMUNITY.city}`}
        subtitle="Parks, dining, healthcare, schools & daily essentials"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Tule Springs', href: '/tule-springs' },
          { label: 'Nearby Amenities' },
        ]}
      />

      <section className="amenities-guide-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Interactive Map</span>
            <h2 id="amenities-map-heading">Explore the map</h2>
            <p>
              Filter the map by category to see restaurants, parks, grocery, healthcare, and more around the Tule Springs
              and Aliante area of North Las Vegas. Map center: {TULE_SPRINGS_COMMUNITY.centerLabel} (
              {TULE_SPRINGS_COMMUNITY.coordinateSource}).
            </p>
          </div>
          <AmenityMapExplorer variant="full" />
        </div>
      </section>

      <section className="amenities-copy-section" aria-labelledby="dining-near-tule-springs">
        <div className="container">
          <h2 id="dining-near-tule-springs">Dining &amp; coffee near Tule Springs</h2>
          <p>
            Aliante Casino + Hotel on Aliante Parkway bundles multiple restaurants and casual dining under one roof—handy for
            guests and locals. Craig Road corridors toward Centennial Hills add familiar chains and independents; many
            families pair a grocery stop at Smith&apos;s or Walmart on West Craig Road with dinner nearby.
          </p>

          <h2 id="parks-recreation">Parks &amp; recreation</h2>
          <p>
            Aliante Nature Discovery Park on Nature Park Drive is a neighborhood anchor with play areas and walking paths.
            Craig Ranch Regional Park on West Craig Road offers sports fields, splash features, and event space. Tule Springs
            Regional Park and the adjacent fossil beds preserve open desert scenery; Eglington Preserve adds trail access
            along the edge of Tule Springs villages.
          </p>

          <h2 id="golf-nearby">Golf</h2>
          <p>
            Angel Park Golf Club on South Rampart Boulevard is a well-known public course northwest of the Strip, within an
            easy drive from North Las Vegas master-planned communities.
          </p>

          <h2 id="healthcare-nearby">Healthcare</h2>
          <p>
            Centennial Hills Hospital Medical Center on North Durango Drive and MountainView Hospital on North Tenaya Way
            provide emergency and specialty care a short drive from Tule Springs. Pharmacies such as CVS on North Durango
            Drive support routine prescriptions.
          </p>

          <h2 id="shopping-grocery">Shopping &amp; grocery</h2>
          <p>
            Day-to-day shopping clusters along Craig Road and Aliante Parkway: Smith&apos;s Food and Drug (7450 W Craig Rd),
            Walmart Supercenter (1807 W Craig Rd), and retail at Aliante Casino + Hotel (7300 Aliante Pkwy).
          </p>

          <h2 id="schools-serving">Schools serving Tule Springs</h2>
          <p>
            Tule Springs sits in the Clark County School District. CCSD campuses frequently referenced for the area include
            Zel &amp; Mary Lowman Elementary, Centennial High School, and Legacy High School. School boundaries change—confirm
            current zoning on{' '}
            <a href="https://www.ccsd.net/" target="_blank" rel="noopener noreferrer">
              ccsd.net
            </a>{' '}
            before you write an offer.
          </p>

          <h2 id="commute-times">Commute &amp; regional access (approximate)</h2>
          <ul className="feature-list-inline">
            <li>
              <i className="fas fa-check-circle" aria-hidden="true"></i> Las Vegas Strip: about 25–35 minutes via I-15 or
              US-95, traffic dependent
            </li>
            <li>
              <i className="fas fa-check-circle" aria-hidden="true"></i> Harry Reid International Airport: about 30–40
              minutes via the 215 Beltway and I-15
            </li>
            <li>
              <i className="fas fa-check-circle" aria-hidden="true"></i> Downtown Summerlin: about 20–25 minutes west on
              the 215 Beltway
            </li>
            <li>
              <i className="fas fa-check-circle" aria-hidden="true"></i> Major hospitals: Centennial Hills and MountainView
              within a short drive on Durango and Tenaya corridors
            </li>
          </ul>
          <p className="mt-3">
            Ready to tour homes near these amenities? Browse{' '}
            <Link href="/tule-springs-homes-for-sale">Tule Springs homes for sale</Link> or{' '}
            <Link href="/listings">all North Las Vegas listings</Link>.
          </p>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="amenities-faq-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="amenities-faq-heading">Tule Springs amenities FAQ</h2>
            <p>Quick answers for buyers comparing North Las Vegas neighborhoods.</p>
          </div>
          <FaqAccordion items={faqItems} aria-labelledby="amenities-faq-heading" />
        </div>
      </section>

      <section className="agent-brief">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2>Your hyperlocal Tule Springs REALTOR®</h2>
              <p>
                {BUSINESS.name} ({BUSINESS.license}) with {BUSINESS.legalName} helps buyers and sellers navigate Tule
                Springs villages, schools, and daily conveniences. Office: {BUSINESS.officeAddress.streetAddress},{' '}
                {BUSINESS.officeAddress.city}, {BUSINESS.officeAddress.region} {BUSINESS.officeAddress.postalCode}.
              </p>
              <div className="agent-actions">
                <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-primary">
                  <i className="fas fa-phone" aria-hidden="true"></i> {BUSINESS.phoneDisplay}
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="btn btn-outline-primary">
                  <i className="fas fa-envelope" aria-hidden="true"></i> {BUSINESS.email}
                </a>
                <CalendlyScheduleButton className="btn btn-outline-primary">Schedule time with me</CalendlyScheduleButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
