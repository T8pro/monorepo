export type EbookProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  onDownloadAction?: (data: EbookFormData) => void;
};

export type EbookFormData = {
  name: string;
  email: string;
};
