/* foundations-builder.js — canonical use_figma body for /onboard-system Phase 1.
 *
 * Consumes the build-plan JSON emitted by scripts/prepare_onboarding.py.
 * Run it once per STAGE (proven order from the Loads build), injecting:
 *   const PLAN  = <paste the build_plan.json>;
 *   const STAGE = "collections" | "primitives" | "semantics" | "scale" | "styles";
 * Each stage re-fetches collections by NAME, so stages are idempotent and need no
 * ID threading between use_figma calls. Every stage returns created/affected counts.
 *
 * Requires figma-use + figma-generate-library skills loaded. Colors are 0-1 range.
 */
const hx = h => { h = h.replace('#',''); if(h.length===3) h=h.split('').map(c=>c+c).join('');
  return { r:parseInt(h.slice(0,2),16)/255, g:parseInt(h.slice(2,4),16)/255, b:parseInt(h.slice(4,6),16)/255 }; };

// semantic figma-name -> scope set (fill vs text vs surface vs border vs point)
function scopeFor(name){
  if(name.startsWith('text/')) return ['TEXT_FILL'];
  if(name.startsWith('surface/')) return ['FRAME_FILL','SHAPE_FILL'];
  if(name.startsWith('border/')) return ['STROKE_COLOR'];
  if(name.startsWith('point/')) return ['FRAME_FILL','SHAPE_FILL'];
  return ['FRAME_FILL','SHAPE_FILL','STROKE_COLOR']; // action/brand fills
}
function web(v, css){ return v.setVariableCodeSyntax('WEB', `var(${css})`); }

async function getCol(name){
  const cols = await figma.variables.getLocalVariableCollectionsAsync();
  let c = cols.find(x=>x.name===name);
  if(!c){ c = figma.variables.createVariableCollection(name); }
  if(c.modes[0].name!=='Value') c.renameMode(c.modes[0].modeId,'Value');
  return c;
}
async function varsIn(colId){
  const all = await figma.variables.getLocalVariablesAsync();
  return new Map(all.filter(v=>v.variableCollectionId===colId).map(v=>[v.name,v]));
}
// "0px -16px 40px 0px rgba(165,165,165,.25)" -> {offset,radius,spread,color}
function parseShadow(val){
  const m = val.match(/rgba?\(([^)]+)\)/i);
  let r=0,g=0,b=0,a=1;
  if(m){ const p=m[1].split(',').map(s=>parseFloat(s.trim())); r=(p[0]||0)/255; g=(p[1]||0)/255; b=(p[2]||0)/255; a=p[3]===undefined?1:p[3]; }
  const nums=(val.replace(/rgba?\([^)]+\)/i,'').match(/-?\d+(\.\d+)?px/g)||[]).map(s=>parseFloat(s));
  const [x=0,y=0,blur=0,spread=0]=nums;
  return { type:'DROP_SHADOW', color:{r,g,b,a}, offset:{x,y}, radius:blur, spread, visible:true, blendMode:'NORMAL' };
}

if(STAGE==='collections'){
  const out={}; for(const n of ['Primitives','Color','Spacing','Typography']){ const c=await getCol(n); out[n]=c.id; }
  return out;
}
if(STAGE==='primitives'){
  const col=await getCol('Primitives'); const mode=col.modes[0].modeId; const ex=await varsIn(col.id); let n=0;
  for(const [name,hex,css] of PLAN.primitives){ let v=ex.get(name)||figma.variables.createVariable(name,col,'COLOR');
    v.setValueForMode(mode,hx(hex)); v.scopes=[]; web(v,css); n++; }
  return { primitives:n };
}
if(STAGE==='semantics'){
  const col=await getCol('Color'); const mode=col.modes[0].modeId;
  const prim=await varsIn((await getCol('Primitives')).id); const ex=await varsIn(col.id);
  let n=0; const missing=[];
  for(const [name,target,css] of PLAN.semantics){ const p=prim.get(target); if(!p){missing.push(target);continue;}
    let v=ex.get(name)||figma.variables.createVariable(name,col,'COLOR');
    v.setValueForMode(mode,{type:'VARIABLE_ALIAS',id:p.id}); v.scopes=scopeFor(name); web(v,css); n++; }
  return { semantics:n, missing };
}
if(STAGE==='scale'){
  const sp=await getCol('Spacing'); const spM=sp.modes[0].modeId; const spEx=await varsIn(sp.id);
  const ty=await getCol('Typography'); const tyM=ty.modes[0].modeId; const tyEx=await varsIn(ty.id);
  const mk=(map,col,mode,name,type,val,scopes,css)=>{ let v=map.get(name)||figma.variables.createVariable(name,col,type);
    v.setValueForMode(mode,val); v.scopes=scopes; web(v,css); };
  for(const [n,val,css] of PLAN.spacing) mk(spEx,sp,spM,n,'FLOAT',val,['WIDTH_HEIGHT','GAP'],css);
  for(const [n,val,css] of PLAN.radii)   mk(spEx,sp,spM,n,'FLOAT',val,['CORNER_RADIUS'],css);
  for(const [n,val,css] of PLAN.families) mk(tyEx,ty,tyM,n,'STRING',val,['FONT_FAMILY'],css);
  for(const [n,val,css] of PLAN.sizes)    mk(tyEx,ty,tyM,n,'FLOAT',val,['FONT_SIZE'],css);
  for(const [n,val,css] of PLAN.weights)  mk(tyEx,ty,tyM,n,'FLOAT',val,['FONT_WEIGHT'],css);
  for(const [n,val,css] of PLAN.lineHeights) mk(tyEx,ty,tyM,n,'FLOAT',val,['LINE_HEIGHT'],css);
  return { spacing:PLAN.spacing.length, radii:PLAN.radii.length, families:PLAN.families.length,
           sizes:PLAN.sizes.length, weights:PLAN.weights.length, lineHeights:PLAN.lineHeights.length };
}
if(STAGE==='styles'){
  // Effect styles — deterministic from shadow values
  const exE=new Map(figma.getLocalEffectStyles().map(s=>[s.name,s])); let ne=0;
  for(const [name,val] of PLAN.shadows){ let s=exE.get(name)||figma.createEffectStyle(); s.name=name; s.effects=[parseShadow(val)]; ne++; }
  // Text styles — DEFAULT ramp (one per size). Pairings are a REVIEW step: pick weight/lineHeight per role.
  const fam=(PLAN.families[0]&&PLAN.families[0][1])||'Inter';
  const styles=[...new Set([...(await figma.listAvailableFontsAsync()).filter(f=>f.fontName.family===fam).map(f=>f.fontName.style)])];
  const pick=(want)=>styles.includes(want)?want:(styles.includes('Medium')?'Medium':styles[0]||'Regular');
  await figma.loadFontAsync({family:fam,style:pick('Regular')});
  const exT=new Map(figma.getLocalTextStyles().map(s=>[s.name,s])); let nt=0;
  for(const [name,size] of PLAN.sizes){ const style=pick('Medium'); await figma.loadFontAsync({family:fam,style});
    let ts=exT.get(name)||figma.createTextStyle(); ts.name=name; ts.fontName={family:fam,style}; ts.fontSize=size;
    ts.lineHeight={unit:'PERCENT',value:140}; nt++; }
  return { effectStyles:ne, textStyles:nt, note:'text-style weight/lineHeight pairings are a review step' };
}
return { error:'unknown STAGE' };
