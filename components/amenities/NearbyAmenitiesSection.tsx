import Link from 'next/link';
import { AmenityMapExplorer } from '@/components/amenities/AmenityMapExplorer';
import { TULE_SPRINGS_COMMUNITY } from '@/lib/community-map';

type NearbyAmenitiesSectionProps = {
  /** Section heading — defaults to “Life Near Tule Springs” */
  heading?: string;
  /** Optional element id for aria-labelledby */
  headingId?: string;
  variant?: 'compact' | 'full';
};

/**
 * Reusable “What’s Nearby” block with interactive map (or iframe fallback) and link to /amenities.
 */
export function NearbyAmenitiesSection({
  heading = `Life Near ${TULE_SPRINGS_COMMUNITY.name}`,
  headingId = 'nearby-amenities-heading',
  variant = 'compact',
}: NearbyAmenitiesSectionProps) {
  return (
    <section className="nearby-amenities-section" aria-labelledby={headingId}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">What&apos;s Nearby</span>
          <h2 id={headingId}>{heading}</h2>
          <p>
            Explore dining, parks, grocery, healthcare, and schools around {TULE_SPRINGS_COMMUNITY.name} in{' '}
            {TULE_SPRINGS_COMMUNITY.city}, Nevada. Use the map filters below or view the full{' '}
            <Link href="/amenities">Nearby Amenities guide</Link>.
          </p>
        </div>
        <AmenityMapExplorer variant={variant} showAllCategories={variant === 'full'} />
        <p className="text-center mt-4">
          <Link href="/amenities" className="btn btn-outline-primary">
            See all nearby amenities in {TULE_SPRINGS_COMMUNITY.name}
          </Link>
        </p>
      </div>
    </section>
  );
}
