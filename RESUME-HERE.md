# Resume here — Whitsunday Islands National Park guide

**Last updated:** 2026-07-23 (first full build)  
**Repo:** https://github.com/FarmingDomains/whitsundayislandsnationalpark  
**Domain:** whitsundayislandsnationalpark.com.au  
**Working dir:** `C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark`

---

## Status: BUILD / LIVE-READY (soft launch)

Full Astro static site scaffolded from Uluru/Cradle portfolio pattern with Whitsunday-specific data (boat access, tides, camping, stingers).

| Item | State |
|------|--------|
| Stack | Astro 7 + Tailwind 4, port **4340** |
| Build | `cd site` → `npm run build` → upload **contents** of `dist/` |
| Content | Trails ×8, itineraries ×9, park areas ×8, articles ×5 |
| GYG | **9 product deep links** pinned (Airlie/Whitehaven ladder) + campaign slug |
| Amazon | `PUBLIC_AMAZON_TAG` from portfolio env |
| Splitforms | From portfolio env when present |
| Booking / AdSense | Empty until approved |

---

## Dev / deploy

```powershell
cd C:\Users\Ian\WEBSITES\whitsundayislandsnationalpark\site
npm install
npm run dev              # http://127.0.0.1:4340/
npm run build
```

**FTP:** Upload **contents** of `site/dist/` to document root.

---

## Differentiators shipped

- Boat-access decision hierarchy (tour / camping transfer / private / multi-day sail)
- Whitehaven + Hill Inlet icon pair + tide honesty
- Camping self-sufficiency (water, no fires, QPWS permits never affiliated)
- Stinger season + tropical marine realism
- Airlie Beach hub monetisation flow

Prompt: `whitsundayislandsnationalpark_com_au_Grok_Build_Prompt.txt`  
Docs: `docs/LAUNCH-CHECKLIST.md`, `MONETISATION.md`, `PHASE-2.md`, `image-prompts.md`

---

## Next session priorities

1. Build verify + FTP soft launch  
2. Pin GYG product deep links when partner picks available  
3. Booking aid + AdSense when approved  
4. Optional: remap AI images if any file pairing looks off  
5. Sister park footers: add Whitsunday to other sites’ `portfolioLinks`  
