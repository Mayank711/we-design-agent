# we-design-agent

Org-level **AI design agent** for WheelsEye products — the design-side sibling of
[`we-mobile-dev-agent`](https://github.com/WeyeTech/we-mobile-dev-agent).

PMs and developers go from *data, a hunch, or an existing screen* to **on-brand, dev-ready
Figma designs**, composed only from the product's design system and gated by `/design-review`.

## Install

Add this repo as a plugin marketplace in Claude Code, then enable the `we-design` plugin:

```bash
claude plugin marketplace add WeyeTech/we-design-agent
```

```bash
claude plugin install we-design
```

Then authorize the **Figma MCP connector** with an edit-capable seat (Settings → Connectors),
and run any skill — start with `/screen-iterate` on an existing screen, or `/onboard-system`
to add a new product's design system.

## What's inside

```
plugins/we-design/
  skills/
    onboard-system/    export → registry + auto-built Figma foundations (variables + styles)
    build-component/   code component → variable-bound Figma variant set (+ gotchas.md)
    screen-iterate/    existing screen → faithful repro → change → dev-ready (+ checklist)
    design-review/     guardrail gate: adherence lint + dev-ready checklist + 3-lane rule
  design-systems/
    registry.json      one folder = one product system = one Figma library file
    loads/             WheelsEye Loads export (active): tokens, components, assets, adherence lint
  docs/                PLAN, MULTI-SYSTEM architecture, SKILLS-CHANGELOG, inventories, handoffs
```

## Status — v0.7.0

Engine proven end-to-end on WheelsEye Loads: design-system export → Figma library
(103 variables, 16 styles, 15 components + 13 icons) → production Home rebuilt faithfully
in Hindi → festival change applied → review PASS-with-notes. The `docs/SKILLS-CHANGELOG.md`
records how each user-caught miss became a mechanical check.

Roadmap: Code Connect wiring, PM generation skills (`/design-from-data`, `/design-from-hunch`),
onboarding the remaining products (Operator, Consigner, Hulk, Install, Vylo, web).
