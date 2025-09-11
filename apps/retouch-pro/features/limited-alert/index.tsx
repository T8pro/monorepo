'use client';

import { Heading, Text } from '@t8pro/design-system';
import { FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import styles from './styles.module.scss';

const guarantees = [
  {
    icon: <FaShieldAlt />,
    title: '30-Day Money-Back Guarantee',
    description: "If your enhanced photos don't increase orders, full refund.",
  },
  {
    icon: <FaCheckCircle />,
    title: 'Authenticity Promise',
    description:
      'We enhance your real dishes—no fake ingredients or misleading images.',
  },
  {
    icon: <FaClock />,
    title: 'Delivery Guarantee',
    description: 'Photos ready in 48 hours or your next order is free.',
  },
];

export const LimitedAlert = () => {
  return (
    <section className={styles.limitedAlert}>
      <div className={styles.container}>
        <div className={styles.guaranteesSection}>
          <Heading
            as="h3"
            size="xl"
            weight="bold"
            color="secondary"
            align="center"
            className={styles.guaranteesTitle}
          >
            Zero Risk. Maximum Reward.
          </Heading>

          <div className={styles.guaranteesGrid}>
            {guarantees.map((guarantee, index) => (
              <div key={index} className={styles.guaranteeCard}>
                <div className={styles.guaranteeIcon}>{guarantee.icon}</div>
                <div className={styles.guaranteeContent}>
                  <Heading
                    as="h4"
                    size="lg"
                    weight="semibold"
                    color="secondary"
                    className={styles.guaranteeTitle}
                  >
                    {guarantee.title}
                  </Heading>
                  <Text className={styles.guaranteeDescription}>
                    {guarantee.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
