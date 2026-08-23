import React from 'react';

/**
 * Toggle switch matching the load-alert TogglePillButton: a pill track that
 * turns green when active with a sliding white knob.
 */
export function ToggleSwitch({ checked = false, onChange, disabled = false, style = {}, ...rest }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        width: 44, height: 26, borderRadius: 'var(--radius-full)', border: 'none',
        background: checked ? 'var(--color-primary)' : 'var(--we-gray-300)',
        position: 'relative', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1, padding: 0, flexShrink: 0,
        transition: 'background 200ms var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <span style={{
        position: 'absolute', top: 3, left: checked ? 21 : 3,
        width: 20, height: 20, borderRadius: '50%', background: 'var(--we-white)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
        transition: 'left 200ms var(--ease-standard)',
      }} />
    </button>
  );
}
