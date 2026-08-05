# Resume here â€” Whitsunday Islands National Park guide

**Last updated:** 2026-08-06 (LeadCapture: free download only â€” no email form)  
**Status:** NP-SISTER-UPGRADE applied 2026-08-06 â€” structure PASS (token gate + evidence pack + smell-check)  
**Repo:** https://github.com/FarmingDomains/whitsundayislandsnationalpark  
**Domain:** https://www.whitsundayislandsnationalpark.com.au/  
**Working dir:** `C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark`  

---

## How to resume

```text
Read RESUME-HERE.md and continue from residual content TODOs only (structure is done).
Folder: C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark
```

---

## This session (2026-08-06) â€” sister upgrade to dual gold

Executed `NP-SISTER-UPGRADE-TO-CURRENT-STANDARD.md` against dual gold **BM + WPNP**. Park-true Whitsunday content kept; structure rebuilt.

### Phases 0â€“3 (always)

| Phase | Done |
|-------|------|
| 0 Orient | WINP identity, QPWS/GBRMPA, RESUME, leftovers grepped |
| 1 Chrome | Layout **renders** Breadcrumbs; NPG hub footer; Lachlan FaqList; contact Show email; interior pt-4; **LeadCapture free download only (no Splitforms form)** |
| 2 Trust | About Person schema + NPG; disclosure affiliate flags; privacy ungated downloads; terms fresh date; disclaimer #images kept |
| 3 Mon | affiliates.ts Booking CJ / GYG campaign / Amazon; gear showTours false; stay lower showStay false; trail showTours false |

**Follow-up 2026-08-06:** Home/maps/visit LeadCapture was still email-gated via Splitforms when key present. Replaced with BM gold pattern â€” direct â€œOpen free Practical Plannerâ€ + contact reveal for tips.

**Follow-up 2026-08-06b:** `/things-to-do/` restyled to WPNP/BM shell â€” 3 decision cards, numbered vertical activity list (text links, not pill grid), all-walks index.

**Follow-up 2026-08-06c:** Itineraries hub + detail fattened (decision cards, bestFor cards, verify callout, numbered timeline, tip grids, related walk cards; thinner plan copy expanded).

**Follow-up 2026-08-06d:** Articles â†’ WPNP long-form structure: multi-para intro, key takeaways, on-page TOC, headed sections + mid images, mid mon slot, FAQ, related + more articles (no flat paragraph wall).

**Follow-up 2026-08-06e:** Legal/secondary audit â€” disclaimer `#images` credits table; About E-E-A-T sections; terms/privacy structured; search placeholder park-true (killed â€œdove lakeâ€); contact ContentDate.

**Follow-up 2026-08-06f:** AdSense site review â€” head script `ca-pub-1520278362040469` on all pages; `public/ads.txt` publisher line; unit `<ins>` slots held until real unit IDs (Auto ads / review only for now).

### Phase 4 decision table

| Hub | Decision | Evidence / action |
|-----|----------|-------------------|
| 4.1 Home | **FAIL â†’ rebuilt** | FaqList + schema; no mid-page sister promo |
| 4.2 Visit | **FAIL â†’ rebuilt** | jumpLinks + summaryCards + ContentDate + MapEmbed mid-page |
| 4.2b Visit map | **FAIL â†’ rebuilt** | Map after camping/access, before packing/FAQ |
| 4.3 Things to do | **FAIL â†’ rebuilt** | activities multi-link cards + ContentDate + ContentImage |
| 4.4 Trails index | **FAIL â†’ rebuilt** | ContentDate + comparison table + cards |
| 4.5 Trail detail | **FAIL â†’ rebuilt** | ContentDate; showTours false |
| 4.5b Trail kit | **FAIL â†’ rebuilt** | Optional kit + amazonSearchUrl mid-page |
| 4.6 Itineraries index | **FAIL â†’ rebuilt** | ContentDate + per-card h-44 object-cover |
| 4.6b Itineraries detail | **FAIL â†’ rebuilt** | ContentDate + ContentImage hero |
| 4.7 Stay | **FAIL â†’ rebuilt** | imageForStay cards; Search stays â€” Place; lower tours+gear only |
| 4.8 Tours | **FAIL â†’ rebuilt** | BM shell: Featured + flex-wrap chips; no PageHero/in-page crumbs/inventory |
| 4.9 Gear | **FAIL â†’ rebuilt** | ContentDate + ContentImage + Amazon CTA + showTours false |
| 4.10 Articles hub | **FAIL â†’ rebuilt** | Image cards, bestFor, keyTakeaways teaser, soft GYG |
| 4.11 Article detail | **FAIL â†’ rebuilt** | intro + keyTakeaways + ContentDate + FaqList |
| 4.12 Maps | **FAIL â†’ rebuilt** | ContentDate + 4 pins + free download |
| 4.13 Park index | **FAIL â†’ rebuilt** | ContentDate + image area cards |
| 4.13b/c Park detail | **PASS** (FAQ already FaqList) | ContentDate + tight H1; FaqList Lachlan |

