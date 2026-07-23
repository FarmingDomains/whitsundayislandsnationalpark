# Whitsunday Islands National Park Guide

Unofficial visitor guide for **whitsundayislandsnationalpark.com.au** — Whitehaven Beach & Hill Inlet, boat-access decisions, camping permits, stinger season, tides and Airlie Beach logistics. Always defers to **Queensland Parks (QPWS)** and **GBRMPA** for fees, track status, marine rules and alerts.

## Stack

- Astro (static) + Tailwind CSS 4  
- Splitforms (contact + lead magnet)  
- AdSense / Amazon AU / Booking.com / GetYourGuide placeholders  
- Deploy: `site/dist/` → VentraIP FTP  

## Local development

```powershell
cd site
copy .env.example .env   # then edit keys
npm install
npm run dev              # http://127.0.0.1:4340
```

## Production build

```powershell
cd site
npm run build
npm run preview          # optional local check of dist/
```

Upload **contents** of `site/dist/` to the web document root.

## Environment variables

See `site/.env.example`:

| Variable | Purpose |
|----------|---------|
| `PUBLIC_SPLITFORMS_ACCESS_KEY` | Contact + lead forms |
| `PUBLIC_AMAZON_TAG` | Default `rero07-22` |
| `PUBLIC_BOOKING_AID` | Booking.com partner |
| `PUBLIC_GETYOURGUIDE_PARTNER` | GetYourGuide partner |
| `PUBLIC_GETYOURGUIDE_CAMPAIGN` | Default `whitsundayislandsnationalpark` |
| `PUBLIC_ADSENSE_CLIENT` | `ca-pub-...` |

Static hosts bake `PUBLIC_*` at **build** time — rebuild after changes.

## Docs

- Image prompts: `docs/image-prompts.md`
- Launch checklist: `docs/LAUNCH-CHECKLIST.md`
- Phase 2: `docs/PHASE-2.md`
- Monetisation notes: `docs/MONETISATION.md`

## Repo

https://github.com/FarmingDomains/whitsundayislandsnationalpark

## Legal

Independent unofficial guide. Not affiliated with Queensland Parks and Wildlife Service (QPWS), the Department of the Environment, Tourism, Science and Innovation, the Great Barrier Reef Marine Park Authority (GBRMPA), Ngaro Traditional Owners, or any government agency. See on-site disclaimer, privacy, terms and affiliate disclosure.
