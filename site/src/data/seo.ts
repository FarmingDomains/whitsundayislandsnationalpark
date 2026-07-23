export const seo = {
  siteName: 'Whitsunday Islands National Park Guide',
  siteUrl: 'https://www.whitsundayislandsnationalpark.com.au',
  defaultDescription:
    'Unofficial practical guide to Whitsunday Islands National Park QLD — Whitehaven Beach & Hill Inlet, boat-access decisions, camping permits, stinger season, tides and Airlie Beach logistics. Always verify with Queensland Parks (QPWS).',
  defaultOgImage: '/og-default.jpg',
  locale: 'en_AU',
  ogImageAlt:
    'Whitehaven Beach pure white silica sand meeting turquoise water under a clear tropical sky, Whitsunday Islands',
};

/** Official QPWS / GBRMPA links — prefer these over any on-site claim */
export const official = {
  parksHome: 'https://parks.qld.gov.au/',
  park: 'https://parks.qld.gov.au/parks/whitsunday-islands',
  about: 'https://parks.qld.gov.au/parks/whitsunday-islands/about',
  camping: 'https://parks.qld.gov.au/parks/whitsunday-islands/camping',
  bookings: 'https://parks.qld.gov.au/camping/bookings',
  bookOnline: 'https://book.parks.qld.gov.au/',
  alerts: 'https://parks.qld.gov.au/park-alerts',
  parkAlertsHub: 'https://parks.qld.gov.au/park-alerts',
  safety: 'https://parks.qld.gov.au/parks/whitsunday-islands',
  visitorInfo: 'https://parks.qld.gov.au/parks/whitsunday-islands',
  /** Hill Inlet lookout track (icon pair with Whitehaven) */
  hillInlet: 'https://parks.qld.gov.au/parks/whitsunday-islands/journeys/hill-inlet-lookout-track',
  journeys: 'https://parks.qld.gov.au/parks/whitsunday-islands',
  /** Kept as alias for OfficialBar / shared component patterns */
  passes: 'https://parks.qld.gov.au/camping/bookings',
  walks: 'https://parks.qld.gov.au/parks/whitsunday-islands',
  culturalCentre: 'https://parks.qld.gov.au/parks/whitsunday-islands',
  whenToCome: 'https://parks.qld.gov.au/parks/whitsunday-islands',
  gettingHere: 'https://parks.qld.gov.au/parks/whitsunday-islands',
  drones: 'https://parks.qld.gov.au/before-you-visit/permits-and-fees',
  visitorGuide: 'https://parks.qld.gov.au/parks/whitsunday-islands',
  gbrmpa: 'https://www.gbrmpa.gov.au/',
  gbrmpaWhitsundays: 'https://www.gbrmpa.gov.au/access/whitsundays',
  tourismWhitsundays: 'https://www.tourismwhitsundays.com.au/',
  bomTides: 'https://www.bom.gov.au/australia/tides/',
  stingers: 'https://www.health.qld.gov.au/clinical-practice/guidelines-procedures/diseases-infection/diseases/jellyfish',
};

/** Sister park sites in the Farming Domains portfolio (with short notes for About) */
export const sisterParks = [
  {
    href: 'https://www.ulurukatatjutanationalpark.com.au/',
    label: 'Uluru-Kata Tjuta NP',
    note: 'Red Centre · cultural respect',
  },
  {
    href: 'https://www.cradlemountainnationalpark.com.au/',
    label: 'Cradle Mountain NP',
    note: 'Alpine World Heritage · TAS',
  },
  {
    href: 'https://www.portcampbellnationalpark.com.au/',
    label: 'Port Campbell NP',
    note: 'Shipwreck Coast · Twelve Apostles',
  },
  {
    href: 'https://greatotwaynationalpark.com.au/',
    label: 'Great Otway NP',
    note: 'Rainforest & coast (VIC)',
  },
  {
    href: 'https://www.bluemountainsnationalpark.com.au/',
    label: 'Blue Mountains NP',
    note: 'Escarpment walks · NSW',
  },
  {
    href: 'https://springbrooknationalpark.com.au/',
    label: 'Springbrook NP',
    note: 'Waterfalls · Gold Coast hinterland',
  },
  {
    href: 'https://www.royalnationalpark.com.au/',
    label: 'Royal National Park',
    note: 'Coastal walks · Sydney',
  },
  {
    href: 'https://www.sydneyharbournationalpark.com.au/',
    label: 'Sydney Harbour NP',
    note: 'Harbour headlands',
  },
  {
    href: 'https://www.farmingdomains.com/',
    label: 'Farming Domains',
    note: 'Portfolio hub',
  },
];

export type Crumb = { name: string; href?: string };

export function absoluteUrl(pathOrUrl: string, site = seo.siteUrl): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) return pathOrUrl;
  const base = site.endsWith('/') ? site.slice(0, -1) : site;
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seo.siteName,
    url: seo.siteUrl,
    description: seo.defaultDescription,
    inLanguage: 'en-AU',
    publisher: {
      '@type': 'Organization',
      name: 'Farming Domains',
      url: 'https://farmingdomains.com',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${seo.siteUrl}/search/?q={search_term_string}`,
      'query-input': 'required name:search_term_string',
    },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Farming Domains',
    url: 'https://farmingdomains.com',
    logo: absoluteUrl('/favicon.svg'),
    description:
      'Independent publisher of unofficial Australian place and national park visitor guides. Not affiliated with Queensland Parks and Wildlife Service (QPWS), the Department of the Environment, Tourism, Science and Innovation, the Great Barrier Reef Marine Park Authority (GBRMPA), Ngaro Traditional Owners, or any government agency.',
    sameAs: ['https://ianpiggott.com', 'https://farmingdomains.com'],
  };
}

export function breadcrumbJsonLd(items: Crumb[], site = seo.siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: absoluteUrl(item.href, site) } : {}),
    })),
  };
}

export function touristAttractionJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    image: opts.image ? absoluteUrl(opts.image) : absoluteUrl(seo.defaultOgImage),
    touristType: 'Nature and marine tourism',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
