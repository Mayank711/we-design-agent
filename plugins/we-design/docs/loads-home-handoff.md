# Dev handoff — Loads 2.0 Home (Independence Day)

Built in `45IcfiT2cyfdgW9htADsPw` → **Screens** page → `Home — Loads 2.0 (Independence Day)`.
Source `PNTnXVD9cn06jwENiXzxs6#1246:39345` was read-only, never edited.

## Components used (Figma → code)
| Figma component | Code component (caraxes) | Notes |
|---|---|---|
| `IndependenceDayBanner` | — (new marketing widget) | Lane-2 festival element; festival colours off-token by design |
| `SegmentedTabs` | `components/navigation` tabs | labels लाइव लोड / मेरे लोड |
| `VehicleStatChips` | new (home stat filter) | सभी लोड + saved-vehicle counts + add |
| `FilterChip` (inline chips) | `components/forms/FilterChip` | selected = green tint + green border |
| `LoadCard/Production` | `components/loads/LoadCard` + Card factory | composes RouteLadder + Button |
| `RouteLadder` | `components/loads/RouteLadder` | green circle / red square / dashed |
| `PaymentRewardsCard` | new (activation-rewards widget) | dark card, gold amounts |
| `BottomNav5` | `components/navigation/BottomNav` | 5 items, active = green |

## Tokens
Every fill/stroke/radius/type is bound to a Figma variable whose **WEB code syntax = `var(--we-*)`**,
so Dev Mode already emits the real CSS custom properties. No raw hex/px in the screen.

## States & behaviour (annotations for dev)
- **Urgency line** `02:45 मिन में लोड चला जायेगा`: live countdown; red (`--color-danger`) below threshold.
- **Filter chips / stat chips**: single-or-multi select; selected = `--we-green-tint-select` + `--color-primary` border.
- **Tabs**: active tab = white pill + `--color-primary` text + card shadow.
- **Bottom nav**: active item icon+label = `--color-primary`.
- **Distance pill**: shown when the operator's vehicle is within range of the loading point.
- **Load-card footer**: one of quote / confirm / accept / bidding, driven by load state (see LoadCard variants).
- **Empty / loading / error** feed states: to be provided (out of this screen's scope).

## Background structure (pixel-verified vs source)
- Banner → **green header band** `surface/header` (#2F663C) carrying the segmented tabs →
  **white content panel** (`surface/card`, #FFFFFF) pulled up over the header with a **24px top
  radius** (the DS's signature move; implemented as a -24px auto-layout overlap) → white feed
  throughout → bottom nav. NOT the flat grey `surface/page` — that token exists but this screen
  composes green + white.

## Decision log (change vs source)
- **Banner**: replaced "77th Republic Day" → **Independence Day (80th, 15 Aug)** — 15 Aug is Independence
  Day, not Republic Day (26 Jan). Redesigned classy (gold glow + chakra watermark + tricolor spine).
- **Cleanup**: same sections, tidier spacing; both filter rows kept.
- **Language**: full Hindi retained (Baloo 2 renders Devanagari).
- **Feed**: two representative load-card instances (the feed repeats one component).

## /design-review verdict (final pass)
- **Adherence lint: PASS** — programmatic scan over the whole screen: 25 component instances,
  **0 detached**, fonts = Baloo 2/Poppins only, every solid fill/stroke variable-bound (inactive-tab
  label and RouteLadder connector were caught unbound and bound during review). Phantom-frame scan:
  only intentional fixed sizes (screen width, ⊕ 44px, ₹ badges 36px).
- **Lane-2 log (intentional off-token, allowed):** Independence-Day banner festival colours
  (gold/tricolor/navy chakra); segmented-tab track `rgba(255,255,255,0.14)` — the DS readme's own
  header-chip transparency treatment, which has no token yet (candidate for Lane-3 adoption).
- **Structure: PASS** — background bands pixel-verified vs source (green `#2F663C` header → white
  panel w/ 24px radius); density within tolerance; section dividers + pickup/unloading icons present.
- **Open (blocks full dev-ready stamp):** Code Connect `.figma.ts` wiring (needs `caraxes` repo);
  contrast spot-check on banner text over the gold-glow region.

## Dev-ready status (honest)
- ✅ Variable-bound (Dev Mode shows `var(--we-*)`) · ✅ real component instances · ✅ real vector icons
  · ✅ real Hindi content · ✅ responsive auto-layout (HUG/FILL).
- ⚠️ **Code Connect wiring**: mapping table above is the spec; generating the `.figma.ts` templates
  needs the `caraxes` repo — final follow-up (`/figma-code-connect`).
- ⚠️ **A11y**: contrast spot-check recommended on the festival banner (Lane-2 off-token colours).
- Guardrail: passes `/design-review` with notes (festival colours logged as Lane-2).
