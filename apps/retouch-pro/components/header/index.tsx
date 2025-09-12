'use client';

import { forwardRef } from 'react';
import { useHeader } from './hooks';
import { HeaderService } from './services';
import { Button } from '@t8pro/design-system';
import styles from './styles.module.scss';
import type { HeaderProps } from './types';

export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      variant = 'default',
      showLogo = true,
      showNavigation = true,
      showCTA = true,
      sticky = true,
      theme = 'light',
    },
    ref,
  ) => {
    const {
      isMenuOpen,
      isScrolled,
      activeSection,
      toggleMenu,
      closeMenu,
      navigationItems,
      ctaText,
      ctaHref,
    } = useHeader();

    const handleNavigationClick = (item: (typeof navigationItems)[0]) => {
      HeaderService.handleNavigationClick(item, closeMenu);
    };

    const handleCTAClick = () => {
      HeaderService.scrollToSection(ctaHref);
      closeMenu();
    };

    const headerClasses = [
      styles.header,
      styles[`header--${variant}`],
      isScrolled && styles['header--scrolled'],
      theme === 'dark' && styles['header--dark'],
      sticky && styles['header--sticky'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <>
        <header ref={ref} className={headerClasses}>
          <div className={styles.container}>
            {/* Logo */}
            {showLogo && (
              <div className={styles.logo}>
                <a
                  href="#hero"
                  className={styles.logo__link}
                  onClick={e => {
                    e.preventDefault();
                    HeaderService.scrollToSection('#hero');
                  }}
                  aria-label="Retouch Pro - Go to homepage"
                >
                  <span className={styles.logo__text}>
                    <span className={styles['logo__text--retouch']}>
                      RETOUCH
                    </span>
                    <span className={styles['logo__text--pro']}>Pro</span>
                    <span className={styles['logo__text--t3']}>T3!</span>
                  </span>
                </a>
              </div>
            )}

            {/* Desktop Navigation */}
            {showNavigation && (
              <nav className={styles.navigation} aria-label="Main navigation">
                <ul className={styles.navigation__list}>
                  {navigationItems.map(item => (
                    <li key={item.id} className={styles.navigation__item}>
                      <a
                        href={item.href}
                        className={`${styles.navigation__link} ${
                          activeSection === item.id
                            ? styles['navigation__link--active']
                            : ''
                        }`}
                        onClick={e => {
                          e.preventDefault();
                          handleNavigationClick(item);
                        }}
                        aria-current={
                          activeSection === item.id ? 'page' : undefined
                        }
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Desktop CTA */}
            {showCTA && (
              <div className={styles.cta}>
                <Button
                  variant="primary"
                  size="medium"
                  className={styles.cta__button}
                  onClick={handleCTAClick}
                >
                  {ctaText}
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`${styles.mobileMenuButton} ${
                isMenuOpen ? styles['mobileMenuButton--open'] : ''
              }`}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={styles.mobileMenuButton__icon}>
                <span className={styles.mobileMenuButton__line} />
                <span className={styles.mobileMenuButton__line} />
                <span className={styles.mobileMenuButton__line} />
              </span>
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`${styles.mobileMenuOverlay} ${
            isMenuOpen ? styles['mobileMenuOverlay--open'] : ''
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles['mobileMenu--open'] : ''
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <h2 id="mobile-menu-title" className={styles.srOnly}>
            Main navigation
          </h2>

          {showNavigation && (
            <ul className={styles.mobileMenu__list}>
              {navigationItems.map(item => (
                <li key={item.id} className={styles.mobileMenu__item}>
                  <a
                    href={item.href}
                    className={`${styles.mobileMenu__link} ${
                      activeSection === item.id
                        ? styles['mobileMenu__link--active']
                        : ''
                    }`}
                    onClick={e => {
                      e.preventDefault();
                      handleNavigationClick(item);
                    }}
                    aria-current={
                      activeSection === item.id ? 'page' : undefined
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {showCTA && (
            <div className={styles.mobileMenu__cta}>
              <Button
                variant="primary"
                size="medium"
                className={styles.cta__button}
                onClick={handleCTAClick}
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </>
    );
  },
);

Header.displayName = 'Header';
