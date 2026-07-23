import { areas } from './areas';
import { trails } from './trails';
import { itineraries } from './itineraries';
import { blogPosts } from './blog';

export type SearchEntry = {
  title: string;
  url: string;
  summary: string;
  keywords: string;
};

export const searchIndex: SearchEntry[] = [
  {
    title: 'Home',
    url: '/',
    summary:
      'Whitsunday Islands National Park unofficial guide — Whitehaven Beach, Hill Inlet, boat access, camping, stingers, Airlie Beach.',
    keywords: 'home whitehaven hill inlet whitsunday national park camping',
  },
  {
    title: 'Park overview',
    url: '/park/',
    summary: 'Great Barrier Reef World Heritage islands, Ngaro Country, boat access from Airlie Beach.',
    keywords: 'park overview ngaro world heritage airlie beach gbr',
  },
  {
    title: 'Plan your visit',
    url: '/visit/',
    summary: 'Getting there, camping permits, stinger season, tides, self-sufficiency, packing.',
    keywords: 'visit plan camping permit stinger season tides packing airlie',
  },
  {
    title: 'Things to do',
    url: '/things-to-do/',
    summary: 'Whitehaven, Hill Inlet, short walks, snorkel, camping beaches, Ngaro culture.',
    keywords: 'things to do whitehaven hill inlet snorkel walks camping',
  },
  {
    title: 'Walks hub',
    url: '/trails/',
    summary: 'Hill Inlet lookout, Whitehaven, Solway, camping tracks, Ngaro Track overview.',
    keywords: 'walks trails hill inlet lookout ngaro track',
  },
  {
    title: 'Itineraries',
    url: '/itineraries/',
    summary: 'Day trip, camping, photography tide strategy, family, multi-day sailing plans.',
    keywords: 'itineraries day trip camping sailing photography',
  },
  {
    title: 'Where to stay',
    url: '/stay/',
    summary: 'Airlie Beach hub, Cannonvale, Hamilton Island — peak-season booking urgency.',
    keywords: 'stay accommodation airlie beach hamilton island booking',
  },
  {
    title: 'Tours & activities',
    url: '/tours/',
    summary: 'Whitehaven day tours, ocean rafting, sailing, scenic flights, camping transfers.',
    keywords: 'tours whitehaven ocean rafting sailing scenic flight',
  },
  {
    title: 'Gear essentials',
    url: '/gear/',
    summary: 'Stinger suits, dry bags, reef-safe sunscreen, camping water storage.',
    keywords: 'gear stinger suit dry bag sunscreen camping stove',
  },
  {
    title: 'Maps & resources',
    url: '/maps/',
    summary: 'Official QPWS links, camping bookings, alerts, planner download.',
    keywords: 'maps downloads planner camping bookings park alerts',
  },
  {
    title: 'Articles',
    url: '/articles/',
    summary: 'Practical guides for Whitehaven, camping, boat access, stingers, Ngaro respect.',
    keywords: 'articles blog whitehaven camping stinger ngaro',
  },
  {
    title: 'About',
    url: '/about/',
    summary: 'Independent Farming Domains unofficial guide — not affiliated with QPWS or GBRMPA.',
    keywords: 'about farming domains unofficial disclaimer',
  },
  ...areas.map((a) => ({
    title: a.name,
    url: `/park/${a.slug}/`,
    summary: a.summary,
    keywords: `${a.name} ${a.shortName} whitsunday ${a.bestFor}`.toLowerCase(),
  })),
  ...trails.map((t) => ({
    title: t.name,
    url: `/trails/${t.slug}/`,
    summary: t.summary,
    keywords: `${t.name} ${t.shortName} ${t.bestFor}`.toLowerCase(),
  })),
  ...itineraries.map((i) => ({
    title: i.name,
    url: `/itineraries/${i.slug}/`,
    summary: i.summary,
    keywords: `${i.name} ${i.bestFor} itinerary`.toLowerCase(),
  })),
  ...blogPosts.map((p) => ({
    title: p.title,
    url: `/articles/${p.slug}/`,
    summary: p.description,
    keywords: `${p.title} ${p.tags.join(' ')}`.toLowerCase(),
  })),
];
