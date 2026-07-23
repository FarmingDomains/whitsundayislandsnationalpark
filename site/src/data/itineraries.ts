export type ItineraryBlock = {
  time: string;
  title: string;
  detail: string;
};

export type ItineraryTipSection = {
  title: string;
  items: string[];
};

export type Itinerary = {
  slug: string;
  name: string;
  duration: string;
  bestFor: string;
  summary: string;
  intro: string[];
  blocks: ItineraryBlock[];
  packing: string[];
  parkingTips: string[];
  skipIfShort: string[];
  officialUrls: string[];
  downloadPath?: string;
  relatedTrailSlugs: string[];
  tipSections?: ItineraryTipSection[];
};

const PARK = 'https://parks.qld.gov.au/parks/whitsunday-islands';
const CAMPING = 'https://parks.qld.gov.au/parks/whitsunday-islands/camping';
const HILL = 'https://parks.qld.gov.au/parks/whitsunday-islands/journeys/hill-inlet-lookout-track';
const BOOK = 'https://parks.qld.gov.au/camping/bookings';
const ALERTS = 'https://parks.qld.gov.au/park-alerts';
const GBRMPA = 'https://www.gbrmpa.gov.au/access/whitsundays';
const TIDES = 'https://www.bom.gov.au/australia/tides/';

