import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { BeforeAfter } from '@/features/home/before-after';
import { Ebook } from '@/features/home/ebook';
import { Hero } from '@/features/home/hero';

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
