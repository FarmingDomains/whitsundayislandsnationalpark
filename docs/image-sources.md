# Image sources — Whitsunday Islands National Park site

Real photographs replace AI illustrations where strong free-licence matches exist.
Original AI files remain in `site/src/images/_ai-backup/` for rollback.
Higher-resolution Commons candidates sit in `site/src/images/commons/`.

**Policy:** Prefer Wikimedia Commons CC BY / CC BY-SA landscape photos of named places.
Always credit author + licence + Commons file page in UI where the image is shown.
Not official Queensland Parks photography.

---

## Live site slots

| Site key | File | Subject | Author | Licence | Commons / source |
| --- | --- | --- | --- | --- | --- |
| `homeHero` | `hero-whitehaven.jpg` | Whitehaven northern spit from Hill Inlet lookout | Hush Neo | CC BY-SA 4.0 | [Whitehaven Beach - Northern End.jpg](https://commons.wikimedia.org/wiki/File:Whitehaven_Beach_-_Northern_End.jpg) |
| `hillInlet` | `hill-inlet-swirl.jpg` | Classic Hill Inlet tidal swirl | Damien Dempsey (via Flickr) | CC BY 2.0 | [Whitsunday Island - Whitehaven Beach 02.jpg](https://commons.wikimedia.org/wiki/File:Whitsunday_Island_-_Whitehaven_Beach_02.jpg) |
| `campingBeach` | `camping-beach.jpg` | Beach-level Whitehaven silica + visitors | The 3B's (via Flickr) | CC BY 2.0 | [Beach Bliss](https://commons.wikimedia.org/wiki/File:Beach_Bliss_-_Flickr_-_3B%27s.jpg) |
| `boatArrival` | `boat-arrival.jpg` | Yachts & beach landings at Whitehaven | Slug69 (via Flickr) | CC BY-SA 2.0 | [Whitehaven Beach, Whitsunday Island](https://commons.wikimedia.org/wiki/File:Whitehaven_Beach,_Whitsunday_Island,_Queensland.jpg) |
| `islandLookout` | `island-lookout.jpg` | Lookout over Whitehaven spit + archipelago | Damien Dempsey | CC BY 2.0 | [Whitsunday Island - Whitehaven Beach 01.jpg](https://commons.wikimedia.org/wiki/File:Whitsunday_Island_-_Whitehaven_Beach_01.jpg) |
| `fringingReef` | `fringing-reef.jpg` | **Real** GBR coral underwater (Flynn Reef near Cairns) — snorkel education, not Whitehaven-specific coral claim | Toby Hudson | CC BY-SA 3.0 | [Coral Outcrop Flynn Reef.jpg](https://commons.wikimedia.org/wiki/File:Coral_Outcrop_Flynn_Reef.jpg) |
| `heartReef` | `heart-reef.jpg` | Heart Reef aerial (Whitsundays) — scenic flight / multi-day context | Alphasauce | CC BY-SA 4.0 | [Heart Reef and Lagoon Great Barrier Reef.jpg](https://commons.wikimedia.org/wiki/File:Heart_Reef_and_Lagoon_Great_Barrier_Reef.jpg) |
| OG social | `public/og-default.jpg` | Same as homeHero | Hush Neo | CC BY-SA 4.0 | Same as homeHero |

Code wiring: `site/src/data/pageImages.ts` · credits table: `disclaimer/#images` via `photoCredit.ts`.

---

## Spares in `site/src/images/commons/`

| File | Author | Licence | Good for |
| --- | --- | --- | --- |
| `julie-bay-1280.jpg` | DANIEL JULIE | CC BY 2.0 | Hill Inlet low-tide sandbanks + yachts |
| `whitehaven-bay-dsc-1280.jpg` | DANIEL JULIE | CC BY 2.0 | Spit + yachts |
| `dempsey-whitehaven-05-1280.jpg` | Damien Dempsey | CC BY 2.0 | Alternate Hill Inlet lookout |
| `flynn-reef-coral-1280.jpg` | Toby Hudson | CC BY-SA 3.0 | Live as `fringing-reef.jpg` |
| `heart-reef-whitsundays.jpg` | Alphasauce | CC BY-SA 4.0 | Live as `heart-reef.jpg` |

---

## Remaining gaps (optional future)

| Need | Status |
| --- | --- |
| True **Whitsunday island** underwater fringing reef (named bay) | Still scarce free Commons; Flynn Reef used with honest GBR caption |
| Island tent camping under casuarinas | Beach Bliss used as shore context |
| Small transfer tender close-up | Boat arrival photo is closest free match |

---

## Licence notes

- **CC BY 2.0 / CC BY-SA 2.0 / 3.0 / 4.0:** free to use commercially with attribution; ShareAlike applies if you remix those works and distribute the remixed image.
- Do **not** present these as Queensland Parks or GBRMPA official images.
- When swapping files, update this table **and** `pageImages.ts` + `photoCredit.ts` on the same change.

Last updated: 2026-08-06
