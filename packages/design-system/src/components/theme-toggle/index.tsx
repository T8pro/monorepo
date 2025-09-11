import { useMemo } from 'react';
import { HiSun, HiMoon, HiComputerDesktop } from 'react-icons/hi2';
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

  const getIcon = () => {
    if (theme === 'system') return <HiComputerDesktop />;
    return resolvedTheme === 'dark' ? <HiMoon /> : <HiSun />;
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
