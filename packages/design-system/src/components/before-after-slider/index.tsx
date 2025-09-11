import React, { useRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';

export interface BeforeAfterSliderProps {
  beforeImage: {
    imageUrl: string;
    alt?: string;
  };
  afterImage: {
    imageUrl: string;
    alt?: string;
  };
  beforeLabel?: string;
  afterLabel?: string;
  delimiterColor?: string;
  currentPercentPosition?: number;
  className?: string;
  withResizeFeel?: boolean;
  onReady?: () => void;
  onVisible?: () => void;
  onChangePercentPosition?: (newPosition: number) => void;
  feelsOnlyTheDelimiter?: boolean;
  delimiterIconStyles?: React.CSSProperties;
  onChangeMode?: (newMode: 'move' | 'default') => void;
}

export const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  delimiterColor = '#fff',
  currentPercentPosition = 50,
  className,
  onChangePercentPosition,
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(currentPercentPosition);

  useEffect(() => {
    const container = containerRef.current;
    const before = beforeRef.current;
    const handle = handleRef.current;

    if (!container || !before || !handle) return;

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    // Mouse events
    handle.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Touch events
    handle.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      handle.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      handle.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onChangePercentPosition]);

  useEffect(() => {
    const before = beforeRef.current;
    const handle = handleRef.current;

    if (!before || !handle) return;

    before.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
    handle.style.left = `${position}%`;
  }, [position]);

  // Handle mouse move and touch move with isDragging state
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      const before = beforeRef.current;
      const handle = handleRef.current;

      if (!container || !before || !handle) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

      setPosition(percentage);
      before.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      handle.style.left = `${percentage}%`;

      onChangePercentPosition?.(percentage);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const container = containerRef.current;
      const before = beforeRef.current;
      const handle = handleRef.current;

      if (!container || !before || !handle || !e.touches[0]) return;

      const rect = container.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

      setPosition(percentage);
      before.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      handle.style.left = `${percentage}%`;

      onChangePercentPosition?.(percentage);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, onChangePercentPosition]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className || ''}`}
    >
      <div className={styles.afterImage}>
        <img src={afterImage.imageUrl} alt={afterImage.alt} />
      </div>
      <div ref={beforeRef} className={styles.beforeImage}>
        <img src={beforeImage.imageUrl} alt={beforeImage.alt} />
      </div>
      <div
        ref={handleRef}
        className={styles.handle}
        style={{ backgroundColor: delimiterColor }}
      >
        <div className={styles.handleIcon} />
      </div>
      <div className={styles.labels}>
        <div className={styles.label}>{beforeLabel}</div>
        <div className={styles.label}>{afterLabel}</div>
      </div>
    </div>
  );
};
