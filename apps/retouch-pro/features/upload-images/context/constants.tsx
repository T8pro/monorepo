import { PhotoState } from './types';

export const INITIAL_STATE: PhotoState = {
  photos: [],
  isUploading: false,
  uploadProgress: 0,
  error: null,
  isCheckoutOpen: false,
  clientSecret: null,
  userData: {
    name: '',
    email: '',
    environment: 'original' as const,
  },
  isProcessingPayment: false,
  isProcessingPhotos: false,
  processingStep: 'idle',
  processingMessage: '',
};

export const PENDING_UPLOAD_STORAGE_KEY = 'retouchPro.pendingUpload';
