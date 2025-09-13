import { createContext, useCallback, useContext, useReducer } from 'react';
import { INITIAL_STATE } from './constants';
import { Photo, PhotoContextValues, PhotoProviderProps } from './types';
import { photoReducer } from './utils';

const PhotoContext = createContext<PhotoContextValues>(
  {} as PhotoContextValues,
);

export const PhotoProvider = ({ children }: PhotoProviderProps) => {
  const [state, dispatch] = useReducer(photoReducer, INITIAL_STATE);

  const addPhotos = useCallback((files: File[]) => {
    const newPhotos: Photo[] = files.map(file => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    dispatch({ type: 'ADD_PHOTOS', payload: newPhotos });
  }, []);

  const removePhoto = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_PHOTO', payload: id });
  }, []);

  const clearPhotos = useCallback(() => {
    // Clean up object URLs to prevent memory leaks
    state.photos.forEach(photo => {
      URL.revokeObjectURL(photo.preview);
    });
    dispatch({ type: 'CLEAR_PHOTOS' });
  }, [state.photos]);

  const setUploading = useCallback((isUploading: boolean) => {
    dispatch({ type: 'SET_UPLOADING', payload: isUploading });
  }, []);

  const setUploadProgress = useCallback((progress: number) => {
    dispatch({ type: 'SET_UPLOAD_PROGRESS', payload: progress });
  }, []);

  const setError = useCallback((error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  }, []);

  const value: PhotoContextValues = {
    ...state,
    addPhotos,
    removePhoto,
    clearPhotos,
    setUploading,
    setUploadProgress,
    setError,
  };

  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  );
};

export const usePhotos = (): PhotoContextValues => {
  const context = useContext(PhotoContext);

  if (context === undefined) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }

  return context;
};
