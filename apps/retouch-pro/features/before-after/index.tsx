'use client';

import { Heading, BeforeAfterSlider, Text } from '@t8pro/design-system';
import styles from './styles.module.scss';

const beforeAfterItems = [
  {
    beforeImage: {
      imageUrl: '/before-after/001-before.jpg',
      alt: 'Before - Phone photo',
    },
    afterImage: {
      imageUrl: '/before-after/001-after.jpg',
      alt: 'After - Enhanced',
    },
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
  },
  {
    beforeImage: {
      imageUrl: '/before-after/002-before.jpg',
      alt: 'Before - Dark lighting',
    },
    afterImage: {
      imageUrl: '/before-after/002-after.jpg',
      alt: 'After - Bright & clear',
    },
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
  },
  {
    beforeImage: {
      imageUrl: '/before-after/003-before.jpg',
      alt: 'Before - Poor composition',
    },
    afterImage: {
      imageUrl: '/before-after/003-after.jpg',
      alt: 'After - Perfect crop',
    },
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
  },
];

export const BeforeAfter = () => {
  return (
    <section className={styles.beforeAfter}>
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
          {beforeAfterItems.map((item, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              beforeLabel={item.beforeLabel}
              afterLabel={item.afterLabel}
              delimiterColor="#fff"
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
