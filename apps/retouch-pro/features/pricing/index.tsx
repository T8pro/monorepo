'use client';

import { Button, Icon, Heading, Text } from '@t8pro/design-system';
import { DEFAULT_PRICING_CONTENT, PRICING_CARDS } from './constants';
import styles from './styles.module.scss';
import type { PricingProps, PricingCard } from './types';

export const Pricing = (props: PricingProps = {}) => {
  const { title = DEFAULT_PRICING_CONTENT.title, cards = PRICING_CARDS } =
    props;

  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <Heading as="h2" className={styles.title}>
          {title}
        </Heading>

        <div className={styles.cardsContainer}>
          {cards.map((card: PricingCard, index: number) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.badge}>
                  <Icon name="star" size={24} className={styles.badgeIcon} />
                </div>
                <Text className={styles.cardTitle}>{card.title}</Text>
                <Text className={styles.price}>{card.price}</Text>
              </div>

              <div className={styles.cardContent}>
                <Text className={styles.description}>{card.description}</Text>
                <Text className={styles.features}>{card.features}</Text>
              </div>

              <Button
                variant="1"
                size="medium"
                iconLeft="upload"
                className={styles.cardButton}
                onClick={card.onClick}
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
