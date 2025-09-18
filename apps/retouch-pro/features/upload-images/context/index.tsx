'use client';

import { createContext, useCallback, useContext, useReducer } from 'react';
import { INITIAL_STATE, PENDING_UPLOAD_STORAGE_KEY } from './constants';
import { fileToDataUrl, processPhotoForUpload } from './image-utils';
import {
  PendingUploadPayload,
  PaymentData,
  Photo,
  PhotoContextValues,
  PhotoProviderProps,
} from './types';
import { photoReducer } from './utils';

const PhotoContext = createContext<PhotoContextValues>(
  {} as PhotoContextValues,
);

const MAX_FREE_PACKAGE = 5;

const getPackageDetails = (selectedCount: number) => {
  if (selectedCount === 0) {
    return null;
  }

  if (selectedCount <= MAX_FREE_PACKAGE) {
    return {
      name: 'No Package',
      unitPrice: 15,
      totalPrice: selectedCount * 15,
      discountedPrice: selectedCount * 15,
    } as const;
  }

  if (selectedCount <= 11) {
    return {
      name: 'Quick Fix',
      unitPrice: 10,
      totalPrice: selectedCount * 15,
      discountedPrice: selectedCount * 10,
    } as const;
  }

  if (selectedCount <= 23) {
    return {
      name: 'Growth Accelerator',
      unitPrice: 8.33,
      totalPrice: selectedCount * 15,
      discountedPrice: selectedCount * 8.33,
    } as const;
  }

  return {
    name: 'Premium',
    unitPrice: 6,
    totalPrice: selectedCount * 15,
    discountedPrice: selectedCount * 6,
  } as const;
};

const buildPendingUploadPayload = async (
  photos: Photo[],
  packageName: string,
  amount: number,
  currency: string,
  onProgress?: (progress: number) => void,
): Promise<PendingUploadPayload> => {
  const photoCount = photos.length;
  const photoPayloads = [];
  const baseProgress = 10;
  const progressRange = 45;

  for (let index = 0; index < photoCount; index += 1) {
    const photo = photos[index];
    if (!photo) {
      continue;
    }
    const dataUrl = await fileToDataUrl(photo.file);
    photoPayloads.push({
      name: photo.name,
      type: photo.type,
      size: photo.size,
      width: photo.width,
      height: photo.height,
      dataUrl,
    });

    if (onProgress) {
      const progress = Math.round(
        baseProgress + ((index + 1) / photoCount) * progressRange,
      );
      onProgress(progress);
    }
  }

  return {
    amount,
    currency,
    packageType: packageName,
    photoCount,
    photos: photoPayloads,
    createdAt: new Date().toISOString(),
  };
};

