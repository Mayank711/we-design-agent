/* ===================================================================
   WheelsEye Loads — Activation Rewards (milestone flow)
   Shared data, strings (Hindi/Devanagari), confetti, and section blocks.
   Amount + copy are tweak-driven via RewardCtx. Exposed on window.WERewards.
   =================================================================== */
const DSr = window.WheelsEyeLoadsDesignSystem_985cfc;
const { Button } = DSr;

const RA = '../../assets/icons/';
const RI = '../../assets/illustrations/';
const RL = '../../assets/logos/';

const inr = (n) => '₹' + Number(n || 0).toLocaleString('en-IN');
const TRIP_LABELS = ['पहली ट्रिप', 'दूसरी ट्रिप', 'तीसरी ट्रिप'];

/* tripsDone: 0 (fresh) | 1 (mid) | 3 (done) */
const stateMeta = {
  fresh: { tripsDone: 0, label: 'नई शुरुआत' },
  mid:   { tripsDone: 1, label: '1 ट्रिप पूरी' },
  done:  { tripsDone: 3, label: 'सभी पूरी 🎉' },
};

/* ---- tweakable config, supplied by the App via context ---- */
const DEFAULT_CFG = {
  amounts: [500, 1000, 2000],
  amountStyle: 'pop',     // pop | shine | glow | plain
  amountScale: 1,
  headline: '3 ट्रिप पूरी करें और',
  suffix: 'तक कमाएं',
  ctaLabel: 'लोड खोजें',
  deadlineDays: 30,
  confettiAlways: false,
};
const RewardCtx = React.createContext(DEFAULT_CFG);
const useCfg = () => React.useContext(RewardCtx) || DEFAULT_CFG;

const milestonesFrom = (cfg) => cfg.amounts.map((a, i) => ({ id: i + 1, trip: TRIP_LABELS[i], amount: a }));
const totalFrom = (cfg) => cfg.amounts.reduce((s, a) => s + Number(a || 0), 0);
const earnedFrom = (cfg, tripsDone) => cfg.amounts.slice(0, tripsDone).reduce((s, a) => s + Number(a || 0), 0);
const daysLeftFrom = (cfg, tripsDone) => (tripsDone >= 3 ? 0 : tripsDone === 1 ? Math.max(1, Math.round(cfg.deadlineDays * 0.6)) : cfg.deadlineDays);

const hexA = (hex, a) => {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

/* ===================================================================
   BIG AMOUNT — the "catchy" headline number, 4 treatments
   =================================================================== */
function BigAmount({ value, color, stroke, base = 34, effect = 'pop', scale = 1 }) {
  const size = Math.round(base * scale);
  const common = { fontWeight: 800, lineHeight: 1.04, fontSize: size, display: 'inline-block', letterSpacing: '.3px', fontFamily: 'var(--font-display)' };
  if (effect === 'shine') {
    return <span style={{ ...common, backgroundImage: 'linear-gradient(95deg,#FFE9A8 0%,#FFC107 42%,#FF9D2E 52%,#FFE9A8 100%)', backgroundSize: '220% 100%', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', animation: 'amount-shine 2.6s linear infinite', filter: 'drop-shadow(0 2px 1px rgba(0,0,0,0.22))' }}>{value}</span>;
  }
  if (effect === 'glow') {
    return <span style={{ ...common, color, textShadow: `0 0 10px ${hexA(color, 0.85)}, 0 0 24px ${hexA(color, 0.5)}`, animation: 'amount-glow 1.8s ease-in-out infinite' }}>{value}</span>;
  }
  if (effect === 'plain') {
    return <span style={{ ...common, color }}>{value}</span>;
  }
  // pop — stroke + stacked shadow (default, very catchy)
  return <span style={{ ...common, color, WebkitTextStroke: `1px ${stroke || 'rgba(0,0,0,0.25)'}`, textShadow: '0 2px 0 rgba(0,0,0,0.18), 0 5px 10px rgba(0,0,0,0.20)' }}>{value}</span>;
}

/* Headline block reused by every variation header */
function RewardHeadline({ color, stroke, base = 34 }) {
  const cfg = useCfg();
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: hexA(color, 0.92), marginBottom: 2 }}>{cfg.headline}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
        <BigAmount value={inr(totalFrom(cfg))} color={color} stroke={stroke} base={base} effect={cfg.amountStyle} scale={cfg.amountScale} />
        <span style={{ fontSize: Math.round(16 * cfg.amountScale), fontWeight: 700, color }}>{cfg.suffix}</span>
      </div>
    </div>
  );
}

/* ===================================================================
   CONFETTI — brand-colored burst
   =================================================================== */
