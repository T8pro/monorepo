// Design tokens
import './tokens.css';

// Global styles
import './globals.css';

// Components
export { Button } from './components/button/index.js';
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
} from './components/button/types.js';

export { Card } from './components/card/index.js';
export type { CardProps } from './components/card/index.js';

export { Logo } from './components/logo/index.js';
export type { LogoProps } from './components/logo/index.js';

export { Heading } from './components/heading/index.js';
export type {
  HeadingProps,
  HeadingSize,
  HeadingWeight,
  HeadingColor,
  HeadingAlign,
  HeadingLetterSpacing,
  HeadingLineHeight,
  HeadingMarginBottom,
} from './components/heading/index.js';

export { ThemeToggle } from './components/theme-toggle/index.js';
export type { ThemeToggleProps } from './components/theme-toggle/index.js';

export { BeforeAfterSlider } from './components/before-after-slider/index.js';
export type { BeforeAfterSliderProps } from './components/before-after-slider/index.js';

export { Icon } from './components/icon/index.js';
export type { IconProps } from './components/icon/types.js';
export type { IconName } from './components/icon/types.js';

export { Text } from './components/text/index.js';
export type {
  TextProps,
  TextSize,
  TextMargin,
} from './components/text/types.js';

export { EmptyState } from './components/empty-state/index.js';
export type {
  EmptyStateProps,
  EmptyStateSize,
} from './components/empty-state/types.js';

export { Input } from './components/input/index.js';
export type {
  InputProps,
  InputSize,
  InputVariant,
} from './components/input/types.js';

// Hooks
export { useTheme, ThemeProvider, useThemeContext } from './contexts/theme.js';
