import { Footer, StickyCTA } from '@t8pro/design-system';
import { BeforeAfter } from '@/features/before-after';
import { FAQ } from '@/features/faq';
import { Hero } from '@/features/hero';
import { HowItWorks } from '@/features/how-it-works';
import { LeadMagnet } from '@/features/lead-magnet';
import { Plans } from '@/features/plans';
import { SocialProof } from '@/features/social-proof';
import { Upload } from '@/features/upload';
import { WhatYouGet } from '@/features/what-you-get';

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <SocialProof />
      <BeforeAfter />
      <HowItWorks />
      <WhatYouGet />
      <Plans />
      <Upload />
      <FAQ />
      <LeadMagnet />
      <Footer />
      <StickyCTA />
    </main>
  );
}
