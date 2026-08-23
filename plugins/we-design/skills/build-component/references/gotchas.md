# build-component — hard-won gotchas

Every item here cost a real debugging cycle during the WheelsEye Loads build. Read before writing any `use_figma` component script.

## Text (the #1 source of broken renders)
- **Newly-created text MUST hug**: set `textAutoResize = "WIDTH_AND_HEIGHT"`. Bare `"HEIGHT"` without an explicit width **collapses the text to ~1 character wide → renders one letter per line (vertical)**. This bit LoadCard *and* Input.
- **`FILL` on a TEXT node is unreliable across files** — it silently worked in one file and failed in another for the same script. **Prefer `FILL` on the wrapping FRAME** and let the text hug inside it. (Input's field frame FILLs; the value text hugs → robust.)
- Instance text is safe (pre-baked); only *freshly created* text hits these traps.
- Load every font/style before writing text: `await figma.loadFontAsync({family, style})`. Baloo 2 styles: `Regular/Medium/SemiBold/Bold/ExtraBold`.

## Component sets
- The property is **`description`** (singular). `descriptions` throws `no such property`.
- `combineAsVariants` **stacks all variants at (0,0)** — set `set.layoutMode` (`VERTICAL`/`HORIZONTAL`) + spacing/padding to lay them out, and `set.x/set.y` away from origin.
- Variant component names must be `Property=Value` (e.g. `Style=solid`, `State=off`). The set derives the property axis from these.
- TEXT property: `const key = set.addComponentProperty("Label","TEXT","default")`, then on each variant's text node `t.componentPropertyReferences = { characters: key }`.

## Variables & paints
- `figma.variables.setBoundVariableForPaint(paint, "color", variable)` **returns a NEW paint** — capture it and reassign (`node.fills = [boundPaint]`). It does not mutate in place.
- Bind radius per corner: `node.setBoundVariable("topLeftRadius", radiusVar)` ×4 (there is no single `cornerRadius` bind).
- Colors are **0–1 range**, `{r,g,b}` only (opacity at paint level, not in `color`).
- Always pass a sensible fallback color to your paint helper — if a variable name is missing, you still get a visible (not black) node and can spot it.

## Layout & sizing
- **THE PHANTOM-100px BUG (cost a full user-flagged rework):** `figma.createFrame()` starts at
  **100×100**, and setting `layoutMode` only auto-sizes the PRIMARY axis — the **counter axis stays
  FIXED at 100px**. Every forgotten `counterAxisSizingMode = "AUTO"` leaves an invisible ~100px band
  of background ("mysterious grey areas", inflated rows/tabs/footers). It hit SegmentedTabs, LoadCard
  (timeRow/urgency/footer), PaymentRewardsCard rows, BottomNav items, and filter rows in ONE build.
  **Rule: use `figma.createAutoLayout(dir)` for every container, or set BOTH sizing modes explicitly
  on every `createFrame()` + `layoutMode`. Then verify: after building, scan
  `findAll(f => f.layoutMode !== 'NONE' && f.counterAxisSizingMode === 'FIXED')` and justify each hit.**
- **Never recolor an icon by mutating an instance's children fills** — it silently degrades the
  vector (a truck became a green blob). Recolor at SVG source (`fill="#2EA750"` in the SVG string,
  fresh `createNodeFromSvg`), or build proper icon color variants.
- `resize()` **resets sizing modes to FIXED** — call it *before* setting `primaryAxisSizingMode`/`counterAxisSizingMode`.
- `layoutSizing*` (child: `FIXED/HUG/FILL`) ≠ `*AxisSizingMode` (frame: `FIXED/AUTO`). Don't cross them.
- Set `FILL`/`HUG` only *after* `appendChild` — an unparented node can't satisfy the rule.
- Use `figma.createAutoLayout(dir)` for anything with structurally-related children; absolute x/y only for true overlays (see next).

## Absolute positioning (markers, dashed connectors)
- For a **vertical dashed line** (RouteLadder connector), do NOT fight `.rotation`. Create a `LINE`, `resize(length, 0)`, then set `relativeTransform = [[0,-1,X],[1,0,yTop]]` (a clean 90° rotation mapping local x-axis to +y), then `dashPattern=[3,3]`, `strokeWeight=1`.

## Composites (cards, screens)
- **Reuse instances, don't rebuild atoms**: `const inst = (await figma.getNodeByIdAsync(atomId)).createInstance()`. LoadCard nests RouteLadder + PremiumPill + Button instances.
- Override an instance's text by finding the sublayer and setting `characters` (load its font first), or via a component property if the atom exposes one.
- Instantiate a specific **variant**: `set.children.find(c => c.name === "Style=solid").createInstance()`.

## Styles
- Apply effect/text styles **async**: `await node.setEffectStyleIdAsync(id)`, `await textNode.setTextStyleIdAsync(id)` (font must be loaded).

## Process
- `use_figma` is **atomic** — a thrown error rolls back the whole script. Read the error, fix, retry. Never blind-retry.
- `await figma.setCurrentPageAsync(page)` **once per call**; never loop pages inside one script.
- **Never parallelize `use_figma` calls** — mutations must be strictly sequential.
- **Screenshot every component** (`get_screenshot` or `await node.screenshot()`) — structural success ≠ visual correctness (the vertical-text bug returned a clean success).

## Fills & variable-bound paints (v0.7, BookTruck FTL home)
- **`figma.createAutoLayout()` frames default to a SOLID WHITE fill** (same as `createFrame()`).
  Every structural wrapper/row/stack that should be transparent MUST set `fills = []` explicitly,
  or it silently masks the parent's band color (a whole sky-blue header rendered white because
  full-width wrapper rows kept their default white fill). `createNodeFromSvg` wrapper frames can
  carry a white fill too — clear those as well.
- **Renders may show a bound paint's STATIC color, not the variable's value.** When binding with
  `setBoundVariableForPaint`, always pass the variable's actual resolved color as the paint's
  static `color` (belt and braces): `setBoundVariableForPaint({type:'SOLID', color: <real value>,
  opacity}, 'color', variable)`. Never bind onto a placeholder white/black base color.
- **Paints returned by `setBoundVariableForPaint` are frozen** — mutating `.opacity` on the
  returned object fails silently (a 15%-opacity radar circle rendered fully opaque). Set `opacity`
  on the INPUT paint object before binding.

## Foreign-file access (v0.7)
- Files not owned by the connector account may refuse ALL `use_figma` writes with
  *"To use MCP tools that make edits, you'll need a Full seat"* — even when the same account can
  edit files it created via `create_new_file`. Protocol: treat the foreign file as read-only
  (metadata/screenshots/variables/assets), and do every build in a file we own. A requested
  "duplicate the page" then becomes: faithful in-sandbox reproduction of the target frame(s),
  with `download_assets` → `upload_assets` for raster/illustration fidelity.
