import { GrTechnology } from 'react-icons/gr';
import { Button } from '@t8pro/design-system';
import { Logo } from '@t8pro/design-system';
import { StaggeredMenu } from '../gsap/staggered-menu';
import styles from './styles.module.scss';

export interface HeaderProps {
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const Header = ({ ctaLabel = 'BE PRO', onCtaClick }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo variant="header" size="medium" />

        <div className={styles.secondary}>
          <Button size="large" onClick={onCtaClick} iconLeft={<GrTechnology />}>
            {ctaLabel}
          </Button>

          <StaggeredMenu />
        </div>
      </div>
    </header>
  );
};
