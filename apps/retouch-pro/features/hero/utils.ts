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
  // Split at "That Drive" for better visual balance
  const breakPoint = words.findIndex(word => word === 'That');

  if (breakPoint === -1) {
    // Fallback to original logic if "That" not found
    const fallbackBreakPoint = words.length - 3;
    return {
      firstPart: words.slice(0, fallbackBreakPoint).join(' '),
      secondPart: words.slice(fallbackBreakPoint).join(' '),
    };
  }

  return {
    firstPart: words.slice(0, breakPoint).join(' '),
    secondPart: words.slice(breakPoint).join(' '),
  };
};

/**
 * Maps icon string names to Material Symbols names
 * @param iconName - String name of the icon
 * @returns Material Symbols name or null
 */
export const getIconName = (iconName: string): string | null => {
  const iconMap: Record<string, string> = {
    FaClock: 'schedule',
    FaShieldAlt: 'security',
    FaFileContract: 'description',
    FaFlag: 'flag',
    FaStore: 'store',
  };

  return iconMap[iconName] || null;
};
