import type { Metadata } from 'next';
import { Geist_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import { TargetCursor } from '@/components/gsap/target-cursor';

const geistSans = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        {children}
      </body>
    </html>
  );
}
