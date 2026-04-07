import type { Metadata } from 'next';
import Script from 'next/script';
import { Noto_Serif, Open_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CloudflareAnalytics } from '@/components/CloudflareAnalytics';
import { CalendlyBadge } from '@/components/CalendlyBadge';
import { CalendlyScheduleSection } from '@/components/CalendlyScheduleSection';
import { getBaseMetadata, getOrgGraph } from '@/lib/seo';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const metadata: Metadata = getBaseMetadata();

export const viewport = {
  themeColor: '#00205b',
};

const orgGraph = getOrgGraph();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${openSans.variable} ${notoSerif.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgGraph) }}
        />
      </head>
      <body className={openSans.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
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
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <div id="main-wrapper">
          <Header />
          <main id="main-content">
            {children}
            <CalendlyScheduleSection />
          </main>
          <Footer />
        </div>
        <CalendlyBadge />
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
