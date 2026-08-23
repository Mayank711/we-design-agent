/* WheelsEye Loads — production listing + load-detail recreation.
   Listing composes the DS LoadListCard; detail rebuilds LoadAddress, VehicleDetails,
   Offer, the sticky freight input and the leaderboard exactly as shipped. */
const DS = window.WheelsEyeLoadsDesignSystem_985cfc;
const { LoadListCard, SegmentedTabs, FilterChip, ToggleSwitch, Button } = DS;

const A = '../../assets/icons/loads/';
const IC = '../../assets/icons/';
const LOGO = '../../assets/logos/';
const img = (src, w, h) => <img src={src} width={w} height={h || w} alt="" style={{ display: 'block' }} />;

/* ---------------- sample loads (shaped like production LoadData) ---------------- */
const ADDR = (a, b, c, d) => [
  { type: 'LOADING', heading: a, subHeading: b },
  { type: 'UNLOADING', heading: c, subHeading: d },
];
const ITEMS = (truck, tonnage) => [
  { iconSrc: A + 'truck-type.svg', desc: truck },
  { iconSrc: A + 'measurement.svg', desc: tonnage },
];

const ALL_LOADS = [
  {
    id: 1,
    headerWidget: { iconSrc: A + 'clock.svg', text: 'Closes in <b>04:32</b> min' },
    addresses: ADDR('Jaipur, Rajasthan', 'Sitapura Industrial Area', 'Surat, Gujarat', 'Sachin GIDC'),
    items: [...ITEMS('32 ft Multi-axle · Full load', '21 Tonnes · Cement'),
      { iconSrc: A + 'magic.svg', desc: 'Earn 12% more on this lane', color: 'GREEN' }],
    footer: { variant: 'quote', color: 'OK', desc: 'Expected price', amount: '₹48,000', buttonDesc: 'Send Quote' },
  },
  {
    id: 2,
    headerWidget: { iconSrc: A + 'verified.svg', text: 'Verified shipper' },
    addresses: ADDR('Delhi', 'Narela Industrial Area', 'Mumbai, Maharashtra', 'Bhiwandi'),
    items: ITEMS('22 ft Open body · Part load', '9 Tonnes · Steel coils'),
    footer: { variant: 'accept', buttonDesc: 'Accept Load' },
  },
  {
    id: 3,
    stickyWidget: { iconSrc: A + 'thunder.svg', desc: 'Bid higher to win this load' },
    addresses: ADDR('Ahmedabad, Gujarat', 'Vatva GIDC', 'Pune, Maharashtra', 'Chakan MIDC'),
    items: ITEMS('19 ft Container · Full load', '7 Tonnes · FMCG goods'),
    footer: { variant: 'bidding', desc: 'Bidding closes in 02:00 min', buttonDesc: 'Place Bid', rejectDesc: 'Not interested' },
  },
  {
    id: 4,
    addresses: ADDR('Nagpur, Maharashtra', 'MIHAN', 'Hyderabad, Telangana', 'Patancheru'),
    items: ITEMS('32 ft Single-axle · Full load', '16 Tonnes · Tiles'),
    footer: { variant: 'quote', color: 'RED', desc: 'Reduce your freight to win', amount: '₹39,500', buttonDesc: 'Reduce' },
  },
];

const VEHICLE_LOADS = [
  {
    id: 11,
    headerWidget: { iconSrc: A + 'clock.svg', text: 'Closes in <b>09:10</b> min' },
    addresses: ADDR('Ludhiana, Punjab', 'Focal Point', 'Delhi', 'Okhla'),
    items: [...ITEMS('32 ft Multi-axle · Full load', '24 Tonnes · Auto parts'),
      { iconSrc: A + 'magic.svg', desc: 'Best match for your truck', color: 'GREEN' }],
    footer: { variant: 'confirm', desc: 'Pay token to confirm', amount: '₹2,000', buttonDesc: 'Confirm Load' },
  },
  {
    id: 12,
    addresses: ADDR('Chandigarh', 'Industrial Area Ph 2', 'Jaipur, Rajasthan', 'Vishwakarma'),
    items: ITEMS('32 ft Multi-axle · Full load', '20 Tonnes · Packaged food'),
    footer: { variant: 'quote', color: 'OK', desc: 'Expected price', amount: '₹41,000', buttonDesc: 'Send Quote' },
  },
  {
    id: 13,
    stickyWidget: { iconSrc: A + 'thunder.svg', desc: 'You are #2 — bid higher' },
    addresses: ADDR('Ambala, Haryana', 'Industrial Estate', 'Lucknow, UP', 'Transport Nagar'),
    items: ITEMS('32 ft Multi-axle · Full load', '25 Tonnes · Cement'),
    footer: { variant: 'bidding', desc: 'Bidding closes in 01:30 min', buttonDesc: 'Place Bid' },
  },
];

