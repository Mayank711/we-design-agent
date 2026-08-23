import React from 'react';

/**
 * The signature violet "thunder" pill used across WheelsEye Loads to surface
 * bid-maximisation nudges and premium hints. Gradient pill (#F8F5FF → #FFF),
 * Poppins copy in violet, with a leading thunder glyph.
 */
export function PremiumPill({ children, icon = '\u26A1', style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        background: 'var(--pill-premium-grad)',
        color: 'var(--color-premium)',
        fontFamily: 'var(--font-secondary)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-body-sm)',
        lineHeight: '22px',
        padding: '10px 12px',
        borderRadius: 'var(--radius-pill)',
        width: 'fit-content',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden style={{ fontSize: '16px', lineHeight: 1 }}>{icon}</span>
      {children}
    </span>
  );
}
