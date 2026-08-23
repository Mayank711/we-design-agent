import React from 'react';

/**
 * Origin → destination route ladder. Loading points render as a green circle,
 * the final unloading point as a red square, joined by a dashed vertical line —
 * the exact convention from the WheelsEye load card.
 *
 * stops: [{ heading, subHeading?, type: 'LOADING' | 'UNLOADING' }]
 */
export function RouteLadder({ stops = [], headingSize = 'var(--text-h3)', style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...style }}>
      {stops.map((stop, i) => {
        const isLoading = stop.type !== 'UNLOADING';
        const last = i === stops.length - 1;
        return (
          <div key={i} style={{ position: 'relative', paddingLeft: '24px', minWidth: 0 }}>
            {/* marker */}
            <span style={{
              position: 'absolute', left: 0, top: '13px', width: '8px', height: '8px',
              background: isLoading ? 'var(--point-loading)' : 'var(--point-unloading)',
              borderRadius: isLoading ? '50%' : '0',
            }} />
            {/* dashed connector */}
            {!last && (
              <span style={{
                position: 'absolute', left: '3px', top: '24px', height: 'calc(100% - 4px)',
                borderLeft: '1px dashed var(--we-black)',
              }} />
            )}
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
              fontSize: headingSize, lineHeight: 1.5, color: 'var(--text-body)',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              {stop.heading}
            </div>
            {stop.subHeading && (
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-regular)',
                fontSize: 'var(--text-body-lg)', lineHeight: 1.5, color: 'var(--text-muted)',
              }}>
                {stop.subHeading}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
