# Resume here — Whitsunday Islands National Park guide

**Last updated:** 2026-07-23 (soft-launch ready; FTP by Ian)  
**Repo:** https://github.com/FarmingDomains/whitsundayislandsnationalpark  
**Domain:** https://www.whitsundayislandsnationalpark.com.au/  
**Working dir:** `C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark`  
**Latest commit:** `43ea0a7` — *Ship soft-launch polish* (`main` = `origin/main`)

---

## Status: SOFT-LAUNCH READY

Full Astro static site. User uploads **contents** of `site/dist/` via FTP to VentraIP document root.

| Item | State |
|------|--------|
| Stack | Astro 7 + Tailwind 4, tropical lagoon palette, port **4340** |
| Build | `cd site` → `npm run build` → **49 pages** in `site/dist/` |
| Git `main` | Clean, pushed |
| Brand mark | Unique Whitsunday SVG (`BrandMark.astro`) — not Uluru rock |
| Content | Park areas ×8 (all fattened), trails ×8 (thin ones fattened), itineraries ×9 (all fattened; photography deepest), articles ×5 (long-form) |
| GYG | **9 product deep links** pinned + `campaign=whitsundayislandsnationalpark` |
| Amazon | `PUBLIC_AMAZON_TAG` set (e.g. `rero07-22`) |
| Splitforms | Key in `site/.env` (no BOM) — baked into dist for contact + lead forms |
| Booking / AdSense | Empty until CJ / AdSense approval |
| Planner | `/downloads/whitsunday-practical-planner.html` — portfolio template (domain at top) |
| Sitemap (GSC) | `https://www.whitsundayislandsnationalpark.com.au/sitemap-index.xml` |

---

## Dev / deploy

```powershell
cd C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site
# if needed: copy .env.example .env and set keys (UTF-8 **without BOM**)
npm install
npm run dev              # http://127.0.0.1:4340/
npm run build            # → site/dist/
```

**FTP:** Upload **contents** of `site/dist/` to document root (not the `dist` folder itself).  
`dist/` is gitignored — always build locally before upload.  
After any `.env` change: **rebuild + re-upload full dist**.

**Gotcha:** A UTF-8 BOM on `.env` breaks `PUBLIC_SPLITFORMS_ACCESS_KEY` (Vite reads a wrong key name). File must start with `PUBLIC_...` bytes, not `EF BB BF`.

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
Helper re-applies `partner_id` + `utm_medium=online_publisher` + `campaign=whitsundayislandsnationalpark`.

---

## Site map (high level)

- `/` — boat-access hierarchy, icons, marine realism, lead magnet  
- `/park/` + 8 areas (Whitehaven/Hill Inlet, boat access, camping, walks, snorkel, Ngaro, multi-day, marine safety)  
- `/trails/` + 8 guides  
- `/itineraries/` + 9 plans (photography/tide plan is deepest)  
- `/visit/` · `/stay/` · `/tours/` · `/gear/` · `/maps/` · `/articles/` ×5  
- Legal: disclaimer, affiliate, privacy, terms, contact  
- Lead magnet: free Practical Planner HTML  

Prompt / brief: `whitsundayislandsnationalpark_com_au_Grok_Build_Prompt.txt`  
Docs: `docs/LAUNCH-CHECKLIST.md`, `MONETISATION.md`, `PHASE-2.md`, `image-prompts.md`

---

## Differentiators shipped

- Boat-access decision hierarchy (tour / camping transfer / private / multi-day sail)  
- Whitehaven + Hill Inlet icon pair + **tide honesty**  
- Camping self-sufficiency (water in, no fires, QPWS permits never affiliated)  
- Stinger season + tropical marine realism  
- Airlie Beach hub monetisation; GYG ladder pinned  
- Uluru template debris swept (legal, visit, weather coords, maps, footer)  

Footer portfolio: **excludes this site**; includes Uluru-Kata Tjuta + sisters + Farming Domains.  
Homepage sister-parks block **removed** (footer only).

---

## Next session priorities (pick as needed)

1. **Post-FTP QA** — contact + visit tips forms on production, GYG click-through, mobile nav, HTTPS  
2. **Google Search Console** — property + sitemap  
   `https://www.whitsundayislandsnationalpark.com.au/sitemap-index.xml`  
3. **Booking.com** — set `PUBLIC_BOOKING_AID` when CJ approved → rebuild → FTP  
4. **AdSense** — set `PUBLIC_ADSENSE_CLIENT` + fill `public/ads.txt` → rebuild → FTP  
5. **Sister sites** — add Whitsunday to other parks’ `portfolioLinks` footers  
6. **Optional** — pin more GYG if needed; image remap if any hero pairing looks off; Phase 2 from `docs/PHASE-2.md`  

---

## Quick “is it healthy?”

```powershell
cd C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site
npm run build
# open site/dist/index.html structure; confirm visit/ has access_key if .env key set
```

Never monetise QPWS camping permits. Always defer to parks.qld.gov.au + GBRMPA for live status.
