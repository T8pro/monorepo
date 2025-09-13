import { Button } from '../button/index.js';
import { Icon } from '../icon/index.js';
import styles from './styles.module.scss';
import type { EmptyStateProps } from './types.js';

export const EmptyState = ({
  icon = 'inbox',
  title,
  description,
  button,
  size = 'medium',
  className = '',
  children,
}: EmptyStateProps) => {
  const classes = [styles.emptyState, styles[size], className]
    .filter(Boolean)
    .join(' ');

  if (children) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <div className={classes}>
      {icon && (
        <div className={styles.icon}>
          <Icon
            name={icon}
            size={size === 'small' ? 32 : size === 'large' ? 64 : 48}
          />
        </div>
      )}

      {title && <h3 className={styles.title}>{title}</h3>}

      {description && <p className={styles.description}>{description}</p>}

      {button && (
        <div className={styles.button}>
          <Button
            onClick={button.onClick}
            variant={button.variant}
            size={button.size}
            style={button.style}
            theme={button.theme}
            iconLeft={button.iconLeft}
            iconRight={button.iconRight}
          >
            {button.text}
          </Button>
        </div>
      )}
    </div>
  );
};
