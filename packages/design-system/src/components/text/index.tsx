import styles from './styles.module.scss';
import { TextProps } from './types.js';

export const Text = ({
  children,
  className,
  size = 'base',
  marginBottom = 'base',
  marginTop = 'base',
  marginLeft = 'base',
  marginRight = 'base',
  color = 'secondary',
  ...props
}: TextProps) => {
  const textClasses = [
    styles.paragraph,
    styles[`size-${size}`],
    styles[`marginBottom-${marginBottom}`],
    styles[`marginTop-${marginTop}`],
    styles[`marginLeft-${marginLeft}`],
    styles[`marginRight-${marginRight}`],
    className,
    styles[`color-${color}`],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <p className={textClasses} {...props}>
      {children}
    </p>
  );
};
