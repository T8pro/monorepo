import { IconName } from '@t8pro/design-system';

export type FooterProps = {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  businessHours?: string;
  trustBadges?: TrustBadge[];
};

export type TrustBadge = {
  icon: IconName;
  text: string;
  color?: string;
};
