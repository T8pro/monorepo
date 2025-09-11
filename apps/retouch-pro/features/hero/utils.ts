// Utility functions for Hero feature

/**
 * Splits a title into two parts for better line breaking
 * @param title - The title string to split
 * @returns Object with firstPart and secondPart
 */
export const splitTitle = (
  title: string,
): { firstPart: string; secondPart: string } => {
  const words = title.split(' ');
  const breakPoint = words.length - 3;

  return {
    firstPart: words.slice(0, breakPoint).join(' '),
    secondPart: words.slice(breakPoint).join(' '),
  };
};

import { FaClock, FaShieldAlt, FaFileContract, FaFlag } from 'react-icons/fa';

/**
 * Maps icon string names to actual React components
 * @param iconName - String name of the icon
 * @returns React component or null
 */
export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'FaClock':
      return FaClock;
    case 'FaShieldAlt':
      return FaShieldAlt;
    case 'FaFileContract':
      return FaFileContract;
    case 'FaFlag':
      return FaFlag;
    default:
      return null;
  }
};
