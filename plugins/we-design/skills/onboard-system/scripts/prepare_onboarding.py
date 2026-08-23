#!/usr/bin/env python3
"""
prepare_onboarding.py — deterministic onboarding classifier for we-design-agent.

Reads a design-system export's _ds_manifest.json and turns its token list into
(a) a Figma foundations build-plan (collections + variables + styles) that the
canonical foundations-builder.js consumes verbatim, and (b) a proposed
registry.json entry. No LLM reasoning required — this is the automatable 80%.

Usage:
  python3 prepare_onboarding.py <export_dir> [--slug SLUG] [--out build_plan.json]

Anything it cannot confidently classify is emitted under "flagged" for human review
(gradients, motion tokens, layout caps) — never silently dropped.
"""
import json, os, re, sys, argparse

def strip_prefix(name):
    """--we-green-primary -> we-green-primary ; --color-primary -> color-primary"""
    return re.sub(r'^--', '', name)

def detect_brand_prefix(toks):
    """The brand prefix is the first segment shared by most hex-valued color tokens
    (e.g. 'we' in --we-green-primary). Returns '' if there is no dominant prefix."""
    from collections import Counter
    firsts = Counter()
    hexc = 0
    for t in toks:
        v = str(t['value']).strip()
        if v.startswith('#'):
            hexc += 1
            seg = strip_prefix(t['name']).split('-', 1)[0]
            firsts[seg] += 1
    if not hexc:
        return ''
    seg, n = firsts.most_common(1)[0]
    return seg if n / hexc >= 0.4 else ''

def group_slash(bare, brand=''):
    """we-green-primary -> green/primary ; black -> black (flat if no hyphen)."""
    if brand and bare.startswith(brand + '-'):
        bare = bare[len(brand) + 1:]
    return bare.replace('-', '/', 1) if '-' in bare else bare

# semantic css prefixes -> figma group path
SEM_PREFIX = [
    ('color-', ''), ('surface-', 'surface/'), ('text-', 'text/'),
    ('border-', 'border/'), ('point-', 'point/'), ('pill-', 'pill/'),
]

def sem_name(bare):
    for pre, grp in SEM_PREFIX:
        if bare.startswith(pre):
            return grp + bare[len(pre):]
    return group_slash(bare)

VAR_RE = re.compile(r'var\(\s*(--[a-zA-Z0-9-]+)')

def classify(manifest):
    toks = manifest.get('tokens', [])
    brand = detect_brand_prefix(toks)
    plan = {'brandPrefix': brand,
            'primitives': [], 'semantics': [], 'spacing': [], 'radii': [],
            'families': [], 'sizes': [], 'weights': [], 'lineHeights': [],
            'shadows': [], 'flagged': []}
    prim_names = {}  # css var name -> figma name, to resolve aliases

    # pass 1: primitive colors by VALUE (hex), ignoring the manifest's name-based kind
    for t in toks:
        name, val = t['name'], str(t['value']).strip()
        if val.startswith('#'):
            fig = group_slash(strip_prefix(name), brand)
            prim_names[name] = fig
            plan['primitives'].append([fig, val.lower(), name])

    # pass 2: everything else — value-first, kind only as a tie-breaker
    for t in toks:
        name, val, kind = t['name'], str(t['value']).strip(), t.get('kind')
        bare = strip_prefix(name)
        if val.startswith('#'):
            continue  # primitive, already handled
        m = VAR_RE.search(val)
        if val.lower().startswith('var(') and m:            # semantic alias (any kind)
            target = prim_names.get(m.group(1))
            if target:
                plan['semantics'].append([sem_name(bare), target, name])
            else:
                plan['flagged'].append({'name': name, 'value': val, 'reason': 'alias target is not a known primitive (chained alias?)'})
        elif kind == 'spacing':
            if val.endswith('px'):
                plan['spacing'].append([group_slash(bare, brand), float(re.match(r'-?\d+(\.\d+)?', val).group()), name])
            else:
                plan['flagged'].append({'name': name, 'value': val, 'reason': 'non-px spacing (rem/layout cap)'})
        elif kind == 'radius':
            n = re.match(r'-?\d+(\.\d+)?', val)
            plan['radii'].append([group_slash(bare, brand), float(n.group()) if n else 0, name])
        elif kind == 'shadow':
            plan['shadows'].append([group_slash(bare, brand), val, name])
        elif kind == 'font':
            if "'" in val or '"' in val or 'sans-serif' in val or 'serif' in val:
                plan['families'].append([group_slash(bare, brand), val.split(',')[0].strip().strip('\'"'), name])
            elif re.fullmatch(r'\d{3}', val):
                plan['weights'].append([group_slash(bare, brand), int(val), name])
            elif val.endswith('px'):
                plan['sizes'].append([group_slash(bare, brand), float(re.match(r'\d+(\.\d+)?', val).group()), name])
            elif re.fullmatch(r'\d+(\.\d+)?', val):
                plan['lineHeights'].append([group_slash(bare, brand), float(val), name])
            else:
                plan['flagged'].append({'name': name, 'value': val, 'reason': 'unrecognised font token'})
        elif re.fullmatch(r'\d+(\.\d+)?', val) and ('lh' in bare or 'line' in bare):
            plan['lineHeights'].append([group_slash(bare, brand), float(val), name])
        else:  # gradients, motion (ms/ease), layout caps, etc.
            plan['flagged'].append({'name': name, 'value': val, 'reason': f'kind={kind}, value={val!r} — not variable-mapped (gradient/motion/layout)'})
    return plan

def registry_entry(manifest, slug, path):
    ns = manifest.get('namespace', '')
    return {
        'slug': slug,
        'name': slug.replace('-', ' ').title(),
        'aliases': [slug],
        'namespace': ns,
        'platform': 'mobile',
        'path': path,
        'manifest': f'{path}/_ds_manifest.json',
        'adherence': f'{path}/_adherence.oxlintrc.json',
        'figma': {'fileKey': None, 'role': 'sandbox'},
        'status': 'active',
    }

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('export_dir')
    ap.add_argument('--slug', default=None)
    ap.add_argument('--out', default=None)
    a = ap.parse_args()
    manifest = json.load(open(os.path.join(a.export_dir, '_ds_manifest.json')))
    slug = a.slug or re.sub(r'[^a-z0-9]+', '-', manifest.get('namespace', 'system').lower()).strip('-')
    plan = classify(manifest)
    plan['slug'] = slug
    plan['registryEntry'] = registry_entry(manifest, slug, f'design-systems/{slug}')
    summary = {k: len(v) for k, v in plan.items() if isinstance(v, list)}
    if a.out:
        json.dump(plan, open(a.out, 'w'), indent=2)
    sys.stderr.write('CLASSIFIED: ' + json.dumps(summary) + '\n')
    if plan['flagged']:
        sys.stderr.write('FLAGGED for review:\n')
        for f in plan['flagged']:
            sys.stderr.write(f"  - {f['name']} = {f['value']!r}  ({f['reason']})\n")
    if not a.out:
        print(json.dumps(plan, indent=2))

if __name__ == '__main__':
    main()
