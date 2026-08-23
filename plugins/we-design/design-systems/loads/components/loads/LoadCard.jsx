import React from 'react';
import { RouteLadder } from './RouteLadder.jsx';

/**
 * The flagship WheelsEye load card. White, 12px radius, soft shadow; optional
 * header banner (timer / verified), a route ladder, detail rows with icons,
 * and a colored fare footer with a CTA. Footer tone: ok (green), alert (red),
 * accept (gold).
 *
 * details: [{ icon?: ReactNode, text: string }]
 */
export function LoadCard({
  stops = [],
  details = [],
  banner = null,
  bannerTone = 'ok',
  fareLabel = 'Fixed price',
  fare,
  footerTone = 'ok',
  ctaLabel = 'Book load',
  onCta,
  premiumNote = null,
  onClick,
  style = {},
}) {
  const bannerTones = {
    ok: { background: 'var(--surface-ok)', color: 'var(--we-green-600)' },
    accept: { background: 'radial-gradient(50% 50% at 50% 50%, #FFDE91 0%, #FFF2D6 100%)', color: '#671A17' },
    alert: { background: 'var(--surface-alert)', color: 'var(--color-danger)' },
  };
  const footerTones = {
    ok: { background: 'var(--surface-ok)', label: 'var(--color-primary)', btn: 'var(--color-primary)' },
    accept: { background: 'var(--surface-page)', label: 'var(--we-yellow-text)', btn: 'var(--color-accent)' },
    alert: { background: 'var(--surface-alert)', label: 'var(--color-danger)', btn: 'var(--color-danger-strong)' },
  };
  const ft = footerTones[footerTone];
  const btnTextColor = footerTone === 'accept' ? 'var(--we-black)' : 'var(--we-white)';

  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        fontFamily: 'var(--font-display)',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {banner && (
        <div style={{
          ...bannerTones[bannerTone],
          padding: '8px', textAlign: 'center', fontSize: 'var(--text-body-lg)',
          fontWeight: 'var(--weight-medium)', lineHeight: 1.5,
        }}>
          {banner}
        </div>
      )}

      <div style={{ padding: '20px 16px 16px' }}>
        <RouteLadder stops={stops} />
        <div style={{ height: 1, background: 'var(--border-divider)', margin: '16px 0 16px' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {details.map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: 'var(--text-title)', lineHeight: 1.33 }}>
              {d.icon && <span style={{ width: 28, height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{d.icon}</span>}
              <span style={{ color: 'var(--text-body)' }}>{d.text}</span>
            </div>
          ))}
        </div>

        {premiumNote && <div style={{ marginTop: '20px' }}>{premiumNote}</div>}
      </div>

      {fare != null && (
        <div style={{
          background: ft.background,
          padding: '12px 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
        }}>
          <div>
            <div style={{ fontSize: 'var(--text-body-lg)', fontWeight: 'var(--weight-medium)', color: ft.label, lineHeight: 1.5 }}>{fareLabel}</div>
            <div style={{ fontSize: 'var(--text-rate)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-body)', lineHeight: 1.33 }}>{fare}</div>
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onCta && onCta(); }}
            style={{
              border: 'none', background: ft.btn, color: btnTextColor,
              padding: '12px 28px', borderRadius: 'var(--radius-lg)',
              fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)',
              fontSize: 'var(--text-title)', cursor: 'pointer', whiteSpace: 'nowrap',
            }}
          >
            {ctaLabel}
          </button>
        </div>
      )}
    </div>
  );
}
