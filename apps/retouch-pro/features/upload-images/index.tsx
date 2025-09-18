'use client';

import { EmptyState } from '@t8pro/design-system';
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

export const SelectedImages = () => {
  const { photos = [], openFileSelector } = usePhotosContext();

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

        <SelectedImagesFooter />
      </div>

      <CheckoutModal />
    </>
  );
};
