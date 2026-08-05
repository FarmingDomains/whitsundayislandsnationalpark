/**
 * National Parks Guide network — brand + linking strategy
 * -------------------------------------------------------
 * VISITOR brand (primary):  nationalparksguide.com.au  = vertical hub
 * PUBLISHER (quiet trust):  Farming Domains + ABN + Ian Piggott
 * THIS SITE:                deep Whitsunday Islands guide only
 */

/** Vertical hub — primary network CTA on every park site */
export const portfolioHub = {
  href: 'https://www.nationalparksguide.com.au/',
  label: 'National Parks Guide',
  ctaLabel: 'Browse all parks → nationalparksguide.com.au',
  blurb:
    'The hub for this network of independent Australian national park visitor guides — directories, “best for” collections and multi-park planning.',
} as const;

export type SisterPark = {
  href: string;
  label: string;
  /** Short context for About / accessibility */
  note: string;
  status?: 'live' | 'planned';
};

/**
 * Curated peers for THIS park only (Whitsunday Islands — QLD coastal / reef + strong sisters).
 * Exclude self. Full directory lives on nationalparksguide.com.au.
 */
export const relatedSisterParks: SisterPark[] = [
  {
    href: 'https://www.greatsandynationalpark.com.au/',
    label: 'Great Sandy NP',
    note: 'Fraser Coast dunes & beaches · QLD',
    status: 'live',
  },
  {
    href: 'https://www.noosanationalpark.com.au/',
    label: 'Noosa NP',
    note: 'Coastal headlands · Sunshine Coast QLD',
    status: 'live',
  },
  {
    href: 'https://www.springbrooknationalpark.com.au/',
    label: 'Springbrook NP',
    note: 'Hinterland waterfalls · Gold Coast hinterland',
    status: 'live',
  },
  {
    href: 'https://www.ulurukatatjutanationalpark.com.au/',
    label: 'Uluru-Kata Tjuta NP',
    note: 'Red Centre · cultural respect · NT',
    status: 'live',
  },
  {
    href: 'https://www.karijininationalpark.com.au/',
    label: 'Karijini NP',
    note: 'Gorges · Pilbara WA',
    status: 'live',
  },
  {
    href: 'https://www.wilsonspromontorynationalpark.com.au/',
    label: 'Wilsons Promontory NP',
    note: 'Southernmost mainland · VIC',
    status: 'live',
  },
  {
    href: 'https://www.bluemountainsnationalpark.com.au/',
    label: 'Blue Mountains NP',
    note: 'Escarpment walks · NSW',
    status: 'live',
  },
  {
    href: 'https://www.cradlemountainnationalpark.com.au/',
    label: 'Cradle Mountain NP',
    note: 'Alpine World Heritage · TAS',
    status: 'live',
  },
  {
    href: 'https://www.royalnationalpark.com.au/',
    label: 'Royal National Park',
    note: 'Coastal classic · Sydney NSW',
    status: 'live',
  },
  {
    href: 'https://www.greatotwaynationalpark.com.au/',
    label: 'Great Otway NP',
    note: 'Great Ocean Road forests & coast · VIC',
    status: 'live',
  },
];

/** @deprecated Use relatedSisterParks — kept as alias for older imports */
export const sisterParks = relatedSisterParks;

export function parkSiteUrl(domain: string): string {
  const d = domain.replace(/^www\./, '').replace(/\/$/, '');
  return `https://www.${d}/`;
}