export const PhotoProvider = ({ children }: PhotoProviderProps) => {
  const [state, dispatch] = useReducer(photoReducer, INITIAL_STATE);

  const setError = useCallback((error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  }, []);

  const setUploading = useCallback((isUploading: boolean) => {
    dispatch({ type: 'SET_UPLOADING', payload: isUploading });
  }, []);

  const setUploadProgress = useCallback((progress: number) => {
    dispatch({ type: 'SET_UPLOAD_PROGRESS', payload: progress });
  }, []);

  const addPhotos = useCallback(
    (files: File[]) => {
      if (!files.length) {
        return;
      }

      void (async () => {
        try {
          setError(null);
          const processedPhotos: Photo[] = [];

          for (let index = 0; index < files.length; index += 1) {
            const originalFile = files[index];
            if (!originalFile) {
              continue;
            }
            const { file, width, height } =
              await processPhotoForUpload(originalFile);

            processedPhotos.push({
              id: crypto.randomUUID(),
              file,
              preview: URL.createObjectURL(file),
              name: file.name,
              size: file.size,
              type: file.type,
              width,
              height,
            });
          }

          dispatch({ type: 'ADD_PHOTOS', payload: processedPhotos });
        } catch (error) {
          setError(
            error instanceof Error
              ? error.message
              : 'We could not process the selected files. Please try again.',
          );
        }
      })();
    },
    [setError],
  );

  const removePhoto = useCallback(
    (id: string) => {
      const target = state.photos.find(photo => photo.id === id);
      if (target) {
        URL.revokeObjectURL(target.preview);
      }

      dispatch({ type: 'REMOVE_PHOTO', payload: id });
    },
    [state.photos],
  );

  const clearPhotos = useCallback(() => {
    state.photos.forEach(photo => {
      URL.revokeObjectURL(photo.preview);
    });
    dispatch({ type: 'CLEAR_PHOTOS' });
  }, [state.photos]);

  const processPayment = useCallback(async (paymentData: PaymentData) => {
    try {
      const response = await fetch('/api/payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: paymentData.amount,
          currency: paymentData.currency,
          packageType: paymentData.packageType,
          photoCount: paymentData.photoCount,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();
      dispatch({ type: 'OPEN_CHECKOUT', payload: clientSecret });
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error('Payment failed. Please try again.');
    }
  }, []);

  const finalizeOrder = useCallback(() => {
    const selectedCount = state.photos.length;
    const packageInfo = getPackageDetails(selectedCount);

    if (!packageInfo) {
      setError('Select at least one photo before continuing.');
      return;
    }

    void (async () => {
      try {
        setUploading(true);
        setError(null);
        setUploadProgress(5);

        const pendingUpload = await buildPendingUploadPayload(
          state.photos,
          packageInfo.name,
          packageInfo.discountedPrice,
          'USD',
          setUploadProgress,
        );

        if (typeof window !== 'undefined') {
          sessionStorage.setItem(
            PENDING_UPLOAD_STORAGE_KEY,
            JSON.stringify(pendingUpload),
          );
        }

        const paymentData: PaymentData = {
          amount: pendingUpload.amount,
          currency: pendingUpload.currency,
          packageType: pendingUpload.packageType,
          photoCount: pendingUpload.photoCount,
          photos: state.photos,
        };

        setUploadProgress(75);
        await processPayment(paymentData);

        setUploadProgress(100);
        // Don't clear photos here - let the checkout page handle it after successful payment
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : 'Unable to finalize your order. Please try again.',
        );
        if (typeof window !== 'undefined') {
          sessionStorage.removeItem(PENDING_UPLOAD_STORAGE_KEY);
        }
      } finally {
        setUploading(false);
        setUploadProgress(0);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    clearPhotos,
    processPayment,
    setError,
    setUploadProgress,
    setUploading,
    state.photos,
  ]);

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

  const openCheckout = useCallback(() => {
    dispatch({ type: 'OPEN_CHECKOUT', payload: '' });
  }, []);

  const closeCheckout = useCallback(() => {
    dispatch({ type: 'CLOSE_CHECKOUT' });
  }, []);

  const processPhotosAfterPayment = useCallback(
    async (paymentIntentId: string) => {
      try {
        // Calculate package info
        const selectedCount = state.photos.length;
        let packageType;
        if (selectedCount <= 5) {
          packageType = 'No Package';
        } else if (selectedCount <= 11) {
          packageType = 'Quick Fix';
        } else if (selectedCount <= 23) {
          packageType = 'Growth Accelerator';
        } else {
          packageType = 'Premium';
        }

        // Prepare photos data for upload
        const photosData = await Promise.all(
          state.photos.map(async photo => {
            const dataUrl = await new Promise<string>(resolve => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result as string);
              reader.readAsDataURL(photo.file);
            });

            return {
              name: photo.name,
              type: photo.type,
              size: photo.size,
              width: photo.width,
              height: photo.height,
              dataUrl,
            };
          }),
        );

        // Upload photos to API
        const response = await fetch('/api/upload-photos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photos: photosData,
            paymentIntentId,
            packageType,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to upload photos');
        }

        await response.json();
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error('Failed to process photos after payment');
      }
    },
    [state.photos],
  );

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
    openCheckout,
    closeCheckout,
    processPhotosAfterPayment,
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
