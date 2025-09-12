'use client';

import { Logo } from '../logo';
import { LogoT8 } from '../logo-t8';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <LogoT8 className={styles.logo} />
    </div>
  );
};
