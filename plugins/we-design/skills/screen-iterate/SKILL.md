---
name: screen-iterate
description: Reproduce an existing screen (a Figma frame or a screenshot) faithfully with our design system, apply a requested change (clean it up, restructure, add a festival banner, etc.), and output a DEV-READY design. Use for "take this screen and make X", "clean up this UI", "add a <festival> banner to this screen", "redesign this", "make this screen dev-ready", or whenever an existing screen/URL is given and a change is asked. Never edits the source file.
user-invocable: true
---

# /screen-iterate — existing screen → faithful reproduction → change → dev-ready

The recurring PM/dev job: *"here's a screen, change it (cleaner / festive / restructured) and give me
something a dev can build directly."* This skill exists because approximating with generic component
specimens (the failure mode) produces a mock, not a dev-ready screen. **Fidelity first, then the change.**

**Never edit the source file.** Read it only. Build in the active system's file (a `Screens` page).

**Foreign files are usually not even editable** — files the connector account doesn't own commonly
refuse `use_figma` writes ("you'll need a Full seat"), while reads (`get_metadata`,
`get_screenshot`, `get_variable_defs`, `download_assets`) still work. If the user asks to
"duplicate the page and change it" inside such a file, do NOT stop: fulfil the intent as a
**faithful in-sandbox duplicate** of the target frame(s) in a file we own (create one via
`create_new_file` if the system has no sandbox yet), state the substitution explicitly, and use
`download_assets` → `upload_assets` to carry raster/illustration fidelity across files.

## The non-negotiable sequence (skipping a phase is how details get dropped)

### Phase A — Ingest FAITHFULLY (read-only)
Do NOT eyeball a screenshot and start building. Extract the real thing:
- `get_design_context` on the source node — the authoritative layers, **verbatim text**, auto-layout, and token refs. This is the tool most likely skipped; don't.
- `get_variable_defs` — the exact tokens/styles the source uses.
- `get_metadata` + **readable full-res screenshots** (per-section if tall).
- Produce a written **Screen Inventory**: every section top→bottom, every text string *verbatim in its
  source language*, every icon, every component/instance, colours, spacing, and any dynamic bits
  (timers, urgency, counts, states). If it's on the screen, it's in the inventory.
- **Inventory the BACKGROUND STRUCTURE, not just the elements.** Sample a left-margin vertical pixel
  scan of the source screenshot (or read the root frames' fills) and record every background band:
  header colours, panel colours, where each starts/ends, and any overlap/radius seams. Backgrounds are
  a layer elements sit ON — cataloguing elements alone misses them entirely (the Loads Home's
  green-header + white-panel-with-24px-radius signature move was missed exactly this way, despite the
  DS readme literally describing it). Cross-check the inventory against the system's readme for named
  structural signatures.

### Phase B — Component & asset GAP ANALYSIS
Map every inventory item to a DS component (`search_design_system` + the local library).
- **Present the gap list**: what maps to an existing component, what is **missing** (a component we
  haven't built), and what assets are missing (icons/illustrations).
- Missing components MUST be **built via `/build-component` before assembly** — never approximated or
  dropped. Genuinely new patterns are the Lane-2 "explore" path (flag them).
- Missing icons/illustrations MUST be **imported as real assets** (from the system's `assets/`, or the
  source's vectors via `upload_assets`) — **no placeholder boxes**.

### Phase C — Faithful reproduction
Rebuild the screen from DS **instances**, with **real content** (verbatim text, correct language +
font — Hindi/Kannada → Poppins/Baloo Devanagari), **real icon components**, and correct auto-layout.
- **Fidelity gate is DENSITY, not presence**: compare screenshot vs source side-by-side at full
  resolution, **section by section** — section heights and gaps within ~10% of source. Run the
  phantom-frame scan (`counterAxisSizingMode === 'FIXED'` on auto-layout frames) before calling it
  faithful. A screen can contain every element and still fail (inflated spacing = the grey-area bug).
- Iterate until it matches *before* changing anything.

### Phase D — Apply the requested change
Make the change (cleanup / restructure / festival) as a deliberate diff on the faithful base. Keep a
**decision log**: what changed, what stayed, and why. (Cleanups: consolidate, don't silently delete —
if you drop the unloading filter row, say so and why.)

### Phase E — DEV-READY gate (this is what "directly pick for development" means)
Ship only when ALL of these hold — see `references/dev-ready-checklist.md`:
1. Every fill / type / radius / spacing is **variable- or style-bound** — zero raw hex/px (run the
   system's `_adherence.oxlintrc.json` mindset).
2. Components are **real instances**, not detached; each maps to a code component via **Code Connect**.
3. **Real content + real icon components** — no placeholders, no lorem, no gray squares.
4. **Auto-layout + constraints** so it resizes (responsive), correct **layer names**, sane structure.
5. **States & behaviour documented** (timers, urgency thresholds, empty/error/loading, selected states)
   as annotations — a dev shouldn't have to guess.
6. **Decision log + provenance** attached (source node, what changed).

## Output
- The faithful+changed screen on the `Screens` page.
- A short handoff note: components used, components newly built, assets imported, the decision log, and
  any open questions. That note is the dev's spec.

## Lesson this skill encodes
First real run (WheelsEye Loads Home, Independence-Day cleanup) failed dev-readiness by approximating:
dropped the vehicle-stat row, both filter rows, the dark rewards card, real icons, and the Hindi
content. Root cause: no Phase A/B. This sequence is mandatory precisely to prevent that.
