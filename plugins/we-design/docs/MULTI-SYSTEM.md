# Multi-system architecture

`we-design-agent` is **not** tied to one product. It hosts many design systems and resolves
which one to build in per request. Adding a product later is a two-step import — no code changes.

## Layout

```
we-design-agent/
  design-systems/
    registry.json          # index of all systems + identification signals
    loads/                 # WheelsEye Loads export (active)  ← was design-system/
    operator/  consigner/  hulk/  install/  vylo/  web/   # dropped in as they arrive
  skills/                  # output-agnostic skills, scoped to the ACTIVE system
  docs/
```

**One design system = one folder = one Figma library file.** Keeping products in separate
Figma files (not one shared file) is the standard design-ops split: no token/name collisions,
independent versioning, and each product team owns its own library. The *file* is the namespace.

## Importing a new system (the whole flow)

1. Export the product's design system (same shape as `loads/`: `_ds_manifest.json`, `tokens/`,
   `components/`, `assets/`, `_adherence.oxlintrc.json`).
2. Drop it into `design-systems/<slug>/`.
3. Add/flip its entry in `registry.json` (`status: "active"`, fill `figma.fileKey`,
   `sourceRepo`, `aliases`, `domainVocab`).
4. Run the Figma library build (Phases 1–4) into that system's file.

That's it. The skills read the registry, so they pick up the new system automatically.

## The identification factor — how the agent picks the ACTIVE system

Resolved in strict priority order. **The agent never silently guesses when it's ambiguous.**

1. **Explicit in the request.** The user names the product ("build a *Loads* card", "*operator app*
   home"). Matched against each entry's `name` + `aliases`. Highest priority — always wins.
2. **Session pin.** The user sets an active product for the session ("we're on Operator today").
   It stays active until changed. (`defaultSystem` in the registry is the cold-start pin.)
3. **Context signals** (inferred, only when 1 & 2 are absent):
   - **Codebase** in play matches an entry's `sourceRepo` / `sourcePathGlobs` (e.g. `caraxes/` → Loads).
   - **Open Figma file** key matches an entry's `figma.fileKey`.
   - **Domain vocabulary** in the request matches an entry's `domainVocab` (e.g. "POD / lane / bid" → Loads).
4. **Confirm.** If step 3 yields **zero or more than one** candidate, the agent **asks** with a
   picker of `status:"active"` systems before building. Ambiguity is never resolved by guessing.

Every generated artifact is stamped with the resolved system slug in its provenance log, so it's
always auditable which system a screen was built against.

## Platform note (web vs mobile)

The same registry + resolution model covers web. A `platform:"web"` entry differs only in its
render targets (breakpoints, web component framework) — not in how it's identified or scoped.
