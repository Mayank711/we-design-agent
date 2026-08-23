import * as React from 'react';

export interface InputProps {
  label?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  helper?: React.ReactNode;
  error?: React.ReactNode;
  disabled?: boolean;
  prefix?: React.ReactNode;
  inputMode?: string;
  maxLength?: number;
  style?: React.CSSProperties;
}

/** Labeled text field used in onboarding / KYC / bank-details forms. */
export function Input(props: InputProps): React.JSX.Element;