### Parity script

```text
powershell -File C:\Users\Ian\WEBSITES\NP-SISTER-PARITY-CHECK.ps1 -ParkRoot C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark
â†’ RESULT: ALL TOKEN CHECKS PASS.  (exit 0)  2026-08-06
```

Token gate only until evidence pack + smell-check below.

### Evidence pack

| Check | Proof |
|-------|--------|
| FAQ wire | `pages/` zero raw `<details>`; dist `park/whitehaven-hill-inlet/` has `group-open:rotate-45` + `faq-summary`; home Quick FAQs same |
| Tours chrome | `tours.astro` no PageHero/Breadcrumbs; dist Featured GetYourGuide + `flex flex-wrap` chips |
| Visit map | `id="map"` after `id="camping"`, before packing/FAQ (offsets camping &lt; map &lt; packing) |
| Stay | dist has `Search stays` + card `object-cover` |
| Downloads | Local planner `whitsunday-practical-planner.html` **10496 bytes**; live Content-Length **10496** (unchanged this session â€” not regenerated) |
| Footer | More Australian park guides + nationalparksguide.com.au hub CTA |
| Trail kit | dist `trails/hill-inlet-lookout/` Optional kit + Amazon searches |
| Mon | dist stay/home still carry CJ `anrdoezrs` Booking deep links |

### Smell-check line

```text
Smell-check: home (FAQ + no sister promo) / visit (map mid-page after access) / tours (chips, no PageHero/inventory) / stay (Search stays â€” Place) / park area FAQ (+ right) / one FAQ open â€” 2026-08-06
```

(Verified via built dist HTML markers + source structure; Ian FTPs dist for live.)

### Build / deploy

```powershell
cd C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site
npm run build            # â†’ site/dist/  (49 pages)
npm run dev              # http://127.0.0.1:4340/
```

**FTP:** Upload **contents** of `site/dist/` to VentraIP document root (not the `dist` folder).  
Ian FTPs himself.

---

## Live mon (pre-existing â€” still correct)

| Item | State |
|------|--------|
| Booking.com CJ | ACTIVE partner `101839079` / SID `17293136` |
| GYG campaign | `whitsundayislandsnationalpark` |
| Amazon | `PUBLIC_AMAZON_TAG` / default `rero07-22` |
| Imagery | 5 live Commons slots + OG; fringing reef still AI |

---

## Residual content TODOs (optional â€” structure PASS)

1. Replace reef AI photo if a worthy free underwater appears  
2. Longer prose polish via `POST-INITIAL-BUILD-IMPROVEMENTS.md` if desired  
3. GSC / AdSense when ready  
4. Optional UI token polish via `NP-PORTFOLIO-UI-CONSISTENCY.md`  

---

## Do-not / pitfalls

- Never monetise QPWS camping permits  
- GYG campaign must stay domain slug `whitsundayislandsnationalpark`  
- UTF-8 BOM on `.env` breaks Splitforms (contact is email-reveal now; key unused)  
- Do not robocopy BM/WPNP **copy** â€” structure only  
- Footer must stay NPG hub-first (not â€œOther Farming Domains park guidesâ€)  
- FAQ: only `components/FaqList.astro` may use `<details>`  

Never invent live fees/closures as permanent facts. Defer to parks.qld.gov.au + GBRMPA.

**Follow-up 2026-08-06g:** Real CC reef images (Flynn Reef underwater + Heart Reef aerial); home logistics jumps + itinerary card photos; AI reef removed from live slot.

