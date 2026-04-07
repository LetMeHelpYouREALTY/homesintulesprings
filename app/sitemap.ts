import type { MetadataRoute } from 'next';
import { NAV_ROUTES, SITE_URL } from '@/lib/site-contact';

export const dynamic = 'force-static';

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

/** Realistic last-modified hints per route (content/stale signals; update when pages materially change). */
const LAST_MODIFIED_ISO: Record<string, string> = {
  '': '2026-04-07T12:00:00.000Z',
  '/buyers': '2026-04-05T12:00:00.000Z',
  '/sellers': '2026-04-05T12:00:00.000Z',
  '/listings': '2026-04-06T12:00:00.000Z',
  '/about': '2026-03-20T12:00:00.000Z',
  '/contact': '2026-04-07T12:00:00.000Z',
  '/tule-springs': '2026-04-04T12:00:00.000Z',
  '/tule-springs-homes-for-sale': '2026-04-06T12:00:00.000Z',
  '/tule-springs-villages': '2026-04-03T12:00:00.000Z',
  '/tule-springs-schools': '2026-04-03T12:00:00.000Z',
  '/tule-springs-amenities': '2026-04-03T12:00:00.000Z',
  '/why-tule-springs': '2026-04-02T12:00:00.000Z',
  '/tule-springs-real-estate': '2026-04-04T12:00:00.000Z',
  '/tule-springs-neighborhoods': '2026-04-03T12:00:00.000Z',
  '/north-las-vegas-tule-springs': '2026-04-02T12:00:00.000Z',
  '/tule-springs-new-homes': '2026-04-05T12:00:00.000Z',
};

function getChangeFrequency(path: string): ChangeFreq {
  if (path === '' || path === '/about' || path === '/contact') return 'weekly';
  if (path === '/listings' || path === '/buyers') return 'daily';
  return 'weekly';
}

function getPriority(path: string): number {
  if (path === '') return 1;
  if (path === '/listings' || path === '/buyers' || path === '/sellers') return 0.9;
  if (path === '/contact' || path === '/tule-springs') return 0.85;
  return 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_ROUTES.map((path) => {
    const key = path;
    const lastMod = LAST_MODIFIED_ISO[key] ?? '2026-04-01T12:00:00.000Z';
    return {
      url: path ? `${SITE_URL}${path}` : SITE_URL,
      lastModified: new Date(lastMod),
      changeFrequency: getChangeFrequency(path),
      priority: getPriority(path),
    };
  });
}
