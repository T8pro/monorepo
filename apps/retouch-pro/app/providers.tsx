'use client';

import { ThemeProvider } from '@t8pro/design-system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { PhotoProvider } from '@/features/upload-images/context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <PhotoProvider>{children}</PhotoProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
