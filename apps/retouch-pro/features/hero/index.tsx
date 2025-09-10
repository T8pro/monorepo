import { Button, Heading } from '@t8pro/design-system';
import { FaClock, FaShieldAlt, FaFileContract, FaFlag } from 'react-icons/fa';
import styles from './styles.module.scss';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="/retouch-pro-logo.svg"
            alt="TG Logo"
            width={100}
            height={100}
            className={styles.logo}
            priority
          />
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <Heading
            as="h1"
            size="5xl"
            weight="extrabold"
            color="secondary"
            align="center"
            lineHeight="tight"
            marginBottom="lg"
          >
            Turn Phone Pics into Craveable Menu Photos
          </Heading>
          <p>
            Perfect crops for Uber Eats, DoorDash, Grubhub, Instagram & Google.
            No contract. Money-back guarantee.
          </p>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <Button variant="primary" size="large" className={styles.ctaButton}>
              🎁 Get 1 Photo Retouched FREE
            </Button>

            <p className={styles.ctaSubtext}>
              Upload your photo → Decide if you want more.
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <FaClock />
            24-Hour Turnaround
          </div>
          <div className={styles.badge}>
            <FaShieldAlt />
            Money-Back Guarantee
          </div>
          <div className={styles.badge}>
            <FaFileContract />
            No Contract
          </div>
          <div className={styles.badge}>
            <FaFlag />
            US-Based Remote
          </div>
        </div>
      </div>
    </section>
  );
};
