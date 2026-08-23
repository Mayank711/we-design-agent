# Dev-ready checklist

"Dev-ready" = a developer can implement the screen **without asking questions**. Gate every
`/screen-iterate` output on this. A mock fails most of these; a dev-ready screen passes all.

## Fidelity (vs the source)
- [ ] Every section from the source Screen Inventory is present (or its removal is in the decision log).
- [ ] Text is the source's **verbatim content**, in the correct language + font (Devanagari → Poppins/Baloo).
- [ ] Numbers, currencies, timers, counts match the source (₹53,500, `02:45`, `24 टन`, vehicle counts).
- [ ] **Spacing & vertical rhythm compared at 1:1** — total screen height and each section's height
      within ~10% of source. "Elements present" is NOT fidelity; inflated gaps/grey bands fail this line.
- [ ] **Background bands pixel-verified** — sample the left margin of both screenshots top-to-bottom
      and compare the band sequence (colour + boundaries): headers, panels, page fills, overlap seams.
      Don't assume the page bg token; the source may use a different structural composition (green
      header + white panel vs flat grey page).
- [ ] **Phantom-frame scan**: `findAll(f => f.layoutMode !== 'NONE' && f.counterAxisSizingMode === 'FIXED')`
      over the screen — every hit must be an intentional fixed dimension, else it's the 100px default leaking.
- [ ] Side-by-side screenshot vs source reviewed **at full resolution, section by section** (a tall
      thumbnail hides spacing defects — this is how the grey-area bug shipped).

## Tokens & components (no hardcoding, no detaching)
- [ ] No raw hex and no raw px anywhere — all bound to variables/styles (`_adherence.oxlintrc.json` clean).
- [ ] All elements are **instances** of DS components, not detached copies or ad-hoc frames.
- [ ] Every component has a **Code Connect** mapping to its code component (`add_code_connect_map`),
      so Dev Mode hands the dev the real snippet.
- [ ] Missing components were **built** (`/build-component`), not approximated. New patterns flagged.

## Assets
- [ ] Icons are **real imported vector components**, not placeholder shapes.
- [ ] Illustrations imported at correct resolution; exportable.

## Layout & responsiveness
- [ ] Auto-layout throughout; children use HUG/FILL correctly (no absolute hacks except intended overlays).
- [ ] Constraints/resizing verified at min & max widths — no overflow, no clipped text.
- [ ] Layer names are meaningful (dev-facing), not "Frame 42".

## Behaviour & states (the part mocks always skip)
- [ ] Interactive/dynamic elements annotated: timers, urgency thresholds, selected/disabled states.
- [ ] Empty / loading / error states provided or explicitly noted as out of scope.
- [ ] Tap targets ≥ 44px; contrast checked (esp. festival/off-token colours).

## Handoff
- [ ] Decision log (what changed vs source, why) attached.
- [ ] Provenance: source file/node recorded; source file NOT edited.
- [ ] Handoff note lists components used / newly built / assets imported / open questions.
