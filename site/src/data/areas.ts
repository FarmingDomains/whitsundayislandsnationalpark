export type AreaBodyBlock = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type AreaFaq = {
  question: string;
  answer: string;
};

export type Area = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  driveNote: string;
  bestFor: string;
  timeNeeded: string;
  highlights: string[];
  dontGetWrong: string[];
  body: AreaBodyBlock[];
  practicalTips: string[];
  facilities: string[];
  faqs: AreaFaq[];
  relatedItinerarySlugs: string[];
  officialUrl: string;
  relatedTrailSlugs: string[];
  mapQuery: string;
  stayQuery: string;
};

const PARK = 'https://parks.qld.gov.au/parks/whitsunday-islands';
const CAMPING = 'https://parks.qld.gov.au/parks/whitsunday-islands/camping';
const HILL = 'https://parks.qld.gov.au/parks/whitsunday-islands/journeys/hill-inlet-lookout-track';
const BOOK = 'https://parks.qld.gov.au/camping/bookings';
const GBRMPA = 'https://www.gbrmpa.gov.au/access/whitsundays';

/**
 * Distances/times are typical planning ranges only — verify on Queensland Parks.
 * Body copy is original to this guide.
 */
export const areas: Area[] = [
  {
    slug: 'whitehaven-hill-inlet',
    name: 'Whitehaven Beach & Hill Inlet',
    shortName: 'Whitehaven & Hill Inlet',
    summary:
      'The global icon pair: pure silica Whitehaven Beach and the tidal swirl of Hill Inlet from the lookout track (~1.3–1.4 km return, moderate, ~40 min). Boat access only. Day tours from Airlie Beach / Shute Harbour dominate volume; camping unlocks quieter hours.',
    driveNote:
      'No road access. Fly into Proserpine (Whitsunday Coast) or Hamilton Island, base in Airlie Beach, then boat. Allow full-day buffers for commercial tours; overnight camping needs permit + transfer windows.',
    bestFor: 'First-timers, photographers, day-trippers and first-time island campers',
    timeNeeded: 'Full day for commercial tour; overnight+ for camping immersion',
    highlights: [
      'Whitehaven silica sand and turquoise water',
      'Hill Inlet lookout tidal patterns',
      'Day-tour logistics from Airlie / Shute Harbour',
      'Overnight camping with self-sufficiency',
      'Tide-aware photography strategy',
    ],
    dontGetWrong: [
      'Do not assume Hill Inlet lookout is included on every Whitehaven product — read the itinerary.',
      'Do not treat tide timing as optional if you want the classic swirl photo.',
      'Do not overnight without a QPWS camping permit and displayed tag.',
      'Do not rely on island fresh water — pack it in.',
      'Do not skip stinger season planning if you intend to swim (typically Nov–May).',
    ],
    body: [
      {
        id: 'icon-pair',
        title: 'The icon pair logic',
        paragraphs: [
          'Whitehaven Beach is the brand; Hill Inlet lookout is the elevation that makes the brand three-dimensional. Smart day plans try to land both when sea state and operator itineraries allow. If you only get the beach, you still had a world-class day — just adjust the photo brief.',
          'Commercial day tours are the honest high-volume path: fixed windows, shared experience, lower logistics load. Camping is the immersion path: quieter dawn and dusk, higher self-sufficiency, permit discipline.',
        ],
      },
      {
        id: 'tides-boats',
        title: 'Tides, boats and weather',
        paragraphs: [
          'Many landings and track connections feel easier mid-to-high tide. Low tide can mean longer wades or different tender drop points. Operators manage this daily; independent boaters must plan more carefully.',
          'Wind and swell cancel trips. Build a spare day into any itinerary that “must” include Whitehaven. Peak dry season (roughly May–October) improves weather odds but increases crowds and sell-outs.',
        ],
      },
    ],
    practicalTips: [
      'Book tours and peak-season Airlie beds early.',
      'Dry bag + reef-safe sunscreen + closed shoes for the lookout.',
      'Check BOM tides and marine forecasts the night before.',
      'Verify journey status on parks.qld.gov.au the morning of.',
    ],
    facilities: [
      'No shops on the beach',
      'Toilets may exist near some visitor nodes — confirm on-site',
      'Camping areas: basic facilities only where listed officially',
    ],
    faqs: [
      {
        question: 'Can I drive to Whitehaven Beach?',
        answer:
          'No. Whitehaven Beach and Hill Inlet are boat-access only within Whitsunday Islands National Park. Base in Airlie Beach (or a resort island) and use a day tour, camping transfer, private vessel or charter.',
      },
      {
        question: 'How long is the Hill Inlet lookout walk?',
        answer:
          'Officially published as about 1.3 km return with around 40 minutes walking time — moderate with elevation. Always re-check parks.qld.gov.au for live status and advice.',
      },
      {
        question: 'Do I need a camping permit for a day trip?',
        answer:
          'Day visits via commercial tours do not use camping permits. Overnight camping on national park beaches requires a booking and permit through Queensland Parks; fees apply and a tag must be displayed.',
      },
    ],
    relatedItinerarySlugs: [
      'whitehaven-hill-inlet-day',
      'overnight-whitehaven-camping',
      'photography-tide-hill-inlet',
    ],
    officialUrl: HILL,
    relatedTrailSlugs: ['hill-inlet-lookout', 'whitehaven-beach'],
    mapQuery: 'Whitehaven Beach Hill Inlet Whitsunday',
    stayQuery: 'Airlie Beach',
  },
  {
    slug: 'boat-access-airlie',
    name: 'Boat access & Airlie Beach hub',
    shortName: 'Boat access & Airlie',
    summary:
      'Decision hierarchy for reaching the islands: commercial day tours (volume path), camping transfers, private/bareboat/yacht, multi-day sail charters, and limited kayak hops. Airlie Beach and Shute Harbour are the practical mainland bases; Hamilton Island is the resort-island alternative.',
    driveNote:
      'Fly to Proserpine (PPP / Whitsunday Coast) or Hamilton Island (HTI). Drive or bus to Airlie Beach. Shute Harbour is a key departure node for many vessels. Allow transfer time from airport to marina and never cut boat check-in close.',
    bestFor: 'Anyone planning how to physically reach the park',
    timeNeeded: 'Half day of planning; full days on the water',
    highlights: [
      'Day tour vs camping transfer vs private vessel filters',
      'Airlie Beach accommodation spectrum',
      'Shute Harbour departures',
      'Hamilton Island resort logistics',
      'Weather cancellation realism',
    ],
    dontGetWrong: [
      'Do not assume every tour includes Hill Inlet lookout and a long beach window.',
      'Do not book non-refundable flights without a weather buffer if Whitehaven is your only goal.',
      'Do not confuse resort islands with automatic national park camping rights.',
      'Do not ignore marine park zoning if you skipper yourself.',
    ],
    body: [
      {
        id: 'hierarchy',
        title: 'Access hierarchy (honest filters)',
        paragraphs: [
          'Budget + convenience + limited time → commercial day tour from Airlie / Shute Harbour. Solitude + self-sufficiency → camping permit + transfer. Freedom + skill + cost → bareboat, private vessel or multi-day sail. Fitness + experience required rises as independence rises.',
          'Group size matters: families and mixed abilities usually win with crewed day products. Solo advanced boaters still must obey GBRMPA and QPWS rules — freedom is not exemption.',
        ],
      },
      {
        id: 'airlie',
        title: 'Why Airlie Beach is the planning capital',
        paragraphs: [
          'Airlie concentrates backpackers, mid-range apartments, resorts, tour desks and departure logistics. Peak dry-season inventory sells out around school holidays and winter Whitehaven demand. Book beds before tours if you are peak-season sensitive.',
          'Cannonvale and nearby suburbs extend the bed pool. Hamilton Island trades mainland flexibility for resort packaging — still confirm how you reach Whitehaven from your resort base.',
        ],
      },
    ],
    practicalTips: [
      'Read cancellation policies for weather.',
      'Pack seasickness options if you are prone.',
      'Keep passport/ID and booking QR offline screenshots.',
      'UTM-tag affiliate bookings if you track campaigns (optional).',
    ],
    facilities: ['Full town services in Airlie', 'Marinas and tour check-ins', 'Supermarkets for camping resupply'],
    faqs: [
      {
        question: 'Day tour or camping transfer?',
        answer:
          'Day tours maximise convenience and minimise gear. Camping transfers unlock overnight Whitehaven or secluded beaches but require permits, water, stove cooking and stricter self-sufficiency. Choose based on experience and weather window, not Instagram alone.',
      },
    ],
    relatedItinerarySlugs: ['airlie-base-day-trips', 'whitehaven-hill-inlet-day', 'multi-day-sailing'],
    officialUrl: PARK,
    relatedTrailSlugs: ['whitehaven-beach', 'hill-inlet-lookout'],
    mapQuery: 'Airlie Beach Shute Harbour Queensland',
    stayQuery: 'Airlie Beach',
  },
  {
    slug: 'camping-beaches',
    name: 'Camping beaches hierarchy',
    shortName: 'Camping beaches',
    summary:
      'National park camping across Whitehaven (classic), Dugong, Chance Bay, Joes, Curlew, Maureens Cove, Crayfish, Steens, Cairn, Northern Spit and related sites. Permits required; fees apply; tag displayed. No vehicle access; self-sufficient water and no campfires.',
    driveNote:
      'Book via Queensland Parks Booking Service before you travel. Arrange boat transfer or private vessel logistics that match your site. Fees are published officially (commonly cited around $7.75 adult / $31 family per night — always re-check live). Children under 5 free under published policy.',
    bestFor: 'Self-sufficient campers seeking silica beaches without resort packaging',
    timeNeeded: '1–3 nights typical; longer only with robust logistics',
    highlights: [
      'Whitehaven overnight for the classic',
      'Secluded options (Dugong, Chance Bay, etc.)',
      'Permit + tag discipline',
      'Water: plan 5 L+ per person per day',
      'Pest-free biosecurity checks',
    ],
    dontGetWrong: [
      'No permit = no camp. Book early for popular sites.',
      'No reliable fresh water on most sites — pack it in.',
      'No campfires — stove only.',
      'Do not expect ranger shops or rubbish collection beyond stated rules — carry out waste.',
      'Never monetise or “resell” official permits via third parties that are not QPWS.',
    ],
    body: [
      {
        id: 'hierarchy',
        title: 'Which beach for which camper',
        paragraphs: [
          'Whitehaven: maximum brand, higher social traffic in season, still magical at dawn. Dugong, Chance Bay, Joes, Curlew, Maureens Cove, Crayfish and related sites: more solitude, more responsibility. Match site to boat skill, group experience and weather.',
          'Always read the official camping page for each site’s capacity, facilities and seasonal notes before booking.',
        ],
      },
      {
        id: 'self-sufficiency',
        title: 'Self-sufficiency non-negotiables',
        paragraphs: [
          'Water, stove fuel, shelter rated for wind, dry bags, first aid, waste plan, and a communication / emergency plan. Minimum water planning often cited at five litres per person per day in heat — more if you walk hard. Verify current official advice.',
          'Biosecurity: check boats, gear and clothing for pests and soil. Reef and island ecosystems are fragile.',
        ],
      },
    ],
    practicalTips: [
      'Screenshot booking confirmation and display tag rules.',
      'Pack out all rubbish including micro-plastics and food scraps.',
      'Study public moorings guides if private boating.',
      'Wet season / cyclone risk: have cancel triggers.',
    ],
    facilities: ['Site-dependent toilets or none', 'No powered sites as mainland caravan parks', 'No shops'],
    faqs: [
      {
        question: 'How do I book Whitsunday Islands camping?',
        answer:
          'Use the Queensland Parks Booking Service (book.parks.qld.gov.au / parks.qld.gov.au camping bookings). This website never sells camping permits and never takes commission on QPWS fees.',
      },
    ],
    relatedItinerarySlugs: ['overnight-whitehaven-camping', 'secluded-camping'],
    officialUrl: CAMPING,
    relatedTrailSlugs: ['whitehaven-beach', 'dugong-sawmill', 'chance-bay-track'],
    mapQuery: 'Whitsunday Islands National Park camping',
    stayQuery: 'Airlie Beach',
  },
  {
    slug: 'island-walks-lookouts',
    name: 'Short walks & island lookouts',
    shortName: 'Short walks',
    summary:
      'Beyond the icon pair: Solway Circuit, beach and headland tracks, Chance Bay context and other short island walks. Effort often feels moderate under tropical heat even when distances look short. Access is still boat-gated — muster times beat track bagging.',
    driveNote:
      'Walks start from boat landings and camping beaches — not from a car park you can drive to. Confirm each track’s live status on QPWS journey pages and with your operator before you promise a family “just a quick loop.”',
    bestFor: 'Visitors who want more than beach time without multi-day commitment',
    timeNeeded: '30 minutes to half day per walk, plus boat logistics',
    highlights: [
      'Solway Circuit and short coastal loops',
      'Beach and headland tracks',
      'Hoop pine and multi-island views',
      'Track-status and muster discipline',
      'Pairing one walk with beach time (not five walks)',
    ],
    dontGetWrong: [
      'Do not miss the boat for “one more lookout.”',
      'Do not under-pack water because distances look short on paper.',
      'Do not leave marked tracks for photos — vegetation recovers slowly.',
      'Do not assume every Whitehaven day tour includes every named short walk.',
      'Do not stack Hill Inlet + long beach wander + extra circuit without a time budget.',
    ],
    body: [
      {
        id: 'how-to-choose',
        title: 'How to choose short walks',
        paragraphs: [
          'Filter by: minutes until pick-up, fitness of the slowest person, heat/humidity, and whether the track is officially open. A perfect short walk abandoned early still beats a rushed longer walk that panics a tender schedule.',
          'Combine one short walk with beach time rather than collecting every named track in a single day-tour window. Day tours are logistics products; they are not mainland national-park car-park trailheads.',
          'Closed-toe shoes with grip beat thongs on roots and rock. Carry water even for “30 minutes.” Insect protection helps at vegetation edges near dusk.',
        ],
      },
      {
        id: 'vs-icons',
        title: 'Short walks vs Whitehaven + Hill Inlet',
        paragraphs: [
          'If you only have one boat day ever, prioritise Whitehaven ± Hill Inlet lookout first. Short circuits are depth for second days, camping trips, or products that deliberately include them.',
          'Hill Inlet is the moderate lookout most people mean when they say “the walk.” Solway-style circuits and headland paths are supporting cast — excellent when time and access allow, optional when they do not.',
        ],
      },
      {
        id: 'camping-context',
        title: 'From camp beaches',
        paragraphs: [
          'Campers on quieter beaches sometimes have more flexible morning windows than day-tour musters — use that for short walks, not for inventing multi-track marathons without water.',
          'Always re-check park alerts: island tracks close for maintenance, weather and management programs. Metrics on this site are planning orientation only.',
        ],
      },
    ],
    practicalTips: [
      'Closed-toe shoes with grip',
      'Water even on short loops',
      'Insect repellent at dusk',
      'Offline map / track screenshots',
      'Write muster time on your phone lock screen',
      'Ask crew once: “Is this track reachable from today’s landing?”',
    ],
    facilities: [
      'Variable — often none on track',
      'Toilets only where signed at visitor nodes',
      'No shops or water taps on most circuits',
    ],
    faqs: [
      {
        question: 'Can I walk island tracks without a tour?',
        answer:
          'Only if you have lawful boat access (private vessel, transfer, multi-day product) and the track is open. There is no public road access. Overnight camping still needs a QPWS permit.',
      },
      {
        question: 'Should short walks replace Hill Inlet?',
        answer:
          'For most first-timers, no — Hill Inlet + Whitehaven is the icon pair. Short walks are best as depth when you already have beach time secured or a second boat day.',
      },
    ],
    relatedItinerarySlugs: ['half-day-walk-snorkel', 'whitehaven-hill-inlet-day', 'secluded-camping'],
    officialUrl: PARK,
    relatedTrailSlugs: ['solway-circuit', 'chance-bay-track', 'hill-inlet-lookout'],
    mapQuery: 'Whitsunday Island Queensland walking tracks',
    stayQuery: 'Airlie Beach',
  },
  {
    slug: 'snorkel-reef',
    name: 'Snorkelling & fringing reefs',
    shortName: 'Snorkel & reefs',
    summary:
      'Conditions-dependent fringing reef experiences across sites such as Black Island, Butterfly Bay, Blue Pearl Bay and Border Island on commercial itineraries. GBRMPA zoning and reef etiquette apply. Stinger season changes the risk profile. Site names are not daily guarantees.',
    driveNote:
      'Most visitors access reefs via commercial day tours or sailing products from Airlie Beach / Shute Harbour. Private vessels must use zoning maps, public moorings and anchoring rules. Never stand on coral. Cancel or go beach-only when seas are poor.',
    bestFor: 'Swimmers comfortable in open water with guide support',
    timeNeeded: 'Half to full day on the water',
    highlights: [
      'Fringing reef snorkel stops',
      'Operator site selection by weather',
      'Stinger suit norms (typically Nov–May)',
      'Reef-safe behaviour and flotation options',
      'Clear expectation: Heart Reef is usually aerial',
    ],
    dontGetWrong: [
      'Do not touch coral or chase turtles for content.',
      'Do not skip stinger protection in season.',
      'Do not force a snorkel day in unsafe seas.',
      'Do not assume a famous bay is today’s site — skippers move for safety and visibility.',
      'Do not treat Heart Reef as a walk-up snorkel platform.',
    ],
    body: [
      {
        id: 'conditions',
        title: 'Conditions first',
        paragraphs: [
          'Wind, swell and visibility decide the site. Trust skippers who change plans. A different bay in clear water beats the “famous name” in mush. Day-tour marketing lists are menus, not promises.',
          'Heart Reef is typically an aerial / scenic-flight product, not a place you stand on or snorkel as a casual stop — manage expectations and read inclusions carefully.',
          'If you cannot swim confidently, say so at the brief, use flotation, and stay with guides. Panic in open water is more common than people admit on booking forms.',
        ],
      },
      {
        id: 'etiquette',
        title: 'Reef etiquette (non-negotiable)',
        paragraphs: [
          'Float — do not stand on coral. Do not touch, kick, or chase wildlife. Secure camera lanyards; lost gear becomes marine litter. Apply reef-safe sunscreen well before entry, or cover up with lycra and reduce cream in the water.',
          'Private skippers: GBRMPA Whitsundays Plan of Management, zoning maps, public moorings and anchoring restrictions are your homework. Freedom is not an exemption.',
        ],
      },
      {
        id: 'stingers',
        title: 'Stingers and packing',
        paragraphs: [
          'Marine stinger risk is typically highest from November to May in tropical Queensland. Full-body suits are common practice on commercial snorkel products in season — follow operator rules even if you “feel fine.”',
          'Pack dry bags, polarised sunglasses, and a dry layer for the ride home. For deeper packing and season context, see the marine safety hub and the stinger packing article on this site.',
        ],
      },
    ],
    practicalTips: [
      'Stinger suit Nov–May (or as operator requires)',
      'Reef-safe sunscreen applied early',
      'Secure cameras with lanyards',
      'Say if you need flotation — early, not mid-panic',
      'Hydrate; sun on water is intense',
      'Read cancel policy before peak-season prepay',
    ],
    facilities: [
      'Operator vessels typically provide briefings and flotation options',
      'No reef “facilities” on the coral — self-sufficient on the water',
    ],
    faqs: [
      {
        question: 'Is Heart Reef a snorkel stop?',
        answer:
          'Heart Reef is generally experienced from the air (scenic flight) rather than as a walk-up snorkel platform. Confirm product inclusions carefully and follow all marine park rules.',
      },
      {
        question: 'Can I snorkel at Whitehaven Beach?',
        answer:
          'Whitehaven is primarily a silica sand beach experience. Snorkel quality varies and many best fringing sites are elsewhere on commercial itineraries. Ask your operator what is planned for your day.',
      },
      {
        question: 'What if the snorkel is cancelled?',
        answer:
          'Accept the weather call. Pivot to beach time if offered, or use a buffer day. Forcing private entries in marginal seas is how people get hurt.',
      },
    ],
    relatedItinerarySlugs: ['half-day-walk-snorkel', 'multi-day-sailing', 'airlie-base-day-trips'],
    officialUrl: GBRMPA,
    relatedTrailSlugs: ['fringing-reef-snorkel'],
    mapQuery: 'Whitsunday Islands Queensland fringing reef',
    stayQuery: 'Airlie Beach',
  },
  {
    slug: 'ngaro-culture',
    name: 'Ngaro culture & Sea Country',
    shortName: 'Ngaro culture',
    summary:
      'Ngaro Traditional Owners — seafaring people with deep connection to the islands and Sea Country. Public rock art and cultural sites (including Nara Inlet context and Ngaro Cultural Site tracks) require respectful behaviour. This guide does not display restricted imagery or sacred detail.',
    driveNote:
      'Cultural sites are reached by boat via tours or private vessels under park rules. Always follow signage and authorised interpretation only. If a site is closed, do not invent a replacement visit.',
    bestFor: 'Visitors who want respectful context beyond pure scenery',
    timeNeeded: '30–90 minutes on-site plus travel',
    highlights: [
      'Ngaro Cultural Site track',
      'Authorised interpretive experiences',
      'Sea Country framing for reef etiquette',
      'Joint management awareness',
      'Quiet, on-track visitor behaviour',
    ],
    dontGetWrong: [
      'Do not photograph restricted rock art or ceremonies.',
      'Do not invent or retell sacred stories.',
      'Do not treat cultural stops as optional Instagram props.',
      'Do not leave marked tracks for a “better angle.”',
      'Do not touch art panels, ochre or cultural fabric.',
    ],
    body: [
      {
        id: 'acknowledgment',
        title: 'Acknowledgment and visitor role',
        paragraphs: [
          'We acknowledge the Ngaro people as Traditional Owners of the Whitsunday islands and surrounding Sea Country. Sovereignty was never ceded. Visitors are guests on Country.',
          'Use public interpretive materials, authorised guides and official park communications. Support operators that respect cultural protocols and marine rules. This unofficial guide does not speak for Ngaro people.',
        ],
      },
      {
        id: 'on-site',
        title: 'On-site behaviour that actually helps',
        paragraphs: [
          'Stay on marked paths. Read signs slowly. Listen more than you photograph. Distant landscape frames from public paths are the ethical default. If a sign says no photos, that is the end of the debate.',
          'Ask before photographing people. Never photograph ceremonies. Do not publish restricted site locations or “secret” directions that encourage damage or overcrowding.',
        ],
      },
      {
        id: 'sea-country',
        title: 'Sea Country and the reef',
        paragraphs: [
          'Reef etiquette is cultural practice as well as ecology: no standing on coral, no taking shells or coral, no chasing wildlife for content. GBRMPA zoning applies to private vessels.',
          'Whitehaven silica sand sits inside a living cultural and World Heritage landscape. Treating the islands as an empty theme park produces the same failures seen worldwide — off-track damage and disrespectful photography.',
        ],
      },
    ],
    practicalTips: [
      'Quiet voices on site',
      'Stay on tracks only',
      'Ask before photographing people',
      'Choose operators that brief cultural protocols',
      'Pair cultural stops with time to read signs — not a sprint',
      'Teach children hands-off rules before landing',
    ],
    facilities: [
      'Interpretive signage where provided',
      'Facilities vary by landing — do not expect shops',
    ],
    faqs: [
      {
        question: 'Can I visit cultural sites on a standard Whitehaven day tour?',
        answer:
          'Only if the product lists a cultural stop. Many Whitehaven day tours focus on beach and Hill Inlet. Read inclusions or choose a sailing/cultural-focused product.',
      },
      {
        question: 'Why can’t I photograph everything?',
        answer:
          'Some places and images are restricted for cultural reasons. Public interpretive sites share what is appropriate for visitors. Respecting no-photo rules is part of visiting Country.',
      },
    ],
    relatedItinerarySlugs: ['whitehaven-hill-inlet-day', 'multi-day-sailing'],
    officialUrl: PARK,
    relatedTrailSlugs: ['ngaro-cultural-site'],
    mapQuery: 'Ngaro Cultural Site Whitsunday Islands',
    stayQuery: 'Airlie Beach',
  },
  {
    slug: 'advanced-multi-day',
    name: 'Advanced multi-day: Ngaro Track & Sea Trail',
    shortName: 'Multi-day advanced',
    summary:
      'Ngaro Track (~32 km class multi-day, limited numbers, seasonal) and Whitsunday Ngaro Sea Trail elements for experienced walkers and paddlers. Book early. Orientation only on this site — not a day-tour upgrade and not a substitute for official stage notes.',
    driveNote:
      'Requires official booking processes, fitness and full self-sufficiency. Seasonal windows often align with drier months (commonly discussed as April–October) — verify live. Boat logistics for start/finish are part of the plan, not an afterthought.',
    bestFor: 'Experienced multi-day walkers / guided expedition clients',
    timeNeeded: 'Several days minimum',
    highlights: [
      'Ngaro Track capacity limits',
      'Seasonal windows',
      'Sea Trail logistics awareness',
      'Emergency planning',
      'Skill ladder from beach camps upward',
    ],
    dontGetWrong: [
      'Do not attempt without confirmed bookings and realistic fitness.',
      'Do not under-estimate tropical heat on multi-day loads.',
      'Do not ignore cyclone / wet-season risk outside the preferred window.',
      'Do not improvise a start from a random day-tour landing.',
      'Do not treat commonly published kilometre figures as live gospel — verify officially.',
    ],
    body: [
      {
        id: 'who',
        title: 'Who should not do this (yet)',
        paragraphs: [
          'If you have never camped self-sufficiently, start with a single overnight beach camp and day walks. Multi-day island walking is a different sport from a Whitehaven selfie day.',
          'Guided options can reduce navigation load but not weather risk or the need for fitness. Always read official requirements first.',
        ],
      },
      {
        id: 'ladder',
        title: 'Skill ladder before you book',
        paragraphs: [
          'Suggested progression for most people: commercial Whitehaven day → overnight beach camp with transfer → multi-day remote beach camping → only then Ngaro Track–class multi-day walking with official capacity.',
          'Skipping rungs is how groups end up dehydrated, late for boats, or calling for help they assumed would be quick. Turning around at an earlier rung is good judgement.',
        ],
      },
      {
        id: 'orientation',
        title: 'Orientation only',
        paragraphs: [
          'This hub exists so day visitors understand what advanced multi-day products are — and are not. It is not stage-by-stage track notes, hut rules, or a booking portal.',
          'Commonly published planning figures (including roughly 32 km multi-day scale and drier-season windows) must be re-checked on parks.qld.gov.au for your dates. Management rules change.',
        ],
      },
    ],
    practicalTips: [
      'Book early — capacity is the product',
      'Train consecutive days with pack weight in heat',
      'Redundant navigation and emergency comms plan',
      'Water strategy beyond casual beach camping',
      'Stove only — no fire assumption',
      'Do not buy non-refundable long-haul flights until the official booking is real',
    ],
    facilities: [
      'Minimal — plan as wilderness / remote camping context',
      'Confirm any official facilities list before departure — do not invent infrastructure',
    ],
    faqs: [
      {
        question: 'Is the Ngaro Track a hard day walk?',
        answer:
          'No. It is a multi-day commitment with limited numbers and seasonal constraints. Day visitors should use Whitehaven, Hill Inlet and short island walks instead.',
      },
      {
        question: 'Can I “just start walking” from Whitehaven?',
        answer:
          'Do not improvise multi-day routes without official bookings, maps and logistics. Illegal or unprepared walking risks safety and park values.',
      },
    ],
    relatedItinerarySlugs: ['ngaro-track-outline', 'secluded-camping', 'overnight-whitehaven-camping'],
    officialUrl: PARK,
    relatedTrailSlugs: ['ngaro-track-overview'],
    mapQuery: 'Ngaro Track Whitsunday Island',
    stayQuery: 'Airlie Beach',
  },
  {
    slug: 'marine-safety-seasons',
    name: 'Marine safety, stingers & seasons',
    shortName: 'Safety & seasons',
    summary:
      'Tropical marine realism: stinger season (typically November–May), cyclone / wet-season risk, tidal access, boat weather windows, reef etiquette and biosecurity. Dry season May–October is preferred for many visitors (whales in season, more stable weather) but brings peak crowds.',
    driveNote:
      'Check BOM marine forecasts, stinger risk guidance and park alerts before every departure. Operators cancel for good reason — rebuild plans, do not argue with the sea. Build a weather buffer day if Whitehaven is non-negotiable.',
    bestFor: 'Every visitor — safety is not optional reading',
    timeNeeded: '15 minutes of reading before you book; re-check daily while on trip',
    highlights: [
      'Stinger season packing',
      'Cyclone / wet season risk',
      'Tide and weather windows',
      'No drones without permit',
      'Reef etiquette + GBRMPA zoning',
      'Biosecurity / pest-free habits',
    ],
    dontGetWrong: [
      'Do not swim unprotected in stinger season.',
      'Do not ignore cancel triggers for multi-day boat plans in wet season.',
      'Do not drone without authorisation.',
      'Do not touch coral or take shells/coral as souvenirs.',
      'Do not treat social media “safe to swim” posts as medical advice.',
      'Do not book one boat day tight against an international flight.',
    ],
    body: [
      {
        id: 'seasons',
        title: 'Seasonal decision frame',
        paragraphs: [
          'Dry season (roughly May–October): generally preferred for weather stability and whale watching opportunities — also peak demand for Whitehaven day tours and Airlie beds. Book early.',
          'Wet season: higher humidity, heavy rain bursts, elevated cyclone awareness, and stinger awareness if swimming. Flexible bookings beat rigid photo deadlines.',
          'There is no perfect zero-risk week. Choose buffers, insurance and cancellation flexibility that match your risk tolerance.',
        ],
      },
      {
        id: 'stingers-boats',
        title: 'Stingers, boats and tides',
        paragraphs: [
          'Marine stinger risk is typically highest from November to May in tropical Queensland. Full-body suits are common on commercial snorkel products in season. Beach time without swimming is still excellent.',
          'Wind and swell cancel boats. That is seamanship, not a personal slight. Hill Inlet swirl photography is tide-dependent — mid-to-high often helps classic patterns; low tide is a different brief. Check BOM tides and marine forecasts.',
        ],
      },
      {
        id: 'biosecurity-drones',
        title: 'Biosecurity, drones and emergencies',
        paragraphs: [
          'Pest-free checks on boats, gear and clothing protect island ecosystems. Pack out waste. No campfires on national park camping beaches.',
          'Recreational drones need proper authorisation — default is do not fly. Emergency help can be slow on islands; share trip plans with someone on the mainland and carry a realistic first-aid kit for camps.',
        ],
      },
    ],
    practicalTips: [
      'Stinger suit or skip swimming Nov–May',
      'Track park alerts daily on trip',
      'Share trip plans with someone on the mainland',
      'Build a weather buffer day for Whitehaven',
      'Read operator cancel policies before prepaying',
      'Offline screenshots of bookings and emergency numbers',
    ],
    facilities: [
      'Emergency services via standard Australian channels — coverage not guaranteed on islands',
      'Commercial vessels carry safety equipment — still listen to briefs',
    ],
    faqs: [
      {
        question: 'When is stinger season in the Whitsundays?',
        answer:
          'Marine stinger risk is typically highest from November to May in tropical Queensland. Follow Queensland Health and operator guidance; full-body suits are common practice for snorkelling in season. Always re-check current advice.',
      },
      {
        question: 'Why did my tour cancel in “fine weather” on shore?',
        answer:
          'Marine wind, swell and visibility offshore can differ from town conditions. Skippers cancel to protect guests. Use a buffer day rather than forcing a second unsafe plan.',
      },
      {
        question: 'Do I need a stinger suit on Whitehaven sand only?',
        answer:
          'If you are not entering the water, a suit is less critical — but sun protection still is. If you swim or snorkel in season, follow operator and health guidance on full-body protection.',
      },
    ],
    relatedItinerarySlugs: [
      'whitehaven-hill-inlet-day',
      'overnight-whitehaven-camping',
      'airlie-base-day-trips',
      'photography-tide-hill-inlet',
    ],
    officialUrl: PARK,
    relatedTrailSlugs: ['fringing-reef-snorkel', 'whitehaven-beach'],
    mapQuery: 'Whitsunday Islands National Park Queensland Australia',
    stayQuery: 'Airlie Beach',
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
