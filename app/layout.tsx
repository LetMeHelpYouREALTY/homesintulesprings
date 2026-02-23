import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CloudflareAnalytics } from '@/components/CloudflareAnalytics';

const SITE_URL = 'https://www.homesintulesprings.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Homes in Tule Springs | Dr. Jan Duffy, REALTOR®',
    template: '%s | Homes in Tule Springs',
  },
  description: 'Search homes for sale in Tule Springs, North Las Vegas. Browse real-time MLS listings, get home valuations, and connect with Dr. Jan Duffy, your local real estate expert.',
  keywords: ['Tule Springs homes for sale', 'North Las Vegas real estate', 'home search', 'sell my home', 'Dr. Jan Duffy', 'Berkshire Hathaway'],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Homes in Tule Springs',
    images: [{ url: '/images/tule-springs-hero.jpg', width: 1200, height: 630 }],
  },
  robots: 'index, follow',
};

export const viewport = {
  themeColor: '#00205b',
};

const agentSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Dr. Jan Duffy',
  image: `${SITE_URL}/images/dr-jan-duffy.jpg`,
  url: SITE_URL,
  telephone: '+1-702-500-1942',
  email: 'DrDuffy@bhhsnv.com',
  description: 'Dr. Jan Duffy is a real estate specialist in Tule Springs, North Las Vegas, Nevada with Berkshire Hathaway HomeServices Nevada Properties.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2627 Nature Park Dr',
    addressLocality: 'North Las Vegas',
    addressRegion: 'NV',
    postalCode: '89084',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'Place', name: 'Tule Springs, North Las Vegas' },
  memberOf: { '@type': 'Organization', name: 'Berkshire Hathaway HomeServices Nevada Properties' },
  openingHours: ['Mo-Fr 09:00-17:00', 'Sa 10:00-15:00'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Homes in Tule Springs - Dr. Jan Duffy',
  url: SITE_URL,
  description: 'Search homes for sale in Tule Springs, North Las Vegas. Dr. Jan Duffy, REALTOR® at Berkshire Hathaway HomeServices Nevada Properties.',
  publisher: {
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    telephone: '+1-702-500-1942',
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Noto+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WT2PRE8Q93"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WT2PRE8Q93');
          `}
        </Script>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
        />
        <div id="main-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <SpeedInsights />
        <Analytics />
        <CloudflareAnalytics />
      </body>
    </html>
  );
}
