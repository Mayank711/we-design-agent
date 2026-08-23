/* ===================================================================
   WheelsEye Loads — Activation Rewards: 3 gamification directions
   V1 Winding road · V2 Reward ladder · V3 Treasure trail
   Shared sections + config come from window.WERewards.
   Reward data is config-driven (RewardCtx): each section reads useCfg()
   so the Tweaks panel can retune amounts, copy, deadline and effects live.
   =================================================================== */
const R = window.WERewards;
const {
  RA, RI, RL, inr, stateMeta,
  milestonesFrom, totalFrom, earnedFrom, daysLeftFrom,
  useCfg, RewardCtx, DEFAULT_CFG, BigAmount,
  Confetti, DeadlineBadge, SectionTitle, Card, EarningsSummary,
  HowItWorks, ReferralCard, FaqAccordion, TermsCard, FooterCTA, Button,
} = R;

const statusOf = (id, done) => (id <= done ? 'done' : id === done + 1 ? 'active' : 'locked');
const TRUCK = RI + 'demo-truck.svg';

/* headline number block reused by every variation header — reads cfg so the
   Tweaks panel's amount tier / style / scale / copy flow through. */
function HeaderHeadline({ subColor, amtColor, stroke, sub, base = 34 }) {
  const cfg = useCfg();
  const TOTAL = totalFrom(cfg);
  return (
    <>
      <div style={{ fontSize: 14, fontWeight: 600, color: subColor }}>{sub ?? cfg.headline}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginTop: 2 }}>
        <BigAmount value={inr(TOTAL)} color={amtColor} stroke={stroke} base={base} effect={cfg.amountStyle} scale={cfg.amountScale} />
        <span style={{ fontSize: Math.round(18 * cfg.amountScale), fontWeight: 700, color: amtColor }}>{cfg.suffix}</span>
      </div>
    </>
  );
}

/* shared back header strip (inside each screen, above the hero) */
function TopBar({ dark }) {
  const col = dark ? '#fff' : 'var(--we-ink)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: dark ? 'rgba(255,255,255,0.18)' : 'var(--we-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={RA + 'back-button.svg'} width={14} height={14} alt="" style={{ filter: dark ? 'brightness(0) invert(1)' : 'none' }} />
      </div>
      <span style={{ fontSize: 16, fontWeight: 700, color: col }}>इनाम</span>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: dark ? 'rgba(255,255,255,0.18)' : 'var(--we-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={RA + 'help-outlined.svg'} width={18} height={18} alt="" style={{ filter: dark ? 'brightness(0) invert(1)' : 'none' }} />
      </div>
    </div>
  );
}

/* generic assembly: header + journey + shared sections + sticky footer + confetti */
function RewardScreen({ tripsDone, header, journey, bg = 'var(--we-surface)' }) {
  const cfg = useCfg();
  return (
    <div style={{ position: 'relative', minHeight: '100%', background: bg, display: 'flex', flexDirection: 'column' }}>
      <Confetti active={tripsDone >= 3 || cfg.confettiAlways} />
      {header}
      <div style={{ flex: 1, padding: '0 16px 20px', display: 'flex', flexDirection: 'column', gap: 18, marginTop: 16 }}>
        {journey}
        <EarningsSummary tripsDone={tripsDone} />
        <HowItWorks />
        <ReferralCard />
        <FaqAccordion />
        <TermsCard />
      </div>
      <FooterCTA tripsDone={tripsDone} />
    </div>
  );
}

/* ===================================================================
   VARIATION 1 — सफर : winding road, truck climbs to the prize
   =================================================================== */
function RoadHeader({ tripsDone }) {
  return (
    <div style={{ background: 'radial-gradient(120% 90% at 50% 0%, #3C8F4E 0%, #2F663C 70%)', padding: '0 0 26px', position: 'relative', overflow: 'hidden' }}>
      <TopBar dark />
      <div style={{ textAlign: 'center', padding: '4px 20px 0' }}>
        <HeaderHeadline subColor="#CFEBD3" amtColor="#FFD24A" stroke="rgba(0,0,0,0.25)" base={34} />
        <div style={{ marginTop: 12 }}><DeadlineBadge tripsDone={tripsDone} /></div>
      </div>
    </div>
  );
}

