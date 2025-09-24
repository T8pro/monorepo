'use client';

import { Heading, Icon, Text } from '@t8pro/design-system';
import Link from 'next/link';
import styles from './styles.module.scss';

const infoCards = [
  {
    icon: 'image_search',
    title: 'Explore Our Portfolio',
    highlight: 'Give us up to 48 hours',
    description:
      'Our retouch artists are working on your photo and will email you as soon as it is ready.',
  },
  {
    icon: 'mail',
    title: 'Keep an Eye on Your Inbox',
    highlight: 'Check your email',
    description:
      'We will send status updates and your download link to the email you provided.',
  },
] as const;

export const UploadFreeThankYou = () => {
  return (
    <section className={styles.thankYou}>
      <div className={styles.container}>
        <Heading as="h1" size="3xl" weight="bold" className={styles.title}>
          Thank You!
        </Heading>
        <Text size="lg" className={styles.subtitle}>
          We have received your free photo. While we perfect your image, explore
          more of what our retouching team can do for you.
        </Text>
        <div className={styles.infoGrid}>
          {infoCards.map(card => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardIcon}>
                <Icon name={card.icon} size={28} />
              </div>
              <Heading
                as="h2"
                size="lg"
                weight="semibold"
                className={styles.cardTitle}
              >
                {card.title}
              </Heading>
              <Text className={styles.cardHighlight}>{card.highlight}</Text>
              <Text size="sm" className={styles.cardDescription}>
                {card.description}
              </Text>
            </div>
          ))}
        </div>
        <div className={styles.social}>
          <Text className={styles.socialPrompt}>Follow us on social media</Text>
          <Link
            href="https://www.instagram.com/t8pro"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            <Icon name="alternate_email" size={20} />
            @t8pro
          </Link>
        </div>
      </div>
    </section>
  );
};
