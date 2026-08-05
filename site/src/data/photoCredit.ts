/** Site imagery credits — Wikimedia Commons CC where real; reef remains AI. */

export const photoCreditDefault =
  'Landscape and reef photos on this site are real Creative Commons photographs from Wikimedia Commons (photographers credited on each image). The snorkel slot uses a real Great Barrier Reef underwater photo (Flynn Reef near Cairns) for coral education — it is not a claim about Whitehaven Beach underwater scenery. Heart Reef aerial is Whitsunday-true. None are official Queensland Parks photographs. Always verify real conditions on site and with parks.qld.gov.au.';

/** Used by LightboxGallery for Ian-owned wildlife-style credits if present */
export const PHOTO_CREDIT = {
  name: 'Ian Piggott',
  url: 'https://ianpiggott.com',
} as const;

export const photoCredits: Record<string, string> = {
  default: photoCreditDefault,
};

/** Disclaimer #images table rows — keep in sync with pageImages.ts siteImages */
export type PhotoCreditRow = {
  /** How the photo is used on this site */
  subject: string;
  credit: string;
  licence: string;
  sourceUrl?: string;
};

export const photoCreditList: PhotoCreditRow[] = [
  {
    subject: 'Home hero / Whitehaven from Hill Inlet lookout (Hush Neo)',
    credit: 'Hush Neo',
    licence: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Whitehaven_Beach_-_Northern_End.jpg',
  },
  {
    subject: 'Hill Inlet tidal swirl',
    credit: 'Damien Dempsey',
    licence: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Whitsunday_Island_-_Whitehaven_Beach_02.jpg',
  },
  {
    subject: 'Whitehaven beach-level / camping context',
    credit: "The 3B's",
    licence: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beach_Bliss_-_Flickr_-_3B%27s.jpg',
  },
  {
    subject: 'Boat access & beach landings',
    credit: 'Slug69',
    licence: 'CC BY-SA 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Whitehaven_Beach,_Whitsunday_Island,_Queensland.jpg',
  },
  {
    subject: 'Archipelago lookout views',
    credit: 'Damien Dempsey',
    licence: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Whitsunday_Island_-_Whitehaven_Beach_01.jpg',
  },
  {
    subject: 'Snorkel / reef education (Flynn Reef GBR underwater — not Whitehaven-specific)',
    credit: 'Toby Hudson',
    licence: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coral_Outcrop_Flynn_Reef.jpg',
  },
  {
    subject: 'Heart Reef aerial (Whitsundays) — scenic flight / multi-day context',
    credit: 'Alphasauce',
    licence: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Heart_Reef_and_Lagoon_Great_Barrier_Reef.jpg',
  },
];
