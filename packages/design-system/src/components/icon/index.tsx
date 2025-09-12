import styles from './styles.module.scss';
import { IconProps } from './types.js';

export const Icon = ({
  name,
  className = '',
  filled = false,
  size = 24,
  style,
}: IconProps) => {
  const isFilled = filled ? styles.filled : '';

  return (
    <span
      className={`${styles.base} ${isFilled} ${className}`}
      style={{
        fontSize: typeof size === 'number' ? `${size}px` : size,
        ...style,
      }}
    >
      {name}
    </span>
  );
};