const CONFETTI_COLORS = ['#2EA750', '#F7C145', '#0066FF', '#D33636', '#734FEA', '#ED6D26'];
function Confetti({ active, count = 44 }) {
  const pieces = React.useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      dur: 1.6 + Math.random() * 1.4,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size: 6 + Math.random() * 6,
      round: Math.random() > 0.5,
      rot: Math.random() * 360,
    })), [count]);
  if (!active) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 30 }}>
      {pieces.map((p, i) => (
        <span key={i} style={{
          position: 'absolute', top: -16, left: p.left + '%',
          width: p.size, height: p.size * (p.round ? 1 : 1.6),
          background: p.color, borderRadius: p.round ? '50%' : '2px',
          transform: `rotate(${p.rot}deg)`,
          animation: `confetti-fall ${p.dur}s ${p.delay}s linear infinite`,
        }} />
      ))}
    </div>
  );
}

/* ===================================================================
   Small shared pieces
   =================================================================== */
function DeadlineBadge({ tripsDone }) {
  const cfg = useCfg();
  const d = daysLeftFrom(cfg, tripsDone);
  if (d === 0) return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--we-green-tint)', color: 'var(--we-green-600)', fontWeight: 600, fontSize: 13, lineHeight: '20px', padding: '5px 12px', borderRadius: 999 }}>
      सभी इनाम मिल गए
    </span>
  );
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.18)', color: '#fff', fontWeight: 600, fontSize: 13, lineHeight: '20px', padding: '5px 12px', borderRadius: 999, backdropFilter: 'blur(2px)' }}>
      <img src={RA + 'loads/clock-gold.svg'} width={15} height={15} alt="" />
      ऑफर खत्म होने में {d} दिन बाकी
    </span>
  );
}

function SectionTitle({ children, style }) {
  return <div style={{ fontSize: 18, fontWeight: 700, lineHeight: '24px', color: 'var(--we-ink)', marginBottom: 12, ...style }}>{children}</div>;
}
function Card({ children, style }) {
  return <div style={{ background: '#fff', border: '1px solid var(--we-border)', borderRadius: 16, boxShadow: 'var(--shadow-card)', padding: 16, ...style }}>{children}</div>;
}

/* Earnings summary — total credited so far vs the full reward */
function EarningsSummary({ tripsDone }) {
  const cfg = useCfg();
  const total = totalFrom(cfg);
  const got = earnedFrom(cfg, tripsDone);
  const pct = total ? Math.round((got / total) * 100) : 0;
  return (
    <Card style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 13, color: 'var(--we-gray-500)', fontWeight: 500 }}>अब तक कमाया</div>
          <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--we-green-600)', lineHeight: '32px' }}>{inr(got)}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 13, color: 'var(--we-gray-500)', fontWeight: 500 }}>कुल इनाम</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--we-ink)' }}>{inr(total)}</div>
        </div>
      </div>
      <div style={{ height: 8, background: 'var(--we-surface)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, width: pct + '%', background: 'linear-gradient(90deg,#2EA750,#62B146)', transition: 'width .6s ease' }} />
      </div>
      <div style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8, background: '#fff' }}>
        <img src={RA + 'wallet.svg'} width={18} height={18} alt="" />
        <span style={{ fontSize: 13, color: 'var(--we-gray-600)' }}>इनाम सीधे आपके <b style={{ color: 'var(--we-ink)' }}>व्हीलसाई वॉलेट</b> में आएगा</span>
      </div>
    </Card>
  );
}

