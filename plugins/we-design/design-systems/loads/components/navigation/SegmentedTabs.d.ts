import * as React from 'react';

export interface SegmentTab {
  id: string;
  label: React.ReactNode;
}

export interface SegmentedTabsProps {
  tabs: SegmentTab[];
  active: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** White-pill segmented switcher (home New Loads / My Loads). */
export function SegmentedTabs(props: SegmentedTabsProps): React.JSX.Element;
