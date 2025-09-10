import { ReactNode } from 'react';
import { Button } from '../button/index.js';
import { Logo } from '../logo/index.js';
import styles from './styles.module.scss';

export interface HeaderProps {
  logo?: ReactNode;
  logoVariant?: 'header' | 'footer';
  logoSize?: 'small' | 'medium' | 'large';
  logoAlt?: string;
  logoHref?: string;
  ctaLabel?: string;
  ctaVariant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'outline'
    | 'whatsapp';
  ctaSize?: 'small' | 'medium' | 'large';
  ctaIcon?: ReactNode;
  onCtaClick?: () => void;
  children?: ReactNode;
  className?: string;
}

export const Header = ({
  logo,
  logoVariant = 'header',
  logoSize = 'medium',
  logoAlt = 'T8 Pro',
  logoHref,
  ctaLabel,
  ctaVariant = 'primary',
  ctaSize = 'medium',
  ctaIcon,
  onCtaClick,
  children,
  className,
}: HeaderProps) => {
  const headerClasses = [styles.header, className].filter(Boolean).join(' ');

  return (
    <header className={headerClasses}>
      <div className={styles.container}>
        {logo ? (
          logo
        ) : (
          <Logo
            variant={logoVariant}
            size={logoSize}
            alt={logoAlt}
            src={logoHref}
          />
        )}

        <div className={styles.secondary}>
          {ctaLabel && (
            <Button
              variant={ctaVariant}
              size={ctaSize}
              onClick={onCtaClick}
              iconLeft={ctaIcon}
            >
              {ctaLabel}
            </Button>
          )}
          {children}
        </div>
      </div>
    </header>
  );
};
