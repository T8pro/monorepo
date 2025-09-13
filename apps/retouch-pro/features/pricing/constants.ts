import type { PricingCard } from './types';

export const DEFAULT_PRICING_CONTENT = {
  title: 'HOW PRICING WORKS',
};

export const PRICING_CARDS: PricingCard[] = [
  {
    id: 'free-trial-1',
    title: 'FREE TRIAL',
    price: '$0',
    description: 'Send us 1 real photo and see how it works',
    features:
      '1 enhanced photo 48-hour turnaround Platform crops included No credit card required',
    buttonText: 'Be Pro',
  },
  {
    id: 'free-trial-2',
    title: 'FREE TRIAL',
    price: '$0',
    description: 'Send us 1 real photo and see how it works',
    features:
      '1 enhanced photo 48-hour turnaround Platform crops included No credit card required',
    buttonText: 'Be Pro',
    featured: true,
  },
  {
    id: 'free-trial-3',
    title: 'FREE TRIAL',
    price: '$0',
    description: 'Send us 1 real photo and see how it works',
    features:
      '1 enhanced photo 48-hour turnaround Platform crops included No credit card required',
    buttonText: 'Be Pro',
  },
];
