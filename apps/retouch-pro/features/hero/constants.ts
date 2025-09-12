import type { HeroContent, TrustBadge } from './types';

export const DEFAULT_HERO_CONTENT: HeroContent = {
  title: 'Transform your common photos into professional photos.',
  subtitle: 'No matter how it was taken!',
  ctaText: 'SELECT YOUR PHOTOS',
  ctaIcon: 'FaImage',
  ctaSubtext: 'You can send up to 24 photos at once',
  secondaryCtaText: "See what's possible to do",
  whatsappButtonText: 'Chat on WhatsApp',
  businessHours: 'Business hours: Mon-Fri 9am-6pm EST',
  dragDropText: 'Drag and drop your photos here or click to select',
  maxPhotos: 24,
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
