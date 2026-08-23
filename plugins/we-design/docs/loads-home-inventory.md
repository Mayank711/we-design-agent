# Screen Inventory + Gap Analysis — Loads 2.0 Home

Source (read-only, never edited): `figma.com/design/PNTnXVD9cn06jwENiXzxs6` node `1246:39345`.
Target: our DS file `45IcfiT2cyfdgW9htADsPw`, `Screens` page.
Change requested: clean it up (minimal) + swap the festival banner to **Independence Day (15 Aug)**.

## Screen Inventory (top → bottom)

| # | Section | Verbatim content (source language) | Maps to | Status |
|---|---|---|---|---|
| 1 | Festival banner | "Celebrating 77th Republic Day" (tricolor + India Gate) | `IndependenceDayBanner` | ✅ built — **will replace** per the change |
| 2 | Segmented tabs | `लाइव लोड` (active) · `मेरे लोड` | `SegmentedTabs` | reuse + **Hindi labels** |
| 3 | Vehicle stat chips | `सभी लोड` · `GJ18Z 9182` · `MH18Z 3011` · `HR18Z 7810` · ⊕ | — | **BUILD: VehicleStatChips + row** |
| 4 | Loading filter | label `लोडिंग` + 📍; chips `दिल्ली NCR · गोवा · महाराष्ट्र · हरि…` | — | **BUILD: FilterRow** (FilterChip needs icon slot) |
| 5 | Unloading filter | label `अनलोडिंग`; chips `हरियाणा`✔ · `महाराष्ट्र`✔ · `उत्तर प्रदेश` · `राजस्थान` | — | **BUILD: FilterRow** |
| 6 | Load card ×N | route `सोनीपत, HR / कुंडली-122001` → `जयपुर, RJ / कोटपुतली-122001`; `Open · 12 चक्का · माल 24 टन`; `लोडिंग कल शाम`; urgency `02:45 मिन में लोड चला जायेगा`; distance pill `आपकी गाड़ी लोडिंग से 10 km दूर`; fare `पार्टी का भाड़ा ₹53,500`; CTAs `भाड़ा डालें और कन्फर्म करें` / `कन्फर्म करें` | `RouteLadder`✅ + — | **BUILD: production LoadCard** (urgency + timing + detail-icon rows + distance pill + party-fare/quote/confirm/bidding footers). Current LoadCard is a stripped demo. |
| 7 | Rewards card (dark) | `पेमेंट समय पर होगी`; `गाड़ी लोड करें — 1 घंटे में ₹42,800`; `POD फोटो डालें — 6 घंटे में ₹10,700` | — | **BUILD: PaymentRewardsCard** (dark, gold amounts, truck art) |
| 8 | Bottom nav (5) | `लोड देखें`✔ · `गाड़ी` · `टिप` · `सहायता` · `अकाउंट` | — | **BUILD: BottomNav-5** (our nav is 4-item English) |

## Component gap

**Reuse (with tweaks):** `SegmentedTabs` (Hindi), `RouteLadder` (sub-line `area - PIN` format), `PremiumPill` (distance variant), `Button` (Hindi + full-width footer usage).

**Build new (via `/build-component`):**
1. `VehicleStatChips` + horizontal row + ⊕ button
2. `FilterRow` — labeled section + icon-chip (extend `FilterChip` with a leading-icon slot)
3. `LoadCard` **production** — urgency line, loading-time row, detail-icon rows, distance pill, and the 4 footers (quote / confirm / accept / bidding)
4. `PaymentRewardsCard` — dark card
5. `BottomNav` **5-item**

## Asset gap
Import real SVGs from `design-systems/loads/assets/icons/` (via `upload_assets`) as icon components:
truck/axle, weight (टन), clock, location pin, body-type, ⊕, verified ✔, and nav icons
(loads / vehicle / tip / help / account). **No placeholder boxes.**

## Dev-ready extras
- Verbatim **Hindi** content (Devanagari → Poppins/Baloo).
- **Code Connect** mapping per component → its `caraxes` code component.
- States annotated: countdown/urgency thresholds, selected chips, empty/loading.

## Effort (honest)
~8–9 build slices after this ingest: icons(1) · VehicleStatChips(1) · FilterRow(1) ·
production LoadCard(2) · PaymentRewardsCard(1) · BottomNav-5(1) · assemble + Independence-Day
change(1–2) · Code Connect + dev-ready gate(1). Multi-session; state-ledgered + resumable.

## Assumptions to confirm at build time (per-node `get_design_context`)
Exact Hindi strings for nav items 2–5, the ⊕ action, and precise icon filenames — I'll pull these
from the source node-by-node as each component is built, rather than trusting the screenshot.
