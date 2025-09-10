import { GrTechnology } from 'react-icons/gr';
import { Button } from '@/components/button';
import { Logo } from '@/components/logo';
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
