import { GrTechnology } from 'react-icons/gr';
import { Button } from '@t8pro/design-system';
import { Logo } from '@t8pro/design-system';
import { StaggeredMenu } from '../gsap/staggered-menu';
import styles from './styles.module.scss';

export interface HeaderProps {
  onCtaClick?: () => void;
}

export const Header = ({ onCtaClick }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo variant="header" size="medium" />

        <div className={styles.secondary}>
          <Button size="large" onClick={onCtaClick} iconLeft={<GrTechnology />}>
            BE PRO!
          </Button>

          <StaggeredMenu />
        </div>
      </div>
    </header>
  );
};
