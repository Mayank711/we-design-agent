# BookTruck Festival Identity System — Raksha Bandhan exploration

**Date:** 2026-08-24 · **Figma:** https://www.figma.com/design/Y8mqUPBBDR7OF3XhP7Cgo2 → page **Festival Identity** (`31:2`)
**Brand constraint honored:** the Wheelseye pinwheel-eye mark is never redesigned, recolored, or
distorted — it is placed as an extracted asset in every concept. Festival treatments live only in
the flexible layers: canvas, "Book Trucks" plate, and a reserved festival slot.

## Assets extracted (Foundations page)

| Asset | How |
|---|---|
| `wheelseye-mark` (transparent) | flood-fill white-key of the launcher raw image (keyed only background-connected white, so the eye's white survives) |
| `booktrucks-plate` (transparent) | crop of the yellow wordmark band |
| `booktruck-icon-original` | untouched baseline for reference/revert |

## Concepts (each shown as iOS + Android app icon with rationale on-canvas)

| Node | Concept | Approach |
|---|---|---|
| `32:2` | **R1 — Rakhi Thread Underline** | fine red+gold double thread under the plate, knot + beads |
| `32:22` | **R2 — Rakhi Medallion Halo** | thin gold ring + 8 bead dots BEHIND the mark (mark = centre stone) |
| `32:54` | **R3 — The Festival Slot ★** | reserved corner medallion; mini-rakhi now, diya/flag/dandiya later; empty on normal days |
| `33:2` | **R4 — Thread-tied Plate** | rakhi band wrapped around the plate's left end, knot bead |
| `33:24` | **R5 — Festive Canvas** | cream→saffron wash + hairline gold inner ring; logo untouched |
| `33:40` | **R6 — Raksha Arc** | one gold protective arc over the mark, tied with two red knots ("we shield every load") |

Lockups (`34:2`): L1 horizontal (mark + plate + "a Wheelseye product"), L2 stacked splash,
L3 festival state of L1 (thread appears for the festival window, then disappears) — designed to
separate BookTruck from the FASTag/GPS Wheelseye app.

## Recommendation (`34:26`)

1. **R3 Festival Slot** — the only true SYSTEM: frozen composition + swappable medallion per
   festival; revert = remove badge; most legible at 48px; zero risk to the mark.
2. **R1 Thread Underline** — best in-app treatment (header/splash), pairs with R3.
3. **R2 Medallion Halo** — most festive for marketing creatives.

Ship suggestion: R3 on the icon + R1 in-app, driven from one festival token file; R5 as splash backdrop.

## Lane-2 palette (exploratory, for designer adoption as `festival/*` tokens)

maroon #7A1F1F · rakhi red #C23333 · gold #E8B923 · saffron wash #FEF3D9→#FEEBD4.

## Process notes

- Extract-don't-redraw rule applied: brand mark and wordmark are extracted assets, festival
  elements are restrained geometry (threads/beads/arcs), not hand-drawn illustration.
- R4 initially covered the "B" of the wordmark — caught in self-review, band moved to wrap the
  plate end (readability is a hard gate for any wordmark treatment).

---

# Janmashtami exploration (2026-08-24) — the system's second festival

Same page (`Festival Identity`, `31:2`), below the Raksha Bandhan set. This round formalized the
**repeatable flow**, documented on-canvas in "The repeatable flow" card (`37:3`) so PMs can run it.

## The repeatable flow (how every festival onboards)

1. **Motif study** — pick 2–3 authentic symbols + a 3–4 colour Lane-2 palette (premium tones, never neon).
2. **Fill the five treatment SLOTS** — composition never changes, only slot content:
   ① UNDERLINE (under the plate) · ② COMPANION (beside/behind the mark) · ③ CORNER SLOT (swappable
   medallion) · ④ CANVAS (background wash) · ⑤ NARRATIVE (one story gesture over the mark).
3. **Icon proof** — every concept as iOS + Android icons, judged at 48px.
4. **Lockup state** — the chosen underline slips into L1 for the festival window.
5. **Recommend + gate** — icon + in-app pick, wordmark-readability & mark-untouched checks,
   revert = remove slot content.

## Janmashtami slot fills

| Node | Concept | Slot | Motif |
|---|---|---|---|
| `38:2` | **J1 — Feather Underline** | ① | flowing teal line ending in a morpankh eye |
| `38:22` | **J2 — Morpankh Companion** | ② | peacock feather tucked behind the mark's top-right (as in Krishna's crown) |
| `38:44` | **J3 — Matki Festival Slot ★** | ③ | midnight disc + butter-topped matki — same disc as R3, new medallion (system proof) |
| `39:2` | **J4 — Bansuri Rest** | plate | golden flute leaning at the plate end (R4's anchor point) |
| `39:32` | **J5 — Midnight Canvas** | ④ | midnight-blue birth-hour sky + faint gold stars; logo untouched and glowing |
| `39:64` | **J6 — Dahi Handi** | ⑤ | rope across the top corners, butter-pot hanging above the mark — "however high it hangs, we reach it" |

Lockup Janmashtami state: `41:2`. Recommendation: `41:15` —
**1st J3** (system continuity, instant revert) · **2nd J5** (most striking, zero-shape) ·
**3rd J2** (most emotionally Krishna; marketing). Ship: J3 icon + J5 splash + J1 in-app header.

## Janmashtami Lane-2 palette

peacock teal #128E82 · Krishna navy #1E3A8A · midnight #14213D→#0F1B38 · gold #E8B923 (shared) ·
terracotta #B5542D · butter cream #FFF3D6.

## New process gotcha (encoded)

Inline `node.screenshot()` inside a `use_figma` call can render **image fills as blank** (fresh
headless client hasn't fetched them yet) — it made all six concept icons look empty. Verify
image-heavy nodes with server-side `get_screenshot` instead.
