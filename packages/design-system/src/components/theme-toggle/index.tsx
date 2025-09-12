import { useMemo } from 'react';
import { useTheme } from '../../contexts/theme.js';
import { Button } from '../button/index.js';
import { Icon } from '../icon/index.js';
import styles from './styles.module.scss';

export interface ThemeToggleProps {
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const ThemeToggle = ({
  size = 'medium',
  className,
}: ThemeToggleProps) => {
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'system') return <Icon name="computer" size={20} />;
    return resolvedTheme === 'dark' ? (
      <Icon name="dark_mode" size={20} />
    ) : (
      <Icon name="light_mode" size={20} />
    );
  };

  const currentTheme = useMemo(() => {
    if (theme === 'system') return 'System';
    return resolvedTheme === 'dark' ? 'Dark' : 'Light';
  }, [theme, resolvedTheme]);

  return (
    <Button
      title={currentTheme}
      variant="tertiary"
      size={size}
      onClick={toggleTheme}
      iconLeft={getIcon()}
      className={`${styles.themeToggle} ${className || ''}`}
    />
  );
};
