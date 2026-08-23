# WheelsEye Loads — Design System

A design system for **WheelsEye Loads**, the load-marketplace product inside the WheelsEye app. WheelsEye is an Indian fleet-management company (GPS tracking, fuel, FASTag, insurance for commercial trucks); **Loads** is its surface where truck **operators and fleet owners find return loads / freight** to carry, see fares, place bids, and book trips.

This is a **mobile-first, multilingual** product (English, Hindi, Kannada — hence Devanagari support in the type system) built for semi-literate, on-the-road users. The UI leans on **large touch targets, plain icons, bold rounded type, and a green = go / red = stop visual language** drawn from the road itself.

## Sources
- **Codebase:** `caraxes/` — the WheelsEye Loads Next.js front-end (read-only, mounted locally). Foundations were extracted from:
  - `caraxes/app/themeUtils/colors.ts` — the full color palette
  - `caraxes/app/layout.tsx` — fonts (Baloo 2 + Poppins via `next/font/google`)
  - `caraxes/app/components/**` — atoms (CustomButton, Text, Input, Chips), templates (LoadsTemplate `Card`), organisms (LoadCard), marketing (Header, Welcome hero)
  - `caraxes/app/components/assets/svgs/**` — logo, icons, illustrations
- No Figma was provided.

---

## CONTENT FUNDAMENTALS

**Voice:** plain, direct, action-first. Copy is written *for the driver/operator*, addressed as **"you"** ("Find loads for your truck", "Book this load"). Verbs lead CTAs: **Book load, View rate card, Continue, Add vehicle, Skip for now**.

**Tone:** functional and reassuring, never playful or clever. Trust signals are explicit and repeated — **"100% Payment guarantee", "Verified shipper", "Advance 40% · Balance on POD"**. Urgency is communicated with literal countdowns ("Closes in 04:32") rather than hype.

**Casing:** Sentence case everywhere — headings, buttons, labels. No ALL-CAPS except tiny over-line meta labels. Numbers and money are concrete: **₹48,000**, **21 Tonnes**, **32 ft Multi-axle**, **12,000+ loads daily**.

**Domain vocabulary:** Loading / Unloading point, Full load / Part load, Lane, Rate card, Bid, Token, POD (proof of delivery), KYC, RM (relationship manager), MXL/SXL (multi/single axle). Use these terms verbatim — operators know them.

**Bilingual:** strings are translated; Hindi/Kannada render in Poppins. Example: "अपने पास लोड खोजें" (find loads near you). Keep English strings short so translations fit.

**Emoji:** essentially none in product copy. The only glyph-as-icon is the **⚡ thunder** on premium/bid nudges and ★ stars on the guarantee strip. Everything else is a real SVG icon.

---

## VISUAL FOUNDATIONS

**Color:** Green is the brand's action/affirmation color — **`#2EA750`** drives primary buttons, the loading-point marker, success states, and the "OK" fare footer; the home header is a deep green **`#2F663C`**. **Blue `#0066FF`** is reserved for links and inline navigation. **Red `#D33636`** marks the unloading point, errors, and reject/cancel. **Gold `#F7C145`** is upsell/subscription and the welcome hero canvas. **Violet `#734FEA`** is the "premium / bid" accent, always on a faint `#F8F5FF→#FFF` gradient pill. Surfaces are near-white: page `#F4F5FA` behind white cards.

**Type:** Two families. **Baloo 2** (rounded, friendly, very legible) is the workhorse for all UI and display — weights 400/500/600/700. **Poppins** is secondary, used for Hindi/Devanagari script and the premium pill copy. Scale is px-based and large for the screen size (body 16, titles 18, address headings 20–24, fare 24, hero 30). Line-heights are generous (1.4–1.5).

**Spacing & layout:** a 4px grid with a consistent **16px screen gutter** and **20px card padding**. Mobile canvas caps around 30rem. Content sits in white cards on the gray page; the home feed uses a green header that the white content panel overlaps with a 24px top radius (a signature "panel pulls up over the header" move).

**Backgrounds:** flat color fills, never photographic. The home header and welcome hero are solid brand colors. The only gradients are (1) the violet premium-pill gradient and (2) a radial gold glow behind "accept/closing" banners. No textures, no mesh, no purple-blue AI gradients.

**Cards:** white, **12px radius**, **1px `#EAEDFA` border**, soft shadow **`0 2px 10px rgba(0,0,0,.08)`**. Detail panels use a softer wider shadow (`0 0 40px rgba(0,0,0,.06)`). Rate cards use `0 2px 20px rgba(165,165,165,.25)`. Bottom sheets get a 24px top radius and an upward shadow.

**Radii:** 6px (chips/track), **12px (cards & buttons — the default)**, 16px (vehicle cards), 24px (sheets / content panel), **36px pills**, 50% circles (markers, avatars, icon buttons).

