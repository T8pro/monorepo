import { useMemo } from 'react';
import { useTheme } from '../../contexts/theme.js';
import { Button } from '../button/index.js';
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

  const icon = useMemo(() => {
    if (theme === 'system') return 'computer';
    return resolvedTheme === 'dark' ? 'dark_mode' : 'light_mode';
  }, [theme, resolvedTheme]);

  const currentTheme = useMemo(() => {
    if (theme === 'system') return 'System';
    return resolvedTheme === 'dark' ? 'Dark' : 'Light';
  }, [theme, resolvedTheme]);

  return (
    <Button
      title={currentTheme}
      variant="4"
      size={size}
      onClick={toggleTheme}
      iconLeft={icon}
      className={`${styles.themeToggle} ${className || ''}`}
    />
  );
};
