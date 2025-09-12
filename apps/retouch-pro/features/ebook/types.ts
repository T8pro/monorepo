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
  variant: 'primary' | 'outline';
  icon?: string;
  onClick?: () => void;
};
