# BookTruck FTL Home — duplicate + redesign handoff

**Date:** 2026-08-24 · **Sandbox file:** https://www.figma.com/design/Y8mqUPBBDR7OF3XhP7Cgo2
**Source of truth (read-only, untouched):** Booking Flow V3 `aBEY8fyww5wwaFJrbuItTN`, page *Final*,
section *OD*, home frame `6972:243481` (360×1600).

## What's in the sandbox

| Page | Node | Content |
|---|---|---|
| Screens | `5:2` | **FTL Home / Faithful duplicate** — 360×1585, section-by-section repro of the source home (status bar, greeting header, FTL/PTL toggle, booking widget, "30 mins" banner, social-proof map card, 4 frequent-trip rows, brand footer, bottom nav) |
| Screens | `11:2` | **FTL Home / Redesigned (we-design)** — the dev-ready rewrite |
| Foundations | `3:2..3:4` | Raster assets: ftl-banner (3x), ftl-map (2x), ftl-trip-icon (4x) |
| — | variables | 43 vars: Color 16 (Greys/Accent/Status) · Spacing 6 · Radius 6 · IconSize 3 · Typography 12; 9 DM Sans text styles; `card` effect style |

## Fidelity evidence (faithful duplicate)

- Background bands pixel-verified: sky `#9DD9EE` from 0→514, banner art carries the white
  transition, white below — matches source sampling exactly.
- Heights: total 1585 vs 1600 (−0.9%); social card 308 vs 302; trips 348 vs 353 — all within the
  ±10px density gate.
- All text DM Sans, all non-icon solid paints variable-bound (78 bound paints), 0 detached
  instances, phantom-frame scan clean.

## Redesign changes (all compose-lane unless noted)

1. Booking widget: radius 16, location box borderless on `Greys/Background`, CTA 48px tall radius 12.
2. Greeting name upgraded to title/medium (16 SB).
3. Toggle active pill gets a subtle elevation.
4. Social-proof card: decorative tint band removed — title on white.
5. Trip "Book" buttons → pill, `Accent/Light blue` fill + `Accent/Blue` border/text (clearer action).
6. Bottom nav active state → `Accent/Blue` icon+label with 3px top indicator (was black).
7. Explore-on-map link semibold.

## Lane-2 (exploratory) flags for designer review

- `Accent/Sky #9DD9EE` — home band color, used in source canvas but absent from source tokens; added as a token.
- Company-logo circles `#F26430` — placeholder for real logo image assets.
- Faithful duplicate keeps source's untokenised band tint `#EFF6FC` (removed in redesign).
- `font/weight/SM 550` mapped to Medium 500 (DM Sans static has no 550).

## Constraints honored

- Source file **never edited** (it is not editable by the connector account anyway — Figma
  demands a Full seat for MCP edits on files we don't own; our clone-the-page step was therefore
  executed as a faithful in-sandbox duplicate of the home frame).
- Only the home page reproduced/redesigned; no other screens touched.

## Concept exploration (user-facing directions, added 2026-08-24)

Three creative rewrites built NEXT TO the reference frames (nothing removed). All reuse the
foundations, DM Sans styles, and the banner/map/trip-icon assets; deliberate Lane-2 items listed.

| Node | Concept | Direction | Lane-2 items |
|---|---|---|---|
| `13:2` | **A — Sky Story** | Deep-blue→sky gradient hero, white header text, translucent call/toggle, floating radius-24 booking card with **blue CTA**, horizontal **trip-card carousel** ("Book again") | header gradient (#176E9C→#2495CC→#9DD9EE) |
| `13:148` | **B — Swift Utility** | White header + **underline tabs**, grey `Greys/Background` canvas, bordered (not floating) cards, banner art swapped for a slim `Status/Light yellow` **"Book trucks in 30 mins" strip**, white grouped trips band, black active nav | bolt glyph #B8860B |
| `13:294` | **C — Midnight Premium** | **Black header**, white sheet pulled up with the signature 24px top radius, banner as rounded in-flow card, **yellow CTA** (#F9CD29, from the 30-mins brand art), black Book pills, yellow nav indicator | CTA/indicator yellow #F9CD29 |

Adherence scan: all concepts clean apart from the flagged Lane-2 paints + logo-placeholder orange.

### Concept rework (same day) — full-theme commitment

User feedback: recoloring the top band is not a redesign, and the baked "30 mins" banner PNG
(sky/clouds/teal truck) clashed with every non-sky theme. Each concept was reworked so the ENTIRE
screen carries its theme, and the banner art is now **native per theme** (the PNG asset remains
only in the two reference frames):

- **A — Sky Story** (`13:2`): banner PNG dropped; the promo is typeset natively on the gradient
  ("BOOK TRUCKS IN / 30 MINS" in brand yellow + white truck glyph + soft cloud ellipses); white
  content sheet pulled up with the 24px signature radius. Height 1520.
- **B — Swift Utility** (`13:148`): banner replaced by a **3-tile stats row** (30 min / 1L+ / 19K+);
  map card compacted (left title + "Map ›" link, 120px map, no explore row); Book actions are blue
  text links; footer compressed to one line. Height 1345 — a visibly denser screen.
- **C — Midnight Premium** (`13:294`): **full dark mode** — dark sheet + dark cards (#141416 /
  #1B1B1D / #232327 / #2C2C31 exploratory dark-surface set, flagged for adoption), dark location
  box, native dark promo card (yellow-outline, yellow truck), map dimmed with a 45% dark overlay and
  dark pin chips, yellow-outline Book pills, dark bottom nav with yellow active state. Height 1605.

New skill rule candidate (encoded in /screen-iterate future edits): **a theme concept must restyle
every band of the screen — background system, cards, illustration/banner treatment, list rows,
footer, and nav — and baked raster art may only be reused in themes that match its baked palette.**
