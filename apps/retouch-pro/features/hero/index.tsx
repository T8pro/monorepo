'use client';

import { useState } from 'react';
import { Button } from '@t8pro/design-system';
import { useHeroSwitcher } from './hooks';
import styles from './styles.module.scss';

export const Hero = () => {
  const { activeVersion, switchVersion } = useHeroSwitcher();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img
            src="https://page.gensparksite.com/v1/base64_upload/8053203880ae33bce40ff119936ccd20add"
            alt="TG Logo"
            className={styles.logo}
          />
        </div>

        {/* Hero Switcher */}
        <div className={styles.switcherContainer}>
          <div className={styles.switcher}>
            <button
              onClick={() => switchVersion('A')}
              className={`${styles.switcherButton} ${
                activeVersion === 'A' ? styles.active : ''
              }`}
            >
              Version A
            </button>
            <button
              onClick={() => switchVersion('B')}
              className={`${styles.switcherButton} ${
                activeVersion === 'B' ? styles.active : ''
              }`}
            >
              Version B
            </button>
          </div>
        </div>

        {/* Hero A (Direct Response) */}
        <div
          className={`${styles.heroContent} ${activeVersion === 'A' ? styles.show : styles.hide}`}
        >
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

        {/* Hero B (Proof-first) */}
        <div
          className={`${styles.heroContent} ${activeVersion === 'B' ? styles.show : styles.hide}`}
        >
          <h1 className={styles.title}>
            See the Before/After That Makes People Click
          </h1>
          <p className={styles.subtitle}>
            Real dishes. Real phone photos. We enhance, crop for every platform,
            and hand back files you can deploy today.
          </p>
          <div className={styles.buttonGroup}>
            <Button variant="primary" size="large">
              See Before/After
            </Button>
            <Button variant="outline" size="large">
              <i className="fas fa-upload" />
              Upload Photos & Start
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
