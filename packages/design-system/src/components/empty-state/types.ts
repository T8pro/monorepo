import { ReactNode } from 'react';
import { ButtonProps } from '../button/types.js';
import { IconName } from '../icon/types.js';

export type EmptyStateSize = 'small' | 'medium' | 'large';

export type EmptyStateProps = {
  /** Icon to display */
  icon?: IconName;
  /** Title text */
  title?: string;
  /** Description text */
  description?: string;
  /** Button configuration */
  button?: {
    text: string;
  } & ButtonProps;
  /** Size variant */
  size?: EmptyStateSize;
  /** Additional CSS class */
  className?: string;
  /** Custom content to render instead of default layout */
  children?: ReactNode;
};
