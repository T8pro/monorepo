import type { NavigationItem } from './types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'features',
    label: 'Features',
    href: '#features',
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '#pricing',
  },
  {
    id: 'process',
    label: 'Process',
    href: '#process',
  },
  {
    id: 'faq',
    label: 'FAQ',
    href: '#faq',
  },
];

export const CTA_CONFIG = {
  text: 'Get Started',
  href: '#upload',
  variant: 'primary' as const,
} as const;

export const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1280px',
} as const;

export const HEADER_HEIGHT = {
  mobile: '64px',
  desktop: '80px',
} as const;

export const Z_INDEX = {
  header: 1000,
  overlay: 999,
} as const;