function RoadJourney({ tripsDone }) {
  const cfg = useCfg();
  const MILESTONES = milestonesFrom(cfg);
  /* node + truck coords in a 320×540 space */
  const nodes = [
    { id: 3, x: 160, y: 64, side: 'left' },
    { id: 2, x: 160, y: 210, side: 'right' },
    { id: 1, x: 160, y: 356, side: 'left' },
  ];
  const truckY = tripsDone >= 3 ? 92 : tripsDone === 1 ? 285 : 452;
  return (
    <Card style={{ padding: '8px 0 0', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: 320, height: 540, margin: '0 auto' }}>
        <svg width="320" height="540" viewBox="0 0 320 540" fill="none" style={{ position: 'absolute', inset: 0 }}>
          <path d="M160 520 C 60 470 60 400 160 360 C 260 320 260 250 160 210 C 60 170 60 100 160 64" stroke="#E4E7EE" strokeWidth="34" strokeLinecap="round" />
          <path d="M160 520 C 60 470 60 400 160 360 C 260 320 260 250 160 210 C 60 170 60 100 160 64" stroke="#FFC93C" strokeWidth="2.5" strokeDasharray="9 11" strokeLinecap="round" />
        </svg>

        {/* finish prize flag at top */}
        <div style={{ position: 'absolute', left: '50%', top: 6, transform: 'translateX(-50%)', textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--we-yellow-text)', background: 'var(--we-yellow-tint)', borderRadius: 999, padding: '3px 10px', display: 'inline-block' }}>ग्रैंड इनाम</div>
        </div>

        {/* milestone nodes */}
        {nodes.map(n => {
          const m = MILESTONES.find(x => x.id === n.id);
          const st = statusOf(n.id, tripsDone);
          const c = st === 'done' ? '#2EA750' : st === 'active' ? '#F7C145' : '#C9CED9';
          const labelLeft = n.side === 'left';
          return (
            <React.Fragment key={n.id}>
              {/* connector dot */}
              <div style={{ position: 'absolute', left: n.x, top: n.y, transform: 'translate(-50%,-50%)', width: 54, height: 54, borderRadius: '50%', background: '#fff', border: `4px solid ${c}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: st === 'active' ? '0 0 0 6px rgba(247,193,69,0.25)' : '0 2px 6px rgba(0,0,0,0.12)', zIndex: 4 }}>
                {st === 'done'
                  ? <img src={RA + 'right-tick.svg'} width={22} height={22} alt="" />
                  : <span style={{ fontSize: 13, fontWeight: 800, color: st === 'active' ? 'var(--we-yellow-text)' : 'var(--we-gray-500)' }}>{n.id}</span>}
              </div>
              {/* reward label card */}
              <div style={{ position: 'absolute', top: n.y, [labelLeft ? 'right' : 'left']: 320 - (labelLeft ? n.x - 36 : 320 - n.x - 36), transform: 'translateY(-50%)', width: 104, textAlign: labelLeft ? 'right' : 'left', zIndex: 4 }}>
                <div style={{ fontSize: 12, color: 'var(--we-gray-500)', fontWeight: 600 }}>{m.trip}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: st === 'locked' ? 'var(--we-gray-400)' : 'var(--we-green-600)' }}>{inr(m.amount)}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: st === 'done' ? 'var(--we-green-600)' : st === 'active' ? 'var(--we-yellow-text)' : 'var(--we-gray-400)' }}>
                  {st === 'done' ? 'मिल गया ✓' : st === 'active' ? 'अभी करें' : 'लॉक'}
                </div>
              </div>
            </React.Fragment>
          );
        })}

        {/* truck */}
        <div style={{ position: 'absolute', left: 160, top: truckY, transform: 'translate(-50%,-50%)', zIndex: 6, animation: 'truck-bob 2s ease-in-out infinite', filter: 'drop-shadow(0 6px 6px rgba(0,0,0,0.18))' }}>
          <img src={TRUCK} width={56} height={56} alt="truck" />
        </div>
      </div>
    </Card>
  );
}

function VariationRoad({ tripsDone }) {
  return <RewardScreen tripsDone={tripsDone} header={<RoadHeader tripsDone={tripsDone} />} journey={<RoadJourney tripsDone={tripsDone} />} />;
}

/* ===================================================================
   VARIATION 2 — इनाम सीढ़ी : festive promo header + podium climb
   =================================================================== */
function LadderHeader({ tripsDone }) {
  const cfg = useCfg();
  const TOTAL = totalFrom(cfg);
  return (
    <div style={{ background: 'radial-gradient(120% 100% at 50% 0%, #2FA8E6 0%, #1577CC 75%)', padding: '0 0 24px', position: 'relative', overflow: 'hidden' }}>
      <TopBar dark />
      {/* sparkle dots */}
      {[[24, 70], [292, 60], [40, 130], [280, 120], [150, 40]].map((p, i) => (
        <span key={i} style={{ position: 'absolute', left: p[0], top: p[1], width: 5, height: 5, borderRadius: '50%', background: '#FFE39A', opacity: 0.8 }} />
      ))}
      <div style={{ textAlign: 'center', padding: '4px 20px 0', position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          <BigAmount value={inr(TOTAL)} color="#FFCD3C" stroke="#B5651A" base={32} effect={cfg.amountStyle} scale={cfg.amountScale} />
          <span style={{ fontSize: Math.round(18 * cfg.amountScale), fontWeight: 800, color: '#FFCD3C' }}>का इनाम</span>
        </div>
        <div style={{ marginTop: 6, background: '#FFF7E3', border: '1px dashed #E7B64A', borderRadius: 999, display: 'inline-block', padding: '5px 16px', fontSize: 13, fontWeight: 700, color: '#8A5A12' }}>1 महीने में 3 ट्रिप पर</div>
        <div style={{ marginTop: 12 }}><DeadlineBadge tripsDone={tripsDone} /></div>
      </div>
    </div>
  );
}

function LadderJourney({ tripsDone }) {
  const cfg = useCfg();
  const MILESTONES = milestonesFrom(cfg);
  const heights = { 1: 120, 2: 168, 3: 220 };
  const order = [1, 2, 3];
  return (
    <Card style={{ paddingTop: 18 }}>
      <SectionTitle style={{ marginBottom: 16 }}>इनाम की सीढ़ी चढ़ें</SectionTitle>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, height: 260 }}>
        {order.map(id => {
          const m = MILESTONES.find(x => x.id === id);
          const st = statusOf(id, tripsDone);
          const onThis = st === 'active' || (tripsDone >= 3 && id === 3);
          const top = st === 'done' ? '#2EA750' : st === 'active' ? '#F7C145' : '#E4E7EE';
          const body = st === 'done' ? '#E7F4E8' : st === 'active' ? '#FDF3DA' : '#F4F5FA';
          return (
            <div key={id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              {onThis && (
                <div style={{ position: 'absolute', top: -8, animation: 'truck-bob 2s ease-in-out infinite', filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.18))', zIndex: 3 }}>
                  <img src={TRUCK} width={46} height={46} alt="truck" />
                </div>
              )}
              <div style={{ width: '100%', height: heights[id], background: body, border: `2px solid ${top}`, borderBottom: 'none', borderRadius: '12px 12px 0 0', marginTop: 44, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 12, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: top, borderRadius: '10px 10px 0 0' }} />
                <div style={{ fontSize: 18, fontWeight: 800, color: st === 'locked' ? 'var(--we-gray-400)' : 'var(--we-green-600)', marginTop: 6 }}>{inr(m.amount)}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--we-gray-500)', textAlign: 'center', marginTop: 2 }}>{m.trip}</div>
                <div style={{ marginTop: 8 }}>
                  {st === 'done'
                    ? <img src={RA + 'right-tick.svg'} width={20} height={20} alt="" />
                    : <span style={{ fontSize: 10, fontWeight: 700, color: st === 'active' ? 'var(--we-yellow-text)' : 'var(--we-gray-400)', background: st === 'active' ? '#fff' : 'transparent', borderRadius: 999, padding: st === 'active' ? '2px 8px' : 0 }}>{st === 'active' ? 'अभी करें' : 'लॉक'}</span>}
                </div>
              </div>
              <div style={{ width: '100%', height: 8, background: top, opacity: 0.5 }} />
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function VariationLadder({ tripsDone }) {
  return <RewardScreen tripsDone={tripsDone} header={<LadderHeader tripsDone={tripsDone} />} journey={<LadderJourney tripsDone={tripsDone} />} bg="#EAF4FB" />;
}

/* ===================================================================
   VARIATION 3 — खज़ाना : warm treasure trail with milestone coins
   =================================================================== */
function TrailHeader({ tripsDone }) {
  const cfg = useCfg();
  const TOTAL = totalFrom(cfg);
  const dLeft = daysLeftFrom(cfg, tripsDone);
  return (
    <div style={{ background: 'radial-gradient(120% 100% at 50% 0%, #FFD876 0%, #F4A93C 80%)', padding: '0 0 24px', position: 'relative', overflow: 'hidden' }}>
      <TopBar />
      <div style={{ textAlign: 'center', padding: '4px 20px 0' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#7B4E12' }}>हर ट्रिप पर खुलता है इनाम</div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, marginTop: 2 }}>
          <BigAmount value={inr(TOTAL)} color="#5A3408" stroke="rgba(0,0,0,0.2)" base={34} effect={cfg.amountStyle === 'shine' ? 'plain' : cfg.amountStyle} scale={cfg.amountScale} />
          <span style={{ fontSize: Math.round(18 * cfg.amountScale), fontWeight: 800, color: '#5A3408' }}>तक</span>
        </div>
        <div style={{ marginTop: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(90,52,8,0.12)', color: '#5A3408', fontWeight: 700, fontSize: 13, padding: '5px 12px', borderRadius: 999 }}>
            <img src={RA + 'loads/clock.svg'} width={14} height={14} alt="" />
            {dLeft === 0 ? 'सभी इनाम मिल गए' : `${dLeft} दिन बाकी`}
          </span>
        </div>
      </div>
    </div>
  );
}

function CoinTrail({ tripsDone }) {
  const cfg = useCfg();
  const MILESTONES = milestonesFrom(cfg);
  return (
    <Card style={{ background: 'linear-gradient(180deg,#FFFDF6,#FFF6E4)', border: '1px solid #F4E4BD' }}>
      <SectionTitle style={{ marginBottom: 18 }}>अपना खज़ाना खोलें</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {MILESTONES.map((m, i) => {
          const st = statusOf(m.id, tripsDone);
          const ring = st === 'done' ? '#2EA750' : st === 'active' ? '#E79B1E' : '#D8CDB4';
          const coinBg = st === 'done' ? 'linear-gradient(145deg,#37B85C,#1F8A47)' : st === 'active' ? 'linear-gradient(145deg,#FFD23E,#E79B1E)' : '#ECE6D6';
          const coinTxt = st === 'locked' ? '#B3A988' : '#fff';
          return (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: coinBg, border: `3px solid ${ring}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: st === 'active' ? '0 0 0 6px rgba(231,155,30,0.18)' : '0 2px 6px rgba(0,0,0,0.1)', position: 'relative' }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: coinTxt }}>{'₹' + (m.amount / 1000 >= 1 ? (m.amount / 1000) + 'K' : m.amount)}</span>
                  {st === 'active' && <img src={TRUCK} width={36} height={36} alt="" style={{ position: 'absolute', right: -26, top: -18, animation: 'truck-bob 2s ease-in-out infinite' }} />}
                </div>
                {i < MILESTONES.length - 1 && <div style={{ flex: 1, width: 3, background: st === 'done' ? '#2EA750' : 'repeating-linear-gradient(#D8CDB4 0 5px, transparent 5px 11px)', margin: '4px 0' }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: i < MILESTONES.length - 1 ? 20 : 0 }}>
                <div style={{ background: '#fff', border: `1px solid ${st === 'locked' ? 'var(--we-border)' : ring}`, borderRadius: 12, padding: '12px 14px', boxShadow: st === 'active' ? '0 4px 14px rgba(231,155,30,0.15)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--we-ink)' }}>{m.trip}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: st === 'locked' ? 'var(--we-gray-400)' : 'var(--we-green-600)' }}>{inr(m.amount)}</div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, marginTop: 3, color: st === 'done' ? 'var(--we-green-600)' : st === 'active' ? '#B5710F' : 'var(--we-gray-400)' }}>
                    {st === 'done' ? 'खज़ाना खुल गया ✓' : st === 'active' ? 'यह ट्रिप पूरी करें और खोलें' : 'पिछली ट्रिप के बाद खुलेगा'}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function VariationTrail({ tripsDone }) {
  return <RewardScreen tripsDone={tripsDone} header={<TrailHeader tripsDone={tripsDone} />} journey={<CoinTrail tripsDone={tripsDone} />} bg="#FBF4E6" />;
}

/* ===================================================================
   CANVAS — 3 phones + state toggle + Tweaks
   =================================================================== */
const VARIATIONS = [
  { id: 'road', name: 'सफर — Winding Road', sub: 'truck climbs a road to the prize', Comp: VariationRoad, statusBar: '#2F663C', barDark: true },
  { id: 'ladder', name: 'इनाम सीढ़ी — Reward Ladder', sub: 'festive promo header + podium climb', Comp: VariationLadder, statusBar: '#1577CC', barDark: true },
  { id: 'trail', name: 'खज़ाना — Treasure Trail', sub: 'warm coin trail, unlock each chest', Comp: VariationTrail, statusBar: '#F4A93C', barDark: false },
];

function Phone({ v, tripsDone }) {
  const Comp = v.Comp;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div data-drags-parent="1" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>{v.name}</div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>{v.sub}</div>
      </div>
      <div style={{ width: 372, height: 760, background: '#111', borderRadius: 40, padding: 10, boxShadow: '0 30px 70px rgba(0,0,0,0.28)' }}>
        <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: 30, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: 34, background: v.statusBar, color: v.barDark ? '#fff' : '#5A3408', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
            <span>9:41</span><span>व्हीलसाई</span>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
            <Comp tripsDone={tripsDone} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* reward tiers selectable from Tweaks (sum shown in label) */
const TIERS = {
  '3500': [500, 1000, 2000],
  '3000': [1000, 1000, 1000],
  '5000': [500, 1500, 3000],
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "rewardTier": "3500",
  "amountStyle": "pop",
  "amountScale": 1,
  "headline": "3 ट्रिप पूरी करें और",
  "suffix": "तक कमाएं",
  "ctaLabel": "लोड खोजें",
  "deadlineDays": 30,
  "confettiAlways": false
}/*EDITMODE-END*/;

function App() {
  const [stateKey, setStateKey] = React.useState('mid');
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const tripsDone = stateMeta[stateKey].tripsDone;

  const cfg = React.useMemo(() => ({
    ...DEFAULT_CFG,
    amounts: TIERS[t.rewardTier] || DEFAULT_CFG.amounts,
    amountStyle: t.amountStyle,
    amountScale: t.amountScale,
    headline: t.headline,
    suffix: t.suffix,
    ctaLabel: t.ctaLabel,
    deadlineDays: t.deadlineDays,
    confettiAlways: t.confettiAlways,
  }), [t]);

  return (
    <RewardCtx.Provider value={cfg}>
      <div style={{ minHeight: '100vh', fontFamily: 'var(--font-display)' }}>
        {/* control bar */}
        <div style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e5e7eb', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src={RL + 'wheelseye-mark.svg'} width={28} height={28} alt="" />
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#111' }}>एक्टिवेशन इनाम — {inr(totalFrom(cfg))} तक</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>Milestone activation flow · 3 directions · tap a state to compare</div>
            </div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 6, background: '#f1f3f7', padding: 5, borderRadius: 12 }}>
            {Object.keys(stateMeta).map(k => (
              <button key={k} onClick={() => setStateKey(k)} style={{
                border: 'none', cursor: 'pointer', padding: '9px 16px', borderRadius: 9,
                fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
                background: stateKey === k ? '#fff' : 'transparent',
                color: stateKey === k ? 'var(--we-green-600)' : '#6b7280',
                boxShadow: stateKey === k ? '0 1px 4px rgba(0,0,0,0.12)' : 'none',
              }}>{stateMeta[k].label}</button>
            ))}
          </div>
        </div>

        {/* phones */}
        <div style={{ display: 'flex', gap: 36, padding: '32px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {VARIATIONS.map(v => <Phone key={v.id} v={v} tripsDone={tripsDone} />)}
        </div>
      </div>

      {/* Tweaks — retune reward without touching code */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Reward">
          <TweakSelect label="Reward tier" value={t.rewardTier}
            options={[
              { value: '3500', label: '₹3,500 · 500·1K·2K' },
              { value: '3000', label: '₹3,000 · 1K·1K·1K' },
              { value: '5000', label: '₹5,000 · 500·1.5K·3K' },
            ]}
            onChange={(v) => setTweak('rewardTier', v)} />
          <TweakNumber label="Deadline" value={t.deadlineDays} min={7} max={60} step={1} unit="d"
            onChange={(v) => setTweak('deadlineDays', v)} />
        </TweakSection>
        <TweakSection label="Headline number">
          <TweakRadio label="Style" value={t.amountStyle}
            options={['pop', 'shine', 'glow', 'plain']}
            onChange={(v) => setTweak('amountStyle', v)} />
          <TweakSlider label="Size" value={t.amountScale} min={0.8} max={1.4} step={0.05}
            onChange={(v) => setTweak('amountScale', v)} />
        </TweakSection>
        <TweakSection label="Copy">
          <TweakText label="Headline" value={t.headline} onChange={(v) => setTweak('headline', v)} />
          <TweakText label="CTA" value={t.ctaLabel} onChange={(v) => setTweak('ctaLabel', v)} />
        </TweakSection>
        <TweakSection label="Effects">
          <TweakToggle label="Always confetti" value={t.confettiAlways}
            onChange={(v) => setTweak('confettiAlways', v)} />
        </TweakSection>
      </TweaksPanel>
    </RewardCtx.Provider>
  );
}

window.RewardsMilestoneApp = App;
