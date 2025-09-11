import type { HeroContent, TrustBadge } from './types';

export const DEFAULT_HERO_CONTENT: HeroContent = {
  title: 'Turn Phone Pics into Craveable Menu Photos',
  subtitle:
    'Perfect crops for Uber Eats, DoorDash, Grubhub, Instagram & Google. No contract. Money-back guarantee.',
  ctaText: '🎁 Get 1 Photo Retouched FREE',
  ctaSubtext: 'Upload your photo → Decide if you want more.',
  whatsappButtonText: 'Chat on WhatsApp',
  businessHours: 'Business hours: Mon-Fri 9am-6pm EST',
};

export const TRUST_BADGES: TrustBadge[] = [
  {
    icon: 'FaClock',
    text: '24-Hour Turnaround',
    color: 'var(--color-primary)',
  },
  {
    icon: 'FaShieldAlt',
    text: 'Money-Back Guarantee',
    color: 'var(--color-success-dark)',
  },
  {
    icon: 'FaFileContract',
    text: 'No Contract',
    color: '#9333ea',
  },
  {
    icon: 'FaFlag',
    text: 'US-Based Remote',
    color: 'var(--color-error-dark)',
  },
];
