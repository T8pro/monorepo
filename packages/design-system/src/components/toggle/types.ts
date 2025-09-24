import { InputHTMLAttributes, ReactNode } from 'react';

export type ToggleSize = 'small' | 'medium' | 'large';

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  size?: ToggleSize;
  label?: ReactNode;
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}
