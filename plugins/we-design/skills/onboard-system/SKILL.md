---
name: onboard-system
description: Import a new WheelsEye design-system export into we-design-agent and build its Figma foundations automatically. Use for "onboard <module>", "import design system", "add a new module/product", "set up Operator/Consigner/Hulk/Install/Vylo/web", or when handed a design-system export zip/folder.
user-invocable: true
---

# /onboard-system — add a product to we-design-agent

Turns a design-system export into a registered, Figma-ready system. Automates the deterministic
80% (import + registry + all token/style foundations). Components are **not** built here — they
are built lazily, on-demand, when a screen first needs them (see PLAN.md). A module is usable for
iteration as soon as its foundations + HTML render target exist.

**Prerequisite for the Figma step:** load `figma-use` + `figma-generate-library`, and have an
edit-seat Figma plan key (see the target system's `figma.plan`, or ask).

## Inputs
- A design-system **export** in the standard shape: `_ds_manifest.json`, `styles.css`,
  `tokens/`, `components/`, `assets/`, `_adherence.oxlintrc.json`, `SKILL.md`. (Same shape as
  `design-systems/loads/`.) Accept a zip or a folder path.
- A **slug** (e.g. `operator`). If omitted, derive from the manifest namespace and confirm.

### Fallback: no code export, only a live Figma file (proven on BookTruck FTL, v0.7)
When the product has no export yet but its designs live in a Figma file, onboard **from the file
itself** instead of stopping:
1. `get_variable_defs` on the product's main section/screen node(s) — this yields the real token
   set (colors, spacing, radius, font ramp, effects) exactly as bound on canvas.
2. Deduplicate aliases (legacy vs current collections, e.g. `Color/*` vs `Greys/*`) into one
   canonical set; **flag** name/value oddities and canvas colors that appear on screens but are
   missing from the token set (add them as Lane-2 exploratory tokens, e.g. `Accent/Sky`).
3. Skip the classifier (step 2 below) — write the captured set to
   `design-systems/<slug>/tokens.json` with `"source": "live-figma"` and register with
   `manifest: null`, noting the code export + adherence lint as pending.
4. Continue from step 4 (create the Figma sandbox file, build foundations from the captured set).
   If the source file belongs to another team, it is typically **read-only for the agent** (Figma
   Full-seat rule) — that's fine: reads and asset downloads still work, and all building happens
   in our sandbox.

## Steps

### 1. Ingest & validate
- If given a zip, extract to a temp dir. Confirm `_ds_manifest.json` exists and has a `tokens` array.
- If the shape is wrong, STOP and report what's missing — do not guess.

### 2. Classify (deterministic, no reasoning)
Run the classifier — it reads the manifest and produces the Figma build-plan + a proposed registry entry:
```bash
python3 skills/onboard-system/scripts/prepare_onboarding.py <export_dir> --slug <slug> --out /tmp/<slug>_build_plan.json
```
It prints a `CLASSIFIED:` count summary and a `FLAGGED for review:` list. **Always surface the
flagged list to the user** — these are tokens that can't be plain Figma variables (gradients,
motion tokens like `dur/ease/scale`, rem layout caps). They are handled manually or left as
documented foundations, never silently dropped.

### 3. Register
- Copy the export into `design-systems/<slug>/`.
- Merge the proposed `registryEntry` into `design-systems/registry.json`: flip an existing
  `planned` entry to `active`, or add a new one. Fill `aliases`, `platform`, `sourceRepo`,
  `domainVocab` (pull domain terms from the export's `readme.md`) — these power the
  identification factor in `docs/MULTI-SYSTEM.md`. Leave `figma.fileKey` null until step 4.

### 4. Create the Figma library file
Load `figma-create-new-file`, then create one file **per system** (never share a file across
products): `create_new_file({ editorType:'design', fileName:'<Name> DS Sandbox', planKey })`.
Write the returned `file_key` into the registry entry's `figma.fileKey`.

### 5. Build foundations (the automated payoff)
Using `references/foundations-builder.js`, run **5 sequential** `use_figma` calls against the new
file (NEVER parallel — Figma mutations are serial). For each, inject the build-plan and the stage:
`collections` → `primitives` → `semantics` → `scale` → `styles`. Each returns counts; verify them
against the classifier's `CLASSIFIED:` summary.

> The default text-style ramp pairs one style per size at 140% line-height. **Weight/line-height
> pairings per role (H1 bold vs body regular) are a review step** — refine after, or reuse the
> Loads text-style mapping as a reference.

### 6. Validate & checkpoint
- `get_screenshot` the file's variable/style panels or a swatch page for a visual check.
- Write a state ledger to `/tmp/ds-build-<slug>.json` (fileKey, counts, `componentQueue` from
  `manifest.components`, `completedSteps:["phase0","phase1"]`) so the component build is resumable.
- Report: N variables + M styles created, the flagged list, and the component queue. Done.

## What this skill does NOT do
- Build Figma components (lazy/on-demand; a future `/build-component` skill, extracted once the
  Loads components prove the repeatable pattern).
- Invent tokens. If the export lacks something, it's flagged, not fabricated.

## Proof
The classifier reproduces the hand-built Loads foundation exactly from its manifest
(46 primitives · 25 semantics · 8 spacing · 7 radii · 3 families · 9 sizes · 5 weights · 6 shadows),
flagging only the 5 non-mappable tokens. Re-run the command in step 2 against `design-systems/loads`
to see it.
