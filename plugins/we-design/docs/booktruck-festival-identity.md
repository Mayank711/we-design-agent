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
