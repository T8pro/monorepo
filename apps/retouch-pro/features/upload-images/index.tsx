'use client';

import { Button, EmptyState, Text } from '@t8pro/design-system';
import { Suspense } from 'react';
import { CheckoutModal } from './checkout-modal';
import { usePhotosContext } from './context';
import { usePaymentResult } from './hooks/use-payment-result';
import { PhotoCard } from './photo-card';
import { SelectedImagesFooter } from './selected-images-footer';
import { SelectedImagesHeader } from './selected-images-header';
import styles from './styles.module.scss';

const PaymentResultHandler = () => {
  usePaymentResult();
  return null;
};

const PaymentLoadingState = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <Text size="lg" className={styles.loadingText}>
        Processing your payment...
      </Text>
      <Text size="sm" color="secondary" className={styles.loadingSubtext}>
        Please wait while we prepare your photos for retouching.
      </Text>
    </div>
  );
};

const MAX_PHOTOS_LIMIT = 24;

export const SelectedImages = () => {
  const {
    photos = [],
    openFileSelector,
    isProcessingPayment,
  } = usePhotosContext();

  const isAtLimit = photos.length >= MAX_PHOTOS_LIMIT;

  // Show loading state when processing payment
  if (isProcessingPayment) {
    return (
      <>
        <Suspense fallback={null}>
          <PaymentResultHandler />
        </Suspense>
        <PaymentLoadingState />
      </>
    );
  }

  if (photos.length === 0) {
    return (
      <>
        <Suspense fallback={null}>
          <PaymentResultHandler />
        </Suspense>

        <EmptyState
          title="No photos selected"
          description="Select photos to start the retouching process"
          button={{
            text: 'Select Photos',
            onClick: openFileSelector,
            variant: '1',
            size: 'large',
            iconLeft: 'heart_plus',
          }}
          icon="image"
          size="large"
          className={styles.emptyState}
        />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={null}>
        <PaymentResultHandler />
      </Suspense>

      <div className={styles.container}>
        <SelectedImagesHeader />

        <div className={styles.imageGrid}>
          {photos.map((photo, index) => (
            <PhotoCard key={photo.id} {...photo} index={index} />
          ))}
        </div>

        <div className={styles.addPhotosButton}>
          <Button
            variant="2"
            size="medium"
            iconLeft="add_photo_alternate"
            style="outline"
            onClick={openFileSelector}
            disabled={isAtLimit}
          >
            {isAtLimit ? 'Maximum photos reached' : 'Add more photos'}
          </Button>
        </div>

        <SelectedImagesFooter />
      </div>

      <CheckoutModal />
    </>
  );
};
