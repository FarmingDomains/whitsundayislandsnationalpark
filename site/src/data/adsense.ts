/**
 * Google AdSense config. Set PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXX in .env.
 * Slot IDs are placeholders until AdSense units are created.
 */
const client = import.meta.env.PUBLIC_ADSENSE_CLIENT?.trim() ?? '';

export type AdUnitKey = 'inContent' | 'sidebar' | 'inFeed';

export const adsense = {
  client,
  enabled: client.startsWith('ca-pub-'),
  units: {
    inContent: { slot: '0000000001', label: 'In-content' },
    sidebar: { slot: '0000000002', label: 'Sidebar' },
    inFeed: { slot: '0000000003', label: 'In-feed' },
  } satisfies Record<AdUnitKey, { slot: string; label: string }>,
} as const;
