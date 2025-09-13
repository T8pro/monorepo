'use client';

import { Button, EmptyState } from '@t8pro/design-system';
import Image from 'next/image';
import styles from './styles.module.scss';
import { PhotoCardProps } from './types';
import { usePhotosContext } from '@/contexts/photos-upload/context';
import { SelectedImagesHeader } from './selected-images-header';

const PhotoCard = ({ preview, name }: PhotoCardProps) => (
  <div className={styles.photoCard}>
    <div className={styles.imageContainer}>
      <Image
        src={preview}
        alt={name}
        className={styles.image}
        width={80}
        height={80}
      />
    </div>

    <div className={styles.photoInfo}>
      <span className={styles.photoName}>{name}</span>
    </div>

    <Button
      variant="1"
      size="small"
      className={styles.proButton}
      iconLeft="star"
    >
      Be Pro
    </Button>
  </div>
);

export const SelectedImages = () => {
  const { photos = [] } = usePhotosContext();

  if (photos.length === 0) {
    return (
      <EmptyState
        title="No photos selected"
        description="Select photos to start the retouching process"
        button={{
          text: 'Select Photos',
          onClick: () => {},
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
    </div>
  );
};
