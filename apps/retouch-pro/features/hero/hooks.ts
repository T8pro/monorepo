'use client';

import { useState } from 'react';

export type HeroVersion = 'A' | 'B';

export const useHeroSwitcher = () => {
  const [activeVersion, setActiveVersion] = useState<HeroVersion>('A');

  const switchVersion = (version: HeroVersion) => {
    setActiveVersion(version);
  };

  return {
    activeVersion,
    switchVersion,
  };
};
