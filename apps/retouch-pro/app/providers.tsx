'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ThemeProvider } from '@t8pro/design-system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { PhotoProvider } from '@/features/upload-images/context';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Elements stripe={stripePromise}>
          <PhotoProvider>
            {children}
            <ToastContainer />
          </PhotoProvider>
        </Elements>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
