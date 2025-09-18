import { PropsWithChildren } from 'react';

export type Photo = {
  id: string;
  file: File;
  preview: string;
  name: string;
  size: number;
  type: string;
  width: number;
  height: number;
};

export type PhotoState = {
  photos: Photo[];
  isUploading: boolean;
  uploadProgress: number;
  error: string | null;
  isCheckoutOpen: boolean;
  clientSecret: string | null;
};

export type PhotoActions = {
  addPhotos: (files: File[]) => void;
  removePhoto: (id: string) => void;
  clearPhotos: () => void;
  setUploading: (isUploading: boolean) => void;
  setUploadProgress: (progress: number) => void;
  setError: (error: string | null) => void;
  finalizeOrder: () => void;
  processPayment: (paymentData: PaymentData) => Promise<void>;
  openFileSelector: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  processPhotosAfterPayment: (paymentIntentId: string) => Promise<void>;
};

export type PaymentData = {
  amount: number;
  currency: string;
  packageType: string;
  photos: Photo[];
  photoCount: number;
};

export type PendingUploadPhoto = {
  name: string;
  type: string;
  size: number;
  width: number;
  height: number;
  dataUrl: string;
};

export type PendingUploadPayload = {
  amount: number;
  currency: string;
  packageType: string;
  photoCount: number;
  photos: PendingUploadPhoto[];
  createdAt: string;
};

export type PhotoContextValues = PhotoState & PhotoActions;

export type PhotoAction =
  | { type: 'ADD_PHOTOS'; payload: Photo[] }
  | { type: 'REMOVE_PHOTO'; payload: string }
  | { type: 'CLEAR_PHOTOS' }
  | { type: 'SET_UPLOADING'; payload: boolean }
  | { type: 'SET_UPLOAD_PROGRESS'; payload: number }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'OPEN_CHECKOUT'; payload: string }
  | { type: 'CLOSE_CHECKOUT' };

export type PhotoProviderProps = PropsWithChildren;
