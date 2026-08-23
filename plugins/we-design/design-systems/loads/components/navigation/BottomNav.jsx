import React from 'react';

/**
 * Bottom tab bar — the app's primary navigation (Loads, Lanes, Help, etc).
 * Active item shows in green; each item takes an icon node (and optional
 * activeIcon). Fixed white bar with a top hairline.
 *
 * items: [{ id, label, icon, activeIcon? }]
 */
export function BottomNav({ items = [], active, onChange, style = {} }) {
  return (
    <nav style={{
      display: 'flex', alignItems: 'stretch',
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-card)',
      boxShadow: 'var(--shadow-footer)',
      ...style,
    }}>
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange && onChange(item.id)}
            style={{
              flex: 1, border: 'none', background: 'transparent', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              padding: '10px 4px',
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-caption)',
              fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              color: isActive ? 'var(--color-primary)' : 'var(--text-muted)',
            }}
          >
            <span style={{ width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', opacity: isActive ? 1 : 0.7 }}>
              {(isActive && item.activeIcon) ? item.activeIcon : item.icon}
            </span>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
