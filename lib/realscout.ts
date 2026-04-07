import { BUSINESS } from '@/lib/site-contact';

export const LISTING_DISCLAIMER =
  'All listing data is deemed reliable but not guaranteed. Listings displayed are from the MLS. Copyright 2026 the listing broker. All rights reserved.';

export const REALSCOUT_LISTING_PROPS = {
  'agent-encoded-id': BUSINESS.realscoutAgentEncodedId,
  'sort-order': 'NEWEST',
  'listing-status': 'For Sale',
  'property-types': 'SFR,MF,TC,OTHER',
  'price-min': '300000',
  'price-max': '900000',
} as const;
