import { Button } from '@t8pro/design-system';
import Image from 'next/image';
import { usePhotosContext } from '../context';
import { PhotoCardProps } from '../types';
import styles from './styles.module.scss';

const formatFileSize = (bytes: number) => {
  const megaBytes = bytes / (1024 * 1024);
  return megaBytes < 0.1
    ? `${(bytes / 1024).toFixed(0)} KB`
    : `${megaBytes.toFixed(1)} MB`;
};

export const PhotoCard = ({
  id,
  preview,
  name,
  width,
  height,
  size,
  index,
}: PhotoCardProps) => {
  const { removePhoto } = usePhotosContext();

  const handleRemove = () => {
    removePhoto(id);
  };

  return (
    <div className={styles.photoCard}>
      <div className={styles.primaryContainer}>
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
          <span className={styles.photoName}>Photo {index + 1}</span>
          <span className={styles.photoMeta}>
            {width} × {height}px · {formatFileSize(size)}
          </span>
        </div>
      </div>

      <Button variant="4" size="small" iconLeft="delete" onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};
