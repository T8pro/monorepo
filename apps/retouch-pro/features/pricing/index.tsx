'use client';

import { Button, Icon, Heading, Text, IconName } from '@t8pro/design-system';
import { pricingCards } from './constants';
import styles from './styles.module.scss';
import type { PricingProps } from './types';

export const Pricing = (props: PricingProps = {}) => {
  const { title = 'HOW PRICING WORKS', onCardClickAction } = props;

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

              <Button
                variant="1"
                size="medium"
                iconLeft="redeem"
                fullWidth
                className={styles.cardButton}
                onClick={() => onCardClickAction?.(card.id)}
              >
                {card.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
