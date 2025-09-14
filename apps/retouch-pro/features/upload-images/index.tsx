'use client';

import { EmptyState } from '@t8pro/design-system';
import { usePhotosContext } from './context';
import { PhotoCard } from './photo-card';
import { SelectedImagesFooter } from './selected-images-footer';
import { SelectedImagesHeader } from './selected-images-header';
import styles from './styles.module.scss';

export const SelectedImages = () => {
  const { photos = [], openFileSelector } = usePhotosContext();

  if (photos.length === 0) {
    return (
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
    );
  }

  return (
    <div className={styles.container}>
      <SelectedImagesHeader />

      <div className={styles.imageGrid}>
        {photos.map(photo => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </div>

      <SelectedImagesFooter />
    </div>
  );
};
