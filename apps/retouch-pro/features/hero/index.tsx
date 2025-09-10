import { Button } from '@t8pro/design-system';
import styles from './styles.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img
            src="/retouch-pro-logo.svg"
            alt="TG Logo"
            className={styles.logo}
          />
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Turn Phone Pics into Craveable Menu Photos — in 48 Hours
          </h1>
          <p className={styles.subtitle}>
            AI + human touch. Pixel-perfect crops for Uber Eats, DoorDash,
            Grubhub, and Instagram. Zero contract. Money-back guarantee.
          </p>
          <div className={styles.buttonGroup}>
            <Button variant="primary" size="large">
              <i className="fas fa-upload" />
              Upload Photos & Start
            </Button>
            <Button variant="outline" size="large">
              See Before/After
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <i className="fas fa-clock" />
            48-Hour Turnaround
          </div>
          <div className={styles.badge}>
            <i className="fas fa-shield-alt" />
            Money-Back Guarantee
          </div>
          <div className={styles.badge}>
            <i className="fas fa-file-contract" />
            No Contract
          </div>
          <div className={styles.badge}>
            <i className="fas fa-flag" />
            US-Based Remote
          </div>
        </div>
      </div>
    </section>
  );
};
