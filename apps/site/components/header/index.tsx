import { Button, Logo, ThemeToggle, Icon } from '@t8pro/design-system';
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
          <Button
            size="large"
            onClick={onCtaClick}
            iconLeft={<Icon name="build" size={20} />}
          >
            BE PRO!
          </Button>

          <ThemeToggle />
          <StaggeredMenu />
        </div>
      </div>
    </header>
  );
};
