import { BeforeAfter } from '@/features/home/before-after';
import { Ebook } from '@/features/home/ebook';
import { Hero } from '@/features/home/hero';

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <BeforeAfter />
      <Ebook imageUrl="/ebook.png" />
    </main>
  );
}
