import { Button } from '@t8pro/design-system';
import Image from 'next/image';
import { PhotoCardProps } from '../types';
import styles from './styles.module.scss';

export const PhotoCard = ({ preview, name }: PhotoCardProps) => (
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
