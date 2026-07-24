/**
 * Content-matched imagery for Whitsunday Islands pages.
 * Prefer real Wikimedia Commons landscape photos for named places.
 * Fringing reef remains AI-generated (no strong free underwater match yet).
 * See docs/image-sources.md for full licence log.
 */
import type { ImageMetadata } from 'astro';

import heroWhitehaven from '../images/hero-whitehaven.jpg';
import hillInlet from '../images/hill-inlet-swirl.jpg';
import campingBeach from '../images/camping-beach.jpg';
import boatArrival from '../images/boat-arrival.jpg';
import fringingReef from '../images/fringing-reef.jpg';
import islandLookout from '../images/island-lookout.jpg';

const CC = {
  by20: 'https://creativecommons.org/licenses/by/2.0/',
  bySa20: 'https://creativecommons.org/licenses/by-sa/2.0/',
  bySa40: 'https://creativecommons.org/licenses/by-sa/4.0/',
} as const;

export type SiteImage = {
  src: ImageMetadata;
  alt: string;
  /** Short caption that echoes the content heading */
  caption: string;
  /** Creator name for CC attribution */
  author?: string;
  /** e.g. CC BY 2.0, CC BY-SA 4.0, AI-generated */
  licence?: string;
  licenceUrl?: string;
  /** Wikimedia Commons (or other) file page */
  sourceUrl?: string;
  isAi?: boolean;
  /** Optional full figcaption HTML override (trusted) */
  captionHtml?: string;
};

/** Plain-text credit line for alt/meta/print */
export function attributionPlain(img: Pick<SiteImage, 'author' | 'licence' | 'isAi'>): string {
  if (img.isAi) return 'AI-generated illustration';
  const parts = [img.author, img.licence, img.sourceUrl ? 'Wikimedia Commons' : undefined].filter(Boolean);
  return parts.join(' · ') || 'Image credit';
}

/**
 * Linked HTML credit for figcaptions (CC best practice: author + licence link + source link).
 * Use only with trusted image metadata from this file.
 */
export function attributionHtml(
  img: SiteImage,
  opts: { prefix?: string; linkClass?: string } = {},
): string {
  const link =
    opts.linkClass ??
    'font-semibold text-park-700 underline-offset-2 hover:underline dark:text-park-300';
  if (img.isAi) {
    const base = opts.prefix ?? img.caption;
    return `${escapeHtml(base)} · AI-generated illustration`;
  }
  const bits: string[] = [];
  if (opts.prefix) bits.push(escapeHtml(opts.prefix));
  if (img.author) bits.push(escapeHtml(img.author));
  if (img.licence && img.licenceUrl) {
    bits.push(
      `<a href="${escapeAttr(img.licenceUrl)}" class="${link}" target="_blank" rel="noopener noreferrer">${escapeHtml(img.licence)}</a>`,
    );
  } else if (img.licence) {
    bits.push(escapeHtml(img.licence));
  }
  if (img.sourceUrl) {
    bits.push(
      `<a href="${escapeAttr(img.sourceUrl)}" class="${link}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>`,
    );
  }
  return bits.join(' · ');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(s: string): string {
  return escapeHtml(s).replace(/'/g, '&#39;');
}

/** Compact line for card footers */
export function attributionCompact(img: SiteImage): string {
  if (img.isAi) return 'Illustration (AI)';
  if (img.author && img.licence) return `${img.author} · ${img.licence}`;
  return img.licence || 'Photo credit';
}

export const siteImages = {
  homeHero: {
    src: heroWhitehaven,
    alt: 'Whitehaven Beach northern spit of pure white silica sand and turquoise water from Hill Inlet lookout, Whitsunday Islands National Park',
    caption: 'Whitehaven Beach from Hill Inlet lookout',
    author: 'Hush Neo',
    licence: 'CC BY-SA 4.0',
    licenceUrl: CC.bySa40,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Whitehaven_Beach_-_Northern_End.jpg',
  },
  hillInlet: {
    src: hillInlet,
    alt: 'Hill Inlet tidal swirl of white sand patterns in turquoise water viewed from a tropical lookout, Whitsunday Island',
    caption: 'Hill Inlet tidal swirl',
    author: 'Damien Dempsey',
    licence: 'CC BY 2.0',
    licenceUrl: CC.by20,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Whitsunday_Island_-_Whitehaven_Beach_02.jpg',
  },
  campingBeach: {
    src: campingBeach,
    alt: 'White silica sand and shallow reflective water at Whitehaven Beach with visitors under a cloudy tropical sky, Whitsunday Islands',
    caption: 'Whitehaven Beach (camping & day-visit shore)',
    author: "The 3B's",
    licence: 'CC BY 2.0',
    licenceUrl: CC.by20,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beach_Bliss_-_Flickr_-_3B%27s.jpg',
  },
  boatArrival: {
    src: boatArrival,
    alt: 'Yachts and motorboats offshore of Whitehaven Beach with families wading in turquoise water, Whitsunday Islands',
    caption: 'Boat access & beach landings',
    author: 'Slug69',
    licence: 'CC BY-SA 2.0',
    licenceUrl: CC.bySa20,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Whitehaven_Beach,_Whitsunday_Island,_Queensland.jpg',
  },
  fringingReef: {
    src: fringingReef,
    alt: 'Clear tropical water over fringing reef with coral and fish, ethical snorkelling context Whitsundays',
    caption: 'Fringing reef snorkel',
    isAi: true,
    licence: 'AI-generated',
  },
  islandLookout: {
    src: islandLookout,
    alt: 'Lookout view over Whitehaven Beach white sand spit, turquoise shallows and the Whitsunday archipelago beyond',
    caption: 'Archipelago lookout views',
    author: 'Damien Dempsey',
    licence: 'CC BY 2.0',
    licenceUrl: CC.by20,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Whitsunday_Island_-_Whitehaven_Beach_01.jpg',
  },
} as const satisfies Record<string, SiteImage>;

/** Area pages → matching landmark photo */
export const areaImageKey: Record<string, keyof typeof siteImages> = {
  'whitehaven-hill-inlet': 'hillInlet',
  'boat-access-airlie': 'boatArrival',
  'camping-beaches': 'campingBeach',
  'island-walks-lookouts': 'islandLookout',
  'snorkel-reef': 'fringingReef',
  'ngaro-culture': 'islandLookout',
  'advanced-multi-day': 'islandLookout',
  'marine-safety-seasons': 'homeHero',
};

/** Trail pages → visual matching the walk type / place */
export const trailImageKey: Record<string, keyof typeof siteImages> = {
  'hill-inlet-lookout': 'hillInlet',
  'whitehaven-beach': 'homeHero',
  'solway-circuit': 'islandLookout',
  'dugong-sawmill': 'campingBeach',
  'chance-bay-track': 'campingBeach',
  'ngaro-cultural-site': 'islandLookout',
  'ngaro-track-overview': 'islandLookout',
  'fringing-reef-snorkel': 'fringingReef',
};

export function imageForArea(slug: string): SiteImage {
  const key = areaImageKey[slug] ?? 'homeHero';
  return siteImages[key];
}

export function imageForTrail(slug: string): SiteImage {
  const key = trailImageKey[slug] ?? 'homeHero';
  return siteImages[key];
}
