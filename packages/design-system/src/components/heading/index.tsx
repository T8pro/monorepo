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
import { clsx } from 'clsx';

export interface HeadingProps {
  /**
   * The heading level (h1, h2, h3, h4, h5, h6)
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * The visual size variant
   */
  size?: HeadingSize;
  /**
   * The font weight
   */
  weight?: HeadingWeight;
  /**
   * The text color
   */
  color?: HeadingColor;
  /**
   * Text alignment
   */
  align?: HeadingAlign;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * The heading content
   */
  children: React.ReactNode;
  /**
   * Whether to apply uppercase transformation
   */
  uppercase?: boolean;
  /**
   * Whether to apply italic style
   */
  italic?: boolean;
  /**
   * Letter spacing
   */
  letterSpacing?: HeadingLetterSpacing;
  /**
   * Line height
   */
  lineHeight?: HeadingLineHeight;
  /**
   * Margin bottom
   */
  marginBottom?: HeadingMarginBottom;
}

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
