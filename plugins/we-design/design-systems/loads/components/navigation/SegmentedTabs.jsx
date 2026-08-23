import React from 'react';

/**
 * Segmented tab control — the home "New Loads / My Loads" switcher. The active
 * tab sits on a white pill with the inactive track behind it.
 * tabs: [{ id, label }]
 */
export function SegmentedTabs({ tabs = [], active, onChange, style = {} }) {
  return (
    <div style={{
      display: 'flex', gap: '4px', padding: '4px',
      background: 'var(--surface-page)', borderRadius: 'var(--radius-lg)',
      ...style,
    }}>
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange && onChange(tab.id)}
            style={{
              flex: 1, border: 'none', cursor: 'pointer',
              padding: '10px 12px', borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-body-lg)',
              fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              color: isActive ? 'var(--color-primary)' : 'var(--text-muted)',
              background: isActive ? 'var(--surface-card)' : 'transparent',
              boxShadow: isActive ? 'var(--shadow-card)' : 'none',
              transition: 'all 180ms var(--ease-standard)',
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
