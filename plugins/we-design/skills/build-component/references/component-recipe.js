/* component-recipe.js — canonical use_figma bodies for /build-component.
 * Proven across all 11 WheelsEye Loads components. Requires figma-use +
 * figma-generate-library loaded, and foundations (variables + styles) already
 * present in the target file (built by /onboard-system).
 *
 * These are TEMPLATES: read the component's real source (.jsx/.prompt.md/.d.ts),
 * fill the CFG arrays with the true variants/tokens, then run. One component per
 * use_figma call. Screenshot after each. See gotchas.md before editing.
 */

// ============================================================
// SHARED PRELUDE — paste at the top of every component build
// ============================================================
const page = await figma.getNodeByIdAsync(PAGE_ID);   // PAGE_ID = the system's Components page
await figma.setCurrentPageAsync(page);
const V = new Map((await figma.variables.getLocalVariablesAsync()).map(v => [v.name, v]));
const paint = (name, fb) => figma.variables.setBoundVariableForPaint(
  { type: "SOLID", color: fb || { r: 0, g: 0, b: 0 } }, "color", V.get(name));
const bindRadius = (n, rname) => { const r = V.get(rname);
  for (const k of ["topLeftRadius","topRightRadius","bottomLeftRadius","bottomRightRadius"]) n.setBoundVariable(k, r); };
// ALWAYS hug. To make text span a width, FILL the wrapping FRAME, not the text (see gotchas.md).
const T = (family, style, size, lh, chars, colorVar) => {
  const t = figma.createText(); t.fontName = { family, style }; t.fontSize = size;
  if (lh) t.lineHeight = { unit: "PIXELS", value: lh };
  t.textAutoResize = "WIDTH_AND_HEIGHT"; t.characters = chars;
  if (colorVar) t.fills = [paint(colorVar)]; return t;
};

// ============================================================
// PATTERN A — ATOM as a VARIANT SET (Button / Badge / Chip / Toggle / Input)
// ============================================================
// 1 property axis. CFG rows carry the per-variant token names read from source.
async function buildVariantSet({ name, propName, cfg, buildOne, x, y, defaultLabel }) {
  const variants = [], textNodes = [];
  for (const row of cfg) {
    const c = figma.createComponent();
    c.name = `${propName}=${row.key}`;
    const t = await buildOne(c, row);          // buildOne styles c, appends children, returns its text node (or null)
    variants.push(c); if (t) textNodes.push(t);
  }
  const set = figma.combineAsVariants(variants, page);
  set.name = name; set.x = x; set.y = y;
  set.layoutMode = "VERTICAL"; set.itemSpacing = 16; set.counterAxisAlignItems = "MIN";
  set.paddingTop = set.paddingBottom = 24; set.paddingLeft = set.paddingRight = 24;
  set.primaryAxisSizingMode = "AUTO"; set.counterAxisSizingMode = "AUTO";
  if (defaultLabel && textNodes.length) {                 // optional TEXT property
    const key = set.addComponentProperty("Label", "TEXT", defaultLabel);
    for (const t of textNodes) t.componentPropertyReferences = { characters: key };
  }
  return set;
}
// Example buildOne for a Button-style pill (fill + text + optional border + radius):
async function buttonLike(c, row) {   // row = {key, bg|null, text, border|null, isLink}
  c.layoutMode = "HORIZONTAL"; c.itemSpacing = 10;
  c.counterAxisAlignItems = "CENTER"; c.primaryAxisAlignItems = "CENTER";
  if (!row.isLink) { c.paddingLeft = 16; c.paddingRight = 16; }
  const t = T("Baloo 2", "Medium", 18, 24, "Button", row.text);   // font loaded in prelude
  c.appendChild(t);
  c.fills = row.bg ? [paint(row.bg, { r: 1, g: 1, b: 1 })] : [];
  if (row.border) { c.strokes = [paint(row.border)]; c.strokeWeight = 1; }
  if (!row.isLink) { bindRadius(c, "radius/lg"); c.resize(120, 48); c.primaryAxisSizingMode = "AUTO"; c.counterAxisSizingMode = "FIXED"; }
  else { c.primaryAxisSizingMode = "AUTO"; c.counterAxisSizingMode = "AUTO"; }
  return t;
}

// ============================================================
// PATTERN B — COMPOSITE (LoadCard / LoadListCard): reuse INSTANCES of atoms
// ============================================================
// Build the shell as auto-layout, drop instances of already-built atoms, FILL frames (not text).
async function buildCard({ name, x, y, atomIds }) {   // atomIds = {routeLadder, pill, buttonSet}
  const card = figma.createComponent(); card.name = name; card.x = x; card.y = y; card.clipsContent = true;
  card.layoutMode = "VERTICAL"; card.itemSpacing = 0;
  card.fills = [paint("surface/card", { r: 1, g: 1, b: 1 })];
  card.strokes = [paint("border/card")]; card.strokeWeight = 1; bindRadius(card, "radius/lg");
  const shadow = figma.getLocalEffectStyles().find(s => s.name === "shadow/card");
  if (shadow) await card.setEffectStyleIdAsync(shadow.id);

  const body = figma.createFrame(); body.layoutMode = "VERTICAL"; body.itemSpacing = 16;
  body.paddingTop = 20; body.paddingBottom = 16; body.paddingLeft = 16; body.paddingRight = 16; body.fills = [];
  card.appendChild(body);
  const rl = (await figma.getNodeByIdAsync(atomIds.routeLadder)).createInstance(); body.appendChild(rl);
  // ... divider, detail rows (T() hugging), pill instance with text override, footer with button instance ...

  card.counterAxisSizingMode = "FIXED"; card.primaryAxisSizingMode = "AUTO"; card.resize(360, card.height);
  body.layoutSizingHorizontal = "FILL"; rl.layoutSizingHorizontal = "FILL";   // FILL the FRAMES
  return card;
}
// Instantiate a specific variant of an atom set:
//   const btn = (await figma.getNodeByIdAsync(atomIds.buttonSet)).children.find(c => c.name === "Style=solid").createInstance();
//   const lk = Object.keys(btn.componentProperties).find(k => k.startsWith("Label")); btn.setProperties({ [lk]: "Send Quote" });
// Override an instance's plain text:
//   const txt = inst.findAll(n => n.type === "TEXT").find(n => n.characters !== "⚡"); txt.characters = "Earn 12% more";

// Every build MUST end by returning ids for the state ledger:
// return { id: node.id, variants: n };
