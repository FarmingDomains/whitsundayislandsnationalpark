/**
 * Affiliate link helpers for whitsundayislandsnationalpark.com.au.
 *
 * Set in site/.env (PUBLIC_* baked at build for static FTP hosts):
 *   PUBLIC_GETYOURGUIDE_PARTNER=
 *   PUBLIC_AMAZON_TAG=rero07-22
 *   PUBLIC_BOOKING_AID= (optional legacy Booking.com aid; CJ deep links preferred)
 *
 * Booking.com stays use live CJ Affiliate deep links (always sponsored).
 * Without GYG partner ID, tour links still work as convenience links (no rel=sponsored).
 */

/** Optional legacy Booking.com aid — CJ deep links below take priority for known hubs. */
const bookingAid = import.meta.env.PUBLIC_BOOKING_AID?.trim() ?? '';
const gygPartner = import.meta.env.PUBLIC_GETYOURGUIDE_PARTNER?.trim() ?? '';
/** GYG Partner “campaign” — multi-site analytics (default = this domain slug). */
const gygCampaign =
  import.meta.env.PUBLIC_GETYOURGUIDE_CAMPAIGN?.trim() || 'whitsundayislandsnationalpark';
/** Default AU tag when env empty — Ian’s Associates ID; override via .env if needed */
const amazonTag = import.meta.env.PUBLIC_AMAZON_TAG?.trim() || 'rero07-22';

/**
 * Live CJ Affiliate → Booking.com search deep links (partner 101839079 / SID 17293136).
 * rel=sponsored on all of these.
 */
export const bookingCjLinks = {
  airlieBeach:
    'https://www.anrdoezrs.net/click-101839079-17293136?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.en-gb.html%3Fss%3DAirlie%2BBeach%252C%2BQueensland%252C%2BAustralia%26dest_type%3Dcity%26group_adults%3D2%26no_rooms%3D1%26group_children%3D0',
  proserpine:
    'https://www.anrdoezrs.net/click-101839079-17293136?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.en-gb.html%3Fss%3DProserpine%252C%2BQueensland%252C%2BAustralia%26dest_type%3Dcity%26group_adults%3D2%26no_rooms%3D1%26group_children%3D0',
  hamiltonIsland:
    'https://www.jdoqocy.com/click-101839079-17293136?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.en-gb.html%3Fss%3DHamilton%2BIsland%252C%2BQueensland%252C%2BAustralia%26dest_type%3Dcity%26group_adults%3D2%26no_rooms%3D1%26group_children%3D0',
} as const;

/** Booking.com stays are active via CJ deep links (not waiting on PUBLIC_BOOKING_AID). */
const bookingAffiliateActive = true;

export const affiliates = {
  bookingAid,
  gygPartner,
  gygCampaign,
  amazonTag,
  hasBookingAffiliate: bookingAffiliateActive,
  hasGygAffiliate: gygPartner.length > 0,
  hasAmazonAffiliate: amazonTag.length > 0,
  hasAnyAffiliate:
    bookingAffiliateActive || gygPartner.length > 0 || amazonTag.length > 0,
} as const;

export const bookingDestinations = {
  airlieBeach: 'Airlie Beach, Queensland, Australia',
  proserpine: 'Proserpine, Queensland, Australia',
  cannonvale: 'Cannonvale, Queensland, Australia',
  hamiltonIsland: 'Hamilton Island, Queensland, Australia',
  shuteHarbour: 'Shute Harbour, Queensland, Australia',
} as const;

export type BookingDestination = keyof typeof bookingDestinations;

