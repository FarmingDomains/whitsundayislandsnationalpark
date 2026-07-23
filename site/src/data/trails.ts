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
      'A short circuit-style walk option on Whitsunday Island giving forest-to-coast context after (or instead of only) pure beach time. Metrics change — always confirm current distance, grade and open status on Queensland Parks pages and on-site signs. Island tracks close for maintenance, weather or management programs.',
    startName: 'Signed trailhead near Solway / Whitehaven area (boat access)',
    startDetail:
      'There is no drive-up car park. Access depends on your boat landing and operator itinerary. Not every commercial Whitehaven day tour includes Solway Circuit time — read inclusions or ask crew. Self-arranged campers should study official maps before leaving the beach so they do not invent shortcuts.',
    gettingThere: [
      'Boat access only — usually combined with Whitehaven / Tongue Point / Solway landing logistics.',
      'Day tours: confirm with the operator whether the circuit is reachable from today’s landing and whether muster time allows it.',
      'Campers / private vessels: match landing to booked site and tide; mid-to-high tide often eases tender landings.',
      'Check park alerts the morning you go — temporary closures happen.',
      'Do not start the circuit if your reverse boat window is already tight.',
    ],
    howToDoIt: [
      'Find the signed start only — do not follow social-media “secret” cut-throughs.',
      'Stay on the marked track; tropical island vegetation recovers slowly from shortcuts and trampling.',
      'Carry water even on a short loop; humidity and heat stack faster than mainland city walks of the same length.',
      'Wear closed-toe shoes with grip — roots, rock and sand transitions punish thongs.',
      'Walk at a pace that leaves margin for photos without sprinting to muster.',
      'Combine with beach time rather than stacking every named track in one rushed day-tour window.',
      'If the track is closed or unclear, turn around and enjoy the beach — that is still a successful day.',
    ],
    tips: [
      'Treat short walks as “depth” on a Whitehaven day, not as a mainland bushwalk checklist.',
      'Insect repellent helps at dusk near vegetation edges.',
      'Seal phones against spray and silica before you start.',
      'Families: out-and-back partial circuit is fine — celebrate partial success.',
      'Photography: forest-to-coast contrast frames work better than forcing empty-beach fantasy on a busy landing day.',
    ],
    hazards: [
      'Heat and humidity on exposed sections',
      'Uneven roots, rock and sand transitions',
      'Missing boat pick-up / muster if you over-extend',
      'Dehydration on “short” walks without water',
      'Track closures you ignored on the alerts page',
    ],
    mapQuery: 'Solway Circuit Whitsunday Island',
    officialUrl: PARK,
    verifyNote: VERIFY,
    body: [
      {
        id: 'when-to-add',
        title: 'When to add Solway (and when not to)',
        paragraphs: [
          'Add Solway Circuit when you have a clear landing, a confirmed open track, closed shoes, water, and a realistic muster buffer. It rewards people who want island context beyond a single beach selfie.',
          'Skip it when the boat window is short, anyone in the group is heat-stressed, the track status is unknown, or Hill Inlet lookout is already filling your moderate-effort budget for the day. One quality experience beats three half-finished ones.',
        ],
      },
      {
        id: 'verify',
        title: 'Metrics and official status',
        paragraphs: [
          'Published distances and times for short island circuits change with management works and how operators describe “the walk from the beach.” Treat any figure on this site as planning orientation only.',
          'Always re-check parks.qld.gov.au journey and alert pages for Whitsunday Islands before you rely on a named track for a photo deadline or family promise.',
        ],
      },
    ],
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
      'A linking track used by walkers and campers between Dugong and Sawmill beach contexts on the national park camping landscape. This is not a casual day-tour add-on. Tide, fitness, water carried on your back and fixed boat windows matter more than the grade number suggests.',
    startName: 'Dugong or Sawmill camping / beach access (permit + boat)',
    startDetail:
      'Requires boat access and usually a camping or multi-day plan with a valid QPWS booking if overnighting. Verify track open status before committing to a link walk with limited water and no vehicle bail-out. Day visitors only if your vessel deliberately lands for this purpose.',
    gettingThere: [
      'Camping permit + transfer or private vessel to the relevant beach — book the correct site name.',
      'Study official Parks of the Whitsundays / journey maps before departure; do not rely on offline memory of blog posts.',
      'Tell someone on the mainland your plan and expected pick-up; mobile coverage is not guaranteed.',
      'Check park alerts for closures, works or seasonal restrictions.',
      'Match departure sea state to your craft — remote beaches punish marginal weather decisions.',
    ],
    howToDoIt: [
      'Pack more water than a mainland “grade 3” walk — heat + humidity + no taps + boat timing.',
      'Walk early; midday tropical sun on exposed sections is punishing.',
      'Set a hard turnaround time that protects reverse boat or camp logistics — write it down.',
      'Stay on the marked track only; do not cut through vegetation for a shortcut photo.',
      'If anyone is fatigued or water is low, abort the link and stay beach-local — that is competence.',
      'At camp ends: stove only (no fires), tag displayed if overnighting, pack out all waste.',
    ],
    tips: [
      'Secluded camping hierarchy: Dugong and nearby beaches trade Whitehaven crowds for harder logistics.',
      'Practice with full water weight on the mainland before you commit to link walks.',
      'Dry bags protect camp kit when tenders get wet.',
      'Insect protection at dusk near vegetation edges.',
      'If transfers are infrequent, one excellent beach day beats a forced link that misses pick-up.',
    ],
    hazards: [
      'Isolation and delayed help',
      'Dehydration and heat illness',
      'Tide-affected beach travel at either end',
      'Missing pick-up windows',
      'Stingers if swimming (typically higher risk Nov–May)',
      'Navigation error if leaving marked routes',
    ],
    mapQuery: 'Dugong Beach Sawmill Whitsunday',
    officialUrl: CAMPING,
    verifyNote: VERIFY,
    body: [
      {
        id: 'who',
        title: 'Who this track is for',
        paragraphs: [
          'Dugong–Sawmill-style links are for campers and experienced island walkers who already understand self-sufficiency: water in, waste out, stove cooking, and boat clocks that do not care about your summit ego.',
          'They are not for first-time day-trippers who just want Whitehaven silica sand. If that is you, stay on commercial day products and the Hill Inlet lookout pair instead.',
        ],
      },
      {
        id: 'water-clock',
        title: 'Water and the boat clock',
        paragraphs: [
          'Two systems fail people on link walks: empty bottles and missed transfers. Calculate water for heat, not for the brochure distance. Calculate time for the slowest person in your group plus photo stops plus a contingency buffer.',
          'If either calculation looks ugly, do not start. Beach camping without the link is still a high-quality Whitsunday night.',
        ],
      },
    ],
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
      'Chance Bay offers a more secluded beach experience within the Whitsunday Islands National Park camping landscape. Access is boat-based; facilities are basic or absent. Plan self-sufficiency, tides for landings, and weather windows — solitude is the product, logistics are the price.',
    startName: 'Chance Bay landing / camping area',
    startDetail:
      'Book the correct camping area if overnighting via Queensland Parks. Day visitors only if your vessel or specialist transfer lands there — do not assume commercial Whitehaven tours include Chance Bay. Confirm open status and any site-specific notes officially before you go.',
    gettingThere: [
      'Private vessel, multi-day charter or specialist camping transfer — match craft to conditions.',
      'QPWS camping booking required for overnight stays; display your tag.',
      'Study tide tables: many beaches are more comfortable for tenders mid-to-high.',
      'Check park alerts and marine forecasts; cancel if the sea says no.',
      'Share your plan with a mainland contact; coverage is unreliable.',
    ],
    howToDoIt: [
      'Treat as a self-sufficient coastal camp, not a resort beach with cafes and taps.',
      'Pitch only in the booked footprint; leave vegetation and dunes intact.',
      'Stove cooking only — no campfires.',
      'Pack water in (no reliable fresh water on most sites — verify official advice) and pack all waste out.',
      'Swim only with a stinger plan in season and only when conditions are safe.',
      'Keep noise and light low for other campers and wildlife; solitude is mutual.',
      'Any short track walking: closed shoes, water, hard turnaround before pick-up.',
    ],
    tips: [
      'Great for solitude seekers who accept harder logistics and fewer boats.',
      'Dry season (roughly May–October) is generally preferred for weather stability — also book early.',
      'Pest-free / biosecurity checks protect islands — clean gear before and after.',
      'If you want both Chance Bay quiet and Hill Inlet swirl, you need time and separate logistics — do not force both in one marginal day.',
      'Photographers: soft early and late light on empty sand often beats midday Whitehaven crowds.',
    ],
    hazards: [
      'Isolation and limited rescue options',
      'Weather and cancel windows for boats',
      'Dehydration if water is under-packed',
      'Marine stingers when swimming (seasonal)',
      'Tide and landing difficulties for tenders',
      'Underestimating heat on “easy” beach days',
    ],
    mapQuery: 'Chance Bay Whitsunday Island',
    officialUrl: CAMPING,
    verifyNote: VERIFY,
    body: [
      {
        id: 'vs-whitehaven',
        title: 'Chance Bay vs Whitehaven',
        paragraphs: [
          'Whitehaven is the global brand with higher social traffic and more commercial day-tour volume. Chance Bay trades that brand recognition for quieter sand and stricter self-reliance. Neither is “better” — they serve different trip goals.',
          'If you only have one boat day in your life for the Whitsundays, most first-timers should still choose a Whitehaven ± Hill Inlet day product. Choose Chance Bay when solitude and camping skill are the point.',
        ],
      },
      {
        id: 'self-sufficiency',
        title: 'Self-sufficiency checklist',
        paragraphs: [
          'Permit and tag, water bulk, stove and fuel, waste bags, first aid, headlamp, weather cancel trigger, and a reverse boat plan. Miss one and the “easy grade” label becomes irrelevant.',
          'Official camping pages list site-specific details that change — always re-read yours the week of departure.',
        ],
      },
    ],
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
      'A serious multi-day walking experience across Whitsunday Island with limited numbers and a seasonal window (often discussed as April–October). Not a casual add-on to a Whitehaven day tour. Requires fitness, navigation discipline, full self-sufficiency and official booking processes — every metric on this page is orientation only; verify with QPWS.',
    startName: 'Official Ngaro Track trailheads / booking system (verify)',
    startDetail:
      'Do not improvise starts from a day-tour landing or an unbooked beach camp. Use only official information for permits, capacity limits, seasonal closures, group rules and safety requirements. Guided options may exist through authorised operators — still not a soft adventure product.',
    gettingThere: [
      'Plan months ahead — limited capacity is part of the product design.',
      'Arrange boat logistics for start and finish; island walking is not road-supported.',
      'Confirm seasonal window and any track works, closures or management programs on park alerts.',
      'Train consecutive days with pack weight in heat/humidity before you fly.',
      'Share a detailed plan and emergency contacts with someone off-island.',
    ],
    howToDoIt: [
      'Treat this as expedition-lite: water planning, stove cooking (no fires), leave-no-trace, emergency comms.',
      'Walk cool hours; tropical heat multiplies effort far beyond the map distance.',
      'Walk within the group’s weakest member capacity — splitting up on remote island tracks is how problems grow.',
      'Stay on marked routes only; do not invent shortcuts between beaches.',
      'Obey all park and marine rules; this is national park + World Heritage context.',
      'Re-read official pack lists and stage notes the week of departure — blogs go stale.',
    ],
    tips: [
      'If you are not ready for multi-day self-sufficiency, choose overnight beach camping + day walks instead — still excellent.',
      'Book early; do not build non-refundable international flights until the official booking is real.',
      'Water strategy is the skill that fails people — over-plan, then verify official guidance.',
      'Guided options reduce navigation load but not weather risk or fitness requirements.',
      'After the walk: biosecurity clean gear; honest debrief on timing and water for future parties.',
    ],
    hazards: [
      'Heat exhaustion and dehydration',
      'Navigation errors if leaving marked routes',
      'Weather / cyclone season edge cases outside preferred windows',
      'Isolation and delayed rescue',
      'Creek/beach tidal complications',
      'Injury far from rapid medical help',
      'Under-packed water or stove fuel',
    ],
    mapQuery: 'Ngaro Track Whitsunday Island',
    officialUrl: PARK,
    verifyNote: VERIFY,
    body: [
      {
        id: 'orientation-only',
        title: 'Orientation only — not stage notes',
        paragraphs: [
          'This page exists so day visitors understand what the Ngaro Track is — and is not. It is not a substitute for official stage notes, booking conditions, or a qualified guide’s briefing.',
          'Commonly published planning figures (including roughly 32 km multi-day scale and drier-season windows) must be re-checked on parks.qld.gov.au for your dates. Management rules change.',
        ],
      },
      {
        id: 'ladder',
        title: 'Skill ladder before you book',
        paragraphs: [
          'Suggested progression for most people: commercial Whitehaven day → overnight beach camp with transfer → multi-day remote beach camping → only then multi-day Ngaro Track style walking with official capacity.',
          'Skipping rungs is how groups end up dehydrated, late for boats, or calling for help they assumed would be quick. Turning around at an earlier rung is good judgement.',
        ],
      },
    ],
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
