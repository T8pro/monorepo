import { Heading } from '@t8pro/design-system';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './styles.module.scss';

const features = [
  {
    title: 'Enhanced photos ready for all platforms',
    description:
      'Uber Eats, DoorDash, Grubhub, Instagram, Google Business Profile',
  },
  {
    title: 'Platform-specific crops',
    description: '1:1, 4:5, 9:16 as needed',
  },
  {
    title: '24-hour delivery',
    description: 'Fast turnaround, no waiting',
  },
  {
    title: 'Quick deployment guide',
    description: 'Easy instructions for every platform',
  },
];

export const WhatYouGet = () => {
  return (
    <section className={styles.whatYouGet}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="4xl"
          weight="bold"
          color="secondary"
          align="center"
          marginBottom="3xl"
        >
          What You Get
        </Heading>
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
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
