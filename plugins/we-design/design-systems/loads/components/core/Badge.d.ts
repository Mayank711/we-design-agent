import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** semantic tone of the badge */
  tone?: 'success' | 'danger' | 'accept' | 'info' | 'premium' | 'neutral';
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Compact status pill for verified / demand-status / KYC labels. */
export function Badge(props: BadgeProps): React.JSX.Element;
