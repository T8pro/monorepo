import { Button, Icon, Text } from '@t8pro/design-system';
import Link from 'next/link';
import { DEFAULT_FOOTER_CONTENT, TRUST_BADGES } from './constants';
import styles from './styles.module.scss';
import type { FooterProps, TrustBadge } from './types';

export const Footer = (props: FooterProps = {}) => {
  const {
    businessHours = DEFAULT_FOOTER_CONTENT.businessHours,
    trustBadges = TRUST_BADGES,
  } = props;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divider} />

        <div className={styles.buttonGroup}>
          <Link href="https://wa.me/+17723071422" target="_blank">
            <Button variant="1" size="medium" iconLeft="chat">
              Chat on whatsapp
            </Button>
          </Link>

          <Link href="mailto:contact@t8pro.us" target="_blank">
            <Button variant="4" style="outline" size="medium" iconLeft="mail">
              Send email
            </Button>
          </Link>
        </div>

        <Text className={styles.businessHours}>{businessHours}</Text>

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
