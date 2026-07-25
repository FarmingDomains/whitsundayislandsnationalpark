# Resume here — Whitsunday Islands National Park guide

**Last updated:** 2026-07-24 (Booking.com CJ live + real CC photos; verified on production)  
**Repo:** https://github.com/FarmingDomains/whitsundayislandsnationalpark  
**Domain:** https://www.whitsundayislandsnationalpark.com.au/  
**Working dir:** `C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark`  
**Latest commit:** see `git log -1` on `main` (Booking + resume after photos `7107462` / `dbde3e1`)

---

## Status: LIVE ON PRODUCTION

Production checked **2026-07-24** — Booking.com CJ stays + disclosure OK; real photo heroes previously shipped.

| Item | State |
|------|--------|
| Stack | Astro 7 + Tailwind 4, tropical lagoon palette, port **4340** |
| Build | `cd site` → `npm run build` → **49 pages** in `site/dist/` |
| Domain | https://www.whitsundayislandsnationalpark.com.au/ |
| Imagery | **5 live slots + OG = real Wikimedia Commons CC**; fringing reef **still AI** |
| Credits | Author · licence · Commons via `pageImages.ts` / `attributionHtml` |
| Portfolio footer | Full 12-park set excluding self + Farming Domains |
| **Booking.com** | **ACTIVE** via CJ deep links (partner `101839079` / SID `17293136`) |
| GYG | **9 product deep links** + `campaign=whitsundayislandsnationalpark` |
| Amazon | `PUBLIC_AMAZON_TAG` set (e.g. `rero07-22`) |
| Splitforms | Key in `site/.env` (no BOM) — baked into dist |
| AdSense | Empty until approved |

---

## Live QA — Booking.com (2026-07-24)

Checked on production (HTTP 200):

| Check | Homepage `/` | `/affiliate-disclosure/` | `/stay/` |
|-------|--------------|--------------------------|----------|
| CJ `anrdoezrs.net` (Airlie / Proserpine) | Yes | — | Yes |
| CJ `jdoqocy.com` (Hamilton Island) | Yes | — | Yes |
| Labels (Airlie / Proserpine / Hamilton) | Yes | — | Yes (hubs) |
| `rel="sponsored noopener…"` | Yes | — | Yes |
| No `PUBLIC_BOOKING_AID` placeholder | Yes | Yes | Yes |
| “All Booking.com links open…” stays note | Yes | — | — |
| Disclosure: **Programs we use** + **via CJ Affiliate** | — | Yes | Yes (copy) |
| No “when partner configured” for Booking | Yes | Yes | Yes |

**Nearby stays (homepage panel):**  
Airlie Beach (primary) · Proserpine · Hamilton Island  
→ CJ → Booking.com search deep links; commission note; QPWS never affiliated.

**Code:** `site/src/data/affiliates.ts` (`bookingCjLinks`, `staysLinks`), `MonetisationPanel.astro`, `affiliate-disclosure.astro`, `stay.astro`.

---

## Real photos (prior ship — still live)

| Slot | Subject | Author | Licence |
|------|---------|--------|---------|
| `homeHero` + OG | Whitehaven northern spit / Hill Inlet lookout | Hush Neo | CC BY-SA 4.0 |
| `hillInlet` | Hill Inlet tidal swirl | Damien Dempsey | CC BY 2.0 |
| `campingBeach` | Beach-level Whitehaven shore | The 3B's | CC BY 2.0 |
| `boatArrival` | Yachts & beach landings | slug69 | CC BY-SA 2.0 |
| `islandLookout` | Lookout over spit | Damien Dempsey | CC BY 2.0 |
| `fringingReef` | Underwater snorkel | — | **AI kept** |

Log: `docs/image-sources.md` · backups: `site/src/images/_ai-backup/` · spares: `site/src/images/commons/`

---

## Dev / deploy

```powershell
cd C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site
npm install
npm run dev              # http://127.0.0.1:4340/
npm run build            # → site/dist/
```

**FTP:** Upload **contents** of `site/dist/` to VentraIP document root (not the `dist` folder).  
After any `.env` change: **rebuild + re-upload full dist**.  
**Gotcha:** UTF-8 BOM on `.env` breaks Splitforms key — file must start with `PUBLIC_...` bytes.

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

---

## Next session priorities (pick as needed)

1. **Post-launch QA** — contact + visit tip forms, GYG click-through, mobile nav, HTTPS  
2. **Google Search Console** — property + sitemap  
   `https://www.whitsundayislandsnationalpark.com.au/sitemap-index.xml`  
3. **AdSense** — `PUBLIC_ADSENSE_CLIENT` + `public/ads.txt` → rebuild → FTP  
4. **Sister parks footers** — many park repos still have uncommitted `navigation.ts` portfolio sync; commit/rebuild/FTP each when deploying those sites  
5. **Optional images** — replace reef AI only if a *worthy* free/original photo appears  
6. **CJ / Booking** — occasional click test Airlie + Hamilton deep links still resolve to Booking.com search  

---

## Quick health check

```powershell
cd C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site
npm run build
# Production smoke:
# https://www.whitsundayislandsnationalpark.com.au/  → Nearby stays CJ links
# https://www.whitsundayislandsnationalpark.com.au/affiliate-disclosure/
```

Never monetise QPWS camping permits. Always defer to parks.qld.gov.au + GBRMPA for live status.
