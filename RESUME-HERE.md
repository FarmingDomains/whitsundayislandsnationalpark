# Resume here — Whitsunday Islands National Park guide

**Last updated:** 2026-07-24 (real CC photos + full portfolio footer; FTP by Ian)  
**Repo:** https://github.com/FarmingDomains/whitsundayislandsnationalpark  
**Domain:** https://www.whitsundayislandsnationalpark.com.au/  
**Working dir:** `C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark`  
**Latest commit:** `7107462` — *Replace AI heroes with real CC Whitehaven photos and full portfolio footer* (`main` = `origin/main`)

---

## Status: READY FOR FTP (real photos)

Full Astro static site. Upload **contents** of `site/dist/` via FTP to VentraIP document root.

| Item | State |
|------|--------|
| Stack | Astro 7 + Tailwind 4, tropical lagoon palette, port **4340** |
| Build | `cd site` → `npm run build` → **49 pages** in `site/dist/` — **built 2026-07-24** |
| Git `main` | Pushed `7107462` |
| Imagery | **5 live slots + OG = real Wikimedia Commons CC photos**; fringing reef **still AI** (no worthy free underwater match) |
| Credits | Author · licence link · Commons on content images (`pageImages.ts` / `attributionHtml`) |
| Portfolio footer | Full 12-park set excluding self + Farming Domains |
| Brand mark | Unique Whitsunday SVG (`BrandMark.astro`) |
| GYG | **9 product deep links** + `campaign=whitsundayislandsnationalpark` |
| Amazon | `PUBLIC_AMAZON_TAG` set |
| Splitforms | Key in `site/.env` (no BOM) — baked into dist |
| Booking / AdSense | Empty until CJ / AdSense approval |

---

## What changed this session (photos + footer)

### Real photos live (AI kept in `site/src/images/_ai-backup/`)

| Slot | Subject | Author | Licence |
|------|---------|--------|---------|
| `homeHero` + OG | Whitehaven northern spit from Hill Inlet lookout | Hush Neo | CC BY-SA 4.0 |
| `hillInlet` | Classic Hill Inlet tidal swirl | Damien Dempsey | CC BY 2.0 |
| `campingBeach` | Beach-level Whitehaven shore (camping/day context) | The 3B's | CC BY 2.0 |
| `boatArrival` | Yachts & beach landings | slug69 | CC BY-SA 2.0 |
| `islandLookout` | Lookout over spit + archipelago | Damien Dempsey | CC BY 2.0 |
| `fringingReef` | Underwater snorkel | — | **AI kept** |

Full licence log: `docs/image-sources.md`  
Spares (not live): `site/src/images/commons/`  
Rollback: copy from `_ai-backup/` if needed.

**Why better:** Hero is the iconic Hill Inlet / Whitehaven spit people search for (not a generic AI boat). Hill Inlet swirl is real tidal patterning. Trust + SEO honesty improve vs pure AI stock. Attribution is on-page where images show.

### Portfolio footer (Whitsunday)

`site/src/data/navigation.ts` `portfolioLinks` + `seo.ts` `sisterParks` now list all sisters **except self**, plus Farming Domains.  
Whitsunday newly gained Karijini, Ku-ring-gai Chase, Grampians among others.

**Sister parks:** `navigation.ts` was also updated on disk for Blue Mountains, Otway, Karijini, Uluru, Grampians, Cradle, Sydney Harbour, Ku-ring-gai, Springbrook, Port Campbell, Royal NP — **those changes are uncommitted** in each repo (not part of this Whitsunday ship). Rebuild + commit each when deploying those sites.

---

## Dev / deploy

```powershell
cd C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site
# if needed: copy .env.example .env and set keys (UTF-8 **without BOM**)
npm install
npm run dev              # http://127.0.0.1:4340/
npm run build            # → site/dist/
```

**FTP now:** Upload **contents** of  
`C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site\dist\`  
to document root (not the `dist` folder itself).  
`dist/` is gitignored — always build locally before upload.  
After any `.env` change: **rebuild + re-upload full dist**.

**Gotcha:** A UTF-8 BOM on `.env` breaks `PUBLIC_SPLITFORMS_ACCESS_KEY`. File must start with `PUBLIC_...` bytes, not `EF BB BF`.

---

## GYG products pinned (`site/src/data/affiliates.ts`)

| Priority | id | GYG product |
|----------|-----|-------------|
| 1 Primary | hill-inlet-whitehaven-cruise | t410838 |
| 2 | whitehaven-half-day | t132276 |
| 3 | camira-full-day-sail | t134625 |
| 4 | providence-day-sail-snorkel | t391833 |
| 5 | islands-snorkel-lunch | t600985 |
| 6 | whitehaven-beach-club | t1073316 |
| 7 | two-night-sailing-meals | t407266 |
| 8 | two-day-gbr-sailing | t408105 |
| 9 | heart-reef-scenic-flight | t669380 |

Omitted on purpose: duplicate Heart Reef flight t259972.

---

## Site map (high level)

- `/` — boat-access hierarchy, real Whitehaven hero, marine realism, lead magnet  
- `/park/` + 8 areas · `/trails/` + 8 · `/itineraries/` + 9 · `/articles/` ×5  
- `/visit/` · `/stay/` · `/tours/` · `/gear/` · `/maps/`  
- Legal: disclaimer, affiliate, privacy, terms, contact  
- Lead magnet: `/downloads/whitsunday-practical-planner.html`

Docs: `docs/image-sources.md`, `docs/LAUNCH-CHECKLIST.md`, `MONETISATION.md`, `PHASE-2.md`, `IMPLEMENT-PORTFOLIO-FOOTER.md`

---

## Next session priorities (pick as needed)

1. **Post-FTP QA** — real hero + credits on production, contact/visit forms, GYG, mobile nav, HTTPS  
2. **Google Search Console** — property + sitemap  
   `https://www.whitsundayislandsnationalpark.com.au/sitemap-index.xml`  
3. **Sister parks footers** — commit `navigation.ts` (and rebuild/FTP) on each dirty park repo so all 12 footers stay in sync  
4. **Booking.com** — `PUBLIC_BOOKING_AID` when CJ approved → rebuild → FTP  
5. **AdSense** — `PUBLIC_ADSENSE_CLIENT` + `public/ads.txt` → rebuild → FTP  
6. **Optional images** — replace reef/tent AI only if a *worthy* free or original photo appears; try `commons/julie-bay-1280.jpg` as boat/Hill alt if preferred  

---

## Quick “is it healthy?”

```powershell
cd C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site
npm run build
# open site/dist/index.html; confirm real hero webp under _astro/hero-whitehaven*
```

Never monetise QPWS camping permits. Always defer to parks.qld.gov.au + GBRMPA for live status.
