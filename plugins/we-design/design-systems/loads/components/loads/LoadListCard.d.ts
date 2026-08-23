import * as React from 'react';

export interface LoadAddressStop {
  type: 'LOADING' | 'UNLOADING';
  heading: string;
  subHeading?: string;
}

export interface LoadItem {
  /** URL to a 24px icon (use assets/icons/loads/*) */
  iconSrc?: string;
  desc: string;
  /** 'GREEN' renders the row as a violet "magic" pill instead */
  color?: string | null;
}

export type LoadFooter =
  | { variant: 'quote'; color?: 'OK' | 'RED' | 'GOLDEN'; desc: string; amount?: string; buttonDesc: string; onAction?: () => void }
  | { variant: 'confirm'; desc: string; amount?: string; buttonDesc: string; onAction?: () => void }
  | { variant: 'accept'; buttonDesc: string; onAction?: () => void }
  | { variant: 'bidding'; desc?: React.ReactNode; buttonDesc: string; rejectDesc?: string; onAction?: () => void; onReject?: () => void };

/**
 * Production-faithful load-listing card with all real footer variants
 * (quote / confirm / accept / bidding). The card shown on All Loads and
 * vehicle-anchored listing screens.
 */
export interface LoadListCardProps {
  /** gray strip with icon + message (timer / verified) */
  headerWidget?: { iconSrc?: string; text: string } | null;
  /** countdown / info banner; color 'YELLOW' = gold tint, else green tint */
  infoWidget?: { desc: string; timer?: React.ReactNode; color?: string } | null;
  /** radial-gold unloading OTP strip */
  otpHeader?: string | null;
  addresses: LoadAddressStop[];
  items?: LoadItem[];
  /** thunder sticky pill */
  stickyWidget?: { desc: string; iconSrc?: string } | null;
  footer?: LoadFooter | null;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function LoadListCard(props: LoadListCardProps): React.JSX.Element;
