import { InputHTMLAttributes } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export type InputVariant = 'default' | 'outline' | 'filled';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input size */
  size?: InputSize;
  /** Input variant */
  variant?: InputVariant;
  /** Full width input */
  fullWidth?: boolean;
  /** Error state */
  error?: boolean | string;
  /** Disabled state */
  disabled?: boolean;
}
