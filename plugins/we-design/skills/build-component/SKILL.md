---
name: build-component
description: Build one design-system component (or several) as a Figma variant set from its code source, bound to the system's variables. Use for "build the <X> component in Figma", "add <X> to the Figma library", "recreate this component in Figma", or after /onboard-system when a screen needs a component that doesn't exist yet. Components are built lazily/on-demand.
user-invocable: true
---

# /build-component — code component → Figma component

Turns one component's source (`.jsx` + `.prompt.md` + `.d.ts`) into a faithful Figma
variant set, every visual property bound to the foundation variables. Extracted from
the 11 proven WheelsEye Loads builds. Components are built **on-demand** — you don't need
all of them up front; build one when a screen first needs it.

**Prerequisites**
- `figma-use` + `figma-generate-library` skills loaded (mandatory for every `use_figma` call).
- Foundations already in the target file (variables + effect/text styles) — i.e. `/onboard-system`
  has run for this system. If not, run that first.
- The **active system** resolved (see `docs/MULTI-SYSTEM.md`): gives you the source folder,
  the Figma `fileKey`, and the Components page id.

## Recipe (the repeatable pattern — same for every component)

1. **Read the source.** Open the component's `.jsx` (+ `.prompt.md`, `.d.ts`) in
   `design-systems/<slug>/components/`. Extract: the variant axis + values, per-variant
   fills/text/border, sizes, radii, fonts, and any composed sub-components. Be faithful —
   don't approximate colors or spacing.
2. **Map every visual property to a foundation variable by NAME** (e.g. green fill → `primary`,
   card bg → `surface/card`, radius → `radius/lg`). The prelude builds a `name → variable` map.
3. **Pick the pattern** (`references/component-recipe.js`):
   - **Atom → variant set** (Pattern A): one property axis, `Property=Value` variant names,
     `combineAsVariants`, grid via `set.layoutMode`, optional TEXT/BOOLEAN property.
   - **Composite → reuse instances** (Pattern B): build the shell in auto-layout and drop
     `createInstance()` of already-built atoms (RouteLadder, Button, PremiumPill). Never rebuild
     an atom inside a composite.
4. **Build it in ONE `use_figma` call** (per component). Bind fills/strokes/radius with
   `setBoundVariableForPaint` / `setBoundVariable`. Add a `description` (singular!).
5. **Screenshot-validate.** `get_screenshot` the returned node id. Structural success ≠ visual
   correctness — the classic failure (collapsed/vertical text) returns a clean success. Fix and
   re-run if wrong (scripts are atomic; a fix-and-retry is safe).
6. **Record** the component's node id in the state ledger, and its variant count.
7. **Gate:** run `/design-review` on the component before marking it done. Do not skip — a component
   that hardcodes a value or detaches an instance fails the guardrail and must be fixed first.

## Read this before writing any script
`references/gotchas.md` — every trap that cost a debugging cycle. The load-bearing ones:
- **Freshly-created text must hug** (`textAutoResize = "WIDTH_AND_HEIGHT"`); bare `"HEIGHT"`
  collapses to one-letter-per-line. **`FILL` on text is unreliable — FILL the wrapping frame instead.**
- `description` singular, not `descriptions`.
- `combineAsVariants` stacks at (0,0) → set `layoutMode` to grid the variants.
- `setBoundVariableForPaint` returns a NEW paint — capture & reassign.
- `resize()` before sizing modes; colors 0–1; one `setCurrentPageAsync` per call; never parallelize.

## Scope control
- One component per `use_figma` call. Simple atoms can pair up (Badge + PremiumPill did); keep
  composites solo.
- If the source needs a token that isn't in the foundation, **stop and flag it** (it's a Lane-2
  "explore/new" case per the guardrails) — don't invent a variable.
- Cap variant matrices: if `axes × values > ~30`, split into a sub-component (INSTANCE_SWAP),
  don't explode variants.

## Proven reference
All 11 Loads components were built with this recipe (Button 7-variant set → LoadCard/LoadListCard
composites nesting three instance levels). The exact working scripts live in the session journal;
`component-recipe.js` is their distilled, parameterized form.
