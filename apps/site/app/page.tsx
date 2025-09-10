import { Hero } from '@/features/hero';
import { Process } from '@/features/process';
import { Services } from '@/features/services';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <main id="home">
      <Header />
      <Hero />
      <Services />
      <Process />
    </main>
  );
}
