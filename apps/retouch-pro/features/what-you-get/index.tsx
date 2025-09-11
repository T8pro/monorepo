import { Heading, Text } from '@t8pro/design-system';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './styles.module.scss';

const features = [
  {
    title: 'Enhanced photos ready for all platforms',
    description:
      'Uber Eats, DoorDash, Grubhub, Instagram, Google Business Profile',
  },
  {
    title: 'AI-driven enhancement with human quality check',
    description: 'Perfect balance of technology and expert human touch',
  },
  {
    title: 'Complete photo enhancement package',
    description:
      'Brightness/contrast, sharpness, color correction, background cleanup',
  },
  {
    title: 'Platform-specific crops',
    description: '1:1, 4:5, 9:16 as needed for each delivery platform',
  },
  {
    title: '24-hour delivery',
    description: 'Fast turnaround, no waiting',
  },
  {
    title: 'Quick deployment guide',
    description: 'Easy instructions for every platform',
  },
  {
    title: 'Full ownership rights',
    description: 'You retain all rights to your enhanced images',
  },
  {
    title: 'Money-back guarantee',
    description:
      'If you are unhappy for any reason, get a full refund within 14 days',
  },
];

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
          {features.map((feature, index) => (
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
