# AGENT TASK — Implement portfolio footer (Farming Domains park guides)

**Priority:** High when building footer / portfolio on this site.  
**Status:** Done (list updated 2026-07-24)  
**Reference:** `site/src/data/navigation.ts` → `portfolioLinks`

## Full portfolio (12 parks)

- Royal National Park — https://www.royalnationalpark.com.au/
- Springbrook NP — https://springbrooknationalpark.com.au/
- Blue Mountains NP — https://www.bluemountainsnationalpark.com.au/
- Sydney Harbour NP — https://www.sydneyharbournationalpark.com.au/
- Great Otway NP — https://greatotwaynationalpark.com.au/
- Port Campbell NP — https://www.portcampbellnationalpark.com.au/
- Cradle Mountain NP — https://www.cradlemountainnationalpark.com.au/
- Uluru-Kata Tjuta NP — https://www.ulurukatatjutanationalpark.com.au/
- Whitsunday Islands NP — https://www.whitsundayislandsnationalpark.com.au/
- Karijini NP — https://www.karijininationalpark.com.au/
- Ku-ring-gai Chase NP — https://www.kuringgaichasenationalpark.com.au/
- Grampians NP — https://www.grampiansnationalpark.com.au/

## Rules

1. **Exclude this site** from its own footer list.
2. Optionally append Farming Domains hub: https://www.farmingdomains.com/
3. Match Layout UI: **Other Farming Domains park guides**, pill links, sitewide.
4. Keep sister parks in sync across all FD park `navigation.ts` files when the list grows.

## Whitsunday (`portfolioLinks`)

```ts
export const portfolioLinks = [
  { href: 'https://www.royalnationalpark.com.au/', label: 'Royal National Park' },
  { href: 'https://springbrooknationalpark.com.au/', label: 'Springbrook NP' },
  { href: 'https://www.bluemountainsnationalpark.com.au/', label: 'Blue Mountains NP' },
  { href: 'https://www.sydneyharbournationalpark.com.au/', label: 'Sydney Harbour NP' },
  { href: 'https://greatotwaynationalpark.com.au/', label: 'Great Otway NP' },
  { href: 'https://www.portcampbellnationalpark.com.au/', label: 'Port Campbell NP' },
  { href: 'https://www.cradlemountainnationalpark.com.au/', label: 'Cradle Mountain NP' },
  { href: 'https://www.ulurukatatjutanationalpark.com.au/', label: 'Uluru-Kata Tjuta NP' },
  { href: 'https://www.karijininationalpark.com.au/', label: 'Karijini NP' },
  { href: 'https://www.kuringgaichasenationalpark.com.au/', label: 'Ku-ring-gai Chase NP' },
  { href: 'https://www.grampiansnationalpark.com.au/', label: 'Grampians NP' },
  { href: 'https://www.farmingdomains.com/', label: 'Farming Domains' },
];
```

## Verify

- [x] This site excluded  
- [x] Other 11 parks present (+ Farming Domains)  
- [x] Build passes  
