import { Logo } from '@/components/logo';
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo variant='footer' size='medium' />
          <div className={styles.info}>
            <span className={styles.year}>2025</span>
            <span className={styles.separator}>-</span>
            <span className={styles.location}>United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
