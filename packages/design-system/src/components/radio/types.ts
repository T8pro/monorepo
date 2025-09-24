import { InputHTMLAttributes, ReactNode } from 'react';

export type RadioSize = 'small' | 'medium' | 'large';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: RadioSize;
  label?: ReactNode;
}
