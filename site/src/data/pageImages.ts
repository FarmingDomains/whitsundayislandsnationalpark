/**
 * Content-matched imagery: every key maps to a visual that should match
 * the page/section title it sits under.
 */
import type { ImageMetadata } from 'astro';

import heroWhitehaven from '../images/hero-whitehaven.jpg';
import hillInlet from '../images/hill-inlet-swirl.jpg';
import campingBeach from '../images/camping-beach.jpg';
import boatArrival from '../images/boat-arrival.jpg';
import fringingReef from '../images/fringing-reef.jpg';
import islandLookout from '../images/island-lookout.jpg';

export type SiteImage = {
  src: ImageMetadata;
  alt: string;
  /** Short caption that echoes the content heading */
  caption: string;
};

export const siteImages = {
  homeHero: {
    src: heroWhitehaven,
    alt: 'Whitehaven Beach pure white silica sand meeting turquoise water under a clear tropical sky, Whitsunday Islands',
    caption: 'Whitehaven Beach silica & turquoise',
  },
  hillInlet: {
    src: hillInlet,
    alt: 'Hill Inlet tidal swirl of white sand patterns in turquoise water viewed from a tropical lookout, Whitsunday Island',
    caption: 'Hill Inlet tidal swirl',
  },
  campingBeach: {
    src: campingBeach,
    alt: 'Secluded Whitsunday camping beach with tent under casuarina trees near turquoise water at golden hour',
    caption: 'Island camping beach',
  },
  boatArrival: {
    src: boatArrival,
    alt: 'Small transfer boat approaching a white sand beach with hoop pines and turquoise water, Whitsunday Islands',
    caption: 'Boat access & transfers',
  },
  fringingReef: {
    src: fringingReef,
    alt: 'Clear tropical water over fringing reef with coral and fish, ethical snorkelling context Whitsundays',
    caption: 'Fringing reef snorkel',
  },
  islandLookout: {
    src: islandLookout,
    alt: 'Island headland view over the Whitsunday archipelago and Coral Sea with hoop pines against blue water',
    caption: 'Archipelago lookout views',
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

export function imageForTrail(slug: string): TrailImage {
  const key = trailImageKey[slug] ?? 'homeHero';
  return siteImages[key];
}

type TrailImage = SiteImage;
