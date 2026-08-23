/* WheelsEye Loads — UI kit screens. Composes design-system primitives from
   window.WheelsEyeLoadsDesignSystem_985cfc. Recreation of the real app surfaces. */
const DS = window.WheelsEyeLoadsDesignSystem_985cfc;
const { Button, LoadCard, RouteLadder, SegmentedTabs, BottomNav, FilterChip, Badge, PremiumPill, ToggleSwitch } = DS;

const ICON = '../../assets/icons/';
const LOGO = '../../assets/logos/';
const ILLO = '../../assets/illustrations/';
const Img = (src, size, alt = '') => <img src={src} width={size} height={size} alt={alt} style={{ display: 'block' }} />;

/* ---------- sample data ---------- */
const LOADS = [
  {
    id: 1, banner: 'Closes in 04:32', bannerTone: 'accept',
    stops: [{ heading: 'Jaipur, Rajasthan', type: 'LOADING' }, { heading: 'Surat, Gujarat', type: 'UNLOADING' }],
    details: [{ text: '32 ft Multi-axle  •  Full load' }, { text: '21 Tonnes  •  Cement' }],
    premium: 'Earn 12% more on this lane', fareLabel: 'Fixed price', fare: '₹48,000', footerTone: 'ok',
  },
  {
    id: 2,
    stops: [{ heading: 'Delhi', type: 'LOADING' }, { heading: 'Mumbai, Maharashtra', type: 'UNLOADING' }],
    details: [{ text: '22 ft Open body  •  Part load' }, { text: '9 Tonnes  •  Steel coils' }],
    fareLabel: 'Expected', fare: '₹36,500', footerTone: 'ok',
  },
  {
    id: 3, banner: 'Verified shipper', bannerTone: 'ok',
    stops: [{ heading: 'Ahmedabad, Gujarat', type: 'LOADING' }, { heading: 'Pune, Maharashtra', type: 'UNLOADING' }],
    details: [{ text: '19 ft Container  •  Full load' }, { text: '7 Tonnes  •  FMCG goods' }],
    fareLabel: 'Fixed price', fare: '₹29,800', footerTone: 'ok',
  },
];

const VEHICLE_TYPES = ['All', 'Open body', 'Container', 'Trailer', 'Tanker'];

/* ===================================================================
   HOME SCREEN
   =================================================================== */
