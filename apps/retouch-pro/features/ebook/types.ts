import { ButtonVariant, IconName } from '@t8pro/design-system';

export type EbookProps = {
  title?: string;
  subtitle?: string;
  buttons?: EbookButton[];
  imageUrl?: string;
  imageAlt?: string;
};

export type EbookButton = {
  id: string;
  text: string;
  variant: ButtonVariant;
  icon?: IconName;
  onClick?: () => void;
};
