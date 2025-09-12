import type { NavigationItem } from './types';

export class HeaderService {
  /**
   * Smooth scroll to a section with offset for fixed header
   */
  static scrollToSection(href: string, headerHeight: number = 80): void {
    const element = document.querySelector(href);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  /**
   * Handle navigation click with smooth scroll
   */
  static handleNavigationClick(
    item: NavigationItem,
    onCloseMenu?: () => void,
  ): void {
    if (item.external) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (item.href.startsWith('#')) {
      this.scrollToSection(item.href);
      onCloseMenu?.();
    } else {
      window.location.href = item.href;
    }
  }

  /**
   * Get current viewport width
   */
  static getViewportWidth(): number {
    return window.innerWidth;
  }

  /**
   * Check if device is mobile
   */
  static isMobile(): boolean {
    return this.getViewportWidth() < 768;
  }

  /**
   * Check if device is tablet
   */
  static isTablet(): boolean {
    const width = this.getViewportWidth();
    return width >= 768 && width < 1024;
  }

  /**
   * Check if device is desktop
   */
  static isDesktop(): boolean {
    return this.getViewportWidth() >= 1024;
  }

  /**
   * Debounce function for performance optimization
   */
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  /**
   * Throttle function for scroll events
   */
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number,
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
}
