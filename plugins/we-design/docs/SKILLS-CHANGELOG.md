# we-design skills — changelog

How the plugin's skill set evolved, and why. Newest first.

## v0.6 — Background-structure fidelity (user-flagged, second Home miss)
- **`/screen-iterate` Phase A**: the Screen Inventory must now include the **background structure** —
  a left-margin pixel scan recording every background band (header/panel colours, boundaries,
  overlap/radius seams) plus a cross-check against the DS readme's named structural signatures.
- **`dev-ready-checklist.md`**: new line — background bands pixel-verified against source (band
  sequence + boundaries), never assumed from the page token.
- **Why:** the Home was built on flat grey `surface/page`, but the source uses the DS's *signature*
  green header (`#2F663C`) + white content panel pulled up with a 24px top radius — described verbatim
  in the vendored readme and still missed, because the inventory catalogued elements, not the canvas
  they sit on. Pixel-sampling (`background: #F4F5FA` token exists but the screen composes green+white)
  is what caught the truth; assumptions did not.

## v0.5 — Density fidelity (user-flagged rework of the Home)
- **`gotchas.md`**: added the **phantom-100px rule** — `createFrame()` defaults to 100×100 and
  `layoutMode` only auto-sizes the primary axis; a forgotten `counterAxisSizingMode="AUTO"` leaves
  ~100px invisible bands. Mandate `createAutoLayout()` or both sizing modes + a post-build
  `counterAxisSizingMode==='FIXED'` scan. Also: **never recolor icons by mutating instance children**
  — recolor at SVG source (a truck icon degraded to a green blob).
- **`dev-ready-checklist.md` + `/screen-iterate` Phase C**: fidelity gate upgraded from "elements
  present" to **density** — section heights/gaps within ~10% of source, full-res section-by-section
  comparison (tall thumbnails hide spacing defects), phantom-frame scan required.
- **Why:** the assembled Home passed the old gate with ~700px of phantom padding and a corrupted
  nav icon; the user caught it. Component screenshots looked fine in isolation — the defects were
  structural (default frame sizes), so the rule now targets structure, not just pixels.

## v0.4 — Guardrails operationalized
- **NEW `/design-review`** — the guardrail *gate*. Runs the adherence lint (no raw hex/px, system
  fonts only, real component instances), the dev-ready checklist, and the 3-lane rule (compose /
  explore / adopt). Reports PASS / PASS-WITH-NOTES / FAIL.
  - **Why now:** guardrails existed only as documentation (PLAN.md, checklists) and were never
    executed, so the first Home shipped off-brand-adjacent and not dev-ready. This skill wires the
    guardrails into the workflow so they actually run.
- **`/build-component` + `/screen-iterate`** now require a `/design-review` pass before "done".

## v0.3 — Consuming existing screens
- **NEW `/screen-iterate`** — reproduce an existing screen faithfully → apply a change → ship
  **dev-ready**. Mandatory sequence: ingest (`get_design_context` + inventory) → component/asset gap
  analysis → faithful reproduction (real content/icons/language) → change (logged) → dev-ready gate.
  - `references/dev-ready-checklist.md` — the definition of "a dev can build this without asking".
  - **Why:** the recurring PM/dev use case ("here's a screen, clean it / festival-ify it") had **no
    skill**. First attempt approximated with generic specimens and dropped whole sections; this skill
    forces ingest + gap-analysis so that can't happen silently.

## v0.2 — Building the library
- **NEW `/build-component`** — code component → Figma variant set, variable-bound. Extracted from 11
  proven WheelsEye Loads builds.
  - `references/gotchas.md` — hard-won API traps (text-hug vs collapse, `description` not
    `descriptions`, `combineAsVariants` (0,0) stacking, paint-reassign, dashed-line transform).
  - `references/component-recipe.js` — Pattern A (atom variant set) + Pattern B (composite via instances).
  - **Why deferred until v0.2:** the abstraction was only safe to extract after ~3 real components
    revealed the repeatable pattern (avoid premature abstraction).

## v0.1 — Foundations + multi-system
- **NEW `/onboard-system`** — import a design-system export → auto-build Figma foundations
  (variables + styles), deterministically from `_ds_manifest.json`.
  - `scripts/prepare_onboarding.py` — value-first token classifier (reproduces the Loads foundation
    exactly; flags non-mappable tokens).
- **Multi-system architecture** — `design-systems/registry.json` + `docs/MULTI-SYSTEM.md`: one folder
  = one system = one Figma file; active-system resolution (explicit → session pin → context signals
  → confirm). So Operator/Consigner/Hulk/Install/Vylo/web onboard the same way.

## Known follow-ups
- `/design-from-data`, `/design-from-hunch` (PM-facing generation) — not yet built.
- `/figma-code-connect` wiring for shipped screens (needs the code repo).
