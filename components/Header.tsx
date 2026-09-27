import Link from 'next/link';
import { BUSINESS } from '@/lib/site-contact';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 header-left">
            <div className="logo">
              <Link href="/">
                <img
                  src="/images/logo.svg"
                  alt="Dr. Jan Duffy - Berkshire Hathaway HomeServices"
                  className="img-fluid"
                  width={260}
                  height={64}
                />
              </Link>
            </div>
            <div className="header-phone">
              <a href={`tel:${BUSINESS.phoneE164}`} className="phone-link" aria-label={`Call ${BUSINESS.phoneDisplay}`}><i className="fas fa-phone" aria-hidden="true"></i> {BUSINESS.phoneDisplay}</a>
            </div>
          </div>
          <div className="col-md-9">
            <nav className="navigation desktop-only" aria-label="Main navigation">
              <ul id="main-nav" className="menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/buyers">Buy</Link></li>
                <li><Link href="/listings">Listings</Link></li>
                <li><Link href="/sellers">Sell</Link></li>
                <li className="menu-item-has-children">
                  <Link href="/tule-springs">Tule Springs</Link>
                  <ul className="sub-menu">
                    <li><Link href="/tule-springs-homes-for-sale">Homes for Sale</Link></li>
                    <li><Link href="/tule-springs-villages">Villages</Link></li>
                    <li><Link href="/tule-springs-schools">Schools</Link></li>
                    <li><Link href="/tule-springs-amenities">Amenities</Link></li>
                    <li><Link href="/amenities">Nearby Map</Link></li>
                    <li><Link href="/why-tule-springs">Why Live Here</Link></li>
                    <li><Link href="/tule-springs-real-estate">Real Estate</Link></li>
                    <li><Link href="/tule-springs-neighborhoods">Neighborhoods</Link></li>
                    <li><Link href="/north-las-vegas-tule-springs">North Las Vegas</Link></li>
                    <li><Link href="/tule-springs-new-homes">New Homes</Link></li>
                  </ul>
                </li>
                <li><Link href="/about">About</Link></li>
                <li>
                  <a href="#schedule" aria-label="Schedule a call with Calendly">
                    Schedule
                  </a>
                </li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
