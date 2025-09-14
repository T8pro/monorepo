import { PhotoState } from './types';

export const INITIAL_STATE: PhotoState = {
  photos: [],
  isUploading: false,
  uploadProgress: 0,
  error: null,
};