function HomeScreen({ go }) {
  const [tab, setTab] = React.useState('new');
  const [vt, setVt] = React.useState('All');
  const [alert, setAlert] = React.useState(true);

  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-page)' }}>
      {/* green header */}
      <div style={{ background: 'var(--surface-header)', padding: '14px 16px 36px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ background: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-fab)' }}>
              {Img(LOGO + 'wheelseye-mark.svg', 26)}
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>WheelsEye Loads</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>HR55 AB 1234 · 32ft MXL</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ background: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {Img(ICON + 'language.svg', 18)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.14)', borderRadius: 999, padding: '5px 8px 5px 10px' }}>
              <span style={{ color: '#fff', fontSize: 12, fontWeight: 500 }}>Alerts</span>
              <ToggleSwitch checked={alert} onChange={setAlert} />
            </div>
          </div>
        </div>
      </div>

      {/* content panel */}
      <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', marginTop: -20, position: 'relative', paddingTop: 16, minHeight: 400 }}>
        <div style={{ padding: '0 16px' }}>
          <SegmentedTabs tabs={[{ id: 'new', label: 'New Loads' }, { id: 'mine', label: 'My Loads' }]} active={tab} onChange={setTab} />
        </div>

        {tab === 'new' ? (
          <>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '16px', scrollbarWidth: 'none' }}>
              {VEHICLE_TYPES.map(t => (
                <FilterChip key={t} selected={vt === t} onClick={() => setVt(t)}>{t}</FilterChip>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '0 16px 24px' }}>
              {LOADS.map(l => (
                <LoadCard key={l.id}
                  banner={l.banner} bannerTone={l.bannerTone}
                  stops={l.stops} details={l.details}
                  premiumNote={l.premium ? <PremiumPill>{l.premium}</PremiumPill> : null}
                  fareLabel={l.fareLabel} fare={l.fare} footerTone={l.footerTone}
                  ctaLabel="Book load" onCta={() => go('detail', l)} onClick={() => go('detail', l)}
                />
              ))}
            </div>
          </>
        ) : (
          <div style={{ padding: '48px 24px', textAlign: 'center' }}>
            {Img(ILLO + 'empty-loads.svg', 120)}
            <div style={{ marginTop: 16, fontWeight: 600, fontSize: 18 }}>No booked loads yet</div>
            <div style={{ marginTop: 6, color: 'var(--text-muted)', fontSize: 14 }}>Loads you book will appear here for tracking.</div>
            <div style={{ marginTop: 20 }}>
              <Button variant="outlined" fullWidth={false} onClick={() => setTab('new')}>Browse new loads</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ===================================================================
   LOAD DETAIL SCREEN
   =================================================================== */
function LoadDetailScreen({ go, load }) {
  const l = load || LOADS[0];
  const [booked, setBooked] = React.useState(false);
  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-page)', paddingBottom: 96 }}>
      <div style={{ background: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border-card)' }}>
        <button onClick={() => go('home')} style={{ border: 'none', background: 'var(--surface-page)', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          {Img(ICON + 'back-button.svg', 14)}
        </button>
        <div style={{ fontWeight: 600, fontSize: 18 }}>Load details</div>
        <Badge tone="success" style={{ marginLeft: 'auto' }}>Verified</Badge>
      </div>

      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border-card)', boxShadow: 'var(--shadow-card)', padding: 20 }}>
          <RouteLadder headingSize="22px" stops={[
            { heading: l.stops[0].heading, subHeading: 'Loading · Today, before 6 PM', type: 'LOADING' },
            { heading: l.stops[1].heading, subHeading: 'Unloading · Within 2 days', type: 'UNLOADING' },
          ]} />
          <div style={{ height: 1, background: 'var(--border-divider)', margin: '16px 0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[[ICON + 'truck-filled.svg', l.details[0].text], [ICON + 'box-seam.svg', l.details[1].text], [ICON + 'rupee.svg', 'Advance 40% · Balance on POD']].map(([ic, tx], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 16 }}>
                <span style={{ width: 24, height: 24, display: 'inline-flex' }}>{Img(ic, 24)}</span>{tx}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border-card)', padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>Loading Manager</div>
              <div style={{ fontWeight: 600, fontSize: 16 }}>Ramesh Traders</div>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid var(--border-input)', borderRadius: 12, padding: '10px 16px', background: '#fff', fontWeight: 600, fontFamily: 'var(--font-display)', cursor: 'pointer' }}>
              {Img(ICON + 'call-black.svg', 18)} Call
            </button>
          </div>
        </div>

        <PremiumPill>Top bid on this lane is ₹52,000 — bid higher to win</PremiumPill>
      </div>

      {/* sticky footer */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid var(--border-card)', boxShadow: 'var(--shadow-footer)', padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div>
          <div style={{ color: 'var(--color-primary)', fontWeight: 500, fontSize: 14 }}>{l.fareLabel}</div>
          <div style={{ fontWeight: 600, fontSize: 24, lineHeight: 1.1 }}>{l.fare}</div>
        </div>
        <div style={{ flex: 1 }}>
          <Button variant={booked ? 'outlined' : 'solid'} onClick={() => setBooked(true)}>
            {booked ? 'Booked ✓' : 'Book this load'}
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ===================================================================
   WELCOME / ONBOARDING SCREEN
   =================================================================== */
function WelcomeScreen({ go }) {
  const [sel, setSel] = React.useState('32ft MXL');
  const vehicles = ['Tata Ace', '14ft', '19ft', '22ft', '32ft SXL', '32ft MXL'];
  return (
    <div style={{ minHeight: '100%', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* hero */}
      <div style={{ background: 'var(--we-yellow-hero)', padding: '20px 20px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          {Img(LOGO + 'wheelseye-mark.svg', 44)}
        </div>
        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 28, lineHeight: 1.35, color: 'var(--we-violet-deep)' }}>
          Find loads for<br />your truck, daily
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 16 }}>
          <span style={{ flex: 1, height: 1, background: 'rgba(36,19,67,0.25)' }} />
          <span style={{ fontWeight: 500, fontSize: 13, color: '#241343' }}>★ 100% Payment guarantee ★</span>
          <span style={{ flex: 1, height: 1, background: 'rgba(36,19,67,0.25)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, marginTop: 16 }}>
          <div style={{ textAlign: 'center' }}><div style={{ color: '#3e7039', fontWeight: 700, fontSize: 18 }}>12,000+</div><div style={{ fontSize: 12 }}>loads daily</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ color: '#3e7039', fontWeight: 700, fontSize: 18 }}>800+</div><div style={{ fontSize: 12 }}>routes</div></div>
        </div>
      </div>

      {/* content card */}
      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', marginTop: -20, padding: '24px 16px 0', flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 14 }}>Select your vehicle type</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {vehicles.map(v => <FilterChip key={v} selected={sel === v} onClick={() => setSel(v)}>{v}</FilterChip>)}
        </div>

        <div style={{ marginTop: 28, background: 'var(--surface-page)', borderRadius: 12, padding: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
          {Img(ILLO + 'demo-truck.svg', 48)}
          <div style={{ fontSize: 14, color: 'var(--text-caption)' }}>We'll match you with loads for a <b style={{ color: 'var(--text-body)' }}>{sel}</b> on your routes.</div>
        </div>
      </div>

      {/* footer CTA */}
      <div style={{ position: 'sticky', bottom: 0, background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)', boxShadow: 'var(--shadow-footer)', padding: 16 }}>
        <Button variant="solid" onClick={() => go('home')}>Continue</Button>
      </div>
    </div>
  );
}

/* ===================================================================
   APP SHELL — phone frame + bottom nav + routing
   =================================================================== */
function App() {
  const [screen, setScreen] = React.useState('welcome');
  const [load, setLoad] = React.useState(null);
  const [nav, setNav] = React.useState('loads');
  const go = (s, payload) => { if (payload) setLoad(payload); setScreen(s); window.scrollTo && null; };

  const showNav = screen === 'home';
  return (
    <div style={{ width: 390, height: 800, background: '#fff', borderRadius: 36, overflow: 'hidden', position: 'relative', boxShadow: '0 30px 80px rgba(0,0,0,0.28)', border: '10px solid #111', fontFamily: 'var(--font-display)' }}>
      {/* status bar */}
      <div style={{ height: 36, background: screen === 'home' ? 'var(--surface-header)' : (screen === 'welcome' ? 'var(--we-yellow-hero)' : '#fff'), display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', fontSize: 13, fontWeight: 600, color: screen === 'home' ? '#fff' : '#000' }}>
        <span>9:41</span><span>WheelsEye</span>
      </div>
      {/* scroll viewport */}
      <div style={{ position: 'absolute', top: 36, left: 0, right: 0, bottom: showNav ? 64 : 0, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
        {screen === 'welcome' && <WelcomeScreen go={go} />}
        {screen === 'home' && <HomeScreen go={go} />}
        {screen === 'detail' && <LoadDetailScreen go={go} load={load} />}
      </div>
      {/* bottom nav */}
      {showNav && (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 64 }}>
          <BottomNav active={nav} onChange={setNav} items={[
            { id: 'loads', label: 'Loads', icon: Img(ICON + 'truck-outlined.svg', 24), activeIcon: Img(ICON + 'truck-filled.svg', 24) },
            { id: 'lanes', label: 'Lanes', icon: Img(ICON + 'lanes-outlined.svg', 24), activeIcon: Img(ICON + 'lanes-filled.svg', 24) },
            { id: 'help', label: 'Help', icon: Img(ICON + 'help-outlined.svg', 24), activeIcon: Img(ICON + 'help-filled.svg', 24) },
            { id: 'home', label: 'Profile', icon: Img(ICON + 'home-outlined.svg', 24), activeIcon: Img(ICON + 'home-filled.svg', 24) },
          ]} />
        </div>
      )}
    </div>
  );
}

window.WheelsEyeApp = App;
