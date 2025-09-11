'use client';

import { useState } from 'react';
import { Button, Heading, Text } from '@t8pro/design-system';
import styles from './styles.module.scss';

export const LeadMagnet = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section className={styles.leadMagnet}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="3xl"
          weight="bold"
          color="white"
          align="center"
          marginBottom="base"
        >
          Not Ready Yet?
        </Heading>
        <Text className={styles.description}>
          Download the Delivery Photo Cheat Sheet (free) — and get 3 of your
          images cropped on us.
        </Text>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.emailInput}
            required
          />
          <Button type="submit" variant="secondary" size="large">
            Download Free Guide
          </Button>
        </form>
        <Text className={styles.disclaimer}>No spam. Unsubscribe anytime.</Text>
      </div>
    </section>
  );
};
