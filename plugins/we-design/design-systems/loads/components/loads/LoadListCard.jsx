import React from 'react';

/* Footer tone tokens — mirror cards.color.ts (BG_COLOR / TEXT_COLOR / BUTTON_BG). */
const FOOTER = {
  OK:     { bg: 'var(--we-green-tint)',  text: 'var(--we-green-primary)', btn: 'var(--we-green-primary)', btnText: '#fff' },
  RED:    { bg: 'var(--we-red-tint)',    text: 'var(--we-red-primary)',   btn: 'var(--we-red-secondary)', btnText: '#fff' },
  GOLDEN: { bg: 'var(--we-surface)',     text: 'var(--we-yellow-text)',   btn: 'var(--we-green-primary)', btnText: '#fff' },
};

function FooterButton({ children, bg, color, full, onClick, style = {} }) {
  return (
    <button
      type="button"
      onClick={(e) => { e.stopPropagation(); onClick && onClick(); }}
      style={{
        border: 'none', background: bg, color,
        borderRadius: 'var(--radius-lg)', cursor: 'pointer',
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)',
        fontSize: '18px', lineHeight: '24px', padding: '12px 24px',
        width: full ? '100%' : 'auto', whiteSpace: 'nowrap',
        transition: 'transform var(--dur-press) var(--ease-standard)',
        ...style,
      }}
      onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
      onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {children}
    </button>
  );
}

/* Left desc + big amount, right CTA — the QUOTE / CONFIRM footer shell. */
function ContentFooter({ tone, desc, descColor, amount, buttonDesc, btnBg, btnText, onAction }) {
  const t = FOOTER[tone] || FOOTER.OK;
  return (
    <div style={{
      borderRadius: 'var(--radius-lg)', background: t.bg, padding: '12px 16px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
    }}>
      <div>
        <div style={{ fontSize: '16px', fontWeight: 'var(--weight-medium)', lineHeight: '24px', color: descColor || t.text }}>{desc}</div>
        {amount != null && <div style={{ fontSize: '24px', fontWeight: 'var(--weight-medium)', lineHeight: '32px', color: 'var(--we-black)' }}>{amount}</div>}
      </div>
      <FooterButton bg={btnBg || t.btn} color={btnText || t.btnText} onClick={onAction}>{buttonDesc}</FooterButton>
    </div>
  );
}

