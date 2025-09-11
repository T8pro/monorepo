import type { HeroContent, TrustBadge } from './types';

export const DEFAULT_HERO_CONTENT: HeroContent = {
  title:
    'Turn Your Phone Photos Into Professional Menu Images That Drive More Orders',
  subtitle:
    'Stop losing customers to blurry, unappetizing photos. Our AI-enhanced editing turns your smartphone shots into professional food photography that increases orders by 35%—guaranteed.',
  ctaText: 'GET MY PHOTOS FIXED NOW - $60',
  ctaSubtext: 'Ready in Just 48 Hours',
  secondaryCtaText: 'See Dramatic Before/After Results →',
  whatsappButtonText: 'Chat on WhatsApp',
  businessHours: 'Business hours: Mon-Fri 9am-6pm EST',
};

export const TRUST_BADGES: TrustBadge[] = [
  {
    icon: 'FaClock',
    text: '48-Hour Delivery',
    color: 'var(--color-primary)',
  },
  {
    icon: 'FaShieldAlt',
    text: 'Money-Back Guarantee',
    color: 'var(--color-success-dark)',
  },
  {
    icon: 'FaStore',
    text: '2,847+ Restaurants Served',
    color: '#9333ea',
  },
  {
    icon: 'FaFlag',
    text: 'US-Based Team',
    color: 'var(--color-error-dark)',
  },
];
