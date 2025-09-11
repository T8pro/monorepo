import { clsx } from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import type {
  HeadingSize,
  HeadingWeight,
  HeadingColor,
  HeadingAlign,
  HeadingLetterSpacing,
  HeadingLineHeight,
  HeadingMarginBottom,
} from './types.js';

export type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: HeadingSize;
  weight?: HeadingWeight;
  color?: HeadingColor;
  align?: HeadingAlign;
  className?: string;
  children: React.ReactNode;
  uppercase?: boolean;
  italic?: boolean;
  letterSpacing?: HeadingLetterSpacing;
  lineHeight?: HeadingLineHeight;
  marginBottom?: HeadingMarginBottom;
};

export const Heading = ({
  as: Component = 'h2',
  size = 'lg',
  weight = 'bold',
  color = 'gray-900',
  align = 'left',
  className,
  children,
  uppercase = false,
  italic = false,
  letterSpacing = 'normal',
  lineHeight = 'normal',
  marginBottom = 'base',
}: HeadingProps) => {
  return (
    <Component
      className={clsx(
        styles.heading,
        styles[`size-${size}`],
        styles[`weight-${weight}`],
        styles[`color-${color}`],
        styles[`align-${align}`],
        styles[`letterSpacing-${letterSpacing}`],
        styles[`lineHeight-${lineHeight}`],
        styles[`marginBottom-${marginBottom}`],
        {
          [styles.uppercase as string]: uppercase,
          [styles.italic as string]: italic,
        },
        className,
      )}
    >
      {children}
    </Component>
  );
};

// Re-export types
export type {
  HeadingSize,
  HeadingWeight,
  HeadingColor,
  HeadingAlign,
  HeadingLetterSpacing,
  HeadingLineHeight,
  HeadingMarginBottom,
} from './types.js';
