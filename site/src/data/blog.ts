export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'whitehaven-hill-inlet-day-trip-guide',
    title: 'Whitehaven Beach + Hill Inlet: practical day-trip guide and tide timing',
    description:
      'How to plan a Whitehaven Beach day trip from Airlie Beach with Hill Inlet lookout, tide-aware photography and realistic boat windows.',
    date: '2026-07-23',
    tags: ['Whitehaven', 'Hill Inlet', 'day trip'],
    paragraphs: [
      'Whitehaven Beach is boat-access only. The high-volume path is a commercial day tour from Airlie Beach or Shute Harbour. Many products also include the Hill Inlet lookout track — about 1.3–1.4 km return, moderate, roughly 40 minutes — but you must read inclusions rather than assume.',
      'The famous swirl patterns at Hill Inlet are tide-dependent. Mid-to-high tide often produces the classic turquoise channels through white silica sand; low tide can look completely different (still beautiful). Check BOM tide tables and ask your operator what the day is likely to deliver.',
      'Day-trip honesty: you share the icon with other groups in peak season, and your clock is set by the boat. Closed-toe shoes for the lookout, dry bags for spray, sun protection for silica glare, and stinger awareness if you swim (typically higher risk November–May).',
      'Always verify track status, park alerts and operator conditions on parks.qld.gov.au and with your booking the morning you go. This site is unofficial and does not show live closures.',
    ],
  },
  {
    slug: 'whitehaven-camping-self-sufficiency',
    title: 'Camping on Whitehaven: transfer, permit and self-sufficiency reality',
    description:
      'QPWS camping permits, boat transfers, water planning (no reliable fresh water), no campfires and overnight Whitehaven logistics.',
    date: '2026-07-23',
    tags: ['camping', 'Whitehaven', 'permits'],
    paragraphs: [
      'Overnight camping on Whitsunday Islands National Park beaches requires a booking through the Queensland Parks Booking Service. Fees apply (commonly cited around $7.75 per adult per night or a family rate — always re-check live prices). A tag with your booking number must be displayed. Children under 5 are free under published policy.',
      'There is no vehicle access. You need a camping transfer, private vessel or multi-day charter logistics. Whitehaven is the classic overnight; secluded beaches trade crowds for harder pick-ups and more responsibility.',
      'Self-sufficiency is non-negotiable: pack water in (often planned at five litres or more per person per day — no reliable fresh water on most sites), cook on a stove (no campfires), carry out all waste, and run pest-free / biosecurity checks on boats and gear.',
      'This website never sells camping permits and never takes commission on QPWS fees. Book only through official Queensland Parks channels and re-read the official camping page before you travel.',
    ],
  },
  {
    slug: 'boat-access-decision-tree',
    title: 'Boat access decision tree: tour vs transfer vs private',
    description:
      'How to choose between commercial day tours, camping transfers, private vessels and multi-day sail charters for Whitsunday Islands National Park.',
    date: '2026-07-23',
    tags: ['boat access', 'planning', 'Airlie Beach'],
    paragraphs: [
      'Filter by budget, time, desire for solitude, fitness and group size. Dominant high-volume path: commercial day tours from Airlie Beach / Shute Harbour to Whitehaven ± Hill Inlet. Overnight immersion path: camping permit + water taxi / transfer. Freedom path: private boat, bareboat yacht or multi-day sail charter (skills and marine park rules required).',
      'Day tours win for first-timers and mixed groups. Camping wins for dawn silica sand and stargazing if you can carry water and accept weather windows. Private vessels win for flexibility if you truly understand GBRMPA zoning, public moorings and anchoring rules.',
      'Airlie Beach is the practical mainland hub for beds and departures; Hamilton Island is the resort-island alternative. Build a weather buffer day if Whitehaven is non-negotiable — wind cancels trips.',
      'Never confuse a resort stay with automatic rights to camp in the national park. Permits and park rules still apply.',
    ],
  },
  {
    slug: 'stinger-season-packing-whitsundays',
    title: 'Stinger season and packing reality for the Whitsundays',
    description:
      'Marine stinger season (typically November–May), full-body suits, reef-safe sun protection and tropical boat packing that actually gets used.',
    date: '2026-07-23',
    tags: ['stingers', 'safety', 'packing'],
    paragraphs: [
      'In tropical Queensland, marine stinger risk is typically highest from November to May. Commercial operators often require or strongly recommend full-body lycra / stinger suits for snorkelling in season. If you are unsure, cover up or stay out of the water — beach time is still excellent.',
      'Pack for boat spray and humidity: dry bags, waterproof phone pouch, UPF shirt, wide-brim hat with cord, polarised sunglasses, reef-safe high-SPF sunscreen, closed-toe shoes for tracks, and hydration beyond a single small bottle.',
      'Campers add: collapsible water storage, stove and fuel (no fires), headlamp, waste bags, first aid and a comms plan. Silica sand destroys zippers and cameras if you get careless.',
      'Wet season also raises cyclone and heavy rain risk. Flexible bookings beat rigid selfies. Follow Queensland Health and operator guidance for jellyfish risk and re-check conditions on the day.',
    ],
  },
  {
    slug: 'ngaro-cultural-site-respectful-visit',
    title: 'Ngaro Cultural Site: how to visit respectfully',
    description:
      'Visiting Ngaro cultural interpretive sites in the Whitsundays with humility — tracks, photography ethics and Sea Country connection.',
    date: '2026-07-23',
    tags: ['Ngaro', 'culture', 'respect'],
    paragraphs: [
      'The Ngaro people are Traditional Owners of the Whitsunday islands and surrounding Sea Country — seafaring people with ongoing connection to land and sea. Public cultural sites and rock art areas exist for appropriate visitor orientation, not unrestricted exploration.',
      'Stay on marked tracks. Do not touch rock art. Do not invent or retell restricted sacred stories. Prefer authorised guides and official interpretive material. Ask before photographing people; never photograph ceremonies or restricted signage.',
      'Reef etiquette is part of cultural respect for Sea Country: no standing on coral, no taking shells or coral, follow GBRMPA zoning, and choose operators that take marine park rules seriously.',
      'This unofficial guide is not affiliated with Ngaro Traditional Owners, QPWS or GBRMPA. Always defer to official park communications and Traditional Owner guidance.',
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
