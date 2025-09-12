import type { EbookButton } from './types';

export const DEFAULT_EBOOK_CONTENT = {
  title: 'Tenha conhecimento de como as fotos podem melhorar suas vendas',
  subtitle: 'Faça o download GRÁTIS E-book',
  imageAlt: 'E-book sobre fotos para vendas',
};

export const EBOOK_BUTTONS: EbookButton[] = [
  {
    id: 'download-pdf',
    text: 'Download PDF',
    variant: 'outline',
    icon: 'download',
  },
  {
    id: 'download-epub',
    text: 'Download EPUB',
    variant: 'outline',
    icon: 'download',
  },
  {
    id: 'download-now',
    text: 'Baixar Agora',
    variant: 'primary',
    icon: 'download',
  },
];
