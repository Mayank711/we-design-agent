import React from 'react';

/**
 * WheelsEye Loads primary button system.
 * Mirrors caraxes CustomButton variants: solid (green), outlined (green),
 * yellow, black, hollow, link. Full-width by default, 12px radius, 48px tall,
 * presses with a 0.95 scale over 300ms.
 */
export function Button({
  children,
  variant = 'solid',
  size = 'md',
  disabled = false,
  fullWidth = true,
  leadingIcon = null,
  trailingIcon = null,
  onClick,
  style = {},
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-medium)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: `transform var(--dur-press) var(--ease-standard), filter var(--dur-press) var(--ease-standard)`,
    borderRadius: 'var(--radius-lg)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: fullWidth ? '100%' : 'auto',
    boxSizing: 'border-box',
    lineHeight: 1.33,
    WebkitTapHighlightColor: 'transparent',
  };

  const sizes = {
    md: { height: 48, padding: '0 16px', fontSize: 'var(--text-title)' },
    sm: { height: 40, padding: '0 16px', fontSize: 'var(--text-body-lg)' },
    inline: { height: 'auto', padding: 0, fontSize: 'var(--text-body-lg)' },
  };

  const variants = {
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-primary)',
      border: '1px solid var(--color-primary)',
    },
    outlined: {
      background: 'var(--surface-card)',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)',
    },
    yellow: {
      background: 'var(--color-accent)',
      color: 'var(--we-black)',
      border: '1px solid var(--color-accent)',
    },
    black: {
      background: 'var(--we-black)',
      color: 'var(--we-white)',
      border: 'none',
    },
    hollow: {
      background: 'var(--surface-card)',
      color: 'var(--we-black)',
      border: '1px solid var(--border-input)',
    },
    danger: {
      background: 'var(--surface-card)',
      color: 'var(--color-danger-strong)',
      border: '1px solid var(--color-danger)',
    },
    link: {
      background: 'transparent',
      color: 'var(--text-link)',
      border: 'none',
      fontWeight: 'var(--weight-semibold)',
      width: 'auto',
      padding: 0,
      height: 'auto',
    },
  };

  const disabledStyle = disabled
    ? variant === 'solid'
      ? { opacity: 0.3 }
      : variant === 'link'
        ? { color: 'var(--text-caption)' }
        : { background: 'var(--we-gray-300)', color: 'var(--text-caption)', borderColor: 'var(--we-gray-300)' }
    : {};

  const resolvedSize = variant === 'link' ? sizes.inline : sizes[size];

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...resolvedSize, ...variants[variant], ...disabledStyle, ...style }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = `scale(${'var(--press-scale)' && 0.95})`; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
