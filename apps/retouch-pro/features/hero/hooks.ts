import { useTheme } from '@t8pro/design-system';
import type { HeroContent, TerminalConfig, UseHeroReturn } from './types';
import { DEFAULT_HERO_CONTENT, TRUST_BADGES } from './constants';
import { splitTitle } from './utils';

/**
 * Custom hook for Hero component logic
 * @param customContent - Optional custom content to override defaults
 * @returns Hero data and configuration
 */
export const useHero = (
  customContent: Partial<HeroContent> = {},
): UseHeroReturn => {
  const { theme } = useTheme();

  const content: HeroContent = { ...DEFAULT_HERO_CONTENT, ...customContent };
  const trustBadges = TRUST_BADGES;

  const terminalConfig: TerminalConfig = {
    scale: 3,
    timeScale: 1,
    scanlineIntensity: 1,
    curvature: 0.2,
    tint: theme === 'light' ? '#181914' : '#cbd4c6',
    mouseReact: true,
    mouseStrength: 1,
    pageLoadAnimation: false,
    brightness: 0.4,
    background: theme === 'light' ? '#cbd4c6' : '#181914',
  };

  return {
    content,
    trustBadges,
    terminalConfig,
    theme,
    splitTitle,
  };
};
