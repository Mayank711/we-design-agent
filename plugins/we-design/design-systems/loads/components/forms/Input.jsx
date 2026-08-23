import React from 'react';

/**
 * Labeled text input following the WheelsEye onboarding/KYC field style:
 * 12px-radius white box, gray border, label above, optional helper / error.
 */
export function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  helper,
  error,
  disabled = false,
  prefix = null,
  inputMode,
  maxLength,
  style = {},
  ...rest
}) {
  const borderColor = error ? 'var(--color-danger)' : 'var(--border-input)';
  return (
    <label style={{ display: 'block', fontFamily: 'var(--font-display)', ...style }}>
      {label && (
        <span style={{ display: 'block', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-caption)', marginBottom: '6px' }}>
          {label}
        </span>
      )}
      <span style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-lg)',
        padding: '12px 16px',
        background: disabled ? 'var(--surface-page)' : 'var(--surface-card)',
      }}>
        {prefix}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          inputMode={inputMode}
          maxLength={maxLength}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-body-lg)',
            color: 'var(--text-body)', width: '100%', minWidth: 0,
          }}
          {...rest}
        />
      </span>
      {(helper || error) && (
        <span style={{ display: 'block', marginTop: '6px', fontSize: 'var(--text-caption)', color: error ? 'var(--color-danger)' : 'var(--text-muted)' }}>
          {error || helper}
        </span>
      )}
    </label>
  );
}
