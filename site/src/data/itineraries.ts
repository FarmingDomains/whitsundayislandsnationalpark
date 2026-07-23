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

export const itineraries: Itinerary[] = [
  {
    slug: 'whitehaven-hill-inlet-day',
    name: 'Classic Whitehaven + Hill Inlet day trip',
    duration: 'Full day (tour-dependent · ~8–11 hrs door to door)',
    bestFor: 'First-timers who want the icon pair with minimal self-skippering',
    summary:
      'Commercial day tour from Airlie Beach / Shute Harbour to Whitehaven Beach with Hill Inlet lookout when included — the dominant high-volume path. Tide-aware photography, sun discipline and realistic beach time expectations.',
    intro: [
      'This is the plan most visitors should start with. You trade solitude for logistics simplicity: check-in, boat briefing, landing, lookout, beach, return. Read your specific product inclusions the night before — not every tour stacks the full icon pair every day.',
      'Day-trip honesty: you will share Whitehaven with other groups in season. That does not ruin the silica sand. It does mean you manage expectations and protect your pick-up window.',
      'Who should pick this: first-timers, mixed-ability groups, short stays in Airlie, and anyone without camping gear. Who should upgrade later: campers and multi-day sailors seeking quieter hours.',
    ],
    blocks: [
      {
        time: '06:30–07:30',
        title: 'Airlie base · light breakfast · check weather',
        detail:
          'Confirm tour SMS/email for departure changes. Marine forecast glance. Pack dry bag, water, stinger suit if swimming in season, closed shoes for Hill Inlet, reef-safe sunscreen already applied.',
      },
      {
        time: '07:30–08:30',
        title: 'Check-in · Shute Harbour or Airlie departure',
        detail:
          'Arrive early for parking / coach transfer / waiver. Seasickness tablet if needed. Listen to safety brief — lifejackets, swim rules, stinger advice.',
      },
      {
        time: 'Morning on water',
        title: 'Transit · optional snorkel stop',
        detail:
          'Some products snorkel first if conditions favour a leeward site. Stay with guides; do not stand on coral. If conditions are poor, operators may go beach-first — trust the skipper.',
      },
      {
        time: 'Midday window',
        title: 'Hill Inlet lookout (~1.3 km return · ~40 min)',
        detail:
          'If included: closed shoes, water, steady pace on steps. Mid-to-high tide improves classic swirl odds — but boat schedule wins over perfect tide if they conflict. Stay on the signed track.',
      },
      {
        time: 'Afternoon window',
        title: 'Whitehaven Beach time',
        detail:
          'Swim only if conditions and stinger guidance allow. Hydrate. Photograph long empty stretches if you walk away from the densest landing zone — always know return time.',
      },
      {
        time: 'Return',
        title: 'Boat home · Airlie evening',
        detail:
          'Do not cut the muster time. Evening: rehydrate, light dinner, optional tour booking for a weather buffer day if the icon pair was incomplete.',
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
    ],
    parkingTips: [
      'Airlie / Shute Harbour parking fills on peak mornings — use operator instructions.',
      'Do not leave valuables visible in rental cars.',
      'If staying walkable to check-in, skip driving stress entirely.',
    ],
    skipIfShort: [
      'Extra snorkel add-ons that risk missing the lookout window',
      'Long beach walks that threaten muster time',
      'Shopping stops before check-in',
    ],
    officialUrls: [HILL, PARK, ALERTS],
    downloadPath: '/downloads/whitsunday-practical-planner.html',
    relatedTrailSlugs: ['hill-inlet-lookout', 'whitehaven-beach'],
    tipSections: [
      {
        title: 'Skip or adjust if conditions poor',
        items: [
          'High winds / cancel → pivot to Airlie coastal walk, Conway-related mainland options, or a buffer day — do not fight the cancellation.',
          'Hill Inlet dropped from itinerary → enjoy Whitehaven fully; book a second product only if you still need the swirl and weather allows.',
          'Rough seas → seasickness plan and reduced in-water ambitions.',
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
      'Overnight camping is the immersion upgrade. You still share a famous beach, but early and late hours feel different. The cost is real logistics: permits, water weight, weather windows and transfer reliability.',
      'Never skip the official booking. Fees apply; tags must be displayed. This site never sells permits.',
    ],
    blocks: [
      {
        time: 'Week before',
        title: 'Confirm permit · transfer · weather',
        detail:
          'Screenshot booking, check park alerts, reconfirm water taxi / transfer times, share trip plan with a mainland contact.',
      },
      {
        time: 'Day 1 morning',
        title: 'Airlie resupply · depart transfer',
        detail:
          'Final water fill (plan generously — often 5 L+ per person per day). Stove fuel, dry bags, first aid. Pest check gear and boat as required.',
      },
      {
        time: 'Day 1 afternoon',
        title: 'Set camp · beach walk · early night',
        detail:
          'Pitch in booked area only. Display tag. No campfires. Secure food from wildlife. Sunset photos with a headlamp ready for dark.',
      },
      {
        time: 'Day 2 early',
        title: 'Dawn beach · optional Hill Inlet',
        detail:
          'Quiet photography window. If walking to Hill Inlet, leave time and water for return before pick-up. Closed shoes for the lookout track.',
      },
      {
        time: 'Day 2 pick-up',
        title: 'Pack out · transfer home',
        detail:
          'Leave no rubbish. Double-check micro-trash. Debrief water use for next camp.',
      },
    ],
    packing: [
      'Shelter + sleeping system rated for wind',
      'Collapsible water storage + spare',
      'Stove + fuel (no fires)',
      'Headlamp, first aid, comms plan',
      'Stinger protection if swimming',
      'Waste bags for pack-out',
    ],
    parkingTips: [
      'Secure long-stay vehicle parking in Airlie per transfer operator advice.',
      'Do not leave ferry tickets / spare keys in inaccessible places.',
    ],
    skipIfShort: ['Multi-track link walks that risk missing pick-up', 'Alcohol-heavy nights before heat exposure'],
    officialUrls: [CAMPING, BOOK, PARK, ALERTS],
    relatedTrailSlugs: ['whitehaven-beach', 'hill-inlet-lookout'],
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
      'Choose beaches that match your vessel draft, tide comfort and walking ambitions.',
    ],
    blocks: [
      {
        time: 'Planning',
        title: 'Pick site · book · study map',
        detail:
          'Read official camping notes per site. Match transfer availability. Download offline maps.',
      },
      {
        time: 'On site',
        title: 'Low-impact camp · short walks',
        detail:
          'Stay in booked footprints. Walk early. Swim only with stinger plan. Keep noise and light low for others and wildlife.',
      },
      {
        time: 'Exit',
        title: 'Pack out · biosecurity',
        detail: 'Clean gear of seeds/soil. Report hazards via official channels if needed.',
      },
    ],
    packing: ['Same as Whitehaven camping + extra water margin', 'Tide table offline', 'Repair kit for tent'],
    parkingTips: ['Airlie long-stay parking as for any multi-day boat trip'],
    skipIfShort: ['Link walks without turnaround times', 'Sites beyond your boat skill'],
    officialUrls: [CAMPING, BOOK, PARK],
    relatedTrailSlugs: ['chance-bay-track', 'dugong-sawmill'],
  },
  {
    slug: 'half-day-walk-snorkel',
    name: 'Half-day short walk + snorkel combination',
    duration: 'Half to three-quarter day',
    bestFor: 'Active travellers wanting reef + light island walking without full Whitehaven commitment',
    summary:
      'Operator-led snorkel at a conditions-dependent fringing reef site plus a short island or lookout walk when itineraries allow. Flexibility beats rigid checklists.',
    intro: [
      'This plan accepts that sites change with wind. The win condition is safe water time + one quality walk, not collecting every named bay.',
    ],
    blocks: [
      {
        time: 'Morning',
        title: 'Depart · snorkel briefing',
        detail: 'Stinger suit if required. Buddy system. No coral contact.',
      },
      {
        time: 'Midday',
        title: 'Short walk or lookout if offered',
        detail: 'Closed shoes. Water. Return before muster.',
      },
      {
        time: 'Afternoon',
        title: 'Return · Airlie recovery',
        detail: 'Rinse gear; rehydrate; optional second day for Whitehaven icon pair.',
      },
    ],
    packing: ['Stinger suit', 'Reef-safe sunscreen', 'Dry bag', 'Water shoes'],
    parkingTips: ['Follow operator check-in parking'],
    skipIfShort: ['Forcing Hill Inlet if not on product'],
    officialUrls: [GBRMPA, PARK],
    relatedTrailSlugs: ['fringing-reef-snorkel', 'solway-circuit'],
  },
  {
    slug: 'photography-tide-hill-inlet',
    name: 'Photography / tide-optimised Hill Inlet strategy',
    duration: '1–2 days (buffer recommended)',
    bestFor: 'Photographers chasing the classic swirl with weather honesty',
    summary:
      'Build the plan around tide tables, boat products that include the lookout, and a spare day if seas cancel. Mid-to-high tide often delivers the poster pattern — never guaranteed.',
    intro: [
      'Chasing a single image is how people book the wrong product. Prioritise operators that include Hill Inlet lookout, then align as best you can with tides, then accept that light and wind still veto perfection.',
    ],
    blocks: [
      {
        time: 'Night before',
        title: 'BOM tides + marine forecast',
        detail: 'Note high tide relative to expected landing. Have Plan B activity if cancelled.',
      },
      {
        time: 'On the lookout',
        title: 'Shoot efficiently · stay safe',
        detail:
          'Tripods only if stable and allowed by crowd/track etiquette. No off-track angles. Protect gear from silica dust.',
      },
      {
        time: 'Buffer day',
        title: 'Retry or sail alternative',
        detail: 'If day one fails, use the spare day — do not stack non-refundable hard deadlines.',
      },
    ],
    packing: ['Lens cloths', 'Dry bag', 'ND/CPL if you use filters', 'Closed shoes', 'Backup phone battery'],
    parkingTips: ['Same as day-tour parking'],
    skipIfShort: ['Multiple boat products same day'],
    officialUrls: [HILL, 'https://www.bom.gov.au/australia/tides/'],
    relatedTrailSlugs: ['hill-inlet-lookout', 'whitehaven-beach'],
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
    ],
    blocks: [
      {
        time: 'Pre-book',
        title: 'Read accessibility notes',
        detail: 'Email operators about steps at Hill Inlet, toilet access and shade. Do not rely on marketing photos alone.',
      },
      {
        time: 'On day',
        title: 'Beach priority · lookout optional',
        detail: 'If anyone is unsteady, skip the lookout without guilt. Silica sand at sea level is still world-class.',
      },
    ],
    packing: ['Hats', 'Extra water', 'Snacks kids will actually eat', 'Light long sleeves', 'Stinger protection'],
    parkingTips: ['Minimise walking distance from car to check-in if possible'],
    skipIfShort: ['Linking island tracks', 'Multi-day camping first trip'],
    officialUrls: [PARK, HILL],
    relatedTrailSlugs: ['whitehaven-beach'],
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
    ],
    blocks: [
      {
        time: 'Day 1',
        title: 'Depart · settle systems',
        detail: 'Safety brief, zoning awareness, first leeward anchorage or mooring per rules.',
      },
      {
        time: 'Middle days',
        title: 'Snorkel + optional Whitehaven / cultural stop',
        detail: 'Conditions drive the sequence. Keep one flexible day for the icon beach.',
      },
      {
        time: 'Final day',
        title: 'Return marina · pack-down',
        detail: 'Biosecurity clean-down; fuel/water logs; guest feedback on real conditions for your notes.',
      },
    ],
    packing: ['Soft bags not hard cases', 'Seasickness plan', 'Reef kit', 'Light layers for breeze at night'],
    parkingTips: ['Marina parking per charter base instructions'],
    skipIfShort: ['Overpacked day-tour style rigid itineraries'],
    officialUrls: [GBRMPA, PARK],
    relatedTrailSlugs: ['fringing-reef-snorkel', 'whitehaven-beach', 'ngaro-cultural-site'],
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
    ],
    blocks: [
      {
        time: 'Months ahead',
        title: 'Book · read official pack list',
        detail: 'Capacity limits mean early action. Confirm start/finish boat logistics.',
      },
      {
        time: 'On track',
        title: 'Early starts · turnaround discipline',
        detail: 'Walk cool hours. Do not invent shortcuts. Emergency plan active daily.',
      },
    ],
    packing: ['Full multi-day hiking kit', 'Water strategy beyond casual camping', 'PLB/comms as appropriate'],
    parkingTips: ['Mainland vehicle security for multi-day absence'],
    skipIfShort: ['Any attempt without confirmed booking'],
    officialUrls: [PARK, ALERTS, CAMPING],
    relatedTrailSlugs: ['ngaro-track-overview'],
  },
  {
    slug: 'airlie-base-day-trips',
    name: 'Airlie Beach base + day-trip realism',
    duration: '3 nights Airlie / 2 on-water days recommended',
    bestFor: 'Visitors flying in who want a weather buffer',
    summary:
      'Base in Airlie Beach with two potential on-water days so one weather cancel does not erase Whitehaven. Book beds early in peak season; keep one flexible tour voucher mindset.',
    intro: [
      'The classic failure mode is a 2-night Airlie stay with one booked tour day and a flight out — then wind cancels. Build a buffer day. Use the spare for Conway mainland nature, lagoon time, or a second marine product.',
    ],
    blocks: [
      {
        time: 'Night 1',
        title: 'Arrive · supermarket · early sleep',
        detail: 'Confirm tour check-in details. Pack dry bag tonight, not at 6 a.m.',
      },
      {
        time: 'Day 2',
        title: 'Primary Whitehaven / Hill Inlet tour',
        detail: 'Execute the classic day plan. If cancelled, sleep and shift to Day 3.',
      },
      {
        time: 'Day 3',
        title: 'Buffer day · snorkel or retry',
        detail: 'Second chance for icons or alternative reef/sailing product.',
      },
      {
        time: 'Depart',
        title: 'Airport transfers with margin',
        detail: 'Proserpine or Hamilton Island logistics — do not book tight connections after morning boats.',
      },
    ],
    packing: ['Town clothes + boat clothes separation', 'Laundry plan for salt gear'],
    parkingTips: ['Hotel parking or paid lots — read stay instructions'],
    skipIfShort: ['Same-day fly-in fly-out for Whitehaven only'],
    officialUrls: [PARK, ALERTS],
    relatedTrailSlugs: ['whitehaven-beach', 'hill-inlet-lookout'],
  },
];

export function getItinerary(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}
