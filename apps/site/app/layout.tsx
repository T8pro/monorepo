import { ThemeProvider } from '@t8pro/design-system';
import type { Metadata } from 'next';
import { Geist_Mono, Montserrat } from 'next/font/google';
import '@t8pro/design-system/styles';
import localFont from 'next/font/local';
import { TargetCursor } from '@/components/gsap/target-cursor';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const jetBrainsMono = Geist_Mono({
  variable: '--jet-brains-mono',
  subsets: ['latin'],
});

const materialSymbols = localFont({
  src: './fonts/material-symbols-rounded.woff2',
  variable: '--font-material-symbols',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'T8 Pro - Creative Solutions for Ambitious Businesses',
  description:
    'Empowering businesses with innovative solutions that drive growth and success. From branding and web development to AI and automation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${jetBrainsMono.variable} ${materialSymbols.variable}`}
        style={{ backgroundColor: 'var(--color-secondary-invert)' }}
      >
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