function renderFooter(footer) {
  if (!footer) return null;
  switch (footer.variant) {
    case 'quote':
      return (
        <ContentFooter
          tone={footer.color || 'OK'}
          desc={footer.desc}
          amount={footer.amount}
          buttonDesc={footer.buttonDesc}
          btnBg={footer.color === 'RED' ? 'var(--we-red-primary)' : 'var(--we-green-primary)'}
          onAction={footer.onAction}
        />
      );
    case 'confirm':
      return (
        <ContentFooter
          tone="GOLDEN"
          desc={footer.desc} descColor="var(--we-black)"
          amount={footer.amount}
          buttonDesc={footer.buttonDesc}
          btnBg="var(--we-green-primary)"
          onAction={footer.onAction}
        />
      );
    case 'accept':
      return (
        <div style={{ padding: '0 8px 6px' }}>
          <FooterButton full bg="var(--we-green-primary)" color="#fff" onClick={footer.onAction}>
            {footer.buttonDesc}
          </FooterButton>
        </div>
      );
    case 'bidding':
      return (
        <div style={{ background: 'var(--we-surface)', padding: '14px', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {footer.desc && (
            <div style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--weight-semibold)', fontSize: '16px', lineHeight: '24px', textAlign: 'center', color: 'var(--we-black)' }}>
              {footer.desc}
            </div>
          )}
          <FooterButton full bg="var(--we-green-primary)" color="#fff" onClick={footer.onAction}>{footer.buttonDesc}</FooterButton>
          {footer.rejectDesc && (
            <FooterButton full bg="var(--we-surface)" color="var(--we-green-primary)" onClick={footer.onReject}
              style={{ border: '1px solid var(--we-green-primary)' }}>
              {footer.rejectDesc}
            </FooterButton>
          )}
        </div>
      );
    default:
      return null;
  }
}

/**
 * Production-faithful WheelsEye load-listing card. Data-driven exactly like the
 * app's `Card` + factory: an optional header banner / countdown / OTP strip, the
 * green-circle/red-square address ladder, icon detail rows (a `GREEN` row becomes
 * a violet "magic" pill), an optional thunder sticky pill, and one of the footer
 * variants — quote, confirm, accept, or bidding.
 */
export function LoadListCard({
  headerWidget = null,
  infoWidget = null,
  otpHeader = null,
  addresses = [],
  items = [],
  stickyWidget = null,
  footer = null,
  disabled = false,
  onClick,
  style = {},
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--we-white)',
        border: '1px solid var(--we-border)',
        boxShadow: 'var(--shadow-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden', position: 'relative',
        fontFamily: 'var(--font-display)',
        cursor: onClick ? 'pointer' : 'default',
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      {/* header widget — gray strip with icon + message */}
      {headerWidget && (
        <div style={{ padding: '4px' }}>
          <div style={{ borderRadius: '12px 12px 0 0', padding: '8px', background: 'var(--we-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            {headerWidget.iconSrc && <img src={headerWidget.iconSrc} alt="" width={18} height={18} />}
            <span style={{ fontSize: '14px', fontWeight: 'var(--weight-regular)', lineHeight: '22px', color: 'var(--we-black)' }}
              dangerouslySetInnerHTML={{ __html: headerWidget.text }} />
          </div>
        </div>
      )}

      {/* info / countdown widget */}
      {infoWidget && (
        <div style={{ padding: '4px' }}>
          <div style={{ borderRadius: '12px 12px 0 0', padding: '6px', textAlign: 'center', fontSize: '16px', lineHeight: '24px',
            background: infoWidget.color === 'YELLOW' ? 'var(--we-surface)' : 'var(--we-green-tint)' }}>
            {infoWidget.desc} {infoWidget.timer && <span style={{ fontWeight: 'var(--weight-medium)' }}>{infoWidget.timer}</span>}
          </div>
        </div>
      )}

      {/* sticky unloading OTP header — radial gold */}
      {otpHeader && (
        <div style={{ background: 'radial-gradient(50% 50% at 50% 50%, #FFDE91 0%, #FFF2D6 100%)', padding: '10px 16px', borderRadius: '10px 10px 0 0', margin: '4px', textAlign: 'center' }}>
          <span style={{ fontSize: '16px', fontWeight: 'var(--weight-semibold)', lineHeight: '24px', color: '#671A17' }}>{otpHeader}</span>
        </div>
      )}

      {/* address ladder */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 16px 0' }}>
        {addresses.map((add, i) => {
          const loading = add.type !== 'UNLOADING';
          const last = i === addresses.length - 1;
          return (
            <div key={i} style={{ position: 'relative', paddingLeft: '24px', minWidth: 0 }}>
              <span style={{ position: 'absolute', left: 0, top: '15px', width: '8px', height: '8px', background: loading ? 'var(--point-loading)' : 'var(--point-unloading)', borderRadius: loading ? '50%' : '0' }} />
              {!last && <span style={{ position: 'absolute', left: '3px', top: '28px', height: '85%', borderLeft: '1px dashed var(--we-black)' }} />}
              <div style={{ fontSize: '20px', fontWeight: 'var(--weight-semibold)', lineHeight: '30px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{add.heading}</div>
              {add.subHeading && <div style={{ fontSize: '16px', fontWeight: 'var(--weight-regular)', lineHeight: '24px', color: 'var(--we-gray-500)' }}>{add.subHeading}</div>}
            </div>
          );
        })}
        <div style={{ height: 1, background: 'var(--we-border-soft)', marginTop: '4px' }} />
      </div>

      {/* item rows */}
      {items.length > 0 && (
        <div style={{ paddingLeft: '16px', paddingRight: '16px', marginTop: '16px' }}>
          {items.map((it, i) => (
            it.color === 'GREEN' ? (
              <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'var(--pill-premium-grad)', color: 'var(--we-violet-primary)', fontFamily: 'var(--font-secondary)', fontWeight: 'var(--weight-semibold)', fontSize: '16px', lineHeight: '22px', padding: '9px 12px', borderRadius: 'var(--radius-pill)', width: 'fit-content', marginTop: '8px' }}>
                {it.iconSrc && <img src={it.iconSrc} alt="" width={20} height={20} />}{it.desc}
              </div>
            ) : (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', fontSize: '18px', fontWeight: 'var(--weight-regular)', lineHeight: '24px' }}>
                {it.iconSrc && <img src={it.iconSrc} alt="" width={24} height={24} style={{ flexShrink: 0 }} />}
                <span>{it.desc}</span>
              </div>
            )
          ))}
        </div>
      )}

      {/* sticky thunder pill */}
      {stickyWidget && (
        <div style={{ paddingLeft: '16px', marginBottom: '16px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'var(--pill-premium-grad)', color: 'var(--we-violet-primary)', fontFamily: 'var(--font-secondary)', fontWeight: 'var(--weight-semibold)', fontSize: '14px', lineHeight: '22px', padding: '10px 12px', borderRadius: 'var(--radius-pill)' }}>
            {stickyWidget.iconSrc && <img src={stickyWidget.iconSrc} alt="" width={24} height={24} />}{stickyWidget.desc}
          </span>
        </div>
      )}

      {/* footer (FooterContainer = 6px inset) */}
      <div style={{ padding: '6px' }}>
        {renderFooter(footer)}
      </div>
    </div>
  );
}
