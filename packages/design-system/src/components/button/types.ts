import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconName } from '../icon/types.js';

export type ButtonVariant = '1' | '2' | '3' | '4';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonTheme = 'dark' | 'light';

export type ButtonStyle = 'solid' | 'outline';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: IconName;
  iconRight?: IconName;
  theme?: ButtonTheme;
  style?: ButtonStyle;
};
