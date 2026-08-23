import React from 'react';

/**
 * Small status badge. Tone maps to the WheelsEye semantic palette:
 * success (green), danger (red), accept (gold), info (blue), premium (violet),
 * neutral (gray). Used for verified tags, demand status, KYC state.
 */
export function Badge({ children, tone = 'success', icon = null, style = {}, ...rest }) {
  const tones = {
    success: { color: 'var(--we-green-600)', background: 'var(--we-green-tint)' },
    danger: { color: 'var(--color-danger)', background: 'var(--we-red-tint)' },
    accept: { color: 'var(--we-yellow-text)', background: 'var(--we-yellow-tint)' },
    info: { color: 'var(--we-blue-secondary)', background: 'var(--we-blue-tint)' },
    premium: { color: 'var(--color-premium)', background: 'var(--we-violet-tint)' },
    neutral: { color: 'var(--text-caption)', background: 'var(--surface-page)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-caption)',
        lineHeight: 1.5,
        padding: '4px 10px',
        borderRadius: 'var(--radius-sm)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
