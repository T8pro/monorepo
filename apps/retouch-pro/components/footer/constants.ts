import type { TrustBadge } from './types';

export const DEFAULT_FOOTER_CONTENT = {
  primaryButtonText: 'Be Pro',
  secondaryButtonText: 'Be Pro',
  businessHours: 'Business hours: Mon-Fri 9am-6pm EST',
};

export const TRUST_BADGES: TrustBadge[] = [
  {
    icon: 'schedule',
    text: '24-Hour Delivery',
    color: '#67a15a',
  },
  {
    icon: 'security',
    text: 'Money-Back Guarantee',
    color: '#67a15a',
  },
  {
    icon: 'store',
    text: '2,847+ Restaurants Served',
    color: '#67a15a',
  },
  {
    icon: 'flag',
    text: 'US-Based Team',
    color: '#67a15a',
  },
];
