import type { Metadata } from 'next';
import { Geist_Mono, Montserrat } from 'next/font/google';
import '@t8pro/design-system/styles';
import { ThemeProvider } from '@t8pro/design-system';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: '24-Hour Menu Visual Upgrade - Landing Page (US)',
  description:
    'AI + human touch. Pixel-perfect crops for Uber Eats, DoorDash, Grubhub, and Instagram. Zero contract. Money-back guarantee.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://page.gensparksite.com/v1/base64_upload/8053203880ae33bce40ff119936ccd20add"
        />
      </head>
      <body
        className={montserrat.variable + ' ' + geistMono.variable}
        style={{ backgroundColor: 'var(--color-secondary-invert)' }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