/* ===================================================================
   GREEN APP HEADER
   =================================================================== */
function AppHeader({ vehicle }) {
  const [alert, setAlert] = React.useState(true);
  return (
    <div style={{ background: 'var(--surface-header)', padding: '14px 16px 30px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-fab)' }}>
            {img(LOGO + 'wheelseye-mark.svg', 26)}
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>{vehicle ? vehicle.number : 'WheelsEye Loads'}</div>
            <div style={{ color: 'rgba(255,255,255,0.82)', fontSize: 12 }}>{vehicle ? vehicle.type : 'Find loads for your truck'}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: '#fff', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{img(IC + 'language.svg', 18)}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.14)', borderRadius: 999, padding: '5px 8px 5px 10px' }}>
            <span style={{ color: '#fff', fontSize: 12, fontWeight: 500 }}>Alerts</span>
            <ToggleSwitch checked={alert} onChange={setAlert} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================================================================
   LISTING SCREEN — All Loads + Vehicle-anchored
   =================================================================== */
const VEHICLE = { number: 'HR55 AB 1234', type: '32 ft Multi-axle · MXL' };
const VT_FILTERS = ['All', 'Open body', 'Container', 'Trailer', 'Tanker'];

function ListingScreen({ mode, setMode, go }) {
  const [tab, setTab] = React.useState('new');
  const [vt, setVt] = React.useState('All');
  const anchored = mode === 'vehicle';
  const loads = anchored ? VEHICLE_LOADS : ALL_LOADS;

  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-page)' }}>
      <AppHeader vehicle={anchored ? VEHICLE : null} />

      <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', marginTop: -18, position: 'relative', paddingTop: 14, minHeight: 480 }}>
        {/* listing-mode switch (kit control, styled as in-app pill toggle) */}
        <div style={{ padding: '0 16px 12px' }}>
          <SegmentedTabs
            tabs={[{ id: 'all', label: 'All Loads' }, { id: 'vehicle', label: 'My Vehicle' }]}
            active={mode} onChange={setMode}
          />
        </div>

        {anchored && (
          <div style={{ margin: '0 16px 12px', padding: '12px 14px', background: 'var(--surface-page)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
            {img(IC + 'truck-filled.svg', 26)}
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{VEHICLE.number}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Showing loads matched to this truck</div>
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-link)', fontWeight: 600 }}>Change</span>
          </div>
        )}

        {/* tabs + filter chips for All Loads */}
        {!anchored && (
          <>
            <div style={{ padding: '0 16px' }}>
              <SegmentedTabs tabs={[{ id: 'new', label: 'New Loads' }, { id: 'mine', label: 'My Loads' }]} active={tab} onChange={setTab} />
            </div>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '14px 16px', scrollbarWidth: 'none' }}>
              {VT_FILTERS.map(t => <FilterChip key={t} selected={vt === t} onClick={() => setVt(t)}>{t}</FilterChip>)}
            </div>
          </>
        )}

        {/* the card list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: anchored ? '4px 16px 28px' : '0 16px 28px' }}>
          {loads.map(l => (
            <LoadListCard key={l.id} {...l} onClick={() => go('detail', l)}
              footer={{ ...l.footer, onAction: () => go('detail', l), onReject: () => {} }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================================================================
   LOAD DETAIL — back header, address, vehicle details, offer, freight input, leaderboard
   =================================================================== */
const DETAIL_ADDR = [
  { type: 'LOADING', heading: 'Jaipur, Rajasthan', desc: 'Plot 14, Sitapura Industrial Area, Tonk Road, Jaipur 302022' },
  { type: 'UNLOADING', heading: 'Surat, Gujarat', desc: 'Sachin GIDC, Road 7, Surat 394230' },
];
const DETAIL_ITEMS = [
  { iconSrc: A + 'truck-type.svg', desc: '32 ft Multi-axle (MXL)', subTags: ['Full load'] },
  { iconSrc: A + 'measurement.svg', desc: '21 Tonnes · Cement bags' },
  { iconSrc: A + 'calendar.svg', desc: 'Loading today, before 6:00 PM' },
  { iconSrc: A + 'express-delivery.svg', desc: 'Advance 40% · Balance on POD', subTags: ['Fast pay'] },
];
const LEADERBOARD = [
  { rank: 1, quote: 46000, remark: 'Top bid', avatar: 'RK' },
  { rank: 2, quote: 47500, remark: '', avatar: 'SP' },
  { rank: 3, quote: 48000, remark: '', avatar: 'MD' },
];
const RANK_IMG = { 1: A + 'rank-gold.svg', 2: A + 'rank-silver.svg', 3: A + 'rank-orange.svg' };

function Avatar({ initials }) {
  return (
    <span style={{ width: 36, height: 36, borderRadius: '50%', background: '#f4f5fa', color: '#819bbc', fontWeight: 600, fontSize: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-secondary)', flexShrink: 0 }}>{initials}</span>
  );
}

function LoadDetailScreen({ go }) {
  const [open, setOpen] = React.useState(false);
  const [quote, setQuote] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const visible = open ? LEADERBOARD : LEADERBOARD.slice(0, 3);

  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-page)', paddingBottom: 260 }}>
      {/* sticky back header */}
      <div style={{ position: 'sticky', top: 0, zIndex: 5, background: '#fff', height: 64, padding: '0 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0px 3px 4px 0px rgba(202,202,202,0.2)' }}>
        <button onClick={() => go('list')} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 4, display: 'flex' }}>{img(IC + 'back-button.svg', 15)}</button>
        <button style={{ border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, background: '#4a4a52', borderRadius: 999, padding: '4px 12px 4px 4px' }}>
          {img(A + 'rm-icon.svg', 28)}{img(A + 'help-support.svg', 22)}
          <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Support</span>
        </button>
      </div>

      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* LoadAddress card */}
        <div style={{ position: 'relative', background: '#fff', borderRadius: 16, boxShadow: 'var(--shadow-card-soft)', padding: '16px 16px 16px 38px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {DETAIL_ADDR.map((a, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: 4 }}>
                <span style={{ position: 'absolute', top: 4, left: -22, width: 12, height: 12, display: 'flex' }}>
                  {img(a.type === 'LOADING' ? A + 'pickup-location-filled.svg' : A + 'unloading-location-filled.svg', 12)}
                </span>
                {i !== DETAIL_ADDR.length - 1 && <span style={{ position: 'absolute', borderLeft: '1px dashed #aaa', top: 22, left: -16.5, height: 'calc(100% - 6px)' }} />}
                <div style={{ fontSize: 16, fontWeight: 600, lineHeight: '24px' }}>{a.heading}</div>
                <div style={{ maxHeight: open ? 100 : 0, opacity: open ? 1 : 0, overflow: 'hidden', transition: 'all 0.3s ease-in-out' }}>
                  <div style={{ fontSize: 14, fontWeight: 400, lineHeight: '22px', color: '#888' }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setOpen(o => !o)} style={{ position: 'absolute', right: 16, top: 16, border: 'none', background: 'none', cursor: 'pointer', display: 'flex' }}>
            <img src={A + 'blue-arrow.svg'} width={24} height={24} alt="" style={{ transform: `rotate(${open ? '0deg' : '180deg'})`, transition: 'transform 0.3s ease-in-out' }} />
          </button>
        </div>

        {/* VehicleDetails */}
        <div style={{ background: '#fff', borderRadius: 22, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: 16 }}>
            {DETAIL_ITEMS.map((d, i) => (
              <React.Fragment key={i}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  {img(d.iconSrc, 24)}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ fontSize: 16, lineHeight: '24px', fontWeight: 400 }}>{d.desc}</div>
                    {d.subTags && (
                      <div style={{ display: 'flex', gap: 5 }}>
                        {d.subTags.map((s, j) => (
                          <span key={j} style={{ background: 'linear-gradient(to right, #F8F5FF, #FFFFFF)', borderRadius: 6, color: 'var(--we-violet-primary)', lineHeight: '22px', fontSize: 14, fontWeight: 500, padding: '6px 12px', fontFamily: 'var(--font-secondary)' }}>{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {i + 1 < DETAIL_ITEMS.length && <img src={A + 'horizontal-dashed.svg'} height={1} alt="" style={{ width: '100%' }} />}
              </React.Fragment>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 8, borderRadius: '0 0 12px 12px', background: 'var(--we-yellow-tint)', lineHeight: '22px' }}>
            <span style={{ color: 'var(--we-red-primary)', margin: 3, fontSize: 20 }}>*</span>
            <span style={{ fontSize: 14, fontWeight: 400, lineHeight: '16px' }}>Tarpaulin (tirpal) required for this load</span>
          </div>
        </div>

        {/* Offer pill */}
        <div style={{ background: 'linear-gradient(#f8f5ff, #ffffff)', padding: '9px 12px', display: 'flex', gap: 5, alignItems: 'center', borderRadius: 36, width: 'fit-content' }}>
          {img(A + 'magic.svg', 16)}
          <span style={{ color: 'var(--we-violet-primary)', fontSize: 16, fontWeight: 600, lineHeight: '22px', fontFamily: 'var(--font-secondary)' }}>Get ₹500 bonus on first trip</span>
        </div>
      </div>

      {/* sticky freight input */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 132, background: '#fff', padding: 16, boxShadow: 'var(--shadow-footer)' }}>
        <div style={{ fontSize: 16, lineHeight: '24px', fontWeight: 600 }}>Your freight</div>
        <input value={quote} onChange={e => setQuote(e.target.value.replace(/[^0-9]/g, ''))} type="tel" placeholder="Fill your freight"
          style={{ padding: '9px 22px', borderRadius: 12, border: '1px solid #D7D7D7', marginTop: 8, fontSize: 16, fontWeight: 500, lineHeight: '24px', width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-display)', outline: 'none' }} />
        <div style={{ marginTop: 16 }}>
          <Button variant="solid" onClick={() => setSubmitted(true)}>{submitted ? 'Quote sent ✓' : 'Submit'}</Button>
        </div>
      </div>

      {/* leaderboard bottom sheet */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: '#fff', boxShadow: '0px -2px 40px 0px rgba(0,0,0,0.06)', padding: '0 16px 10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14 }}>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Live leaderboard</span>
          {LEADERBOARD.length > 3 && (
            <button onClick={() => setOpen(o => o)} style={{ border: 'none', display: 'flex', alignItems: 'center', gap: 2, background: '#FFF6EC', borderRadius: 6, padding: '3px 6px', cursor: 'pointer' }}>
              {img(A + 'expand.svg', 20)}
              <span style={{ fontWeight: 600, fontSize: 12, lineHeight: '16px', color: '#F29422' }}>See leaderboard</span>
            </button>
          )}
        </div>
        <div style={{ marginTop: 6 }}>
          {visible.map((l, i) => (
            <div key={l.rank} style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '12px 0', borderBottom: i < visible.length - 1 ? '1px dashed #ebedf1' : 'none' }}>
              <span style={{ width: 20, textAlign: 'center' }}>
                {RANK_IMG[l.rank] ? img(RANK_IMG[l.rank], 20) : <span style={{ fontSize: 12, fontWeight: 500, color: '#444', fontFamily: 'var(--font-secondary)' }}>{l.rank}</span>}
              </span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Avatar initials={l.avatar} />
                  <span style={{ fontSize: 18, fontWeight: 500, filter: submitted ? 'none' : 'blur(3.5px)' }}>₹{l.quote.toLocaleString('en-IN')}</span>
                </div>
                <span style={{ fontSize: 14, fontWeight: 400, color: '#888' }}>{l.remark || '-'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================================================================
   APP SHELL — phone frame + routing
   =================================================================== */
function App() {
  const [screen, setScreen] = React.useState('list');
  const [mode, setMode] = React.useState('all');
  const go = (s) => setScreen(s);
  return (
    <div style={{ width: 390, height: 820, background: '#fff', borderRadius: 36, overflow: 'hidden', position: 'relative', boxShadow: '0 30px 80px rgba(0,0,0,0.28)', border: '10px solid #111', fontFamily: 'var(--font-display)' }}>
      <div style={{ height: 36, background: screen === 'list' ? 'var(--surface-header)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', fontSize: 13, fontWeight: 600, color: screen === 'list' ? '#fff' : '#000' }}>
        <span>9:41</span><span>WheelsEye</span>
      </div>
      <div style={{ position: 'absolute', top: 36, left: 0, right: 0, bottom: 0, overflowY: 'auto' }}>
        {screen === 'list' ? <ListingScreen mode={mode} setMode={setMode} go={go} /> : <LoadDetailScreen go={go} />}
      </div>
    </div>
  );
}

window.WheelsEyeLoadsKit = App;
