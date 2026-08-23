import * as React from 'react';

export interface PremiumPillProps {
  children?: React.ReactNode;
  /** leading glyph; defaults to a thunder bolt ⚡ */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Violet gradient "thunder" pill for bid / premium nudges. */
export function PremiumPill(props: PremiumPillProps): React.JSX.Element;
