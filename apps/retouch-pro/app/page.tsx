import { Metadata } from 'next';
import { BeforeAfter } from '@/features/home/before-after';
import { Ebook } from '@/features/home/ebook';
import { Hero } from '@/features/home/hero';

export const metadata: Metadata = {
  title: '24-Hour Menu Visual Upgrade - Landing Page (US)',
  description:
    'AI + human touch. Pixel-perfect crops for Uber Eats, DoorDash, Grubhub, and Instagram. Zero contract. Money-back guarantee.',
};

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <BeforeAfter />
      <Ebook imageUrl="/ebook.png" />
    </main>
  );
}
