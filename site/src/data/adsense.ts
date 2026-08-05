/**
 * Google AdSense config for whitsundayislandsnationalpark.com.au.
 * Head script loads when client is a ca-pub- id (verification + Auto ads).
 * Override via PUBLIC_ADSENSE_CLIENT in .env if needed.
 * Per-unit slot IDs stay placeholders until units are created in AdSense —
 * avoid pushing empty <ins> with fake slots (head script alone is enough for review).
 */
const clientFromEnv = import.meta.env.PUBLIC_ADSENSE_CLIENT?.trim() ?? '';
/** Public publisher id — not a secret; required in page head for AdSense site review */
const clientDefault = 'ca-pub-1520278362040469';
const client = clientFromEnv.startsWith('ca-pub-') ? clientFromEnv : clientDefault;

export type AdUnitKey = 'inContent' | 'sidebar' | 'inFeed';

export const adsense = {
  client,
  enabled: client.startsWith('ca-pub-'),
  /** True when real ad unit slots exist (not 000… placeholders) */
  unitsReady: false,
  units: {
    inContent: { slot: '0000000001', label: 'In-content' },
    sidebar: { slot: '0000000002', label: 'Sidebar' },
    inFeed: { slot: '0000000003', label: 'In-feed' },
  } satisfies Record<AdUnitKey, { slot: string; label: string }>,
} as const;
