'use client';

import { createContext, useCallback, useContext, useReducer } from 'react';
import { INITIAL_STATE } from './constants';
import {
  PaymentData,
  Photo,
  PhotoContextValues,
  PhotoProviderProps,
} from './types';
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

  const finalizeOrder = useCallback(() => {
    // Calculate package info and prepare for payment
    const selectedCount = state.photos.length;
    let packageInfo;

    if (selectedCount <= 5) {
      packageInfo = {
        name: 'No Package',
        unitPrice: 15,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 15, // No discount
      };
    } else if (selectedCount <= 11) {
      packageInfo = {
        name: 'Quick Fix',
        unitPrice: 10,
        totalPrice: selectedCount * 15, // Preço original sem desconto
        discountedPrice: selectedCount * 10, // Preço com desconto do plano
      };
    } else if (selectedCount <= 23) {
      packageInfo = {
        name: 'Growth Accelerator',
        unitPrice: 8.33,
        totalPrice: selectedCount * 15, // Preço original sem desconto
        discountedPrice: selectedCount * 8.33, // Preço com desconto do plano
      };
    } else {
      packageInfo = {
        name: 'Premium',
        unitPrice: 6,
        totalPrice: selectedCount * 15, // Preço original sem desconto
        discountedPrice: selectedCount * 6, // Preço com desconto do plano
      };
    }

    // Prepare payment data
    const paymentData: PaymentData = {
      amount: packageInfo.discountedPrice,
      currency: 'BRL',
      packageType: packageInfo.name,
      photos: state.photos,
    };

    // Process payment
    processPayment(paymentData);
  }, [state.photos]);

  const processPayment = useCallback(
    async (paymentData: PaymentData) => {
      try {
        setUploading(true);
        setError(null);

        // TODO: Integrate with Stripe
        // This is where we'll add the Stripe integration
        console.log('Processing payment:', paymentData);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // TODO: Handle successful payment
        console.log('Payment successful!');
      } catch (error) {
        setError('Payment failed. Please try again.');
        console.error('Payment error:', error);
      } finally {
        setUploading(false);
      }
    },
    [setUploading, setError],
  );

  const openFileSelector = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';

    input.onchange = e => {
      const files = Array.from((e.target as HTMLInputElement).files || []);
      if (files.length > 0) {
        addPhotos(files);
      }
    };

    input.click();
  }, [addPhotos]);

  const value: PhotoContextValues = {
    ...state,
    addPhotos,
    removePhoto,
    clearPhotos,
    setUploading,
    setUploadProgress,
    setError,
    finalizeOrder,
    processPayment,
    openFileSelector,
  };

  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  );
};

export const usePhotosContext = (): PhotoContextValues => {
  const context = useContext(PhotoContext);

  if (context === undefined) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }

  return context;
};
