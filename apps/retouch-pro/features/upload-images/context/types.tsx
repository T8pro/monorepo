import { PropsWithChildren } from 'react';

export type Photo = {
  id: string;
  file: File;
  preview: string;
  name: string;
  size: number;
  type: string;
};

export type PhotoState = {
  photos: Photo[];
  isUploading: boolean;
  uploadProgress: number;
  error: string | null;
};

export type PhotoActions = {
  addPhotos: (files: File[]) => void;
  removePhoto: (id: string) => void;
  clearPhotos: () => void;
  setUploading: (isUploading: boolean) => void;
  setUploadProgress: (progress: number) => void;
  setError: (error: string | null) => void;
  viewPricing: () => void;
  finalizeOrder: () => void;
  processPayment: (paymentData: PaymentData) => Promise<void>;
  openFileSelector: () => void;
};

export type PaymentData = {
  amount: number;
  currency: string;
  packageType: string;
  photos: Photo[];
};

export type PhotoContextValues = PhotoState & PhotoActions;

export type PhotoAction =
  | { type: 'ADD_PHOTOS'; payload: Photo[] }
  | { type: 'REMOVE_PHOTO'; payload: string }
  | { type: 'CLEAR_PHOTOS' }
  | { type: 'SET_UPLOADING'; payload: boolean }
  | { type: 'SET_UPLOAD_PROGRESS'; payload: number }
  | { type: 'SET_ERROR'; payload: string | null };

export type PhotoProviderProps = PropsWithChildren;
