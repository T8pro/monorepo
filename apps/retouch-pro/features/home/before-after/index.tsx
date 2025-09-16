'use client';

import { Heading, BeforeAfterSlider, Text } from '@t8pro/design-system';
import { BEFORE_AFTER_ITEMS } from './constants';
import styles from './styles.module.scss';

export const BeforeAfter = () => {
  return (
    <section id="before-after" className={styles.beforeAfter}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="4xl"
          weight="black"
          color="secondary"
          align="center"
          marginBottom="3xl"
        >
          See the Difference
        </Heading>

        <div className={styles.grid}>
          {BEFORE_AFTER_ITEMS.map((item, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              beforeLabel={item.beforeLabel}
              afterLabel={item.afterLabel}
              delimiterColor="var(--color-white)"
              currentPercentPosition={50}
              withResizeFeel={true}
              feelsOnlyTheDelimiter={false}
            />
          ))}
        </div>
        <div className={styles.description}>
          <Text color="primary">
            What changed?{' '}
            <span className={styles.highlight}>
              Lighting • Color • Crop • Composition • Thumbnail clarity
            </span>
          </Text>
        </div>
      </div>
    </section>
  );
};
