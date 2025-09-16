import { Button } from '@t8pro/design-system';
import Image from 'next/image';
import { usePhotosContext } from '../context';
import { PhotoCardProps } from '../types';
import styles from './styles.module.scss';

export const PhotoCard = ({ id, preview, name, index }: PhotoCardProps) => {
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
        </div>
      </div>

      <Button variant="4" size="small" iconLeft="delete" onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};
