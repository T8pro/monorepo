'use client';

import { ThemeProvider } from '@t8pro/design-system';
import { PhotoProvider } from '@/features/upload-images/context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <PhotoProvider>{children}</PhotoProvider>
    </ThemeProvider>
  );
};
