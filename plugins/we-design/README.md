# we-design

Figma design agent for WheelsEye products. PMs and developers go from *data, a hunch, or an
existing screen* to **on-brand, dev-ready Figma designs** — composed only from the product's
design system, gated by a review that actually runs.

Sibling of `we-mobile-dev`: same philosophy (shared skills, per-product data, lazy context),
aimed at design instead of code.

## Skills

| Skill | What it does |
|---|---|
| `/onboard-system` | Import a design-system export (`_ds_manifest.json` + tokens/components/assets) → registry entry + **auto-built Figma foundations** (variables + styles, deterministic classifier). |
| `/build-component` | One code component → a faithful, **variable-bound Figma variant set**. Components build lazily, on demand. |
| `/screen-iterate` | Existing screen (Figma link) → **faithful reproduction** (inventory → gap analysis → real content/icons/language) → requested change → **dev-ready** output. Never edits the source file. |
| `/design-review` | The guardrail gate: adherence lint (no raw hex/px, no detached instances, system fonts), dev-ready checklist, 3-lane rule. Mandatory before "done". |

## Guardrails (3 lanes)

1. **Compose** — existing components/tokens only: open to everyone, safe by construction.
2. **Explore** — new/off-system elements allowed, auto-flagged + logged with rationale.
3. **Adopt** — a designer promotes an explored element into the system (versioned event).

## Products

`design-systems/registry.json` — one folder = one system = one Figma library file.
Loads is active; Operator / Consigner / Hulk / Install / Vylo / web are registered and onboard
via `/onboard-system` in minutes (foundations) + lazy component builds.

## Prerequisites

- Figma MCP connector authorized with an **edit-capable seat** on the target plan
  (enterprise-org Dev seat verified working; personal Starter plans hit page + rate caps).
- The target product's design-system export dropped in `design-systems/<slug>/`.

## Proof (v0.6)

Loads 2.0 Home rebuilt production-faithfully (Hindi, real icons, 103 variables, 25 instances,
0 detached), festival banner applied, `/design-review` PASS-with-notes. See
`docs/loads-home-handoff.md` and `docs/SKILLS-CHANGELOG.md` for the audit trail — including the
three user-caught misses that became mechanical checks.

## Known gaps (honest)

- Code Connect `.figma.ts` wiring needs the product code repo connected.
- PM generation skills (`/design-from-data`, `/design-from-hunch`) are roadmap, not shipped.
- Contrast spot-check pending on festival-banner Lane-2 colours.
