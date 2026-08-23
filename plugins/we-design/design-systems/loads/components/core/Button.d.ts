import * as React from 'react';

/**
 * Primary action button for WheelsEye Loads. Green solid is the default CTA;
 * yellow is reserved for subscription / upsell, link for inline navigation.
 * @startingPoint section="Core" subtitle="Green CTA button with 7 variants" viewport="700x200"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** solid = green primary, outlined = green outline, yellow, black, hollow (gray), danger (red outline), link (blue text) */
  variant?: 'solid' | 'outlined' | 'yellow' | 'black' | 'hollow' | 'danger' | 'link';
  size?: 'md' | 'sm' | 'inline';
  disabled?: boolean;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): React.JSX.Element;
