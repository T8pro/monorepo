'use client';

import { useState, useEffect, useCallback } from 'react';
import { NAVIGATION_ITEMS, CTA_CONFIG } from './constants';
import type { UseHeaderReturn, HeaderState } from './types';

export const useHeader = (): UseHeaderReturn => {
  const [state, setState] = useState<HeaderState>({
    isMenuOpen: false,
    isScrolled: false,
    activeSection: null,
  });

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setState(prev => ({ ...prev, isScrolled }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section visibility for active navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setState(prev => ({ ...prev, activeSection: sectionId }));
          }
        });
      },
      { threshold: 0.3 },
    );

    // Observe all sections
    NAVIGATION_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && state.isMenuOpen) {
        setState(prev => ({ ...prev, isMenuOpen: false }));
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [state.isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (state.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [state.isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
  }, []);

  const closeMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMenuOpen: false }));
  }, []);

  const setActiveSection = useCallback((section: string | null) => {
    setState(prev => ({ ...prev, activeSection: section }));
  }, []);

  return {
    ...state,
    toggleMenu,
    closeMenu,
    setActiveSection,
    navigationItems: NAVIGATION_ITEMS,
    ctaText: CTA_CONFIG.text,
    ctaHref: CTA_CONFIG.href,
  };
};
