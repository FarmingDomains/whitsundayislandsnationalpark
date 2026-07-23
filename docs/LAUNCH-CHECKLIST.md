# Launch checklist — whitsundayislandsnationalpark.com.au

## Pre-FTP

- [ ] `cd site` → `npm run build` succeeds
- [ ] Spot-check `dist/index.html`, `/visit/`, `/trails/hill-inlet-lookout/`, `/itineraries/`
- [ ] Contact form works when `PUBLIC_SPLITFORMS_ACCESS_KEY` is set (Splitforms: `https://splitforms.com/api/submit` + `botcheck`)
- [ ] GYG links include `campaign=whitsundayislandsnationalpark` when partner set
- [ ] Amazon tag present (`rero07-22` or override)
- [ ] Booking `aid` only if CJ approved (else convenience links OK)
- [ ] AdSense client empty until approved; `ads.txt` placeholder reviewed
- [ ] No plain-text personal emails on pages
- [ ] Legal pages: disclaimer, affiliate, privacy, terms — QPWS / GBRMPA / Ngaro disclaimers present
- [ ] Lead magnet `/downloads/whitsunday-practical-planner.html` opens

## FTP (VentraIP)

- [ ] Upload **contents** of `site/dist/` to document root (not the `dist` folder itself)
- [ ] HTTPS works; force HTTPS at host if needed
- [ ] `robots.txt` and sitemap reachable

## Post-live

- [ ] GA4 / Search Console property
- [ ] Test mobile sticky nav on real phone
- [ ] Test one GYG click-through + Booking search
- [ ] Submit sitemap
- [ ] Park alerts link still resolves
- [ ] Sister portfolio footers on other parks list this domain when convenient

## Env rebuild rule

Any change to `site/.env` `PUBLIC_*` → rebuild → re-upload full dist.
