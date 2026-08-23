import * as React from 'react';

export interface NavItem {
  id: string;
  label: React.ReactNode;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

export interface BottomNavProps {
  items: NavItem[];
  active: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** Fixed bottom tab bar — primary app navigation. */
export function BottomNav(props: BottomNavProps): React.JSX.Element;
