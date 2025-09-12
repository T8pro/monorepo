import { PhotoProvider } from '@/contexts/photos-upload/context';
import { ThemeProvider } from '@t8pro/design-system';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <PhotoProvider> {children}</PhotoProvider>
    </ThemeProvider>
  );
};
