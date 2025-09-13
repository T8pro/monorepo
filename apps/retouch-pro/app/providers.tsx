'use client';

import { ThemeProvider } from '@t8pro/design-system';
import { PhotoProvider } from '@/contexts/photos-upload/context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <PhotoProvider> {children}</PhotoProvider>
    </ThemeProvider>
  );
};
