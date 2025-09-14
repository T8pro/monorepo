import { PhotoAction, PhotoState } from './types';

export const photoReducer = (
  state: PhotoState,
  action: PhotoAction,
): PhotoState => {
  switch (action.type) {
    case 'ADD_PHOTOS':
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        error: null,
      };
    case 'REMOVE_PHOTO':
      return {
        ...state,
        photos: state.photos.filter(photo => photo.id !== action.payload),
      };
    case 'CLEAR_PHOTOS':
      return {
        ...state,
        photos: [],
        error: null,
      };
    case 'SET_UPLOADING':
      return {
        ...state,
        isUploading: action.payload,
      };
    case 'SET_UPLOAD_PROGRESS':
      return {
        ...state,
        uploadProgress: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
