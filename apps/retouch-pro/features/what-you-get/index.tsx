import { Heading, Text } from '@t8pro/design-system';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './styles.module.scss';
import { DEFAULT_FEATURES } from './constants';

export const WhatYouGet = () => {
  return (
    <section className={styles.whatYouGet}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="4xl"
          weight="black"
          color="secondary"
          align="center"
          marginBottom="lg"
        >
          What is Included in Every Order
        </Heading>
        <Text
          size="lg"
          marginBottom="3xl"
          className={styles.sectionDescription}
        >
          We combine AI-driven enhancement with experienced photo editors for
          shot-by-shot perfection. Each image is carefully checked to ensure it
          works perfectly across all delivery platforms.
        </Text>
        <div className={styles.grid}>
          {DEFAULT_FEATURES.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <FaCheckCircle className={styles.icon} />
              <div>
                <Heading
                  as="h3"
                  size="base"
                  weight="semibold"
                  color="gray-900"
                  marginBottom="sm"
                >
                  {feature.title}
                </Heading>
                <Text className={styles.featureDescription}>
                  {feature.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
