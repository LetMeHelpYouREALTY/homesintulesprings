import { SITE_URL } from '@/lib/site-contact';

export type BreadcrumbItem = { name: string; path: '/' | `/${string}` };

/**
 * JSON-LD BreadcrumbList for marketing routes (pairs with visible nav).
 * @see https://schema.org/BreadcrumbList
 */
export function getBreadcrumbListJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
