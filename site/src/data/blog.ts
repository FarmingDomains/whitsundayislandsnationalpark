import { siteImages, type SiteImage } from './pageImages';

/**
 * Long-form practical articles — WPNP section structure (headings, images, TOC).
 * Park-true Whitsunday content; no live status claims.
 */

export type BlogImageKey =
  | 'homeHero'
  | 'hillInlet'
  | 'campingBeach'
  | 'boatArrival'
  | 'fringingReef'
  | 'islandLookout';

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  /** Optional place photo after the section heading */
  imageKey?: BlogImageKey;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  tags: string[];
  bestFor: string;
  readMinutes: number;
  intro: string[];
  keyTakeaways: string[];
  heroImageKey?: BlogImageKey;
  sections: BlogSection[];
  faqs?: { question: string; answer: string }[];
  relatedLinks?: { href: string; label: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'whitehaven-hill-inlet-day-trip-guide',
    title: 'Whitehaven Beach + Hill Inlet: practical day-trip guide and tide timing',
    description:
      'Long-form unofficial guide to a Whitehaven Beach day trip from Airlie Beach — Hill Inlet lookout, tide-aware photography, boat windows, packing and day-trip honesty.',
    date: '2026-07-23',
    tags: ['Whitehaven', 'Hill Inlet', 'day trip', 'tides', 'Airlie Beach'],
    bestFor: 'First-timers stacking Whitehaven + Hill Inlet on a day tour',
    readMinutes: 14,
    heroImageKey: 'hillInlet',
    intro: [
      'Whitehaven Beach is the Whitsundays’ global postcard: pure silica sand meeting turquoise water on Whitsunday Island. It is also a logistics product, not a drive-up mainland beach. There is no public road. Almost every first visit arrives by commercial day tour from Airlie Beach or Shute Harbour, with camping transfers and private vessels as the immersion and freedom alternatives. This long-form guide is the practical layer — how to stack Whitehaven with Hill Inlet lookout, read tides without magical thinking, pack for spray and glare, and leave with a good day even when the boat changes the plan. It is unofficial. Always verify track status, park alerts and operator conditions on parks.qld.gov.au and with your booking the morning you go.',
      'Distances, inclusions, tides and weather change. Always re-check Queensland Parks (Hill Inlet lookout journey and park alerts), BOM tides and your operator the morning you go. Planning figures below are orientation only — not live status.',
    ],
    keyTakeaways: [
      'No road access — boat logistics win or lose the day',
      'Hill Inlet lookout is ~1.3 km return, moderate steps — not flip-flop terrain',
      'Swirl photos are tide-dependent; boat schedule still overrides perfect tide',
      'Build a weather buffer day if Whitehaven is non-negotiable',
    ],
    faqs: [
      { question: 'Does every Whitehaven tour include Hill Inlet?', answer: 'No. Read inclusions the night before. Not every product that says Whitehaven stacks the lookout and a long beach window.' },
      { question: 'How long is the Hill Inlet lookout track?', answer: 'Official planning figures put it at about 1.3–1.4 km return, moderate effort, roughly 40 minutes walking. Confirm status on Queensland Parks.' },
    ],
    sections: [
      {
      heading: 'Boat-access hierarchy first',
      paragraphs: [
        'Start with the access hierarchy. The dominant high-volume path is a crewed day tour: check-in, safety brief, transit, landing, beach and/or lookout, return. The immersion path is overnight camping with a Queensland Parks permit and a transfer window. The freedom path is private vessel, bareboat or multi-day sail charter under marine park rules. If this is your first Whitsunday trip and you have limited time, the day tour is the competent default. Read inclusions the night before — not every product that says “Whitehaven” includes the Hill Inlet lookout track or a long beach window.',
      ],
      },
      {
      heading: 'Hill Inlet lookout and tide realism',
      imageKey: 'hillInlet',
      paragraphs: [
        'Hill Inlet lookout is the elevation that turns the beach brand into three-dimensional geometry. Officially published planning figures put the track at about 1.3–1.4 km return, moderate effort, roughly 40 minutes walking. There are steps and elevation; flip-flops are a common failure mode. Closed-toe shoes with grip, water and sun protection matter even on a “short” walk. Stay on the signed track and behind barriers. The lookout’s famous swirl patterns are tide-dependent. Mid-to-high stages often produce the classic turquoise channels through white sand; low tide can expose broad flats with a different, still beautiful mood. Check BOM tide tables for Airlie / Whitsunday stations and ask your operator what the day is likely to deliver. A perfect tide is useless if the transfer is cancelled for wind.',
      ],
      },
      {
      heading: 'Day-trip honesty and weather buffers',
      paragraphs: [
        'Day-trip honesty protects expectations. In peak dry season and school holidays you will share Whitehaven with other groups. That does not ruin the silica sand; it does mean you manage photo ambitions and protect muster times. Your clock is set by the boat, not by a hiking app. Write the pick-up time down. Do not miss the tender for “one more angle.” If Hill Inlet is dropped for weather or itinerary, enjoy the beach fully — partial success still counts. Build a weather buffer day into any itinerary that treats Whitehaven as non-negotiable. Wind and swell cancel trips; arguing with the skipper is not a strategy.',
      ],
      },
      {
      heading: 'A realistic door-to-door day',
      paragraphs: [
        'A realistic door-to-door day from Airlie often runs eight to eleven hours once check-in, transit, landings and return are stacked. Morning starts are common. Eat a real breakfast, pack motion-sickness options if you are prone, and apply reef-safe sunscreen before you leave town. Dry bags earn their keep in spray. Polarised sunglasses cut silica and water glare. If swimming is on the plan, treat stinger season seriously — typically higher risk from November to May in tropical Queensland. Full-body lycra or stinger suits are common on commercial snorkel stops; when unsure, cover up or stay dry. Beach time without swimming is still excellent.',
      ],
      },
      {
      heading: 'Photography strategy without fretting the muster',
      imageKey: 'homeHero',
      paragraphs: [
        'Photography strategy should be efficient, not frantic. On the lookout, shoot the swirl from public vantage points only — no off-track vegetation cuts. On the beach, walking a few hundred metres away from the densest landing zone often improves empty-sand frames, but only if you can still make muster. Seal cameras and zips against fine silica. Drones need proper authorisation; do not assume recreational flying is allowed. Heart Reef is typically an aerial product, not a walk-up platform — manage that expectation separately from Whitehaven ground time.',
      ],
      },
      {
      heading: 'Families and lower mobility',
      paragraphs: [
        'Families and lower-mobility groups should prioritise beach-level success over lookout ego. The Hill Inlet track is short but moderate underfoot and can feel harder in heat and humidity. Ask operators about steps, toilet access and shade before you book. Partial lookouts or beach-only days are valid. Celebrate the sand under your feet rather than forcing a group up steps that create risk.',
      ],
      },
      {
      heading: 'Packing baseline for a day product',
      paragraphs: [
        'Packing baseline for a day product: dry bag, waterproof phone pouch, UPF shirt, hat with cord, closed-toe shoes for the lookout, water beyond a single small bottle, snacks if catering is light, stinger protection if swimming, and offline booking screenshots. Leave valuables out of rental cars at departure points. Confirm check-in parking or coach pickup instructions the night before so you are not sprinting at 7 a.m.',
      ],
      },
      {
      heading: 'Choosing a tour product',
      paragraphs: [
        'Commercial tour choice is a filter, not a religion. Sailing and catamaran days trade speed for atmosphere and often include snorkel stops. Ocean rafting and faster craft trade comfort for shorter transit. Club-style products add hosted energy that may not suit solitude seekers. Read cancellation policies and fitness notes. Prefer operators that respect marine park rules and cultural protocols. This site may link to tours with affiliate disclosure; camping permits and QPWS fees are never monetised.',
      ],
      },
      {
      heading: 'Where to stay for boat days',
      imageKey: 'boatArrival',
      paragraphs: [
        'Where to stay: Airlie Beach is the practical mainland hub for day tours and camping transfers — backpackers through resorts and holiday parks. Cannonvale extends the bed pool. Hamilton Island is the resort-island alternative; still confirm how you reach Whitehaven from your resort base. Peak dry-season inventory sells out around school holidays and winter Whitehaven demand. Book beds before you optimise for the perfect swirl photo.',
      ],
      },
      {
      heading: 'Official verification',
      paragraphs: [
        'Official verification is non-negotiable. Use Queensland Parks for the park and Hill Inlet lookout journey pages, park alerts for temporary restrictions, GBRMPA for marine zoning context, and BOM for tides and marine forecasts. This unofficial guide does not show live closures. Conditions, fees and product inclusions change.',
      ],
      },
      {
      heading: 'Bottom line',
      paragraphs: [
        'If you take one sentence away: treat Whitehaven + Hill Inlet as a boat-and-tide logistics day first and a postcard second. Confirm inclusions, check tides, pack for spray and stingers, protect the muster, and keep a weather buffer. For printable checklists and decision trees, use our free Whitsunday Islands Practical Planner. For multi-day camping or sailing paths, open the related itineraries and park area guides on this site.',
      ],
    },
    ],
    relatedLinks: [
      { href: '/itineraries/whitehaven-hill-inlet-day/', label: 'Classic day itinerary' },
      { href: '/trails/hill-inlet-lookout/', label: 'Hill Inlet lookout guide' },
      { href: '/trails/whitehaven-beach/', label: 'Whitehaven beach guide' },
      { href: '/tours/', label: 'Tours & activities' },
      { href: '/visit/', label: 'Plan your visit' },
      { href: '/downloads/whitsunday-practical-planner.html', label: 'Free Practical Planner' },
    ],
  },
  {
    slug: 'whitehaven-camping-self-sufficiency',
    title: 'Camping on Whitehaven: transfer, permit and self-sufficiency reality',
    description:
      'Long-form guide to overnight Whitehaven and Whitsunday Islands camping — QPWS permits, transfers, water planning, no campfires, biosecurity and secluded beach hierarchy.',
    date: '2026-07-23',
    tags: ['camping', 'Whitehaven', 'permits', 'self-sufficiency', 'water'],
    bestFor: 'Campers planning overnight Whitehaven or secluded beaches',
    readMinutes: 12,
    heroImageKey: 'campingBeach',
    intro: [
      'Overnight camping on Whitsunday Islands National Park beaches is the immersion upgrade from a day tour. You still need a boat. You also need a Queensland Parks camping booking, a displayed tag, and a self-sufficiency plan that assumes no shops, no reliable fresh water on most sites, and no campfires. This long-form guide covers permit discipline, transfer realism, water and stove logistics, biosecurity, and how Whitehaven compares with quieter beaches. It is unofficial. Book and verify only through official QPWS channels — this website never sells permits and never takes commission on park fees.',
      'Fees, site capacity and transfer options change. Book and verify only through official Queensland Parks camping channels. This website never sells permits and never takes commission on park fees.',
    ],
    keyTakeaways: [
      'QPWS permit + displayed tag — day tours do not use camping permits',
      'No reliable fresh water on most sites — pack it in',
      'Stove only — no campfires on national park islands',
      'This site never sells permits or affiliates park fees',
    ],
    faqs: [
      { question: 'Do I need a permit for day use only?', answer: 'Commercial day tours do not use camping permits. Overnight camping requires a Queensland Parks booking and displayed tag.' },
      { question: 'How much water should I pack?', answer: 'Common planning figures start around five litres or more per person per day in heat — verify official advice and over-pack rather than under-pack.' },
    ],
    sections: [
      {
      heading: 'Permits first — official only',
      paragraphs: [
        'Permits first. Overnight camping requires a booking through the Queensland Parks Booking Service. Fees apply and change; planning figures are commonly discussed around a per-adult nightly rate or a family product, with young children free under published policy — always re-check live prices before you pay. A tag with your booking number must be displayed at your site. Day tours do not use camping permits. Confusing a resort hotel booking with national park camping rights is a classic failure mode.',
      ],
      },
      {
      heading: 'Boat access and beach hierarchy',
      imageKey: 'campingBeach',
      paragraphs: [
        'Access is boat-only. Arrange a camping transfer or water taxi, a private vessel, or multi-day charter logistics that match your booked beach and dates. Whitehaven is the classic overnight brand: maximum silica drama, higher social traffic in peak season, still magical at dawn and dusk. Secluded options such as Dugong, Chance Bay, Joes, Curlew, Maureens Cove, Crayfish and related sites trade crowds for harder pick-ups and more responsibility. Match the beach to your group’s experience, boat skill and weather window — not only to Instagram.',
      ],
      },
      {
      heading: 'Water is non-negotiable',
      paragraphs: [
        'Water is the non-negotiable. There is no reliable fresh water on most national park camping sites. Pack it in. Common planning figures start around five litres or more per person per day in heat and humidity, more if you walk hard — verify current official advice and over-pack rather than under-pack. Collapsible jugs help with boat weight and packing. Do not assume creeks, taps or “I’ll buy more on the island.” Treat water like a desert walk even though you can see the sea.',
      ],
      },
      {
      heading: 'Cooking, fires and leave-no-trace',
      paragraphs: [
        'Cooking and fire rules: national park islands are stove-only. No campfires. Bring a lightweight stove, spare fuel and a plan that works in wind. Secure food from wildlife and other campers’ pests. Carry out all waste, including micro-trash and food scraps. Leave-no-trace is not optional branding — it is how these beaches stay worth booking.',
      ],
      },
      {
      heading: 'Biosecurity and silica sand reality',
      paragraphs: [
        'Biosecurity and pest-free protocols matter. Check boats, gear, clothing and food packaging for soil, seeds and hitchhikers before you leave the mainland and before you move between islands. Reef and island ecosystems are fragile. Follow any official pest-free guidance and operator instructions. Fine silica sand will also invade zippers, cameras and tent seams — pack dry bags and seal kits.',
      ],
      },
      {
      heading: 'Transfer timing and comms',
      paragraphs: [
        'Transfer timing is the other clock that runs your trip. Confirm pick-up and drop-off windows both ways before you commit to long beach walks or Hill Inlet from camp. Sea state changes plans. Build margin. Share your itinerary with someone on the mainland. Mobile coverage is not guaranteed. A basic first-aid kit, headlamp, and emergency thinking belong in the pack even for one night.',
      ],
      },
      {
      heading: 'A practical overnight sequence',
      paragraphs: [
        'A practical overnight sequence: book permit early for peak dates → reconfirm transfer and weather the week before → resupply water and fuel in Airlie → depart with pest checks → set camp only in the booked area → display tag → evening low-impact beach time → dawn photography or lookout if energy and transfer allow → pack out completely on exit. Dawn on Whitehaven is often the emotional payoff that justifies the gear weight.',
      ],
      },
      {
      heading: 'Who should not camp yet',
      paragraphs: [
        'Who should not camp yet: groups that have never self-sufficient camped, travellers unwilling to carry water weight, or anyone treating the beach as a free festival site. Start with a single night on a well-served product if you are new. Multi-day Ngaro Track or remote beach chains are a different sport — limited numbers, seasonal windows, and official requirements apply. Read official journey and camping pages before you train or book flights.',
      ],
      },
      {
      heading: 'Safety stack for campers',
      paragraphs: [
        'Safety stack for campers: stinger awareness if swimming (typically Nov–May), sun and hydration all day, reef etiquette if snorkelling, no drones without authorisation, and obedience to park alerts (track works, seasonal restrictions, management programs). Tropical wet season brings higher storm and cyclone risk — have cancel triggers and flexible mainland beds.',
      ],
      },
      {
      heading: 'Official links to keep offline',
      paragraphs: [
        'Official links to keep offline: parks.qld.gov.au Whitsunday Islands camping and park home, camping bookings and fees pages, park alerts, and GBRMPA Whitsundays access information if you skipper yourself. Operators cancel for weather; rebuild plans rather than forcing the sea.',
      ],
      },
      {
      heading: 'Bottom line',
      paragraphs: [
        'Bottom line: camping unlocks quieter silica hours and starry skies, but only if the permit, water, stove and transfer discipline are non-negotiable. For day-trippers, stay on commercial products and keep camping as a future skill unlock. Use our Practical Planner packing lists and the camping beaches area guide for hierarchy detail, then verify every fee and open status officially before you leave Airlie.',
      ],
    },
    ],
    relatedLinks: [
      { href: '/itineraries/overnight-whitehaven-camping/', label: 'Overnight camping itinerary' },
      { href: '/park/camping-beaches/', label: 'Camping beaches area' },
      { href: '/gear/', label: 'Gear essentials' },
      { href: '/visit/', label: 'Plan your visit' },
    ],
  },
  {
    slug: 'boat-access-decision-tree',
    title: 'Boat access decision tree: tour vs transfer vs private',
    description:
      'How to choose commercial day tours, camping transfers, private vessels or multi-day sail charters for Whitsunday Islands National Park — filters, hubs and weather realism.',
    date: '2026-07-23',
    tags: ['boat access', 'planning', 'Airlie Beach', 'sailing', 'tours'],
    bestFor: 'Planners choosing tour vs transfer vs private vessel',
    readMinutes: 11,
    heroImageKey: 'boatArrival',
    intro: [
      'Every Whitsunday Islands National Park visit is a boat decision first. There is no bridge and no public road to Whitehaven Beach or Hill Inlet. The right product depends on budget, time, desire for solitude, fitness, group size and skippering skill — not on which photo you saved first. This guide is the decision tree we use across this unofficial site. Always re-check operator inclusions, marine forecasts and park alerts before you lock non-refundable flights tight against a single departure.',
      ],
    keyTakeaways: [
      'Every visit is a boat decision first',
      'Day tour is the competent default for first visits with limited time',
      'Camping transfer needs permit + self-sufficiency; private vessel needs zoning literacy',
      'Weather is the veto player — buffer days beat rigid selfie deadlines',
    ],
    faqs: [
      { question: 'What is the best first-visit path?', answer: 'A crewed day tour from Airlie Beach with clear Whitehaven (and ideally Hill Inlet) inclusions, plus a weather buffer if the icon is non-negotiable.' },
      { question: 'Is bareboat a good first choice?', answer: 'Only with proven competence and GBRMPA zoning literacy. Freedom is not an exemption from marine park law.' },
    ],
    sections: [
      {
      heading: 'Filter one — time and complexity',
      paragraphs: [
        'Filter one — time and complexity. If you have one free day from Airlie Beach, a commercial day tour is the high-probability path. If you have two or more nights and camping experience, a permit plus transfer can unlock dawn silica sand. If you have multi-day holiday budget and sailing appetite, a crewed multi-day sail or qualified bareboat expands the archipelago beyond a single beach. Do not buy a multi-day charter because you are angry at day-tour crowds; buy it because you want nights on the water and flexible bay choices.',
      ],
      },
      {
      heading: 'Filter two — solitude versus convenience',
      paragraphs: [
        'Filter two — solitude versus convenience. Day tours maximise convenience and minimise gear; you share the icon. Camping increases solitude at shoulder hours but demands water weight, stove cooking and strict leave-no-trace. Private vessels maximise flexibility if — and only if — you understand GBRMPA zoning, public moorings, anchoring rules and weather. Freedom is not an exemption from marine park law.',
      ],
      },
      {
      heading: 'Filter three — group composition',
      paragraphs: [
        'Filter three — group composition. Families, mixed fitness and first-timers usually win with crewed day products that brief clearly and offer flotation for snorkel stops. Adventure-tolerant groups may prefer faster ocean-rafting styles. Photographers chasing Hill Inlet swirl need products that include the lookout and a tide-aware plan, plus a buffer day. Solo advanced boaters still need margins and emergency thinking.',
      ],
      },
      {
      heading: 'Mainland hub: Airlie Beach',
      imageKey: 'boatArrival',
      paragraphs: [
        'The mainland hub is Airlie Beach for most independent travellers: tour desks, a full accommodation spectrum, supermarkets for camping resupply, and departures toward Shute Harbour and other nodes. Cannonvale and nearby suburbs extend beds. Hamilton Island is the fly-in resort alternative — still confirm the exact product that gets you to Whitehaven or national park beaches from the resort. Peak dry season fills beds and boats; book early.',
      ],
      },
      {
      heading: 'Day-tour subtypes',
      paragraphs: [
        'Day-tour subtypes matter. Sailing and catamaran days trade speed for atmosphere and often include snorkel and lunch. Faster craft compress transit at the cost of comfort. Club-style Whitehaven days add hosted facilities that may not suit people seeking empty sand. Read whether Hill Inlet lookout is included. Confirm fitness notes, age limits and wet-weather policies. Prefer operators aligned with marine park and cultural protocols.',
      ],
      },
      {
      heading: 'Camping transfers are not “a tour with a tent”',
      imageKey: 'campingBeach',
      paragraphs: [
        'Camping transfers are not “a tour with a tent.” You still need a QPWS permit, displayed tag, packed water, stove fuel and pack-out plan. Transfer windows are fixed points of failure if you wander too far or misjudge tides. Secluded beaches increase solitude and decrease rescue and resupply options. Match beach to skill.',
      ],
      },
      {
      heading: 'Multi-day sailing packages',
      paragraphs: [
        'Multi-day sailing packages (two nights, two days, longer charters) are the immersion path without full bareboat responsibility when crewed. Compare cabin style, group size, meal inclusions and cancellation rules. Bareboat requires proven competence — treat marketing copy as marketing. Always factor a weather buffer around international or tight domestic flights.',
      ],
      },
      {
      heading: 'Scenic flights as a layer',
      paragraphs: [
        'Scenic flights (Heart Reef, Whitehaven aerial) are premium context layers, not substitutes for ground-level beach time. They pair well when you have already done a boat day or when seas cancel surface plans. Ethical placement only; aerial photos are not permission to ignore on-water rules later.',
      ],
      },
      {
      heading: 'Weather is the veto player',
      paragraphs: [
        'Weather is the veto player. Wind and swell cancel departures. Build at least one spare on-water day if Whitehaven is non-negotiable. Travel insurance and flexible bookings beat a rigid selfie deadline. When cancelled, pivot to mainland recovery, Conway-adjacent nature if conditions suit, or simply rest — do not invent unsafe private plans in marginal seas.',
      ],
      },
      {
      heading: 'Money honesty',
      paragraphs: [
        'Money honesty: day tours cost less than multi-day sails but still add up in peak season. Camping permits are cheap relative to boats and gear weight. Never pay a third party for “official” park permits outside Queensland Parks systems. Affiliate tour and stay links on this site may earn commissions; park fees never do. See our affiliate disclosure.',
      ],
      },
      {
      heading: 'Decision summary',
      paragraphs: [
        'Decision summary: first visit + limited time → crewed day tour with clear Whitehaven (and ideally Hill Inlet) inclusions. Want dawn sand and can carry water → camping permit + transfer. Want archipelago nights and budget allows → multi-day sail. Can skipper and comply → private vessel with zoning literacy. For printable filters, use the Practical Planner. For product examples, see the Tours page — then verify live availability and conditions yourself.',
      ],
    },
    ],
    relatedLinks: [
      { href: '/park/boat-access-airlie/', label: 'Boat access area guide' },
      { href: '/tours/', label: 'Tours hub' },
      { href: '/itineraries/', label: 'Itineraries' },
      { href: '/stay/', label: 'Where to stay' },
    ],
  },
  {
    slug: 'stinger-season-packing-whitsundays',
    title: 'Stinger season and packing reality for the Whitsundays',
    description:
      'Marine stinger season (typically November–May), full-body suits, reef-safe sun protection, dry bags and tropical boat packing that actually gets used on Whitehaven days.',
    date: '2026-07-23',
    tags: ['stingers', 'safety', 'packing', 'snorkel', 'wet season'],
    bestFor: 'Anyone swimming or snorkelling Nov–May (and year-round packers)',
    readMinutes: 9,
    heroImageKey: 'fringingReef',
    intro: [
      'Tropical Queensland packing fails in two opposite ways: people bring a city beach tote, or they over-pack festival camping kits that ignore boat spray and silica sand. The Whitsundays reward a tight kit built for sun, salt, humidity, stinger risk and waterproofing. This guide is the packing and stinger realism layer for day tours and overnight camping. Follow Queensland Health and operator guidance for jellyfish risk on the day you travel — advice and risk windows can be refined over time.',
      ],
    keyTakeaways: [
      'Stinger risk is typically highest November–May in tropical Queensland',
      'Full-body lycra or stinger suits are common on commercial snorkel stops',
      'Dry bags, UPF and reef-safe SPF matter year-round',
      'When unsure, cover up or stay dry — beach time without swimming is still excellent',
    ],
    faqs: [
      { question: 'When is stinger season?', answer: 'Marine stinger risk is typically highest from November to May. Follow Queensland Health and operator guidance and re-check current advice.' },
      { question: 'Can I skip a stinger suit?', answer: 'In season, full-body protection or avoiding swimming is the competent default. Follow your operator rules for snorkel stops.' },
    ],
    sections: [
      {
      heading: 'Stinger season realism',
      imageKey: 'fringingReef',
      paragraphs: [
        'Marine stinger season is typically discussed as November to May in tropical Queensland waters. Commercial snorkel products often require or strongly recommend full-body lycra or stinger suits in that window. If you are not a confident swimmer, or if conditions are murky, skip the swim without guilt. Whitehaven Beach without entering the water is still a world-class day. Covering skin also reduces sunburn while snorkelling — double win.',
      ],
      },
      {
      heading: 'Sun, UPF and silica glare',
      paragraphs: [
        'Sun is relentless on open sand and water even outside “summer.” Pack UPF long sleeves or a rash shirt, a wide-brim hat with a chin cord (wind on boats steals hats), polarised sunglasses, and reef-safe high-SPF sunscreen applied before departure and reapplied as directed. Silica glare is underrated. Lip balm with SPF earns its pocket space.',
      ],
      },
      {
      heading: 'Waterproofing that actually works',
      paragraphs: [
        'Waterproofing is not optional. Dry bags (often 10–20 L) protect clothes and electronics from spray and wet landings. A floating phone pouch keeps maps, tickets and emergency contacts usable. Assume something will get wet. Separate a dry layer for the return to Airlie.',
      ],
      },
      {
      heading: 'Footwear for sand, rubble and lookouts',
      paragraphs: [
        'Footwear decision: soft sand invites bare feet; coral rubble, rocky landings and the Hill Inlet lookout track do not. Bring closed-toe shoes with grip for the lookout and landings, and simple water shoes if you want a second option. Flip-flops alone are how people slip on steps.',
      ],
      },
      {
      heading: 'Hydration, food and seasickness',
      paragraphs: [
        'Hydration and food: heat plus humidity plus boat days dehydrate people who “don’t feel thirsty.” Carry more water than a single small bottle even if lunch is included. Electrolytes help some travellers. Snacks save moods when schedules slip. Seasickness tablets or bands belong in the bag if you have any history of motion issues — take them early, not after the first swell.',
      ],
      },
      {
      heading: 'Snorkel add-ons and reef etiquette',
      paragraphs: [
        'Snorkel days add mask comfort, fins if not provided, and strict reef etiquette: float, do not stand on coral, do not chase turtles, secure camera lanyards. Underwater hero shots are not worth damaged reef or panic in current. Stay with guides and buddies. If you cannot swim confidently, use flotation and say so at the brief.',
      ],
      },
      {
      heading: 'Camping kit layer',
      imageKey: 'campingBeach',
      paragraphs: [
        'Camping adds a second kit layer: collapsible water storage for multi-litre loads, stove and fuel (no campfires), headlamp, first aid, waste bags, shelter rated for wind, and a comms / emergency plan. Pack out everything. Pest-free checks on gear protect islands. Silica sand will invade zippers — seal and rinse gear later on the mainland.',
      ],
      },
      {
      heading: 'Wet-season reality beyond stingers',
      paragraphs: [
        'Wet season reality beyond stingers: higher humidity, heavy rain bursts, and elevated cyclone awareness in northern Australia’s storm season. Flexible bookings beat rigid photo deadlines. Dry season (roughly May–October) often brings more stable boat weather and peak crowds. There is no perfect zero-risk week — choose buffers that match your risk tolerance.',
      ],
      },
      {
      heading: 'What not to pack',
      paragraphs: [
        'What not to pack: glass that becomes beach hazard, excessive alcohol plans that impair boat safety, drones without authorisation, and “just in case” heavy kits that make wet landings miserable. Judgement outranks product lists. Operators cancel for weather; your kit cannot override the sea.',
      ],
      },
      {
      heading: 'Minimal kits that get used',
      paragraphs: [
        'A minimal day-tour kit that actually gets used: dry bag, phone pouch, UPF shirt, hat with cord, sunglasses, reef-safe sunscreen, closed-toe shoes, water, light snacks, stinger suit if swimming in season, small first aid, offline booking QR. A minimal camping add-on: water bulk storage, stove fuel, headlamp, waste bags, permit tag plan, spare dry clothes.',
      ],
      },
      {
      heading: 'Where to verify and go next',
      paragraphs: [
        'Verify stinger and marine advice via Queensland Health guidance, operator briefings, park alerts and BOM marine forecasts. For printable packing ticks, use the free Whitsunday Islands Practical Planner. For tour product types that match your kit, see the Tours page and the boat-access decision article on this site.',
      ],
    },
    ],
    relatedLinks: [
      { href: '/gear/', label: 'Gear essentials' },
      { href: '/park/marine-safety-seasons/', label: 'Marine safety & seasons' },
      { href: '/trails/fringing-reef-snorkel/', label: 'Snorkel guide' },
      { href: '/downloads/whitsunday-practical-planner.html', label: 'Free Practical Planner' },
    ],
  },
  {
    slug: 'ngaro-cultural-site-respectful-visit',
    title: 'Ngaro Cultural Site: how to visit respectfully',
    description:
      'Long-form guidance for respectful visits to Ngaro cultural interpretive sites in the Whitsundays — tracks, photography ethics, Sea Country and reef etiquette.',
    date: '2026-07-23',
    tags: ['Ngaro', 'culture', 'respect', 'Sea Country', 'ethics'],
    bestFor: 'Visitors planning cultural stops and Sea Country respect',
    readMinutes: 10,
    heroImageKey: 'islandLookout',
    intro: [
      'The Ngaro people are Traditional Owners of the Whitsunday islands and surrounding Sea Country — often described as seafaring people with deep ongoing connection to land and sea. Public cultural sites and interpretive places exist so visitors can learn appropriate context, not so every ridge and rock face becomes an open exploration zone. This unofficial guide outlines respectful visitor behaviour. It does not retell restricted sacred stories, display restricted imagery, or speak for Ngaro people. Always defer to official park communications, on-site signage and Traditional Owner guidance.',
      ],
    keyTakeaways: [
      'Stay on marked public paths only',
      'Do not invent or retell restricted sacred stories',
      'Photography ethics: no restricted rock art; no drones without authorisation',
      'Reef etiquette is cultural practice as well as ecology',
    ],
    faqs: [
      { question: 'Can I photograph rock art?', answer: 'Only where permitted. If a sign says no photos, stop. Distant landscape frames from public paths are the default.' },
      { question: 'Does this site speak for Ngaro Traditional Owners?', answer: 'No. This is an independent unofficial guide. Defer to official park communications, signage and Traditional Owner guidance.' },
    ],
    sections: [
      {
      heading: 'Why this matters on a beach trip',
      imageKey: 'islandLookout',
      paragraphs: [
        'Why this matters on a “beach holiday” website: Whitehaven silica sand sits inside a living cultural landscape and a World Heritage marine context. Treating the islands as an empty theme park produces the same failures seen worldwide — off-track damage, disrespectful photography, and ignorance of Sea Country rules that also protect reefs. Cultural respect and marine park etiquette are the same trip quality system.',
      ],
      },
      {
      heading: 'Access and closed-site discipline',
      paragraphs: [
        'Access is usually by boat: commercial sailing or day products that list cultural stops, or private vessels under park and marine rules. Confirm inclusions. If a site is closed or restricted, do not invent a replacement “secret” visit. Schedules change with weather and management needs. Follow crew instructions at landings — they are often managing both safety and site protection.',
      ],
      },
      {
      heading: 'On the track',
      paragraphs: [
        'On the track: stay on marked paths only. Do not cut corners through vegetation. Do not climb on rock art panels or cultural fabric. Do not touch ochre, engravings or surfaces even if others do for photos. Read interpretive signs slowly. Listening more than collecting images is the high-value behaviour.',
      ],
      },
      {
      heading: 'Photography ethics',
      paragraphs: [
        'Photography ethics: distant landscape frames from public paths are the default. Do not photograph restricted rock art where prohibited. Do not photograph ceremonies or people without clear permission. Do not drone cultural sites or any park area without proper authorisation. If a sign says no photos, that is the end of the debate. Social media urgency is not a cultural exemption.',
      ],
      },
      {
      heading: 'Language and storytelling boundaries',
      paragraphs: [
        'Language and storytelling: visitors should not invent or retell sacred stories. Public interpretive material, authorised guides and Traditional Owner-endorsed products are what outsiders should rely on. Curiosity is welcome; appropriation and guesswork are not. If a guide declines a question, accept the boundary.',
      ],
      },
      {
      heading: 'Sea Country and reef etiquette',
      imageKey: 'fringingReef',
      paragraphs: [
        'Sea Country connection means reef etiquette is cultural practice as well as ecology. No standing on coral. No taking shells, coral or “souvenirs.” No chasing wildlife for content. Follow GBRMPA zoning if you skipper. Choose commercial operators that brief marine rules seriously rather than treating the reef as a backdrop.',
      ],
      },
      {
      heading: 'Time budgeting on multi-stop days',
      paragraphs: [
        'Time budgeting: cultural stops on multi-stop boat days can be brief. That is still enough to orient respectfully if you are present. Do not rush past signs to race a lookout. If culture is a priority for your trip, choose products that emphasise interpretive time rather than only maximum beach minutes.',
      ],
      },
      {
      heading: 'Children and groups',
      paragraphs: [
        'Children and groups: set expectations before landing — quiet voices, stay on path, hands off art, no rock throwing. Adults model behaviour. Group leaders should count people at muster without shouting across sensitive areas.',
      ],
      },
      {
      heading: 'What this site will not do',
      paragraphs: [
        'What this site will not do: publish maps to restricted places, show ceremony imagery, or monetise “secret sacred sites.” We link to official park pages and encourage authorised experiences. Farming Domains operates independent unofficial guides — not on behalf of Ngaro Traditional Owners, QPWS or GBRMPA.',
      ],
      },
      {
      heading: 'A simple rule when unsure',
      paragraphs: [
        'If you feel unsure, use this rule: if an action would be rude in someone else’s home or church, it is rude on Country. When in doubt, ask an authorised guide or do less. Turning around from a closed track is respect, not missing out.',
      ],
      },
      {
      heading: 'Next steps',
      paragraphs: [
        'Next steps: read the Ngaro culture park area guide on this site, check parks.qld.gov.au for current access, and choose tours that state cultural protocol alignment. Pair cultural humility with the boat-access and packing articles so the whole trip is competent — not only scenic.',
      ],
    },
    ],
    relatedLinks: [
      { href: '/park/ngaro-culture/', label: 'Ngaro culture area' },
      { href: '/trails/ngaro-cultural-site/', label: 'Cultural site trail guide' },
      { href: '/visit/', label: 'Plan your visit' },
    ],
  },
];

export function resolveBlogImage(key?: BlogImageKey): SiteImage {
  if (key && key in siteImages) return siteImages[key as keyof typeof siteImages];
  return siteImages.homeHero;
}

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
