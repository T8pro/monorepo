'use client';

import { useEffect, useRef } from 'react';
import { Heading } from '@t8pro/design-system';
import styles from './styles.module.scss';

const beforeAfterItems = [
  {
    before: { label: 'BEFORE', description: 'Phone photo' },
    after: { label: 'AFTER', description: 'Enhanced' },
  },
  {
    before: { label: 'BEFORE', description: 'Dark lighting' },
    after: { label: 'AFTER', description: 'Bright & clear' },
  },
  {
    before: { label: 'BEFORE', description: 'Poor composition' },
    after: { label: 'AFTER', description: 'Perfect crop' },
  },
];

export const BeforeAfter = () => {
  return (
    <section className={styles.beforeAfter}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="4xl"
          weight="bold"
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
              before={item.before}
              after={item.after}
            />
          ))}
        </div>
        <div className={styles.description}>
          <p>
            What changed?{' '}
            <span className={styles.highlight}>
              Lighting • Color • Crop • Composition • Thumbnail clarity
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

const BeforeAfterSlider = ({
  before,
  after,
}: {
  before: { label: string; description: string };
  after: { label: string; description: string };
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    const handle = handleRef.current;
    const before = beforeRef.current;

    if (!slider || !handle || !before) return;

    const handleMouseDown = () => {
      isDraggingRef.current = true;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const rect = slider.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

      handle.style.left = `${percentage}%`;
      before.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    };

    handle.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      handle.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={sliderRef} className={styles.sliderContainer}>
      <div ref={beforeRef} className={styles.sliderBefore}>
        <div className={styles.sliderContent}>
          <div className={styles.label}>{before.label}</div>
          <div className={styles.description}>{before.description}</div>
        </div>
      </div>
      <div className={styles.sliderAfter}>
        <div className={styles.sliderContent}>
          <div className={styles.label}>{after.label}</div>
          <div className={styles.description}>{after.description}</div>
        </div>
      </div>
      <div ref={handleRef} className={styles.sliderHandle} />
    </div>
  );
};
