import { BeforeAfter } from '@/features/before-after';
import { Hero } from '@/features/hero';
import { Header } from '@/components/header';
import { Ebook } from '@/features/ebook';
import { Footer } from '@/features/footer';

export default function Home() {
  return (
    <main id="home">
      <Header />
      <Hero />
      <BeforeAfter />
      <Ebook />
      <Footer />
    </main>
  );
}
