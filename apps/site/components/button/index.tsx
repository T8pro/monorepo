import styles from './styles.module.scss';
import type { ButtonProps } from './types';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) => {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes + ' cursorTarget'} {...props}>
      {iconLeft ? <span className={styles.iconLeft}>{iconLeft}</span> : null}
      <span className={styles.label}>{children}</span>
      {iconRight ? <span className={styles.iconRight}>{iconRight}</span> : null}
    </button>
  );
};
