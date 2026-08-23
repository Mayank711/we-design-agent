import React from 'react';

/**
 * Selectable filter chip — used for vehicle-type and load filters. Selected
 * state uses a green tint background + green border (per marketing TyreCard).
 */
export function FilterChip({ children, selected = false, icon = null, onClick, style = {}, ...rest }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: selected ? 'var(--weight-medium)' : 'var(--weight-regular)',
        color: 'var(--we-black)',
        padding: '8px 14px',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        background: selected ? 'var(--we-green-tint-select)' : 'var(--surface-card)',
        border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--border-soft, var(--border-divider))'}`,
        transition: 'background 150ms var(--ease-standard), border-color 150ms var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
