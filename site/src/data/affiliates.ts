/**
 * Affiliate link helpers for whitsundayislandsnationalpark.com.au.
 *
 * Set in site/.env (PUBLIC_* baked at build for static FTP hosts):
 *   PUBLIC_BOOKING_AID=
 *   PUBLIC_GETYOURGUIDE_PARTNER=
 *   PUBLIC_AMAZON_TAG=rero07-22
 *
 * Without Booking/GYG IDs, links still work as convenience links (no rel=sponsored).
 * With IDs, tracking is appended and rel includes sponsored.
 */

const bookingAid = import.meta.env.PUBLIC_BOOKING_AID?.trim() ?? '';
const gygPartner = import.meta.env.PUBLIC_GETYOURGUIDE_PARTNER?.trim() ?? '';
/** GYG Partner “campaign” — multi-site analytics (default = this domain slug). */
const gygCampaign =
  import.meta.env.PUBLIC_GETYOURGUIDE_CAMPAIGN?.trim() || 'whitsundayislandsnationalpark';
/** Default AU tag when env empty — Ian’s Associates ID; override via .env if needed */
const amazonTag = import.meta.env.PUBLIC_AMAZON_TAG?.trim() || 'rero07-22';

export const affiliates = {
  bookingAid,
  gygPartner,
  gygCampaign,
  amazonTag,
  hasBookingAffiliate: bookingAid.length > 0,
  hasGygAffiliate: gygPartner.length > 0,
  hasAmazonAffiliate: amazonTag.length > 0,
  hasAnyAffiliate: bookingAid.length > 0 || gygPartner.length > 0 || amazonTag.length > 0,
} as const;

export const bookingDestinations = {
  airlieBeach: 'Airlie Beach, Queensland, Australia',
  cannonvale: 'Cannonvale, Queensland, Australia',
  hamiltonIsland: 'Hamilton Island, Queensland, Australia',
  shuteHarbour: 'Shute Harbour, Queensland, Australia',
} as const;

export type BookingDestination = keyof typeof bookingDestinations;

/** Booking.com search URL — appends aid when PUBLIC_BOOKING_AID is set. */
export function bookingSearchUrl(destination: BookingDestination | string): string {
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
 * Featured tours — prefer search queries that convert for Whitehaven / Airlie
 * until product paths are partner-verified and pinned.
 */
export const featuredGygTours: FeaturedGygTour[] = [
  {
    id: 'whitehaven-day-sail',
    title: 'Whitehaven Beach & Hill Inlet day tour',
    summary:
      'Dominant high-volume path: commercial day trip from Airlie Beach / Shute Harbour to Whitehaven with Hill Inlet lookout when conditions and itinerary allow. Confirm inclusions (snorkel stop, transfer time, walking ability).',
    tags: ['Day tour', 'Whitehaven', 'Hill Inlet'],
    searchQuery: 'Whitehaven Beach Hill Inlet tour Airlie Beach',
  },
  {
    id: 'ocean-rafting',
    title: 'Ocean rafting / adventure Whitehaven trip',
    summary:
      'Faster, more active style of day trip — often better for shorter time windows if you tolerate a rougher ride. Check fitness notes and wet-weather cancellation policy.',
    tags: ['Adventure', 'Whitehaven', 'Airlie Beach'],
    searchQuery: 'Ocean rafting Whitehaven Beach',
  },
  {
    id: 'sailing-catamaran',
    title: 'Sailing or catamaran day cruise',
    summary:
      'Slower, more scenic day on the water — often includes snorkel stops and lunch. Best when you want atmosphere over maximum beach minutes.',
    tags: ['Sailing', 'Day cruise', 'Snorkel'],
    searchQuery: 'Whitsundays sailing catamaran day trip',
  },
  {
    id: 'multi-day-sail',
    title: 'Multi-day sailing charter',
    summary:
      'Freedom / immersion path: overnight or multi-day sail through the archipelago. Higher cost, deeper experience than a single day-trip tick.',
    tags: ['Multi-day', 'Sailing', 'Charter'],
    searchQuery: 'Whitsundays multi day sailing',
  },
  {
    id: 'scenic-flight',
    title: 'Scenic flight / Heart Reef & Whitehaven',
    summary:
      'Aerial context for Heart Reef and Whitehaven silica — pairs well with a separate ground day. Choose operators that follow marine park and cultural guidelines.',
    tags: ['Scenic flight', 'Helicopter', 'Heart Reef'],
    searchQuery: 'Whitsundays scenic flight Whitehaven Heart Reef',
  },
  {
    id: 'snorkel-dive',
    title: 'Snorkel & dive day trip',
    summary:
      'Fringing reef and pontoon-style products — conditions dependent. Stinger season and weather windows matter; full-body suits recommended Nov–May.',
    tags: ['Snorkel', 'Dive', 'Reef'],
    searchQuery: 'Whitsundays snorkel dive tour',
  },
  {
    id: 'camping-transfer-search',
    title: 'Camping transfer / water taxi (search)',
    summary:
      'Self-sufficient camping path: boat transfer to Whitehaven or other beaches (e.g. Scamper-style). Book QPWS camping permit separately — never via this site.',
    tags: ['Camping', 'Transfer', 'Whitehaven'],
    searchQuery: 'Whitehaven camping transfer Whitsundays',
  },
  {
    id: 'hamilton-day',
    title: 'Hamilton Island base experiences',
    summary:
      'Resort-island logistics for those not basing in Airlie — still confirm how you reach Whitehaven and national park beaches from your resort.',
    tags: ['Hamilton Island', 'Resort'],
    searchQuery: 'Hamilton Island Whitehaven Beach tour',
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
};

/** Booking destinations — Airlie Beach is default primary hub. */
export function staysLinks(primary: BookingDestination = 'airlieBeach'): MonetisationLink[] {
  const order: BookingDestination[] = ['airlieBeach', 'cannonvale', 'hamiltonIsland', 'shuteHarbour'];
  const labels: Record<BookingDestination, string> = {
    airlieBeach: 'Stays in Airlie Beach',
    cannonvale: 'Stays in Cannonvale',
    hamiltonIsland: 'Hamilton Island resorts',
    shuteHarbour: 'Near Shute Harbour',
  };
  return order.map((key) => ({
    label: labels[key],
    href: bookingSearchUrl(key),
    external: true as const,
    sponsored: affiliates.hasBookingAffiliate,
    primary: primary === key,
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
  if (title.includes('Whitehaven Beach & Hill')) return 'Whitehaven + Hill Inlet day';
  if (title.toLowerCase().includes('ocean rafting')) return 'Ocean rafting Whitehaven';
  if (title.toLowerCase().includes('catamaran')) return 'Sailing / catamaran day';
  if (title.toLowerCase().includes('multi-day')) return 'Multi-day sailing';
  if (title.toLowerCase().includes('scenic')) return 'Scenic flight';
  if (title.toLowerCase().includes('snorkel')) return 'Snorkel & dive day';
  if (title.toLowerCase().includes('camping')) return 'Camping transfer search';
  if (title.includes('Hamilton')) return 'Hamilton Island options';
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
  return sponsored ? 'sponsored noopener noreferrer' : 'noopener noreferrer';
}

export const affiliateDisclosureShort =
  'Some stay, tour and gear links may earn a commission at no extra cost to you. Camping permits, QPWS fees and official park bookings are never affiliated.';
