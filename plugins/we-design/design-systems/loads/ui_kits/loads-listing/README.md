# WheelsEye Loads — Listing & Load Detail (production recreation)

Pixel-faithful recreation of the two highest-traffic surfaces, built per the `caraxes/` source.

## Files
- `index.html` — mounts the phone-framed app (open this).
- `screens.jsx` — `ListingScreen`, `LoadDetailScreen`, `AppHeader`, exposed as `window.WheelsEyeLoadsKit`.

## Listing screen (All Loads + vehicle-anchored)
Green app header, the white content panel pulled up over it, and a list of `LoadListCard`s. The top **All Loads / My Vehicle** switch toggles between:
- **All Loads** — New/My Loads segmented tabs + vehicle-type filter chips.
- **My Vehicle (vehicle-anchored)** — header shows the selected truck, a vehicle strip, and loads matched to it.

Every production footer variant is represented across the cards: **quote** (OK green / RED reduce), **accept** (full green button), **confirm** (token + green confirm), and **bidding** (gold panel, place-bid + not-interested). Tapping a card opens the detail.

## Load detail screen
Faithful to `LoadDetailTemplateV2`: sticky back header with the dark support chip; the collapsible `LoadAddress` card (pickup/unloading filled markers, dashed sideline, blue expand arrow); `VehicleDetails` (squircle card, dashed row dividers, violet sub-tag pills, yellow `*` demand-prompt footer); the violet `Offer` pill; the sticky **Your freight** input + green Submit; and the live **leaderboard** sheet (rank medals, avatar initials, blurred quotes until you submit, "See leaderboard" expander).

## Composition
Listing uses the DS `LoadListCard`, `SegmentedTabs`, `FilterChip`, `ToggleSwitch`. Detail rebuilds the address/vehicle/leaderboard sections (not yet standalone primitives) using DS tokens + `Button`. Icons from `assets/icons/loads/`. Data mocked inline.
