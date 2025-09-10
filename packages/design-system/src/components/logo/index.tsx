import styles from './styles.module.scss';

export interface LogoProps {
  variant?: 'header' | 'footer';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const Logo = ({
  variant = 'header',
  size = 'medium',
  className,
  src,
  alt = 'T8 Pro',
  width,
  height,
}: LogoProps) => {
  const getLogoSrc = () => {
    if (src) return src;

    switch (variant) {
      case 'header':
        return '/logo-header.svg';
      case 'footer':
        return '/logo-footer.svg';
      default:
        return '/logo-header.svg';
    }
  };

  const getDimensions = () => {
    if (width && height) return { width, height };

    switch (size) {
      case 'small':
        return { width: 58, height: 32 };
      case 'medium':
        return { width: 73, height: 40 };
      case 'large':
        return { width: 146, height: 80 };
      default:
        return { width: 73, height: 40 };
    }
  };

  const { width: finalWidth, height: finalHeight } = getDimensions();
  const classes = [styles.logo, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      src={getLogoSrc()}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      className={classes}
    />
  );
};
