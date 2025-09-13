import type { EbookButton } from './types';

export const DEFAULT_EBOOK_CONTENT = {
  title: 'Learn how photos can improve your sales',
  subtitle: 'Download FREE E-book',
  imageAlt: 'E-book about photos for sales',
};

export const EBOOK_BUTTONS: EbookButton[] = [
  {
    id: 'download-pdf',
    text: 'Download PDF',
    variant: '3',
    icon: 'download',
  },
  {
    id: 'download-epub',
    text: 'Download EPUB',
    variant: '3',
    icon: 'download',
  },
  {
    id: 'download-now',
    text: 'Download Now',
    variant: '3',
    icon: 'download',
  },
];
