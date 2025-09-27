'use client';

import { Button, Icon, Heading, Text, IconName } from '@t8pro/design-system';
import Link from 'next/link';
import { pricingCards } from './constants';
import styles from './styles.module.scss';
import type { PricingProps } from './types';

export const Pricing = ({ title = 'HOW PRICING WORKS' }: PricingProps = {}) => {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <Heading as="h2" className={styles.title}>
          {title}
        </Heading>

        <div className={styles.cardsContainer}>
          {pricingCards.map(card => (
            <div
              key={card.id}
              className={`${styles.card} ${card.featured ? styles.featured : ''}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.badge}>
                  <Icon
                    name={card.icon as IconName}
                    size={24}
                    className={styles.badgeIcon}
                  />
                </div>
                <Text className={styles.cardTitle}>{card.title}</Text>
                <Text className={styles.price}>{card.price}</Text>
                {card.pricePerPhoto && (
                  <div className={styles.priceDetails}>
                    <Text className={styles.pricePerPhoto}>
                      {card.pricePerPhoto}
                    </Text>
                    <Text className={styles.photoCount}>{card.photoCount}</Text>
                  </div>
                )}
              </div>

              <div className={styles.cardContent}>
                {card.description && (
                  <Text className={styles.description}>{card.description}</Text>
                )}
                <ul className={styles.featuresList}>
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <Text className={styles.featureText}>{feature}</Text>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/upload">
                <Button
                  variant="1"
                  size="medium"
                  iconLeft="redeem"
                  fullWidth
                  className={styles.cardButton}
                >
                  {card.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.freeTrialSection}>
          <div className={styles.freeTrialContent}>
            <Text className={styles.freeTrialText}>
              Not confident in our product yet? Try it for free. Send us 1 image
              and test it now!
            </Text>

            <Link href="/upload-free">
              <Button
                variant="1"
                size="large"
                iconLeft="image"
                className={styles.freeTrialButton}
              >
                Test free 1 image
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
