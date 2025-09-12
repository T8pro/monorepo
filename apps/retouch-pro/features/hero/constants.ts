import type { HeroContent, TrustBadge } from './types';

export const DEFAULT_HERO_CONTENT: HeroContent = {
  title:
    'Transforme suas fotos comuns em fotos profissionais. Não importa como foi tirada!',
  subtitle: '',
  ctaText: 'Selecione suas fotos',
  ctaIcon: 'FaImage',
  ctaSubtext: 'Você pode enviar até 24 fotos de uma vez',
  secondaryCtaText: 'Veja o que é possível fazer',
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
