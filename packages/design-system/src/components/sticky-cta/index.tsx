import { ReactNode } from 'react';
import { Button } from '../button/index.js';
import styles from './styles.module.scss';

export interface StickyCTAProps {
  children?: ReactNode;
  label?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'outline'
    | 'whatsapp';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const StickyCTA = ({
  children,
  label = 'Get Started',
  variant = 'primary',
  size = 'large',
  icon,
  onClick,
  className,
}: StickyCTAProps) => {
  const stickyClasses = [styles.stickyCta, className].filter(Boolean).join(' ');

  return (
    <div className={stickyClasses}>
      <Button variant={variant} size={size} onClick={onClick} iconLeft={icon}>
        {children || label}
      </Button>
    </div>
  );
};
