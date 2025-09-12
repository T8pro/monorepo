export type FooterProps = {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  businessHours?: string;
  trustBadges?: TrustBadge[];
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
};

export type TrustBadge = {
  icon: string;
  text: string;
  color?: string;
};
