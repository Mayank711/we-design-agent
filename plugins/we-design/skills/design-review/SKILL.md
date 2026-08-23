---
name: design-review
description: The guardrail gate. Run before any design/screen/component is called "done" or handed to dev. Enforces the design system (adherence lint), the dev-ready checklist, and the 3-lane rule (compose / explore / adopt). Reports PASS/FAIL with findings. Use for "review this design", "is this on-brand", "is this dev-ready", or automatically at the end of /build-component and /screen-iterate.
user-invocable: true
---

# /design-review — the guardrail gate

Guardrails only work if something **runs** them. This skill is that something. It is the mandatory
final step of `/build-component` and `/screen-iterate`, and can be run standalone on any node.

## Why this exists (and why guardrails were skipped at first)
The guardrails were **written as documentation** (PLAN.md's 3-lane model, the dev-ready checklist)
but never **operationalized** — there was no step that actually executed them, and the agent
optimized for visible output over process. Result: the first Home was off-brand-adjacent and not
dev-ready (placeholder icons, dropped sections, no lint). A guardrail that isn't wired into the
workflow is just a wish. This skill wires it in.

## What it checks

### 1. Adherence lint (the design system)
Run the system's `_adherence.oxlintrc.json` mindset over the design's bound values:
- **No raw hex** — every fill/stroke resolves to a color variable. Flag any literal `#…`.
- **No raw px** — spacing/radius bound to `space/*` / `radius/*` tokens where a token exists.
- **Fonts** — only the system families (Baloo 2 / Poppins). Flag anything else.
- **Components** — instances are real DS components (not detached); variant/prop values are valid.

### 2. Dev-ready checklist
Run `../screen-iterate/references/dev-ready-checklist.md` in full: fidelity, tokens, Code Connect,
real assets, responsive auto-layout, states/behaviour annotated, handoff note.

### 3. The 3-lane rule (compose / explore / adopt)
- **Lane 1 (compose):** only existing components/tokens — passes silently.
- **Lane 2 (explore):** off-system elements are allowed but must be **flagged + labelled** with a
  rationale (e.g. the festival gold/tricolor/navy on the Independence-Day banner are intentional
  off-token festival colours — legitimate Lane-2, not a violation).
- **Lane 3 (adopt):** a Lane-2 element promoted into the system is a designer-gated event.
Anything off-system that is **neither** existing **nor** flagged Lane-2 is a **FAIL**.

## Output
A verdict per area — **PASS / PASS-WITH-NOTES / FAIL** — with a findings list
(location → issue → fix). On FAIL, do not mark the parent task done; fix and re-run.

## What a clean review does NOT waive
Off-token festival colours, deliberate new patterns, and documented scope cuts are fine **when
logged**. Silent hardcoding, detached instances, placeholder assets, or dropped sections are not.
