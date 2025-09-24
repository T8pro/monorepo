import { clsx } from 'clsx';
import React, { forwardRef, useId } from 'react';
import styles from './styles.module.scss';
import type { RadioProps } from './types.js';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      name,
      value,
      checked,
      defaultChecked,
      disabled = false,
      onChange,
      size = 'medium',
      className,
      label,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <label
        className={clsx(
          styles.radio,
          styles[`size-${size}`],
          disabled && styles.disabled,
          className,
        )}
        htmlFor={inputId}
      >
        <input
          id={inputId}
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          className={styles.input}
          {...rest}
        />
        <span className={styles.indicator} aria-hidden>
          <span className={styles.dot} />
        </span>
        {label && (
          <span className={styles.label} data-slot="label">
            {label}
          </span>
        )}
      </label>
    );
  },
);

Radio.displayName = 'Radio';

export type { RadioProps } from './types.js';
