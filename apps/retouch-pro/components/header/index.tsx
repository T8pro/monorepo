import Link from 'next/link';
import { Logo } from '../logo';
import { LogoT8 } from '../logo-t8';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <Link href="/">
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <LogoT8 className={styles.logo} />
      </div>
    </Link>
  );
};
