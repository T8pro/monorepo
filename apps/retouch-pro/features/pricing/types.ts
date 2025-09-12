export type PricingProps = {
  title?: string;
  cards?: PricingCard[];
};

export type PricingCard = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string;
  buttonText: string;
  onClick?: () => void;
  featured?: boolean;
};

