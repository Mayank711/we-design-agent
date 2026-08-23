import * as React from 'react';

export interface FilterChipProps {
  children?: React.ReactNode;
  selected?: boolean;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Selectable filter chip for vehicle-type / load filters. */
export function FilterChip(props: FilterChipProps): React.JSX.Element;
