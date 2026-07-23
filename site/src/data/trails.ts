export type TrailBodyBlock = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type Trail = {
  slug: string;
  name: string;
  shortName: string;
  /** Public planning label only — verify grade on QPWS */
  grade: string;
  gradeLabel: string;
  distance: string;
  time: string;
  effort: 'easy' | 'moderate' | 'hard';
  areaSlug: string;
  bestFor: string;
  summary: string;
  startName: string;
  startDetail: string;
  gettingThere: string[];
  howToDoIt: string[];
  tips: string[];
  hazards: string[];
  pairWith?: string;
  body?: TrailBodyBlock[];
  mapQuery: string;
  officialUrl: string;
  verifyNote: string;
};

const VERIFY =
  'Distance, grade, time, open/closed status, tides and boat access change — verify on parks.qld.gov.au before you go.';

const PARK = 'https://parks.qld.gov.au/parks/whitsunday-islands';
const HILL = 'https://parks.qld.gov.au/parks/whitsunday-islands/journeys/hill-inlet-lookout-track';
const CAMPING = 'https://parks.qld.gov.au/parks/whitsunday-islands/camping';

/**
 * Trail metrics are typical planning figures from commonly published public sources.
 * Always confirm on the official Queensland Parks pages for your date of travel.
 */
export const trails: Trail[] = [
  {
    slug: 'hill-inlet-lookout',
    name: 'Hill Inlet Lookout track',
    shortName: 'Hill Inlet Lookout',
    grade: '3',
    gradeLabel: 'Moderate — formed track with steps / elevation',
    distance: 'About 1.3–1.4 km return',
    time: 'Allow ~40 minutes walking (plus boat timing)',
    effort: 'moderate',
    areaSlug: 'whitehaven-hill-inlet',
    bestFor: 'The essential icon pair with Whitehaven — tidal swirl photography',
    summary:
      'The non-negotiable lookout walk above Hill Inlet: short but stepped, delivering the famous white-sand patterns in turquoise water. Best swirl views are highly tide-dependent. Usually reached via commercial day tour or camping transfer landing near Tongue Point / Hill Inlet side — not a drive-up mainland track.',
    startName: 'Tongue Point / Hill Inlet track start (boat access)',
    startDetail:
      'Most visitors arrive by day-tour tender or water taxi. Follow crew instructions and signed park tracks only. Confirm current journey status on the official QPWS Hill Inlet lookout track page before you book around a photo deadline.',
    gettingThere: [
      'There is no public road to Hill Inlet. Access is by commercial day tour, camping transfer, private vessel or multi-day sail charter.',
      'Dominant path: book a Whitehaven / Hill Inlet day tour from Airlie Beach or Shute Harbour; operators schedule landings around itinerary and weather.',
      'Overnight path: camping permit + transfer (e.g. water taxi) — allow buffer for sea state and pick-up windows.',
      'Private vessels: use public moorings / anchoring rules and GBRMPA zoning — verify official guides.',
      'Always re-check park alerts and journey open/closed status the morning you go.',
    ],
    howToDoIt: [
      'Wear closed-toe shoes with grip — sand, rock and steps. Flip-flops are a common failure mode on the ascent.',
      'Carry water and sun protection even for 40 minutes; tropical heat and humidity stack with boat glare.',
      'Walk the signed track only. Stay behind barriers at lookouts; do not cut vegetation or invent photo angles off-track.',
      'Time the visit for mid-to-high tide windows when you care about the classic swirl patterns — low tide can look dramatically different (still beautiful, less “poster”).',
      'If you also want a long Whitehaven beach walk the same day, confirm with your operator whether both stops fit the schedule.',
    ],
    tips: [
      'Hill Inlet lookout + Whitehaven Beach is the icon pair — plan the day around both if possible.',
      'Ask operators whether Hill Inlet is included that day; weather and sea state can drop stops.',
      'Photography: mid-to-high tide is usually the drama; check BOM tide tables for Airlie / Whitsunday stations.',
      'Families: the distance is short but moderate underfoot — slower groups need honest time buffers.',
      'Do not leave bags unattended on tenders or beaches; keep valuables dry-bagged.',
    ],
    hazards: [
      'Boat access cancellation in poor weather or high winds',
      'Heat, humidity and sun exposure',
      'Uneven steps and slippery surfaces after rain',
      'Tides and currents if wandering into water near inlet',
      'Marine stingers in warmer months if swimming nearby',
    ],
    pairWith: 'whitehaven-beach',
    mapQuery: 'Hill Inlet Lookout Whitsunday Island',
    officialUrl: HILL,
    verifyNote: VERIFY,
    body: [
      {
        id: 'why-essential',
        title: 'Why this is the essential lookout',
        paragraphs: [
          'Hill Inlet is where pure silica sand meets tidal water in shifting geometric patterns — the image that sells a thousand posters. The lookout track is short enough for most day-trippers yet steep enough that “easy beach stroll” marketing can under-sell the effort.',
          'Treat it as a logistics product, not a casual headland walk: your clock is set by the boat, not by your hiking app. Build contingency into any “must photograph the swirl” plan.',
        ],
      },
      {
        id: 'tides',
        title: 'Tide timing honesty',
        paragraphs: [
          'The swirl is tide-dependent. Mid-to-high stages often produce the classic turquoise channels; low tide can expose broad sand flats with a different mood. Neither is “wrong” — but if your mental image is the poster swirl, check tides and ask your operator what the day is likely to deliver.',
          'Official tide sources (BOM) beat social media screenshots. Combine with marine weather: a perfect tide is useless if transfers are cancelled.',
        ],
      },
    ],
  },
  {
    slug: 'whitehaven-beach',
    name: 'Whitehaven Beach (icon beach experience)',
    shortName: 'Whitehaven Beach',
    grade: '1–2',
    gradeLabel: 'Easy beach walking (distance optional)',
    distance: 'Flexible — from short landings to multi-kilometre beach walks',
    time: 'Day-tour window or multi-hour camping immersion',
    effort: 'easy',
    areaSlug: 'whitehaven-hill-inlet',
    bestFor: 'Global icon silica sand beach — day trip or overnight camping',
    summary:
      'World-famous pure silica sand and turquoise water on Whitsunday Island. Access is boat-only. Day tours deliver the high-volume experience; camping permits unlock quiet mornings and stargazing. Respect reef etiquette, stinger season and self-sufficiency rules if overnighting.',
    startName: 'Boat landing zones as directed by operators / QPWS',
    startDetail:
      'Commercial day tours and transfers land at designated areas. Follow crew and park signs. Do not expect shade structures or shops — bring sun protection, water and a dry bag.',
    gettingThere: [
      'Day tours from Airlie Beach / Shute Harbour (dominant volume path).',
      'Camping transfers / water taxis with a valid QPWS camping permit for your booked site.',
      'Private vessel, bareboat or multi-day sail charter under marine park rules.',
      'No vehicle access. No bridge. Plan reverse logistics (return boat) before you commit to long beach walks.',
    ],
    howToDoIt: [
      'Decide day-trip vs overnight first — they are different products. Day-trip honesty: you share the icon with many people in a fixed window. Overnight: self-sufficiency and quieter shoulder hours.',
      'Wear sun protection and closed shoes for any track connections; barefoot on soft sand is fine for many, but coral rubble zones need footwear.',
      'Swim only when conditions and stinger risk allow; full-body suits recommended in stinger season (typically November–May).',
      'Carry out all rubbish. No campfires. Follow pest-free / biosecurity checks for boats and gear.',
      'Pair with Hill Inlet lookout when your access method includes it — that is the classic photo day.',
    ],
    tips: [
      'Book peak dry-season day tours early; school holidays and winter are busy.',
      'Silica sand is extremely fine — seal cameras and zips; rinse gear later.',
      'Camping: book permits via Queensland Parks Booking Service; display your tag; bring minimum water (commonly planned at 5 L+ per person per day — no reliable fresh water on most sites).',
      'Check park alerts for feral animal control, track works or seasonal restrictions.',
    ],
    hazards: [
      'Sunburn and dehydration',
      'Marine stingers (seasonal)',
      'Boat schedule pressure / missed pick-ups',
      'Tides and currents',
      'Isolation if camping without spare water or comms plan',
    ],
    pairWith: 'hill-inlet-lookout',
    mapQuery: 'Whitehaven Beach Whitsunday Island',
    officialUrl: CAMPING,
    verifyNote: VERIFY,
  },
  {
    slug: 'solway-circuit',
    name: 'Solway Circuit',
    shortName: 'Solway Circuit',
    grade: '2–3',
    gradeLabel: 'Easy–moderate short island circuit (verify on-site)',
    distance: 'Short circuit (confirm live distance on QPWS / maps)',
    time: 'Allow 30–60+ minutes depending on pace and stops',
    effort: 'easy',
    areaSlug: 'island-walks-lookouts',
    bestFor: 'Short island walk context beyond the pure beach selfie',
    summary:
      'A short circuit-style walk option on Whitsunday Island giving forest-to-coast context. Always confirm current track status — island tracks can close for maintenance, weather or management programs.',
    startName: 'Signed trailhead near Solway / Whitehaven area (boat access)',
    startDetail:
      'Access depends on your landing point and operator itinerary. Not every day tour includes every short walk. Self-arranged campers should study official maps before leaving the beach.',
    gettingThere: [
      'Boat access only — usually combined with Whitehaven / Tongue Point logistics.',
      'Confirm with your tour or transfer whether the circuit is reachable from your landing.',
      'Check park alerts for closures.',
    ],
    howToDoIt: [
      'Stay on the marked track; tropical island vegetation recovers slowly from shortcuts.',
      'Carry water and insect protection; humidity can feel harder than the distance suggests.',
      'Combine with beach time rather than stacking every named track in one rushed window.',
    ],
    tips: [
      'Treat short walks as “depth” on a Whitehaven day, not as a mainland bushwalk checklist.',
      'Footwear with grip beats thongs on roots and rock.',
    ],
    hazards: ['Heat/humidity', 'Uneven surface', 'Getting cut off from boat pick-up times'],
    mapQuery: 'Solway Circuit Whitsunday Island',
    officialUrl: PARK,
    verifyNote: VERIFY,
  },
  {
    slug: 'dugong-sawmill',
    name: 'Dugong–Sawmill Track',
    shortName: 'Dugong–Sawmill',
    grade: '3',
    gradeLabel: 'Moderate linking track (verify)',
    distance: 'Linking track — confirm current published distance',
    time: 'Allow a half-day buffer if combining beaches',
    effort: 'moderate',
    areaSlug: 'camping-beaches',
    bestFor: 'Campers connecting Dugong and Sawmill beach areas',
    summary:
      'A linking track used by walkers and campers between Dugong and Sawmill beach contexts. Tide, fitness and full self-sufficiency matter more than on a day-tour landing.',
    startName: 'Dugong or Sawmill camping / beach access (permit + boat)',
    startDetail:
      'Requires boat access and usually a camping or multi-day plan. Not a casual day-tour add-on unless explicitly offered. Verify track open status before committing to a link walk with limited water.',
    gettingThere: [
      'Camping permit + transfer or private vessel to the relevant beach.',
      'Study Parks of the Whitsundays / journey maps before departure.',
      'Tell someone your plan; mobile coverage is not guaranteed.',
    ],
    howToDoIt: [
      'Pack more water than a mainland “grade 3” walk — heat + boat timing + no taps.',
      'Walk early; midday tropical sun on exposed sections is punishing.',
      'Know your reverse boat window; do not start a link walk that risks missing pick-up.',
    ],
    tips: [
      'Secluded camping hierarchy: Dugong and nearby beaches trade crowds for logistics.',
      'No campfires; stove only. Carry out waste.',
    ],
    hazards: ['Isolation', 'Dehydration', 'Tide-affected beaches', 'Stingers if swimming'],
    mapQuery: 'Dugong Beach Sawmill Whitsunday',
    officialUrl: CAMPING,
    verifyNote: VERIFY,
  },
  {
    slug: 'chance-bay-track',
    name: 'Chance Bay Track',
    shortName: 'Chance Bay',
    grade: '2–3',
    gradeLabel: 'Easy–moderate (verify)',
    distance: 'Short–moderate beach/track access (confirm live)',
    time: 'Allow 1–2 hours with swimming buffers when safe',
    effort: 'easy',
    areaSlug: 'camping-beaches',
    bestFor: 'Quieter beach alternative to peak Whitehaven crowds',
    summary:
      'Chance Bay offers a more secluded beach experience within the national park camping landscape. Access is boat-based; facilities are basic or absent — plan self-sufficiency.',
    startName: 'Chance Bay landing / camping area',
    startDetail:
      'Book the correct camping area if overnighting. Day visitors only if your vessel or tour lands there — do not assume commercial Whitehaven tours include Chance Bay.',
    gettingThere: [
      'Private vessel, multi-day charter or specialist transfer.',
      'QPWS camping booking required for overnight stays.',
    ],
    howToDoIt: [
      'Treat as a self-sufficient coastal camp, not a resort beach.',
      'Check tide tables for landing comfort; many beaches prefer mid-to-high for tenders.',
      'Respect quiet hours and other campers; keep noise and light pollution low.',
    ],
    tips: ['Great for solitude seekers who accept harder logistics.', 'Dry season (May–October) is generally preferred.'],
    hazards: ['Isolation', 'Weather windows', 'Stingers', 'Limited rescue options'],
    mapQuery: 'Chance Bay Whitsunday Island',
    officialUrl: CAMPING,
    verifyNote: VERIFY,
  },
  {
    slug: 'ngaro-cultural-site',
    name: 'Ngaro Cultural Site track',
    shortName: 'Ngaro Cultural Site',
    grade: '2',
    gradeLabel: 'Easy–moderate short cultural walk (verify)',
    distance: 'Short interpretive walk (confirm on-site)',
    time: 'Allow 30–60 minutes plus quiet time',
    effort: 'easy',
    areaSlug: 'ngaro-culture',
    bestFor: 'Respectful cultural context — Ngaro Sea Country connection',
    summary:
      'A short track and interpretive setting acknowledging Ngaro Traditional Owners — the seafaring “canoe people” with ongoing connection to land and Sea Country. Visit with humility: no restricted imagery, no inventing sacred stories, no off-track wandering.',
    startName: 'Signed Ngaro Cultural Site access (boat / tour dependent)',
    startDetail:
      'Often visited via commercial tours that include cultural stops (e.g. Nara Inlet context on some products) or independent vessels. Follow all signs and guide instructions. This guide never depicts ceremonies or restricted sites.',
    gettingThere: [
      'Commercial sailing or day products that list cultural site inclusions.',
      'Private vessel under marine park and park rules.',
      'Always verify current access on official pages and with operators.',
    ],
    howToDoIt: [
      'Read interpretive material; listen more than you photograph.',
      'Do not touch rock art or climb on cultural fabric.',
      'Stay on marked paths; leave shells, coral and artefacts in place.',
      'Support operators and experiences that respect cultural protocols.',
    ],
    tips: [
      'Pair cultural time with marine park etiquette — reef and Sea Country are linked.',
      'If a site is closed or restricted, do not invent a replacement “secret” visit.',
    ],
    hazards: ['Cultural protocol breaches if leaving tracks', 'Heat on exposed lookouts', 'Boat timing'],
    mapQuery: 'Ngaro Cultural Site Whitsunday',
    officialUrl: PARK,
    verifyNote: VERIFY,
    body: [
      {
        id: 'respect',
        title: 'Cultural respect baseline',
        paragraphs: [
          'Ngaro people are the Traditional Owners of the Whitsunday islands and surrounding Sea Country. Public visitor sites exist to share appropriate stories and orientation — not to open every place to photography or exploration.',
          'This unofficial guide does not retell restricted knowledge. Use official interpretive signs, authorised guides and Traditional Owner-endorsed products only.',
        ],
      },
    ],
  },
  {
    slug: 'ngaro-track-overview',
    name: 'Ngaro Track (multi-day overview)',
    shortName: 'Ngaro Track',
    grade: '4–5',
    gradeLabel: 'Hard multi-day independent / guided (limited numbers)',
    distance: 'About 32 km multi-day (commonly published)',
    time: 'Multi-day (seasonal window often April–October)',
    effort: 'hard',
    areaSlug: 'advanced-multi-day',
    bestFor: 'Experienced walkers wanting deep island immersion — book early',
    summary:
      'A serious multi-day walking experience across Whitsunday Island with limited numbers and a seasonal window (often discussed as April–October). Not a casual add-on to a day tour. Requires fitness, navigation discipline, self-sufficiency and official booking processes — verify every detail with QPWS.',
    startName: 'Official Ngaro Track trailheads / booking system (verify)',
    startDetail:
      'Do not improvise starts from a day-tour landing. Use only official information for permits, capacity limits, seasonal closures and safety requirements. Guided options may exist through authorised operators.',
    gettingThere: [
      'Plan months ahead — limited capacity is part of the product.',
      'Arrange boat logistics for start and finish; island walking is not road-supported.',
      'Confirm seasonal window and any feral animal control or track works.',
    ],
    howToDoIt: [
      'Treat this as expedition-lite: water planning, stove cooking, leave-no-trace, emergency comms.',
      'Walk within the group’s weakest member capacity; tropical heat multiplies effort.',
      'Obey all park and marine rules; this is national park + World Heritage context.',
    ],
    tips: [
      'If you are not ready for multi-day self-sufficiency, choose overnight beach camping + day walks instead.',
      'Always re-read official journey pages the week of departure.',
    ],
    hazards: [
      'Heat exhaustion and dehydration',
      'Navigation errors',
      'Weather / cyclone season edge cases',
      'Isolation and delayed rescue',
      'Creek/beach tidal complications',
    ],
    mapQuery: 'Ngaro Track Whitsunday Island',
    officialUrl: PARK,
    verifyNote: VERIFY,
  },
  {
    slug: 'fringing-reef-snorkel',
    name: 'Fringing reef snorkel stops (conditions-dependent)',
    shortName: 'Fringing reef snorkel',
    grade: 'N/A',
    gradeLabel: 'Water activity — fitness and conditions dependent',
    distance: 'Site-dependent (Black Island, Butterfly Bay, Blue Pearl Bay, Border Island, etc.)',
    time: 'Typically 30–90 minutes in-water on day products',
    effort: 'moderate',
    areaSlug: 'snorkel-reef',
    bestFor: 'Reef time with commercial operators or experienced private vessels',
    summary:
      'Fringing reefs around the Whitsundays offer snorkelling when wind, swell, visibility and marine stinger risk allow. Sites such as Black Island, Butterfly Bay, Blue Pearl Bay and Border Island appear on commercial itineraries — none are guaranteed every day. Reef etiquette is non-negotiable: no touching coral, no standing on reef, follow GBRMPA zoning.',
    startName: 'Operator-selected snorkel site or public mooring (rules apply)',
    startDetail:
      'Most visitors snorkel via day tour or sailing product. Private boaters must understand zoning maps, public moorings and anchoring restrictions. Never invent a “secret” entry that damages coral.',
    gettingThere: [
      'Book a snorkel-inclusive day tour or sailing trip from Airlie / Shute Harbour.',
      'Private vessels: study GBRMPA Whitsundays Plan of Management / zoning.',
      'Cancel or switch to beach-only plans when conditions are poor — forcing a snorkel is how people get hurt.',
    ],
    howToDoIt: [
      'Wear a stinger suit in season (typically Nov–May) or as operator requires year-round.',
      'Fit mask and fins before entry; stay with your buddy and float — do not stand on coral.',
      'Use reef-safe sunscreen applied well before entry; better yet, cover up with lycra.',
      'If you cannot swim confidently, choose a lifejacket / flotation and stay with guides.',
    ],
    tips: [
      'Windward vs leeward sites change with weather — trust skipper choices.',
      'Underwater cameras: secure lanyards; lost gear becomes marine litter.',
    ],
    hazards: [
      'Marine stingers',
      'Currents and boat traffic',
      'Sunburn on the water',
      'Coral cuts',
      'Panic if under-confident in open water',
    ],
    mapQuery: 'Whitsunday fringing reef snorkel',
    officialUrl: 'https://www.gbrmpa.gov.au/access/whitsundays',
    verifyNote: VERIFY,
  },
];

export function getTrail(slug: string): Trail | undefined {
  return trails.find((t) => t.slug === slug);
}

export function trailsForArea(areaSlug: string): Trail[] {
  return trails.filter((t) => t.areaSlug === areaSlug);
}

export function trailsByArea(areaSlug: string): Trail[] {
  return trailsForArea(areaSlug);
}

export function trailsByEffort(effort: Trail['effort']): Trail[] {
  return trails.filter((t) => t.effort === effort);
}
