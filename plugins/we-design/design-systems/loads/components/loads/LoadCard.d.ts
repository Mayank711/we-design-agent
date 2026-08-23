import * as React from 'react';
import { RouteStop } from './RouteLadder';

export interface LoadDetail {
  icon?: React.ReactNode;
  text: string;
}

/**
 * Flagship load card: route ladder + detail rows + colored fare footer with CTA.
 * @startingPoint section="Loads" subtitle="Full load card with route, details, fare footer" viewport="420x520"
 */
export interface LoadCardProps {
  stops: RouteStop[];
  details?: LoadDetail[];
  /** optional top banner content (timer text, verified note) */
  banner?: React.ReactNode;
  bannerTone?: 'ok' | 'accept' | 'alert';
  fareLabel?: string;
  fare?: React.ReactNode;
  footerTone?: 'ok' | 'accept' | 'alert';
  ctaLabel?: string;
  onCta?: () => void;
  premiumNote?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function LoadCard(props: LoadCardProps): React.JSX.Element;
