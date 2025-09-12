export interface HeaderProps {
  className?: string;
  variant?: 'default' | 'transparent' | 'solid';
  showLogo?: boolean;
  showNavigation?: boolean;
  showCTA?: boolean;
  sticky?: boolean;
  theme?: 'light' | 'dark' | 'auto';
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}

export interface HeaderState {
  isMenuOpen: boolean;
  isScrolled: boolean;
  activeSection: string | null;
}

export interface HeaderActions {
  toggleMenu: () => void;
  closeMenu: () => void;
  setActiveSection: (section: string | null) => void;
}

export interface UseHeaderReturn extends HeaderState, HeaderActions {
  navigationItems: NavigationItem[];
  ctaText: string;
  ctaHref: string;
}