/** Booking.com URL — prefers live CJ deep links for known hubs. */
export function bookingSearchUrl(destination: BookingDestination | string): string {
  if (destination in bookingCjLinks) {
    return bookingCjLinks[destination as keyof typeof bookingCjLinks];
  }
  const search =
    typeof destination === 'string' && !(destination in bookingDestinations)
      ? destination
      : bookingDestinations[destination as BookingDestination] ?? String(destination);
  const params = new URLSearchParams({ ss: search });
  if (bookingAid) params.set('aid', bookingAid);
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

function applyGygParams(params: URLSearchParams, campaign = gygCampaign) {
  if (!gygPartner) return;
  params.set('partner_id', gygPartner);
  params.set('utm_medium', 'online_publisher');
  params.set('campaign', campaign);
}

/** GetYourGuide search — partner_id + site campaign when configured. */
export function getYourGuideSearchUrl(query: string, campaign = gygCampaign): string {
  const params = new URLSearchParams({ q: query });
  applyGygParams(params, campaign);
  return `https://www.getyourguide.com/s/?${params.toString()}`;
}

/**
 * GetYourGuide product deep link.
 * Pass a path (`/.../...-t.../`) or full GYG URL; strips pasted partner_id
 * and re-applies PUBLIC_GETYOURGUIDE_PARTNER + utm_medium + campaign at build time.
 */
export function getYourGuideProductUrl(pathOrUrl: string, campaign = gygCampaign): string {
  const url = pathOrUrl.startsWith('http')
    ? new URL(pathOrUrl)
    : new URL(pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`, 'https://www.getyourguide.com');
  url.searchParams.delete('partner_id');
  url.searchParams.delete('utm_medium');
  url.searchParams.delete('utm_source');
  url.searchParams.delete('campaign');
  applyGygParams(url.searchParams, campaign);
  return url.toString();
}

/** Curated Whitsunday / Whitehaven products — deep paths when known; searchQuery is fallback. */
export type FeaturedGygTour = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  /** Search query used when a product path is not yet pinned */
  searchQuery: string;
  path?: string;
};

/**
 * Partner-verified GYG deep links (paths only — partner_id + campaign re-applied at build).
 * Source: Ian’s Airlie / Whitehaven picks 2026-07. Culled to a conversion ladder (not full catalogue).
 * Omitted near-duplicate: second Heart Reef flight t259972 (kept t669380).
 */
export const featuredGygTours: FeaturedGygTour[] = [
  {
    id: 'hill-inlet-whitehaven-cruise',
    title: 'Hill Inlet lookout & Whitehaven Beach cruise',
    summary:
      'Primary icon-pair product from Airlie Beach: Whitehaven silica sand plus Hill Inlet lookout when conditions allow. Confirm walking ability and live inclusions before you book.',
    tags: ['Day tour', 'Whitehaven', 'Hill Inlet'],
    searchQuery: 'Whitehaven Beach Hill Inlet tour Airlie Beach',
    path: '/airlie-beach-l868/airlie-beach-hill-inlet-lookout-and-whitehaven-beach-cruise-t410838/',
  },
  {
    id: 'whitehaven-half-day',
    title: 'Whitehaven half-day cruise from Airlie',
    summary:
      'Shorter Whitehaven window for tight schedules — less time on the sand than a full day, lower total commitment. Check fitness and weather cancellation notes.',
    tags: ['Half day', 'Whitehaven', 'Airlie Beach'],
    searchQuery: 'Whitehaven half day cruise Airlie Beach',
    path: '/airlie-beach-l868/from-airlie-whitsundays-and-whitehaven-half-day-cruise-t132276/',
  },
  {
    id: 'camira-full-day-sail',
    title: 'Camira full-day sailing adventure',
    summary:
      'Full-day sailing path: more time on the water, typically Whitehaven-focused with a classic catamaran day structure. Good when you want atmosphere over a pure speedboat tick.',
    tags: ['Sailing', 'Full day', 'Whitehaven'],
    searchQuery: 'Camira sailing Whitehaven Airlie Beach',
    path: '/airlie-beach-l868/airlie-beach-whitsundays-full-day-camira-sailing-adventure-t134625/',
  },
  {
    id: 'providence-day-sail-snorkel',
    title: 'Providence Whitehaven day sail with snorkelling',
    summary:
      'Day sail + snorkel combo toward Whitehaven — conditions decide the snorkel site. Stinger suits recommended in season (typically Nov–May).',
    tags: ['Sailing', 'Snorkel', 'Whitehaven'],
    searchQuery: 'Providence Whitehaven day sail snorkel',
    path: '/airlie-beach-l868/airlie-beach-providence-whitehaven-day-sail-with-snorkeling-t391833/',
  },
  {
    id: 'islands-snorkel-lunch',
    title: 'Whitsunday Islands tour with snorkel & lunch',
    summary:
      'Broader islands day with snorkelling and lunch framing — useful when you want reef time without a multi-day sail. Confirm exact stops for your departure date.',
    tags: ['Day tour', 'Snorkel', 'Lunch'],
    searchQuery: 'Whitsunday Islands snorkel lunch tour',
    path: '/airlie-beach-l868/whitsunday-whitsunday-islands-tour-with-snorkeling-lunch-t600985/',
  },
  {
    id: 'whitehaven-beach-club',
    title: 'Whitehaven Beach Club day',
    summary:
      'Club-style Whitehaven day from Airlie — more hosted/facility energy than a quiet beach walk. Read inclusions carefully if solitude is your goal.',
    tags: ['Day tour', 'Whitehaven', 'Club'],
    searchQuery: 'Whitehaven Beach Club Airlie Beach',
    path: '/airlie-beach-l868/airlie-beach-whitehaven-beach-club-t1073316/',
  },
  {
    id: 'two-night-sailing-meals',
    title: '2-night Whitsundays sailing (meals included)',
    summary:
      'Multi-day immersion: overnight on the water with meals packaged. Higher cost and weather sensitivity than a single day trip — build buffer time around flights.',
    tags: ['Multi-day', 'Sailing', 'Overnight'],
    searchQuery: 'Whitsundays 2 night sailing meals',
    path: '/airlie-beach-l868/airlie-beach-2-night-whitsundays-sailing-trip-with-meals-t407266/',
  },
  {
    id: 'two-day-gbr-sailing',
    title: '2-day / 2-night Great Barrier Reef sailing',
    summary:
      'Longer sailing package linking Airlie logistics with reef time. Compare cabin style, group size and cancellation policy against the 2-night Whitsundays product above.',
    tags: ['Multi-day', 'Sailing', 'Reef'],
    searchQuery: 'Airlie Beach 2 day 2 night sailing reef',
    path: '/queensland-l567/airlie-beach-great-barrier-reef-2-day-2-night-sailing-tour-t408105/',
  },
  {
    id: 'heart-reef-scenic-flight',
    title: 'Heart Reef & Whitsunday Islands scenic flight',
    summary:
      'Aerial Heart Reef + archipelago context — pairs well after (or instead of stacking) a full boat day. Not a substitute for ground-level Whitehaven time.',
    tags: ['Scenic flight', 'Heart Reef', 'Airlie Beach'],
    searchQuery: 'Heart Reef scenic flight Airlie Beach',
    path: '/airlie-beach-l868/airlie-beach-whitsunday-islands-heart-reef-scenic-flight-t669380/',
  },
];

export function featuredTourLinks(): (MonetisationLink & {
  summary: string;
  tags: string[];
  id: string;
})[] {
  return featuredGygTours.map((tour, i) => ({
    id: tour.id,
    label: tour.title,
    href: tour.path ? getYourGuideProductUrl(tour.path) : getYourGuideSearchUrl(tour.searchQuery),
    external: true as const,
    sponsored: affiliates.hasGygAffiliate,
    primary: i === 0,
    summary: tour.summary,
    tags: tour.tags,
  }));
}

/** Amazon.com.au product search — tag when PUBLIC_AMAZON_TAG is set (or default). */
export function amazonSearchUrl(keywords: string): string {
  const params = new URLSearchParams({ k: keywords });
  if (amazonTag) params.set('tag', amazonTag);
  return `https://www.amazon.com.au/s?${params.toString()}`;
}

export type GearItem = {
  label: string;
  keywords: string;
  note: string;
};

/** Boat + tropical island + marine gear */
export const gearRecommendations: GearItem[] = [
  {
    label: 'Full-body stinger suit / lycra',
    keywords: 'stinger suit lycra full body snorkel',
    note: 'Marine stinger season typically Nov–May — suit or avoid swimming',
  },
  {
    label: 'Reef-safe high-SPF sunscreen',
    keywords: 'reef safe SPF 50 sunscreen zinc',
    note: 'Tropical UV + marine park etiquette',
  },
  {
    label: 'Dry bag (10–20 L)',
    keywords: 'dry bag waterproof 20L boat',
    note: 'Boat spray, tender landings, sudden showers',
  },
  {
    label: 'Waterproof phone case',
    keywords: 'waterproof phone pouch floating',
    note: 'Beach + boat transfers; backup offline maps',
  },
  {
    label: 'Wide-brim sun hat with cord',
    keywords: 'wide brim sun hat chin strap boat',
    note: 'Wind on water + beach reflection',
  },
  {
    label: 'UPF long-sleeve shirt',
    keywords: 'UPF long sleeve rash shirt sun protection',
    note: 'Humidity + all-day sun on open beaches',
  },
  {
    label: 'Collapsible water jugs',
    keywords: 'collapsible water container camping 10L',
    note: 'Camping: no reliable fresh water on most sites — 5 L+/person/day',
  },
  {
    label: 'Lightweight camping stove + fuel',
    keywords: 'camping stove canister fuel lightweight',
    note: 'No campfires on national park islands',
  },
  {
    label: 'Closed-toe water / trail shoes',
    keywords: 'water shoes trail shoes grip hiking',
    note: 'Rocky landings, coral rubble, Hill Inlet track',
  },
  {
    label: 'Polarised sunglasses',
    keywords: 'polarised sunglasses boat marine',
    note: 'Glare off silica sand and turquoise water',
  },
  {
    label: 'Hydration system / bottles',
    keywords: 'hydration bladder bottle hiking 2 litre',
    note: 'Day tours and island walks in heat/humidity',
  },
  {
    label: 'Headlamp',
    keywords: 'camping headlamp rechargeable waterproof',
    note: 'Overnight beach camping; pack-down in dark',
  },
  {
    label: 'Reef-safe insect repellent',
    keywords: 'insect repellent tropical camping DEET picaridin',
    note: 'Sandflies and mosquitoes at dusk on beaches',
  },
  {
    label: 'Day pack with rain cover',
    keywords: 'day pack 20L rain cover hiking',
    note: 'Wet landings and tropical showers',
  },
];

export type MonetisationLink = {
  label: string;
  href: string;
  external: true;
  sponsored: boolean;
  primary?: boolean;
  /** Optional short blurb under the link (stays column) */
  note?: string;
};

/** Primary stays column — CJ Booking.com deep links (Airlie · Proserpine · Hamilton). */
export function staysLinks(primary: BookingDestination = 'airlieBeach'): MonetisationLink[] {
  const items: {
    key: keyof typeof bookingCjLinks;
    label: string;
    note: string;
  }[] = [
    {
      key: 'airlieBeach',
      label: 'Hotels & apartments in Airlie Beach',
      note: 'main mainland hub for day tours and boat transfers',
    },
    {
      key: 'proserpine',
      label: 'Proserpine / Whitsunday Coast',
      note: 'quieter / airport-side option',
    },
    {
      key: 'hamiltonIsland',
      label: 'Hamilton Island',
      note: 'resort island alternative with its own airport',
    },
  ];
  return items.map(({ key, label, note }) => ({
    label,
    note,
    href: bookingCjLinks[key],
    external: true as const,
    sponsored: true,
    primary: primary === key || (primary === 'cannonvale' && key === 'airlieBeach'),
  }));
}

/** MonetisationPanel tour column */
export function tourLinks(): MonetisationLink[] {
  const featured = featuredTourLinks();
  const top = featured.slice(0, 3).map(({ label, href, external, sponsored, primary }) => ({
    label: shortenTourLabel(label),
    href,
    external,
    sponsored,
    primary,
  }));
  return [
    ...top,
    {
      label: 'Browse more Whitsunday tours',
      href: getYourGuideSearchUrl('Whitehaven Beach Whitsundays'),
      external: true as const,
      sponsored: affiliates.hasGygAffiliate,
    },
  ];
}

function shortenTourLabel(title: string): string {
  if (title.includes('Hill Inlet lookout')) return 'Hill Inlet + Whitehaven';
  if (title.toLowerCase().includes('half-day')) return 'Whitehaven half-day';
  if (title.toLowerCase().includes('camira')) return 'Camira full-day sail';
  if (title.toLowerCase().includes('providence')) return 'Providence day sail';
  if (title.toLowerCase().includes('beach club')) return 'Whitehaven Beach Club';
  if (title.includes('2-night')) return '2-night sailing';
  if (title.includes('2-day')) return '2-day reef sailing';
  if (title.toLowerCase().includes('heart reef') || title.toLowerCase().includes('scenic flight'))
    return 'Heart Reef scenic flight';
  if (title.toLowerCase().includes('snorkel')) return 'Islands snorkel + lunch';
  return title.length > 48 ? `${title.slice(0, 45)}…` : title;
}

export function gearLinks(): { label: string; href: string; note: string; sponsored: boolean }[] {
  return gearRecommendations.map((item) => ({
    label: item.label,
    href: amazonSearchUrl(item.keywords),
    note: item.note,
    sponsored: affiliates.hasAmazonAffiliate,
  }));
}

export function externalRel(sponsored: boolean): string {
  // Booking / GYG / Amazon: sponsored + noopener (noreferrer retained for security)
  return sponsored ? 'sponsored noopener noreferrer' : 'noopener noreferrer';
}

/** Short note under Nearby stays when Booking.com CJ links are live. */
export const bookingStaysDisclosure =
  'All Booking.com links open in a new tab and may earn a commission at no extra cost to you. Camping permits and official Queensland Parks (QPWS) bookings are never affiliated.';

export const affiliateDisclosureShort =
  'Some stay, tour and gear links may earn a commission at no extra cost to you. Camping permits, QPWS fees and official park bookings are never affiliated.';
