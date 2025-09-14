import { clsx } from 'clsx';
import { forwardRef } from 'react';
import styles from './styles.module.scss';
import type { InputProps } from './types.js';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      size = 'medium',
      variant = 'default',
      fullWidth = false,
      className,
      error,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const sizeClass = `size-${size}` as keyof typeof styles;
    const variantClass = `variant-${variant}` as keyof typeof styles;

    const classes = clsx(
      styles.input,
      styles[sizeClass],
      styles[variantClass],
      fullWidth && styles.fullWidth,
      error && styles.error,
      disabled && styles.disabled,
      className,
    );

    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={classes}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
