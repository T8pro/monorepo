'use client';

import { Button, Icon, Text } from '@t8pro/design-system';
import { DEFAULT_FOOTER_CONTENT, TRUST_BADGES } from './constants';
import styles from './styles.module.scss';
import type { FooterProps, TrustBadge } from './types';

export const Footer = (props: FooterProps = {}) => {
  const {
    primaryButtonText = DEFAULT_FOOTER_CONTENT.primaryButtonText,
    secondaryButtonText = DEFAULT_FOOTER_CONTENT.secondaryButtonText,
    businessHours = DEFAULT_FOOTER_CONTENT.businessHours,
    trustBadges = TRUST_BADGES,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
  } = props;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divider} />

        <div className={styles.buttonSection}>
          <div className={styles.buttonGroup}>
            <Button
              variant="1"
              size="medium"
              iconLeft="upload"
              className={styles.primaryButton}
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
            </Button>

            <Button
              variant="4"
              style="outline"
              size="medium"
              iconLeft="download"
              className={styles.secondaryButton}
              onClick={onSecondaryButtonClick}
            >
              {secondaryButtonText}
            </Button>
          </div>

          <Text className={styles.businessHours}>{businessHours}</Text>
        </div>

        <div className={styles.trustBadges}>
          {trustBadges.map((badge: TrustBadge, index: number) => (
            <div key={index} className={styles.badge}>
              <Icon name={badge.icon} size={24} className={styles.badgeIcon} />
              <Text className={styles.badgeText}>{badge.text}</Text>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
