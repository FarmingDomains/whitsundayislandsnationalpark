# Image sources — Whitsunday Islands National Park site

Real photographs replace AI illustrations where strong free-licence matches exist.
Original AI files remain in `site/src/images/_ai-backup/` for rollback.
Higher-resolution Commons candidates (not all live) sit in `site/src/images/commons/`.

**Policy:** Prefer Wikimedia Commons CC BY / CC BY-SA landscape photos of named places.
Always credit author + licence + Commons file page in UI where the image is shown.
Not official Queensland Parks photography.

---

## Live site slots

| Site key | File | Subject | Author | Licence | Commons / source |
| --- | --- | --- | --- | --- | --- |
| `homeHero` | `hero-whitehaven.jpg` | Whitehaven northern spit from Hill Inlet lookout | Hush Neo | CC BY-SA 4.0 | [Whitehaven Beach - Northern End.jpg](https://commons.wikimedia.org/wiki/File:Whitehaven_Beach_-_Northern_End.jpg) |
| `hillInlet` | `hill-inlet-swirl.jpg` | Classic Hill Inlet tidal swirl | Damien Dempsey (via Flickr) | CC BY 2.0 | [Whitsunday Island - Whitehaven Beach 02.jpg](https://commons.wikimedia.org/wiki/File:Whitsunday_Island_-_Whitehaven_Beach_02.jpg) |
| `campingBeach` | `camping-beach.jpg` | Beach-level Whitehaven silica + visitors (day shore / camping context) | The 3B's (via Flickr) | CC BY 2.0 | [Beach Bliss - Flickr - 3B's.jpg](https://commons.wikimedia.org/wiki/File:Beach_Bliss_-_Flickr_-_3B%27s.jpg) |
| `boatArrival` | `boat-arrival.jpg` | Yachts & beach landings at Whitehaven | Slug69 (via Flickr) | CC BY-SA 2.0 | [Whitehaven Beach, Whitsunday Island, Queensland.jpg](https://commons.wikimedia.org/wiki/File:Whitehaven_Beach,_Whitsunday_Island,_Queensland.jpg) |
| `islandLookout` | `island-lookout.jpg` | Lookout over Whitehaven spit + archipelago | Damien Dempsey (via Flickr) | CC BY 2.0 | [Whitsunday Island - Whitehaven Beach 01.jpg](https://commons.wikimedia.org/wiki/File:Whitsunday_Island_-_Whitehaven_Beach_01.jpg) |
| `fringingReef` | `fringing-reef.jpg` | Fringing reef snorkel illustration | — | **AI-generated** | No strong free ethical underwater match yet |
| OG social | `public/og-default.jpg` | Same as homeHero | Hush Neo | CC BY-SA 4.0 | Same as homeHero |

Code wiring: `site/src/data/pageImages.ts` (`attributionHtml`, author/licence/sourceUrl fields).

---

## Strong spares in `site/src/images/commons/` (not currently live)

| File | Author | Licence | Good for |
| --- | --- | --- | --- |
| `julie-bay-1280.jpg` | DANIEL JULIE | CC BY 2.0 | Hill Inlet low-tide sandbanks + yachts |
| `whitehaven-bay-dsc-1280.jpg` | DANIEL JULIE | CC BY 2.0 | Spit + yachts (boat / Hill Inlet alt) |
| `dempsey-whitehaven-05-1280.jpg` | Damien Dempsey | CC BY 2.0 | Alternate Hill Inlet lookout |
| `whitehaven-bay-cc.jpg` / `hero-whitehaven-cc.jpg` | earlier download mirrors | CC BY 2.0 | Duplicates of Julie / Dempsey shots |
| `island-view-cc.jpg` | eyeintim (Flickr) | CC BY 2.0 | Soft distant island — lower priority |

---

## Gaps (keep AI or shoot original)

| Need | Status |
| --- | --- |
| Ethical underwater fringing reef / coral | Weak free Commons match; keep AI for now |
| Island tent camping under casuarinas | No strong free match; Beach Bliss used as shore context |
| Dedicated small transfer tender at shore | Beach boat photo is closest free match |

---

## Licence notes

- **CC BY 2.0 / CC BY-SA 2.0 / CC BY-SA 4.0:** free to use commercially with attribution; ShareAlike applies if you remix those works and distribute the remixed image.
- Thumbnails used on site are typically 1280px-wide Commons derivatives (resized further by Astro).
- Do **not** present these as Queensland Parks or GBRMPA official images.
- When swapping files, update this table **and** `pageImages.ts` on the same change.

Last updated: 2026-07-24
