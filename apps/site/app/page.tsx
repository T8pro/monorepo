import { Footer, Header } from '@t8pro/design-system';
import { Hero } from '@/features/hero';
import { Process } from '@/features/process';
import { Services } from '@/features/services';

export default function Home() {
  return (
    <main id="home">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Footer />
    </main>
  );
}
