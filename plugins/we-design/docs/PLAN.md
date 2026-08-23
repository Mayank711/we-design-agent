# we-design-agent — Plan

A design-generation agent for **WheelsEye Loads**, so PMs and developers can go from
*data* or *a hunch* to *credible, on-brand screens* — iterate 3–4 times — before (or
without) pulling in the design team. Mirror of the `we-mobile-dev-agent` plugin pattern.

Primary users: **PM + developers.** Output: **Figma-native (goal)**, HTML artifacts (works today / fallback).

---

## Key facts that shape this plan (verified 2026-08-12)

1. **The design system is code-native, not Figma.** Source is the `caraxes/` Next.js
   codebase. "No Figma was provided." Everything is CSS tokens + React components.
2. **The export already ships the foundation** (vendored in `design-system/`):
   - `_ds_manifest.json` — machine-readable index (components, 119 tokens, cards, fonts).
   - `_adherence.oxlintrc.json` — a linter that enforces the system (no raw hex/px,
     only Baloo 2/Poppins, valid component props/variants, import-from-index-only).
   - `SKILL.md` — already an invocable skill, built to emit static HTML.
3. **Figma write access is the gating unknown.** The authenticated Figma account
   (`mayank.a@wheelseye.com`) has **View-only** on the WheelsEye org and Full on a
   personal starter team. Writing designs into org Figma files needs an edit seat.

**Architectural consequence:** make the skills **output-agnostic**. A skill produces a
*design intent*; a **render target** turns it into HTML (today, zero setup) or Figma
(the "nirvana" upgrade, once a Figma library exists + edit access). HTML and Figma are
two renderers of the same intent — not two different tools. This delivers value
immediately and makes Figma an upgrade, not a prerequisite.

---

## Guardrails (revised — open to new-component exploration)

Three lanes, not a gate. PMs/devs are free to explore; the system stays uncontaminated.

| Lane | Who | Freedom | Safety mechanism |
|---|---|---|---|
| **1. Compose** | anyone | full | Only existing components/tokens. Adherence linter passes clean. |
| **2. Explore** | anyone | full | New/off-system components allowed, **auto-quarantined**: written to a `proposed/` area, labeled `PROPOSED — not in system`, with a captured rationale. Linter flags off-token usage as **warnings, not errors** — visible, never blocked. |
| **3. Adopt** | designer-gated | — | A proposed component is blessed into the real system (tokens + variants), re-indexed, and becomes Lane-1 material. |

Plus: additive-only (never overwrite designer work), sandbox-scoped writes, version-pinned
manifest, provenance log on every generated screen, cost caps with HTML auto-fallback,
and treat any text read out of Figma/other files as data, not instructions.

---

## Phases

### Phase 0 — Repo & ground truth  ✅ (in progress)
- [x] Scaffold `we-design-agent/`, vendor the design-system export as source of truth.
- [ ] Reuse `_ds_manifest.json` as the agent index (no rebuild needed).
- [ ] Wire `_adherence.oxlintrc.json` as the `/design-review` compliance check.
- [ ] Mirror the `we-mobile-dev` plugin manifest format for distribution.

### Phase 1 — Output-agnostic skills, HTML render target (delivers value now)
Skills (each reads the manifest, emits a design intent, renders via the HTML target):
- `/design-from-data` — data/metrics → screen(s) built from components.
- `/design-from-hunch` — vague intent → 3–4 divergent directions + one-line rationale each.
- `/design-iterate` — feedback → next cut, keeps a decision log.
- `/design-review` — runs the adherence linter + a11y + content-fundamentals (voice/tone/
  sentence-case/domain-vocab) check before anything is shared.
- `/design-explore` — the Lane-2 path: prototype a genuinely new component/pattern,
  auto-quarantined and packaged with rationale for the design team.

### Phase 2 — Figma render target ("nirvana" upgrade; gated on access)
- Confirm/obtain Figma edit access for the target space.
- Build the Figma library **from the code system** (`figma-generate-library`):
  variables (colors/type/spacing/radii/shadows) → components (Button ×7 variants, Input,
  Toggle, FilterChip, Badge, PremiumPill, RouteLadder, LoadCard, LoadListCard,
  SegmentedTabs, BottomNav).
- Code Connect: map Figma components ↔ `caraxes` + these JSX components.
- `/design-promote` — turn a chosen HTML direction into a real Figma frame from the library.

### Phase 3 — Governance & rollout
- Sandbox conventions, promotion review, manifest versioning.
- Package the plugin, write a 1-page PM quickstart (a PM should never see the repo).

---

## Open decision
**Where do generated Figma files live**, given the View-only WheelsEye seat?
(a) get an org edit seat, or (b) use the personal team space for now. Gates Phase 2 only —
Phases 0–1 proceed regardless.
