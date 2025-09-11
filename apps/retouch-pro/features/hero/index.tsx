'use client';

import { Button, Heading, ThemeToggle, useTheme } from '@t8pro/design-system';
import { FaClock, FaShieldAlt, FaFileContract, FaFlag } from 'react-icons/fa';
import styles from './styles.module.scss';
import { Logo } from '@/components/logo';
import { FaultyTerminal } from '@/components/faulty-terminal';

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <ThemeToggle className={styles.themeToggle} />

        <div className={styles.logoContainer}>
          <Logo />
        </div>

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
            Turn Phone Pics into <br /> Craveable Menu Photos
          </Heading>
          <p>
            Perfect crops for Uber Eats, DoorDash, Grubhub, Instagram & Google.
            No contract. Money-back guarantee.
          </p>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <Button variant="primary" size="large">
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

      <FaultyTerminal
        scale={3}
        timeScale={1}
        scanlineIntensity={1}
        curvature={0.2}
        tint="#cbd4c6"
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={false}
        brightness={0.1}
        background={theme === 'light' ? '#cbd4c6' : '#181914'}
      />
    </section>
  );
};
