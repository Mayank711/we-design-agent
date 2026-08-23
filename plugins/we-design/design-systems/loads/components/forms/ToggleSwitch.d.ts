import * as React from 'react';

export interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Green pill toggle — used for load alerts and notification settings. */
export function ToggleSwitch(props: ToggleSwitchProps): React.JSX.Element;