/* How it works — 3 step explainer */
const STEPS = [
  { icon: RA + 'loads/truck-type.svg', title: 'कोई भी लोड बुक करें', desc: 'व्हीलसाई पर अपनी पसंद की लोड चुनें' },
  { icon: RA + 'loads/trip.svg', title: 'ट्रिप पूरी करें', desc: 'माल पहुंचाएं और POD जमा करें' },
  { icon: RA + 'wallet.svg', title: 'कैशबैक पाएं', desc: '24 घंटे में वॉलेट में इनाम पाएं' },
];
function HowItWorks() {
  return (
    <div>
      <SectionTitle>कैसे काम करता है</SectionTitle>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--we-green-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={s.icon} width={22} height={22} alt="" />
                </div>
                {i < STEPS.length - 1 && <div style={{ flex: 1, width: 2, background: 'var(--we-border)', margin: '4px 0' }} />}
              </div>
              <div style={{ paddingBottom: i < STEPS.length - 1 ? 18 : 0 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--we-ink)' }}>{s.title}</div>
                <div style={{ fontSize: 13, color: 'var(--we-gray-500)', marginTop: 2 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* Referral nudge */
function ReferralCard() {
  return (
    <div style={{ background: 'linear-gradient(105deg,#F3ECFF,#FFFFFF)', border: '1px solid #ECE3FF', borderRadius: 16, padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(115,79,234,0.18)', flexShrink: 0 }}>
        <img src={RA + 'loads/person.svg'} width={26} height={26} alt="" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--we-violet-deep)' }}>दोस्त को बुलाएं, <span style={{ color: 'var(--we-violet-primary)' }}>₹1,000</span> और कमाएं</div>
        <div style={{ fontSize: 12, color: 'var(--we-gray-500)', marginTop: 2 }}>हर ट्रक मालिक के जुड़ने पर बोनस</div>
      </div>
      <img src={RA + 'chevron-right.svg'} width={18} height={18} alt="" style={{ opacity: 0.5 }} />
    </div>
  );
}

/* FAQ accordion — total/deadline interpolated from cfg */
function FaqAccordion() {
  const cfg = useCfg();
  const total = totalFrom(cfg);
  const FAQS = [
    { q: 'कैशबैक कब मिलेगा?', a: 'ट्रिप पूरी होने और POD जमा करने के 24 घंटे के अंदर कैशबैक आपके व्हीलसाई वॉलेट में आ जाएगा।' },
    { q: 'क्या तीनों ट्रिप 1 महीने में करनी ज़रूरी हैं?', a: `हाँ, ऑफर शुरू होने की तारीख से ${cfg.deadlineDays} दिन के अंदर तीनों ट्रिप पूरी करनी होंगी, तभी पूरा ${inr(total)} इनाम मिलेगा।` },
    { q: 'कैशबैक का इस्तेमाल कहाँ कर सकते हैं?', a: 'वॉलेट कैशबैक का इस्तेमाल टोकन भरने और प्लेटफॉर्म फीस देने में कर सकते हैं।' },
    { q: 'किन लोड पर ट्रिप गिनी जाएगी?', a: 'व्हीलसाई पर बुक की गई कोई भी कन्फर्म लोड, जिसकी ट्रिप पूरी हो, इस ऑफर में गिनी जाएगी।' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <div>
      <SectionTitle>अक्सर पूछे जाने वाले सवाल</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--we-border)', borderRadius: 12, overflow: 'hidden' }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '14px 14px', textAlign: 'left', fontFamily: 'var(--font-display)' }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--we-ink)' }}>{f.q}</span>
                <span style={{ fontSize: 20, color: 'var(--we-green-primary)', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .2s', flexShrink: 0, lineHeight: 1 }}>+</span>
              </button>
              <div style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0, overflow: 'hidden', transition: 'all .28s ease' }}>
                <div style={{ padding: '0 14px 14px', fontSize: 13, lineHeight: '20px', color: 'var(--we-gray-600)' }}>{f.a}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Terms & conditions */
function TermsCard() {
  const cfg = useCfg();
  const TERMS = [
    `ऑफर शुरू होने की तारीख से ${cfg.deadlineDays} दिन तक मान्य है।`,
    'सिर्फ व्हीलसाई पर बुक की गई कन्फर्म लोड की पूरी ट्रिप गिनी जाएगी।',
    'इनाम व्हीलसाई वॉलेट में कैशबैक के रूप में दिया जाएगा।',
    'किसी भी विवाद की स्थिति में व्हीलसाई का फैसला अंतिम होगा।',
  ];
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ background: '#fff', border: '1px solid var(--we-border)', borderRadius: 12, overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', fontFamily: 'var(--font-display)' }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--we-gray-600)' }}>नियम व शर्तें</span>
        <span style={{ fontSize: 18, color: 'var(--we-gray-500)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>⌄</span>
      </button>
      <div style={{ maxHeight: open ? 240 : 0, overflow: 'hidden', transition: 'max-height .3s ease' }}>
        <ul style={{ margin: 0, padding: '0 14px 14px 30px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {TERMS.map((t, i) => <li key={i} style={{ fontSize: 12.5, lineHeight: '18px', color: 'var(--we-gray-500)' }}>{t}</li>)}
        </ul>
      </div>
    </div>
  );
}

/* sticky footer CTA */
function FooterCTA({ tripsDone }) {
  const cfg = useCfg();
  const done = tripsDone >= 3;
  return (
    <div style={{ position: 'sticky', bottom: 0, background: '#fff', borderTop: '1px solid var(--we-border)', boxShadow: 'var(--shadow-footer)', padding: 14, zIndex: 12 }}>
      <Button variant="solid">{done ? 'और कमाएं — नई लोड खोजें' : cfg.ctaLabel}</Button>
    </div>
  );
}

window.WERewards = {
  RA, RI, RL, inr, stateMeta, TRIP_LABELS,
  DEFAULT_CFG, RewardCtx, useCfg, milestonesFrom, totalFrom, earnedFrom, daysLeftFrom, hexA,
  BigAmount, RewardHeadline,
  Confetti, DeadlineBadge, SectionTitle, Card, EarningsSummary,
  HowItWorks, ReferralCard, FaqAccordion, TermsCard, FooterCTA, Button,
};
