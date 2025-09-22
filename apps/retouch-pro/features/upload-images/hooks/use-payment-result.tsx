'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { usePhotosContext } from '../context';
import { photoStorage } from '../context/utils/photo-storage';

export const usePaymentResult = () => {
  const searchParams = useSearchParams();
  const {
    processPhotosAfterPayment,
    clearPhotos,
    setError,
    restorePhotosFromStorage,
  } = usePhotosContext();

  useEffect(() => {
    const paymentIntent = searchParams.get('payment_intent');
    const redirectStatus = searchParams.get('redirect_status');

    if (paymentIntent && redirectStatus) {
      if (redirectStatus === 'succeeded') {
        // Payment succeeded, get photos from storage and process
        const processPaymentSuccess = async () => {
          try {
            // Get photos from storage
            const photosToProcess = await photoStorage.loadPhotos();
            if (photosToProcess.length === 0) {
              throw new Error('No photos found in storage');
            }

            // Process photos with the restored data
            await processPhotosAfterPayment(paymentIntent, photosToProcess);

            clearPhotos();
            // Clean up storage after successful payment
            await photoStorage.clearPhotos();
            await photoStorage.clearUserData();
            // Redirect to thank you page
            window.location.href = '/upload/thank-you';
          } catch {
            setError(
              'Payment successful but failed to process photos. Please contact support.',
            );
          }
        };

        processPaymentSuccess();
      } else if (redirectStatus === 'failed') {
        // Payment failed, restore photos and show error
        restorePhotosFromStorage();
        setError(
          'Payment was declined. Please try again with a different payment method.',
        );
      }

      // Clean up URL parameters
      const url = new URL(window.location.href);
      url.searchParams.delete('payment_intent');
      url.searchParams.delete('redirect_status');
      window.history.replaceState({}, '', url.toString());
    }
    // Remove the else block that was causing duplicate restoration
  }, [
    searchParams,
    processPhotosAfterPayment,
    clearPhotos,
    setError,
    restorePhotosFromStorage,
  ]);
};
