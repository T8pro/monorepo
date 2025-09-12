import { Icon } from '../icon/index.js';
import styles from './styles.module.scss';
import type { ButtonProps } from './types.js';

export const Button = ({
  children,
  variant = '1',
  size = 'medium',
  className,
  iconLeft,
  iconRight,
  theme = 'dark',
  style = 'solid',
  ...props
}: ButtonProps) => {
  const classes = [
    styles.button,
    styles[`variant-${variant}`],
    styles[size],
    styles[`theme-${theme}`],
    styles[`${style}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes + ' cursorTarget'} {...props}>
      {iconLeft && <Icon name={iconLeft} />}
      {children && children}
      {iconRight && <Icon name={iconRight} />}
    </button>
  );
};
