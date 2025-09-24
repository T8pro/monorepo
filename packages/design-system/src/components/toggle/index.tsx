import { clsx } from 'clsx';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useState,
} from 'react';
import styles from './styles.module.scss';
import type { ToggleProps } from './types.js';

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      id,
      name,
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

    const isControlled = typeof checked === 'boolean';
    const [internalChecked, setInternalChecked] = useState(
      checked ?? Boolean(defaultChecked),
    );

    useEffect(() => {
      if (isControlled) setInternalChecked(Boolean(checked));
    }, [isControlled, checked]);

    const handleChange = useCallback<
      React.ChangeEventHandler<HTMLInputElement>
    >(
      event => {
        const newChecked = event.target.checked;
        if (!isControlled) setInternalChecked(newChecked);
        onChange?.(newChecked, event);
      },
      [isControlled, onChange],
    );

    return (
      <label
        className={clsx(
          styles.toggle,
          styles[`size-${size}`],
          disabled && styles.disabled,
          className,
        )}
        htmlFor={inputId}
      >
        <input
          id={inputId}
          ref={ref}
          type="checkbox"
          role="switch"
          aria-checked={internalChecked}
          name={name}
          className={styles.input}
          disabled={disabled}
          checked={internalChecked}
          onChange={handleChange}
          {...rest}
        />
        <span className={styles.track} aria-hidden>
          <span className={styles.thumb} />
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

Toggle.displayName = 'Toggle';

export type { ToggleProps } from './types.js';
