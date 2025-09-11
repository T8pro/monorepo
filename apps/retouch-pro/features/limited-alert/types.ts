// Limited Alert feature types and interfaces

export interface LimitedAlertProps {
  spotsRemaining?: number;
  totalSpots?: number;
  ctaText?: string;
}

export interface Guarantee {
  icon: React.ReactNode;
  title: string;
  description: string;
}

