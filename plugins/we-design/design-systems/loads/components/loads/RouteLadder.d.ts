import * as React from 'react';

export interface RouteStop {
  heading: string;
  subHeading?: string;
  type?: 'LOADING' | 'UNLOADING';
}

/**
 * Origin→destination ladder: green circle = loading, red square = unloading,
 * dashed connector between. The core wayfinding motif of WheelsEye Loads.
 * @startingPoint section="Loads" subtitle="Green-dot / red-square route ladder" viewport="700x200"
 */
export interface RouteLadderProps {
  stops: RouteStop[];
  /** CSS font-size for stop headings */
  headingSize?: string;
  style?: React.CSSProperties;
}

export function RouteLadder(props: RouteLadderProps): React.JSX.Element;
