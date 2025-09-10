import Image from 'next/image';
import styles from './styles.module.scss';

export interface LogoProps {
  variant?: 'header' | 'footer';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Logo = ({
  variant = 'header',
  size = 'medium',
  className,
}: LogoProps) => {
  const getLogoSrc = () => {
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

  const { width, height } = getDimensions();
  const classes = [styles.logo, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <Image
      src={getLogoSrc()}
      alt="T8 Pro"
      width={width}
      height={height}
      className={classes}
      priority
    />
  );
};
