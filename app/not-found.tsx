import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS } from '@/lib/site-contact';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--primary, #00205b)' }}>404</h1>
      <h2>Page Not Found</h2>
      <p className="text-muted" style={{ marginBottom: '2rem' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" className="btn btn-primary">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link href="/listings" className="btn btn-outline-primary">
          <i className="fas fa-search"></i> Listings
        </Link>
        <a href={`tel:${BUSINESS.phoneE164}`} className="btn btn-outline-primary">
          <i className="fas fa-phone"></i> Call {BUSINESS.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
