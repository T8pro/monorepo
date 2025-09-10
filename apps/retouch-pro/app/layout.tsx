import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
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
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
