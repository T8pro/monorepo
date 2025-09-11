import { BeforeAfter } from '@/features/before-after';
import { FAQ } from '@/features/faq';
import { Hero } from '@/features/hero';
import { LimitedAlert } from '@/features/limited-alert';
import { ScienceBehindSales } from '@/features/science-behind-sales';
import { LeadMagnet } from '@/features/lead-magnet';
import { Plans } from '@/features/plans';
import { SocialProof } from '@/features/social-proof';
import { Upload } from '@/features/upload';
import { WhatYouGet } from '@/features/what-you-get';

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <BeforeAfter />
      <LimitedAlert />
      <SocialProof />
      <ScienceBehindSales />
      <WhatYouGet />
      <Plans />
      <Upload />
      <FAQ />
      <LeadMagnet />
    </main>
  );
}