export const itineraries: Itinerary[] = [
  {
    slug: 'whitehaven-hill-inlet-day',
    name: 'Classic Whitehaven + Hill Inlet day trip',
    duration: 'Full day (tour-dependent · ~8–11 hrs door to door)',
    bestFor: 'First-timers who want the icon pair with minimal self-skippering',
    summary:
      'Commercial day tour from Airlie Beach / Shute Harbour to Whitehaven Beach with Hill Inlet lookout when included — the dominant high-volume path. Tide-aware photography, sun discipline and realistic beach time expectations.',
    intro: [
      'This is the plan most visitors should start with. You trade solitude for logistics simplicity: check-in, boat briefing, landing, lookout, beach, return. Read your specific product inclusions the night before — not every tour that says “Whitehaven” stacks Hill Inlet lookout and a long beach window every day.',
      'Day-trip honesty: you will share Whitehaven with other groups in peak dry season and school holidays. That does not ruin the silica sand. It does mean you manage photo ambitions and protect your pick-up window. Your clock is set by the boat, not by a hiking app.',
      'Who should pick this: first-timers, mixed-ability groups, short stays in Airlie, and anyone without camping gear. Who should upgrade later: campers wanting dawn sand, multi-day sailors, or photographers who need a dedicated tide buffer day (see the photography itinerary).',
      'Win condition: safe boat day, Hill Inlet if included and open, Whitehaven time without missing muster, and enough energy left for a calm Airlie evening. Partial success (beach without lookout, or lookout in less-than-poster tide) still counts.',
    ],
    blocks: [
      {
        time: 'Night before',
        title: 'Inclusions · weather · bag ready',
        detail:
          'Re-read the product page: does it name Hill Inlet lookout? Screenshot booking QR. Check operator SMS channel. Glance marine forecast and BOM tides for curiosity (boat schedule still wins). Pack dry bag tonight — not at 6 a.m.',
      },
      {
        time: '06:30–07:30',
        title: 'Airlie base · breakfast · final weather',
        detail:
          'Confirm no cancel/delay message. Eat real food. Apply reef-safe sunscreen. Stinger suit in bag if swimming in season (typically Nov–May). Closed-toe shoes for lookout steps. Seasickness tablet early if needed.',
      },
      {
        time: '07:30–08:30',
        title: 'Check-in · Shute Harbour or Airlie departure',
        detail:
          'Arrive early for parking, coach transfer or marina queue. Complete waiver. Listen to safety brief — lifejackets, swim rules, stinger advice, muster procedure. Ask once, calmly, whether Hill Inlet is on today’s plan.',
      },
      {
        time: 'Morning on water',
        title: 'Transit · optional snorkel stop',
        detail:
          'Some products snorkel first if leeward conditions favour a reef site. Stay with guides; float — do not stand on coral. If seas are poor, operators may go beach-first or drop a stop. Trust the skipper; do not demand the poster itinerary in unsafe water.',
      },
      {
        time: 'Midday window',
        title: 'Hill Inlet lookout (~1.3–1.4 km return · ~40 min)',
        detail:
          'If included: closed shoes, water, steady pace on steps. Mid-to-high tide often improves classic swirl odds — but boat schedule beats perfect tide. Stay on signed track; no off-track photo cuts. Families: turn around early if heat or fatigue hits — partial lookout still helps.',
      },
      {
        time: 'Afternoon window',
        title: 'Whitehaven Beach time',
        detail:
          'Hydrate in silica glare. Swim only if conditions and stinger guidance allow. Walk a short distance from the densest landing cluster for emptier frames if muster time allows. Seal cameras against fine sand. Know the return call before you wander.',
      },
      {
        time: 'Muster · return',
        title: 'Boat home · Airlie evening',
        detail:
          'Do not cut muster. Count your group. On return: rehydrate, light dinner, rinse salt gear. If the icon pair was incomplete (weather), consider booking a buffer-day product rather than forcing a same-evening second boat.',
      },
    ],
    packing: [
      'Dry bag + waterproof phone pouch',
      'Water (more than you think) + snacks if not fully catered',
      'UPF shirt, hat with cord, polarised sunglasses',
      'Closed-toe shoes for lookout',
      'Stinger suit / lycra if swimming in season',
      'Reef-safe sunscreen + after-sun',
      'Cashless payment / ID / booking QR offline',
      'Light layer for air-conditioned coach / breeze on return',
    ],
    parkingTips: [
      'Airlie / Shute Harbour parking fills on peak mornings — use operator instructions only.',
      'Do not leave valuables visible in rental cars.',
      'If staying walkable to check-in, skip driving stress entirely.',
      'Screenshot the meeting-point map the night before.',
    ],
    skipIfShort: [
      'Extra snorkel add-ons that risk missing the lookout window',
      'Long beach walks that threaten muster time',
      'Shopping stops before check-in',
      'Promising kids “empty Whitehaven” in peak season',
    ],
    officialUrls: [HILL, PARK, ALERTS, TIDES],
    downloadPath: '/downloads/whitsunday-practical-planner.html',
    relatedTrailSlugs: ['hill-inlet-lookout', 'whitehaven-beach'],
    tipSections: [
      {
        title: 'Skip or adjust if conditions poor',
        items: [
          'High winds / cancel → pivot to Airlie recovery or a pre-planned buffer day — do not fight the cancellation.',
          'Hill Inlet dropped → enjoy Whitehaven fully; book a second product only if you still need the swirl and weather allows.',
          'Rough seas → seasickness plan and reduced in-water ambitions.',
          'Extreme heat/humidity → slower lookout pace, more water, beach-level success metrics.',
        ],
      },
      {
        title: 'Product filters when booking',
        items: [
          'Prefer listings that name Hill Inlet lookout explicitly if that is your non-negotiable.',
          'Sailing/catamaran days = more atmosphere, often longer transit; rafting/speed = shorter water time, rougher ride.',
          'Read cancellation and fitness notes before paying.',
        ],
      },
    ],
  },
  {
    slug: 'overnight-whitehaven-camping',
    name: 'Overnight Whitehaven Beach camping',
    duration: '2 days / 1 night (transfer + self-sufficient camp)',
    bestFor: 'Campers who want dawn silica sand without day-trip rush',
    summary:
      'QPWS camping permit + boat transfer to Whitehaven, full self-sufficiency (water, stove, no fires), Hill Inlet timing on a quieter clock, and pest-free biosecurity discipline.',
    intro: [
      'Overnight camping is the immersion upgrade. You still share a famous beach in season, but early and late hours feel different. The cost is real logistics: permits, water weight, weather windows and transfer reliability.',
      'Never skip the official booking. Fees apply; tags must be displayed. This site never sells permits and never takes commission on QPWS fees.',
      'Who should pick this: experienced tent campers comfortable carrying water and cooking on a stove. Who should wait: first-time campers, anyone unwilling to pack water in, or groups treating the beach like a free festival.',
      'Win condition: legal camp, enough water, clean pack-out, one excellent dawn or dusk window, and both transfer legs made with margin.',
    ],
    blocks: [
      {
        time: '2–8 weeks before',
        title: 'Book permit · book transfer · train pack weight',
        detail:
          'Reserve the camping area via Queensland Parks Booking Service. Align transfer/water-taxi dates. Practice walking with full water load. Read official camping notes for your site.',
      },
      {
        time: 'Week before',
        title: 'Confirm permit · transfer · weather · share plan',
        detail:
          'Screenshot booking and tag rules. Reconfirm transfer times both ways. Check park alerts. Share itinerary and emergency contacts with someone on the mainland.',
      },
      {
        time: 'Day 1 morning',
        title: 'Airlie resupply · pest check · depart',
        detail:
          'Final water fill (plan generously — often 5 L+ per person per day; no reliable fresh water on most sites — verify official advice). Stove fuel, dry bags, first aid. Pest-free check of gear and boat as required.',
      },
      {
        time: 'Day 1 afternoon',
        title: 'Land · set camp · beach walk · early night',
        detail:
          'Pitch only in booked area. Display tag. No campfires — stove only. Secure food. Sunset photos with headlamp ready. Do not start a long link walk that risks dusk navigation with low water.',
      },
      {
        time: 'Day 2 early',
        title: 'Dawn beach · optional Hill Inlet',
        detail:
          'Quiet photography window on silica sand. If walking to Hill Inlet, closed shoes, water, and strict turnaround for pick-up. Mid-to-high tide helps classic swirl odds — never guaranteed.',
      },
      {
        time: 'Day 2 pick-up',
        title: 'Pack out · transfer home · debrief',
        detail:
          'Leave no rubbish (including micro-trash). Double-check tent site. On mainland, rinse silica from zips and rinse salt from kit. Note water use for next trip.',
      },
    ],
    packing: [
      'Shelter + sleeping system rated for wind',
      'Collapsible water storage + spare capacity',
      'Stove + fuel (no fires)',
      'Headlamp, first aid, comms plan',
      'Stinger protection if swimming',
      'Waste bags for pack-out',
      'Closed-toe shoes for lookout',
      'Dry bags for all critical kit',
      'Offline maps + permit screenshots',
    ],
    parkingTips: [
      'Secure long-stay vehicle parking in Airlie per transfer operator advice.',
      'Do not leave ferry tickets / spare keys in inaccessible places.',
      'Photograph parking bay and restrictions in case of disputes.',
    ],
    skipIfShort: [
      'Multi-track link walks that risk missing pick-up',
      'Alcohol-heavy nights before heat exposure',
      'Promising multiple beaches in one short transfer window',
    ],
    officialUrls: [CAMPING, BOOK, PARK, ALERTS, HILL],
    downloadPath: '/downloads/whitsunday-practical-planner.html',
    relatedTrailSlugs: ['whitehaven-beach', 'hill-inlet-lookout'],
    tipSections: [
      {
        title: 'Self-sufficiency non-negotiables',
        items: [
          'Water in, waste out, stove only, tag displayed, booked footprint only.',
          'Biosecurity: check soil/seeds on gear before and after.',
          'If transfer is delayed by weather, have mainland contingency beds and food budget.',
        ],
      },
    ],
  },
  {
    slug: 'secluded-camping',
    name: 'Secluded camping focus (non-Whitehaven beaches)',
    duration: '2–3 days',
    bestFor: 'Experienced campers prioritising solitude over icon branding',
    summary:
      'Dugong, Chance Bay, Joes, Curlew, Maureens Cove, Crayfish and related sites — quieter sand, harder logistics, same permit and self-sufficiency rules.',
    intro: [
      'Secluded does not mean unregulated. Same QPWS permit system, same no-fire rules, same water discipline. Boat access may be less frequent — plan fixed pick-ups with margin.',
      'Choose beaches that match your vessel draft, tide comfort, walking ambitions and group experience. Quieter sand trades rescue options and social safety nets for atmosphere.',
      'Who should pick this: campers who already handle self-sufficient coastal nights. Who should start elsewhere: first overnight — consider classic Whitehaven camping before remote sites.',
    ],
    blocks: [
      {
        time: 'Planning phase',
        title: 'Pick site · book · study map · match boat',
        detail:
          'Read official camping notes per site (capacity, facilities, seasonal notes). Match transfer or private-vessel skill. Download offline maps. Confirm reverse logistics before you fall in love with a remote name.',
      },
      {
        time: 'Departure day',
        title: 'Water bulk · pest check · conservative weather call',
        detail:
          'Over-pack water. Stove fuel spare. If forecast is marginal, delay — remote beaches punish stubborn schedules. Share trip plan with mainland contact.',
      },
      {
        time: 'On site days',
        title: 'Low-impact camp · early walks · quiet nights',
        detail:
          'Stay in booked footprints. Walk early in cool hours. Swim only with stinger plan. Keep noise and light low for others and wildlife. No improvised fires.',
      },
      {
        time: 'Optional link walks',
        title: 'Only with turnaround times',
        detail:
          'Tracks such as Dugong–Sawmill style links need water margin and a hard turnaround so you never miss pick-up. If in doubt, beach time is enough.',
      },
      {
        time: 'Exit',
        title: 'Pack out · biosecurity · debrief',
        detail:
          'Clean gear of seeds/soil. Report serious hazards via official channels if needed. Note what water volume you actually used.',
      },
    ],
    packing: [
      'Everything from Whitehaven camping list',
      'Extra water margin beyond classic Whitehaven night',
      'Tide table offline',
      'Tent repair kit',
      'Redundant navigation (offline map + paper sketch)',
      'Spare torch batteries',
    ],
    parkingTips: [
      'Airlie long-stay parking as for any multi-day boat trip',
      'Leave a printed itinerary with accommodation host if appropriate',
    ],
    skipIfShort: [
      'Link walks without turnaround times',
      'Sites beyond your boat skill',
      'Wet-season heroics without cancel triggers',
    ],
    officialUrls: [CAMPING, BOOK, PARK, ALERTS],
    relatedTrailSlugs: ['chance-bay-track', 'dugong-sawmill'],
    tipSections: [
      {
        title: 'Solitude vs support',
        items: [
          'Fewer boats can mean slower help — skill and conservatism are the price of quiet.',
          'Do not publish live locations that encourage illegal camping or overcrowding of small sites.',
        ],
      },
    ],
  },
  {
    slug: 'half-day-walk-snorkel',
    name: 'Half-day short walk + snorkel combination',
    duration: 'Half to three-quarter day',
    bestFor: 'Active travellers wanting reef + light island walking without full Whitehaven commitment',
    summary:
      'Operator-led snorkel at a conditions-dependent fringing reef site plus a short island or lookout walk when itineraries allow. Flexibility beats rigid checklists.',
    intro: [
      'This plan accepts that sites change with wind. The win condition is safe water time + one quality short walk or lookout — not collecting every named bay on Instagram.',
      'Who should pick this: visitors with a free half day, people who already did Whitehaven, or anyone prioritising snorkel over silica sand. Who should pick a full Whitehaven product instead: first-timers with only one boat day in the whole trip.',
    ],
    blocks: [
      {
        time: 'Night before',
        title: 'Confirm product · stinger plan · fitness notes',
        detail:
          'Read snorkel brief requirements. Pack suit if season or operator requires. Confirm you are comfortable in open water or will use flotation.',
      },
      {
        time: 'Morning',
        title: 'Depart · snorkel briefing · in-water window',
        detail:
          'Listen to site choice rationale (leeward vs windward). Buddy system. No coral contact, no standing on reef. Secure cameras. Exit when guides call — fatigue causes mistakes.',
      },
      {
        time: 'Midday',
        title: 'Short walk or lookout if offered',
        detail:
          'Closed shoes, water, sun protection. Only start if muster time is realistic. Skip the walk without guilt if heat or schedule is tight — snorkel already counted as success.',
      },
      {
        time: 'Afternoon',
        title: 'Return · rinse · Airlie recovery',
        detail:
          'Rinse gear; rehydrate; note skin/sun exposure. Optional: book Whitehaven icon pair for a later day rather than stacking exhaustion.',
      },
    ],
    packing: [
      'Stinger suit / lycra as required',
      'Reef-safe sunscreen (apply early)',
      'Dry bag',
      'Water shoes or grip sandals as advised',
      'Towel / dry shirt for return',
      'Water bottle + light snack',
    ],
    parkingTips: ['Follow operator check-in parking', 'Arrive early — half-day products still queue'],
    skipIfShort: [
      'Forcing Hill Inlet if not on product',
      'Second boat product same afternoon',
      'Deep free-dive ambition without experience',
    ],
    officialUrls: [GBRMPA, PARK, ALERTS],
    relatedTrailSlugs: ['fringing-reef-snorkel', 'solway-circuit'],
    tipSections: [
      {
        title: 'Conditions first',
        items: [
          'Skipper may change bays — that is competence, not bait-and-switch.',
          'If you cannot swim confidently, say so at the brief and use flotation.',
          'Heart Reef is usually aerial, not a snorkel platform — different product class.',
        ],
      },
    ],
  },
  {
    slug: 'photography-tide-hill-inlet',
    name: 'Photography / tide-optimised Hill Inlet strategy',
    duration: '1–2 days (buffer day strongly recommended)',
    bestFor: 'Photographers and careful planners chasing the classic swirl with weather honesty',
    summary:
      'Build the plan around tide tables, boat products that include Hill Inlet lookout, light direction, crowd timing and a spare day if seas cancel. Mid-to-high tide often delivers the poster pattern — never guaranteed.',
    intro: [
      'Chasing a single image is how people book the wrong product and then hate the Whitsundays. The swirl at Hill Inlet is real, photogenic and highly tide-dependent — but it sits behind boat logistics, weather vetoes and a moderate lookout walk. This itinerary is the operator’s manual for increasing your odds without magical thinking.',
      'Priority order that works: (1) product that actually includes Hill Inlet lookout, (2) weather window that lets the boat run, (3) tide stage that favours channels in turquoise water, (4) light you can live with, (5) composition ethics on the public track. Reverse that order and you will be angry at sand.',
      'Mid-to-high tide often produces the classic white-sand geometries and turquoise channels. Low tide can expose broad flats — still beautiful, different brief (texture, patterns, fewer “poster” ribbons). Neither is “wrong.” Decide which look you are hunting before you judge the day a failure.',
      'Who should use this plan: photographers, content creators, and anyone who cares more about the lookout frame than maximum beach lounge time. Who should use the classic day itinerary instead: first-timers happy with beach + whatever lookout the boat delivers.',
      'Win condition: safe boat day, lookout completed on the signed track, at least one honest set of frames (swirl or low-tide alternate), gear surviving silica, and a buffer day available if day one cancels or the tide stage is wrong for your brief.',
    ],
    blocks: [
      {
        time: '3–7 days before',
        title: 'Book the right product · sketch tide windows',
        detail:
          'Prefer GYG/operator listings that name Hill Inlet lookout (e.g. Hill Inlet + Whitehaven cruises). Avoid vague “Whitsundays islands” products if the lookout is non-negotiable. Open BOM tide tables for Airlie / Whitsunday stations and note high-tide times across your stay. You cannot control the boat clock, but you can pick a stay with two possible on-water days near useful tides.',
      },
      {
        time: '2 days before',
        title: 'Marine forecast gate · buffer commitment',
        detail:
          'If wind/swell looks hostile, mentally assign Day A as “attempt” and Day B as “retry or scenic flight / sail alternative.” Do not stack a same-day international departure after your only attempt. Reconfirm operator cancel policy.',
      },
      {
        time: 'Night before attempt',
        title: 'BOM tides + inclusions + bag prep',
        detail:
          'Note high tide vs expected landing window. Accept that the operator’s muster beats your tide spreadsheet. Charge batteries, clear memory cards, pack dry bag, lens cloths, blower or soft brush for silica, closed-toe shoes, water, polarising filter if you use one. Screenshot booking and meeting point.',
      },
      {
        time: 'Morning of',
        title: 'Final cancel check · travel light but sealed',
        detail:
          'If cancelled, do not improvise unsafe private plans — execute buffer plan. If running: eat, sunscreen, seasickness meds early. Keep body and primary camera in dry bag until on sand/track. Ask crew once whether Hill Inlet is still on today’s plan.',
      },
      {
        time: 'Transit',
        title: 'Scout light · protect gear · manage expectations',
        detail:
          'Note cloud, haze and wind on the water. Harsh midday overhead sun flattens water colour; open shade or slight cloud can help. Do not change lenses in spray. Mentally prep for either swirl geometry or low-tide texture so you are not improvising disappointment.',
      },
      {
        time: 'Lookout window (~40 min walk + shoot)',
        title: 'Hill Inlet lookout — efficient, ethical shooting',
        detail:
          'About 1.3–1.4 km return, moderate, steps — closed shoes, water, sun. Stay on signed track and behind barriers. No off-track vegetation cuts for “unique” angles. Tripod only if stable, not blocking others, and sensible in wind. Work wide establishing frames first, then tighter channel details. Shoot both horizontal and vertical if you need social crops. Keep groups moving — this is a shared track, not a private studio.',
      },
      {
        time: 'If tide is “wrong”',
        title: 'Alternate brief on the same lookout',
        detail:
          'Low tide: emphasise sand texture, rivulets, graphic negative space, people-as-scale carefully without endangering anyone. Overcast: moody palette, fewer specular hits, longer exposures only if you can stabilise safely. Still leave with a coherent set — do not force poster colours that are not there.',
      },
      {
        time: 'Beach window (if time)',
        title: 'Whitehaven silica supporting frames',
        detail:
          'Supporting shots: shoreline curves, hoop pines against turquoise, wet-sand reflections, boat-in-context (not only empty fantasy). Walk a short distance from densest landing only if muster time allows. Seal every zip before you kneel in sand. One hero lookout set beats fifty rushed beach bursts that miss the boat.',
      },
      {
        time: 'Muster · return',
        title: 'Protect cards · rinse mindset',
        detail:
          'Make muster. On the boat, do not open camera bodies in wind. Back on mainland: backup cards, gentle silica removal, note tide stage and light for your records. If the swirl was not there, schedule buffer day or accept the alternate set.',
      },
      {
        time: 'Buffer day (recommended)',
        title: 'Retry lookout product · or scenic flight layer',
        detail:
          'Retry a Hill Inlet–inclusive boat if seas allow. Or book a Heart Reef / Whitehaven scenic flight as a different geometry (aerial, not lookout). Or a sailing day for water-level variety. Do not stack two exhausting boat products and a night flight home.',
      },
    ],
    packing: [
      'Primary camera + one versatile zoom (or phone with spare power) in dry bag',
      'Lens cloths × several + soft brush / rocket blower for silica',
      'Circular polariser if you use filters (watch for uneven sky on ultrawide)',
      'Spare battery + spare card (heat and high burst rates drain both)',
      'Phone waterproof pouch with offline tide screenshot',
      'Closed-toe shoes with grip for lookout steps',
      'UPF shirt, hat with cord, polarised sunglasses',
      'Water + electrolytes + snacks',
      'Microfibre towel to kneel/sit without coating the camera bag',
      'Optional: compact travel tripod only if you will use it ethically on a busy track',
      'Stinger suit if you also plan snorkel frames in season',
    ],
    parkingTips: [
      'Same as day-tour parking — operator meeting point rules',
      'Do not leave camera bags visible in cars',
      'Arrive early; rushing is when gear gets dropped in car parks',
    ],
    skipIfShort: [
      'Multiple boat products same day',
      'Promising clients/family a “guaranteed swirl”',
      'Off-track angles for uniqueness',
      'Drone attempts without authorisation',
      'Changing lenses in spray or wind on the lookout',
    ],
    officialUrls: [HILL, PARK, ALERTS, TIDES],
    downloadPath: '/downloads/whitsunday-practical-planner.html',
    relatedTrailSlugs: ['hill-inlet-lookout', 'whitehaven-beach'],
    tipSections: [
      {
        title: 'Tide & light cheat sheet (planning, not a guarantee)',
        items: [
          'Mid-to-high tide: best odds for classic turquoise channels and sand ribbons from the lookout.',
          'Low tide: texture, graphic sand, different palette — plan an alternate brief.',
          'Overhead harsh sun: polariser and careful white balance; accept less drama or wait for thin cloud.',
          'Late afternoon colour can be lovely but only if your boat product is still on site — most day tours are not sunset lookout products.',
          'Always re-check BOM tides for the correct station; social media “tide tips” go stale.',
        ],
      },
      {
        title: 'Composition & ethics',
        items: [
          'Public track and barriers only — no vegetation cuts, no cliff edges for hero shots.',
          'People in frame: be respectful; avoid shooting strangers’ children as props.',
          'Drones: authorisation required; default is do not fly.',
          'Leave no silica-filled lens caps or wipe litter.',
        ],
      },
      {
        title: 'If the boat cancels or Hill Inlet is dropped',
        items: [
          'Execute buffer day — that is why it exists.',
          'Whitehaven-only day: shoot long shoreline curves and pine-against-water frames; still a strong set.',
          'Scenic flight: different geometry (Heart Reef / aerial Whitehaven) — not a lookout substitute, but a valid Plan B.',
          'Do not hire an ad-hoc vessel in marginal seas just for content.',
        ],
      },
      {
        title: 'Product notes (examples change — verify live)',
        items: [
          'Hill Inlet lookout + Whitehaven cruise style products are the primary pin for this plan.',
          'Half-day Whitehaven products may not include the lookout — read carefully.',
          'Multi-day sails can offer flexible timing but cost more and still face weather.',
        ],
      },
    ],
  },
  {
    slug: 'family-lower-mobility',
    name: 'Family / lower-mobility day-tour plan',
    duration: 'Full day (gentler pacing)',
    bestFor: 'Families and visitors wanting icons with less walking risk',
    summary:
      'Choose day tours with clear inclusions, shorter lookout expectations, flotation for snorkel and honest “skip the steps” options. Whitehaven beach time can still be excellent without the full lookout.',
    intro: [
      'Moderate lookouts are not impossible for all families, but heat + steps + boat schedules punish ambition. Pick products with good briefings and flexible swim options. Celebrate partial success.',
      'Who should pick this: multi-generation groups, visitors with limited mobility, anyone who would rather enjoy sand than negotiate steps. Who should still consider the lookout: steady walkers with closed shoes and a willingness to turn around early.',
      'Win condition: everyone back at muster safely, at least one happy Whitehaven memory, no one pressured up steps they cannot reverse.',
    ],
    blocks: [
      {
        time: 'Pre-book (days before)',
        title: 'Read accessibility notes · email operator',
        detail:
          'Ask about Hill Inlet steps, toilet access, shade, child ages, flotation for snorkel, and cancel policy. Do not rely on marketing photos alone. Book Airlie beds walkable to check-in if possible.',
      },
      {
        time: 'Night before',
        title: 'Snacks kids will eat · layers · expectations',
        detail:
          'Pack familiar food. Set expectation: beach is the prize; lookout is optional. Charge devices; download offline entertainment for transit if needed.',
      },
      {
        time: 'Morning check-in',
        title: 'Arrive early · say needs once',
        detail:
          'Tell crew about mobility or nervous swimmers at briefing. Complete waiver calmly. Seasickness plan for prone kids/adults.',
      },
      {
        time: 'On water / beach',
        title: 'Beach priority · lookout optional',
        detail:
          'If anyone is unsteady, skip the lookout without guilt. Silica sand at sea level is world-class. Swim only with stinger plan and flotation as needed. Hydrate in glare.',
      },
      {
        time: 'Return',
        title: 'Muster together · calm exit',
        detail:
          'Count heads early. Celebrate the day you actually had. Evening: early dinner, rinse salt, no second ambitious boat the same day.',
      },
    ],
    packing: [
      'Hats + spare for kids',
      'Extra water',
      'Snacks children will actually eat',
      'Light long sleeves / UPF',
      'Stinger protection if swimming',
      'Dry bag for spare clothes',
      'Simple first aid + any personal meds',
      'Closed shoes if attempting any lookout section',
    ],
    parkingTips: [
      'Minimise walking distance from car to check-in if possible',
      'Arrive early to avoid rushed transfers with kids',
    ],
    skipIfShort: [
      'Linking island tracks',
      'Multi-day camping as first trip',
      'Promising empty beach in peak season',
      'Forcing full Hill Inlet on reluctant walkers',
    ],
    officialUrls: [PARK, HILL, ALERTS],
    relatedTrailSlugs: ['whitehaven-beach'],
    tipSections: [
      {
        title: 'Success metrics that beat hero metrics',
        items: [
          'Everyone safe and fed',
          'Some silica sand time',
          'No tears on steps',
          'Muster made without sprinting',
        ],
      },
    ],
  },
  {
    slug: 'multi-day-sailing',
    name: 'Multi-day sailing / island-hopping sample',
    duration: '2–5+ days',
    bestFor: 'Travellers wanting archipelago immersion beyond one beach',
    summary:
      'Crewed multi-day sail or bareboat (qualified) hopping anchorages, optional Whitehaven landing, snorkel sites by weather, and cultural stops when offered. Higher cost, higher reward, higher responsibility.',
    intro: [
      'Multi-day sailing is the freedom path when you want sunsets on the water and flexible bay choices. Bareboat requires proven skills and strict marine park compliance. Crewed charters reduce skippering load but not weather risk.',
      'Who should pick this: people with time and budget who want more than a single Whitehaven tick. Who should pick day tours: first-timers with 24 hours and no sea legs confidence.',
      'Win condition: safe passages, at least one excellent snorkel or beach window, no zoning breaches, and a flexible Whitehaven/Hill Inlet attempt when conditions allow.',
    ],
    blocks: [
      {
        time: 'Before charter',
        title: 'Skills check · insurance · weather buffer',
        detail:
          'Crewed: read inclusions, cabin style, meal plan, cancel policy. Bareboat: honest competence, briefing, zoning literacy. Pad flights after disembark day.',
      },
      {
        time: 'Day 1',
        title: 'Depart · settle systems · first leeward bay',
        detail:
          'Safety brief, lifejackets, head rules, toilet and water systems. First anchorage or public mooring per rules — not a race to Whitehaven in marginal wind.',
      },
      {
        time: 'Middle days',
        title: 'Snorkel + optional Whitehaven / cultural stop',
        detail:
          'Conditions drive the sequence. Keep one flexible day for the icon beach/lookout. Cultural stops: marked tracks only, no restricted photography. Reef etiquette always.',
      },
      {
        time: 'Icon attempt day',
        title: 'Whitehaven / Hill Inlet if seas allow',
        detail:
          'Treat like a mini version of the classic or photography plan — tide awareness, closed shoes, muster discipline if using tenders. If seas say no, enjoy another bay without forcing it.',
      },
      {
        time: 'Final day',
        title: 'Return marina · pack-down · biosecurity',
        detail:
          'Clean-down, fuel/water logs, gear check. Note real conditions for your records. Do not book a same-evening long-haul flight after a dawn sail.',
      },
    ],
    packing: [
      'Soft bags not hard cases',
      'Seasickness plan',
      'Reef kit + stinger suit in season',
      'Light layers for breeze at night',
      'Dry bags for electronics',
      'Reef-safe sunscreen + UPF',
      'Closed shoes for any shore lookout',
      'Headlamp',
    ],
    parkingTips: [
      'Marina parking per charter base instructions',
      'Long-stay rules differ — read base email carefully',
    ],
    skipIfShort: [
      'Overpacked day-tour style rigid hour-by-hour lists',
      'Bareboat without skills',
      'Ignoring mooring/anchoring rules for a photo',
    ],
    officialUrls: [GBRMPA, PARK, ALERTS],
    relatedTrailSlugs: ['fringing-reef-snorkel', 'whitehaven-beach', 'ngaro-cultural-site'],
    tipSections: [
      {
        title: 'Crewed vs bareboat',
        items: [
          'Crewed: pay for competence and cooking — still obey crew safety calls.',
          'Bareboat: you are responsible for zoning, weather calls and guest safety.',
          'Both: weather can park you in a bay for a day — that is seamanship.',
        ],
      },
    ],
  },
  {
    slug: 'ngaro-track-outline',
    name: 'Ngaro Track multi-day outline (advanced)',
    duration: 'Multi-day (seasonal · limited numbers)',
    bestFor: 'Experienced walkers with official bookings',
    summary:
      'High-level outline only: ~32 km class multi-day walk across Whitsunday Island, limited capacity, often April–October style window. Verify every metric and rule on QPWS before training or booking flights.',
    intro: [
      'This is not a day-tour extension. If the official page shows limited numbers and seasonal constraints, believe them. Train with a pack in heat and humidity; plan water like a desert walk even though you can see the sea.',
      'This itinerary is orientation only — not a stage-by-stage track notes substitute. Official Queensland Parks information always wins.',
      'Who should pick this: experienced multi-day walkers with bookings. Who should not: anyone still learning self-sufficient camping on easier beaches.',
    ],
    blocks: [
      {
        time: 'Months ahead',
        title: 'Book · read official pack list · boat ends',
        detail:
          'Capacity limits mean early action. Confirm seasonal window, start/finish boat logistics, group size rules and any mandatory equipment lists on official pages only.',
      },
      {
        time: 'Training block',
        title: 'Back-to-back days · heat · water discipline',
        detail:
          'Train consecutive days with realistic pack weight. Practice stove cooking. Heat/humidity fitness matters as much as hill fitness.',
      },
      {
        time: 'Week before',
        title: 'Weather · alerts · share plan',
        detail:
          'Check park alerts and forecasts. Share detailed plan and emergency contacts. Reconfirm boat transfers.',
      },
      {
        time: 'On track',
        title: 'Early starts · turnaround discipline · leave no trace',
        detail:
          'Walk cool hours. Do not invent shortcuts. Emergency plan active daily. Stove only. Pack out waste. Stay on track.',
      },
      {
        time: 'Exit',
        title: 'Boat off · debrief · gear clean',
        detail:
          'Biosecurity clean. Honest debrief on water use and timing for future parties. Do not publish sensitive route hacks that encourage overcrowding or damage.',
      },
    ],
    packing: [
      'Full multi-day hiking kit per official guidance',
      'Water strategy beyond casual beach camping',
      'PLB/comms as appropriate to your risk plan',
      'Stove + fuel, no fire assumption',
      'Navigation redundancy',
      'First aid for remote travel',
    ],
    parkingTips: [
      'Mainland vehicle security for multi-day absence',
      'Leave itinerary with trusted contact',
    ],
    skipIfShort: [
      'Any attempt without confirmed booking',
      'Treating it as a Whitehaven day extension',
      'Wet-season improvisation outside official windows',
    ],
    officialUrls: [PARK, ALERTS, CAMPING],
    relatedTrailSlugs: ['ngaro-track-overview'],
    tipSections: [
      {
        title: 'Reality check',
        items: [
          'If official capacity is full, pick overnight beach camping instead — still excellent.',
          'Metrics (~32 km, seasonal window) are commonly published planning figures — verify live.',
        ],
      },
    ],
  },
  {
    slug: 'airlie-base-day-trips',
    name: 'Airlie Beach base + day-trip realism',
    duration: '3 nights Airlie / 2 on-water days recommended',
    bestFor: 'Visitors flying in who want a weather buffer',
    summary:
      'Base in Airlie Beach with two potential on-water days so one weather cancel does not erase Whitehaven. Book beds early in peak season; keep one flexible tour mindset.',
    intro: [
      'The classic failure mode is a 2-night Airlie stay with one booked tour day and a flight out — then wind cancels. Build a buffer day. Use the spare for a second marine product, a gentler snorkel day, or simple recovery.',
      'Who should pick this: fly-in visitors treating Whitehaven as a trip highlight. Who can compress: locals with flexible weekends and no flight pressure.',
      'Win condition: at least one successful on-water day, beds booked before boats, and airport transfers that do not require sprinting from a morning return cruise to check-in.',
    ],
    blocks: [
      {
        time: 'Booking phase',
        title: 'Beds first · then two boat options',
        detail:
          'In peak dry season book Airlie (or Cannonvale) accommodation early. Hold a primary Whitehaven/Hill Inlet product and a mental Plan B (half-day, sail, snorkel, or scenic flight). Read cancel policies.',
      },
      {
        time: 'Night 1',
        title: 'Arrive · supermarket · early sleep',
        detail:
          'Proserpine (PPP) or Hamilton (HTI) logistics into Airlie. Supermarket water/snacks. Confirm tour check-in details. Pack dry bag tonight. Do not late-night the first evening if you have an early boat.',
      },
      {
        time: 'Day 2',
        title: 'Primary Whitehaven / Hill Inlet tour',
        detail:
          'Execute the classic day plan (or photography plan if that is your brief). If cancelled, sleep and shift the primary attempt to Day 3 without panic shopping a unsafe private boat.',
      },
      {
        time: 'Day 3',
        title: 'Buffer day · retry or alternative',
        detail:
          'Second chance for icons, or snorkel/sail/scenic flight if seas still hate you. Mainland easy walks and lagoon time are valid recovery if both boat days fail — the buffer prevented a total loss.',
      },
      {
        time: 'Depart day',
        title: 'Airport transfers with margin',
        detail:
          'Do not book tight connections after morning boats. Salt gear in a wet bag. Leave time for delays on the road to PPP or transfers to HTI.',
      },
    ],
    packing: [
      'Town clothes + boat clothes separation',
      'Laundry plan for salt gear',
      'Full day-tour kit ready night before each boat day',
      'Offline copies of both booking vouchers',
      'Light rain layer for wet season stays',
    ],
    parkingTips: [
      'Hotel parking or paid lots — read stay instructions',
      'If hiring a car, clarify overnight parking before you book the room',
    ],
    skipIfShort: [
      'Same-day fly-in fly-out for Whitehaven only',
      'One boat booking with no buffer before international flights',
      'Stacking two full boat days back-to-back with kids and no rest',
    ],
    officialUrls: [PARK, ALERTS, TIDES],
    downloadPath: '/downloads/whitsunday-practical-planner.html',
    relatedTrailSlugs: ['whitehaven-beach', 'hill-inlet-lookout'],
    tipSections: [
      {
        title: 'Buffer day menu',
        items: [
          'Retry Hill Inlet–inclusive day tour',
          'Half-day Whitehaven if energy is low',
          'Snorkel-focused product',
          'Heart Reef scenic flight',
          'Genuine rest — sometimes the expert move',
        ],
      },
    ],
  },
];

export function getItinerary(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}
