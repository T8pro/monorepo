'use client';

import { usePhotos } from '../../contexts/photos-upload/context';
import { Button, Heading, Text } from '@t8pro/design-system';
import { FaTrash, FaUpload } from 'react-icons/fa';
import styles from './styles.module.scss';
import Image from 'next/image';

export default function UploadPage() {
  const { photos, removePhoto, clearPhotos } = usePhotos();

  if (photos.length === 0) {
    return (
      <div className={styles.emptyState}>
        <Heading as="h1" size="2xl" align="center">
          No photos selected
        </Heading>
        <Text align="center" marginTop="base">
          Please go back to the home page to select your photos.
        </Text>
        <Button
          variant="primary"
          size="large"
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.uploadPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading as="h1" size="3xl">
            Upload Photos
          </Heading>
          <Text color="gray-900">
            {photos.length} photo{photos.length !== 1 ? 's' : ''} selected
          </Text>
        </div>

        <div className={styles.photosGrid}>
          {photos.map(photo => (
            <div key={photo.id} className={styles.photoItem}>
              <Image
                src={photo.preview}
                alt={photo.name}
                className={styles.photoPreview}
                width={250}
                height={200}
              />
              <div className={styles.photoInfo}>
                <Text size="sm" weight="semibold" className={styles.photoName}>
                  {photo.name}
                </Text>
                <Text size="xs" color="gray-700">
                  {(photo.size / 1024 / 1024).toFixed(2)} MB
                </Text>
              </div>
              <Button
                variant="outline"
                size="small"
                onClick={() => removePhoto(photo.id)}
                className={styles.removeButton}
                aria-label={`Remove ${photo.name}`}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Button variant="outline" size="large" onClick={clearPhotos}>
            Clear All
          </Button>
          <Button
            variant="primary"
            size="large"
            className={styles.uploadButton}
          >
            <FaUpload />
            Upload Photos
          </Button>
        </div>
      </div>
    </div>
  );
}
