import { getBreadcrumbListJsonLd } from '@/lib/breadcrumbs';
import { getBreadcrumbTrail } from '@/lib/breadcrumb-trails';
import type { MarketingPath } from '@/lib/page-seo';

type Props = { path: Exclude<MarketingPath, ''> };

/** Server-safe BreadcrumbList JSON-LD for inner marketing routes. */
export function BreadcrumbJsonLd({ path }: Props) {
  const trail = getBreadcrumbTrail(path);
  const jsonLd = getBreadcrumbListJsonLd(trail);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
