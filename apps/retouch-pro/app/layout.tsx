import type { Metadata } from 'next';
import { Geist_Mono, Montserrat } from 'next/font/google';
import '@t8pro/design-system/styles';

const montserrat = Montserrat({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: '48-Hour Menu Visual Upgrade - Landing Page (US)',
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />
      </head>
      <body className={montserrat.variable + ' ' + geistMono.variable}>
        {children}
      </body>
    </html>
  );
}