**Buttons:** full-width by default, 48px tall, 12px radius, medium weight. Variants: solid green (primary), green-outline (secondary), gold, black, hollow (gray border), red-outline (reject), blue link. **Press = `scale(0.95)` over 300ms ease-in-out** — the single shared interaction across the app. Disabled solid drops to 30% opacity; other disabled states go gray fill + gray text.

**Hover/press:** mobile-first, so hover is minimal (gold CTA darkens ~3% via brightness). The meaningful state is **active**: the scale-down press, plus a green ripple wave that radiates from the tap point on load cards.

**Motion:** restrained and functional. Button press scale, 200ms toggle slide, shimmer skeletons while loading, a spring "success ellipse" wipe on confirmation screens. No decorative looping animation on content.

**Iconography motif:** the **route ladder** — green **circle** = loading point, red **square** = unloading point, joined by a **dashed vertical line**. This appears on every load card and detail screen and is the system's most recognizable pattern.

**Borders & dividers:** hairline `#EAEDFA` card borders; `#EBEDF1` internal dividers; occasional dashed dividers (`1px dashed`) for the route connector and "cut here" separators.

**Transparency/blur:** rare. Header chips use a translucent white (`rgba(255,255,255,0.14)`) over the green header. No backdrop blur in the product.

---

## ICONOGRAPHY

WheelsEye Loads uses **bespoke flat SVG icons** shipped in the app bundle — not an icon-font and not a third-party set like Lucide/Heroicons. They are single- or two-tone, rounded-corner, ~24px line/fill icons matching Baloo 2's friendly weight. Tab-bar icons come in **outlined (inactive) + filled (active)** pairs. Larger spot illustrations (empty states, trucks, success, customer care) are full-color flat SVGs/PNGs.

We've copied the real assets into `assets/` rather than redraw them:
- **Logo:** `assets/logos/` — the multicolour pinwheel **mark** (six colored arrows pointing to a central wheel), a **rounded/on-dark** variant with a white disc + shadow, and the **wordmark** (mark + "WheelsEye" in ink `#131313`).
- **Icons:** `assets/icons/` — nav pairs (truck, home, lanes, help), plus language, rupee/INR, location, search, call, time, back, chevron, verified, thunder, vehicle, RC, box-seam, ticks, language flags (Hindi/English).
- **Illustrations:** `assets/illustrations/` — demo truck, empty-loads, successful-delivery, default truck, customer-care.

**Emoji/unicode:** avoided in product copy. The only intentional glyphs are ⚡ (premium/bid) and ★ (guarantee strip). Use real SVGs for everything else; never hand-roll new icons — extend from the copied set or request additions.

> **Font note:** Baloo 2 and Poppins are loaded from Google Fonts (same as the product's `next/font/google` setup), so no substitution was needed. `assets/fonts/` keeps a sample of the product's bundled CircularStd for reference only — it is not used in the system.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — entry point; `@import`s the four token files. Consumers link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (radii/shadows/motion), `fonts.css` (Google Fonts).
- `readme.md` — this guide. `SKILL.md` — Agent-Skill wrapper.

**Components** (`components/<group>/`, exported on `window.WheelsEyeLoadsDesignSystem_985cfc`)
- `core/` — `Button` (7 variants), `Badge`, `PremiumPill`
- `forms/` — `Input`, `ToggleSwitch`, `FilterChip`
- `loads/` — `RouteLadder`, `LoadCard`, `LoadListCard` (production-faithful listing card with quote/confirm/accept/bidding footers)
- `navigation/` — `SegmentedTabs`, `BottomNav`

Each directory has `<Name>.jsx` + `.d.ts` + `.prompt.md`, and one `*.card.html` specimen.

**Foundation cards** (`guidelines/`) — Colors (greens, accents, neutrals), Type (Baloo, Poppins), Spacing (scale, radii & shadows), Brand (logo, route motif).

**UI kits** (`ui_kits/`)
- `loads-app/` — interactive Welcome → Home feed → Load detail recreation. Open `index.html`.
- `loads-listing/` — production-faithful **All Loads / vehicle-anchored listing** (every card footer variant) → **Load detail** (address, vehicle details, offer, freight input, live leaderboard). Open `index.html`.
- `rewards-milestone/` — **Activation rewards** flow: earn up to ₹3,500 across 3 trips in a month, paid as wallet cashback. Three gamified directions side-by-side (winding road / reward ladder / treasure trail), each with fresh · mid · done state toggle, confetti, how-it-works, referral, FAQ and T&C. Hindi. Open `index.html`.

**Assets** (`assets/`) — `logos/`, `icons/`, `illustrations/`, `fonts/`.
