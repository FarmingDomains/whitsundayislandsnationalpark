# Resume here — Whitsunday Islands National Park guide

**Last updated:** 2026-08-06  
**Status:** LIVE ON PRODUCTION — dual-gold upgrade + **no public email** contact policy  
**Contact method:** **no public email** (no mailto / Formspree / reveal) — official QPWS/GBRMPA links only  
**Repo:** https://github.com/FarmingDomains/whitsundayislandsnationalpark  
**Domain:** https://www.whitsundayislandsnationalpark.com.au/  
**Working dir:** `C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark`  
**Latest ship commits:** `112a509` (CC reef + home) · `d6ed35f` (live + clean ads.txt) · see `git log -5`

---

## How to resume

```text
Read RESUME-HERE.md and continue from residual TODOs only (structure + FTP done).
Folder: C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark
```

```powershell
cd C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site
npm install
npm run dev              # http://127.0.0.1:4340/
npm run build            # → site/dist/  (Ian FTPs contents of dist/)
```

**FTP:** Upload **contents** of `site/dist/` to VentraIP document root (not the `dist` folder).  
Include root `ads.txt`. After `.env` change: rebuild + re-upload full dist.

---

## Live production (2026-08-06)

Smoke-checked after Ian FTP:

| Check | Result |
|-------|--------|
| Home | 200 — AdSense `ca-pub-1520278362040469`, NPG footer, FAQ markers |
| `ads.txt` | 200 — clean no-BOM `google.com, pub-1520278362040469, DIRECT, f08c47fec0942fa0` (re-uploaded) |
| Sitemap | 200 — `https://www.whitsundayislandsnationalpark.com.au/sitemap-index.xml` |

**GSC:** submit `https://www.whitsundayislandsnationalpark.com.au/sitemap-index.xml`  
**AdSense:** publisher in head + ads.txt live — finish ownership review in AdSense UI if still pending.

---

## What this session delivered (2026-08-06)

NP-SISTER-UPGRADE to dual gold (**BM + WPNP**), park-true Whitsunday content.

### Structure / chrome
- Layout breadcrumbs rendered; NPG hub footer (“More Australian park guides”)
- Lachlan FaqList site-wide (home, visit, park areas, articles)
- LeadCapture = free download only (no email gate)
- Contact = **no public email** (policy page + official links; reveal/Formspree removed 2026-08-06)
- Visit MapEmbed mid-page after access/camping
- Tours BM shell (Featured + chips, no PageHero/inventory)
- Stay image cards + `Search stays — Place`
- Trails comparison table dark-mode borders
- Itineraries hub + detail fattened (gold timeline cards)
- Articles WPNP long-form (TOC, sections, mid images, FAQ)
- Legal: disclaimer `#images` table; About E-E-A-T; terms/privacy/disclosure

### Monetisation / ops
- Booking CJ, GYG campaign `whitsundayislandsnationalpark`, Amazon tag
- AdSense `ca-pub-1520278362040469` in Layout head; unit `<ins>` held until real slot IDs
- `ads.txt` clean publisher line

### Images
- Live slots mostly Wikimedia Commons CC
- Snorkel slot: **Flynn Reef** real GBR underwater (Toby Hudson, CC BY-SA 3.0) — honest caption (not Whitehaven-specific coral)
- **Heart Reef** aerial (Alphasauce, CC BY-SA 4.0) for multi-day / scenic context
- AI reef archived; see `docs/image-sources.md` + `/disclaimer/#images`

### Parity
- `NP-SISTER-PARITY-CHECK.ps1` exit **0** (token gate)
- Evidence pack + smell-check done before ship claim

---

## Next session (optional residuals)

1. **FTP** this `site/dist/` if contact no-email page not yet live (contact + privacy + LeadCapture + deleted obfuscate)
2. **GSC** — property + sitemap-index.xml (if not already)
3. **AdSense** — complete review; when approved, create real unit slots → `adsense.ts` `unitsReady: true` + real slot IDs → rebuild → FTP
4. Click-test **Booking CJ + GYG** on live
5. Optional content: true Whitsunday-named underwater fringing reef if a worthy free photo appears; PDF planner if desired
6. Do not robocopy gold park **copy** — structure only

---

## Do-not / pitfalls

- Never monetise QPWS camping permits / park fees
- GYG campaign must stay domain slug `whitsundayislandsnationalpark`
- UTF-8 **BOM** on `.env` or `ads.txt` breaks keys / AdSense — keep ads.txt plain ASCII starting with `google.com`
- FAQ: only `components/FaqList.astro` may use `<details>`
- Footer: NPG hub-first, not “Other Farming Domains park guides”
- Snorkel photo is Flynn Reef (Cairns GBR) for education — do not caption as Whitehaven coral
- **No public email** — do not reintroduce mailto, Formspree, base64 reveal, or “hello at …” noscript (CONTACT-POLICY)

Never invent live fees/closures. Defer to parks.qld.gov.au + GBRMPA.
