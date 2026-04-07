import type { MetadataRoute } from 'next';
import { NAV_ROUTES, SITE_URL } from '@/lib/site-contact';

export const dynamic = 'force-static';

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

function getChangeFrequency(path: string): ChangeFreq {
  if (path === '' || path === '/about' || path === '/contact') return 'weekly';
  if (path === '/listings' || path === '/buyers') return 'daily';
  return 'weekly';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const contentUpdatedAt = new Date('2026-04-07T00:00:00.000Z');
  return NAV_ROUTES.map((path) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified: contentUpdatedAt,
    changeFrequency: getChangeFrequency(path),
    priority: path === '' ? 1 : (path === '/listings' || path === '/buyers' || path === '/sellers' ? 0.9 : 0.8),
  }));
}
