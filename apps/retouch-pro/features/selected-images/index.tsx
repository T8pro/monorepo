import { Button, Icon } from '@t8pro/design-system';
import Image from 'next/image';
import styles from './styles.module.scss';

interface PhotoCardProps {
  id: string;
  imageUrl: string;
  name: string;
  isPlaceholder?: boolean;
}

const PhotoCard = ({
  id: _id,
  imageUrl,
  name,
  isPlaceholder = false,
}: PhotoCardProps) => (
  <div
    className={`${styles.photoCard} ${isPlaceholder ? styles.placeholder : ''}`}
  >
    <div className={styles.imageContainer}>
      {isPlaceholder ? (
        <div className={styles.placeholderIcon}>
          <Icon name="add_a_photo" size={40} />
        </div>
      ) : (
        <Image
          src={imageUrl}
          alt={name}
          className={styles.image}
          width={80}
          height={80}
        />
      )}
    </div>
    <div className={styles.photoInfo}>
      <span className={styles.photoName}>{name}</span>
    </div>
    <Button
      variant="primary"
      size="small"
      className={styles.proButton}
      iconLeft="star"
    >
      Be Pro
    </Button>
  </div>
);

export const SelectedImages = () => {
  // Mock data - in real app this would come from context/state
  const photos = [
    { id: '1', imageUrl: '/before-after/001-before.jpg', name: 'Foto 1' },
    { id: '2', imageUrl: '/before-after/002-before.jpg', name: 'Foto 2' },
    { id: '3', imageUrl: '/before-after/003-before.jpg', name: 'Foto 3' },
    { id: '4', imageUrl: '/before-after/001-before.jpg', name: 'Foto 4' },
    { id: '5', imageUrl: '/before-after/002-before.jpg', name: 'Foto 5' },
    { id: '6', imageUrl: '/before-after/003-before.jpg', name: 'Foto 6' },
    { id: '7', imageUrl: '/before-after/001-before.jpg', name: 'Foto 7' },
    { id: '8', imageUrl: '/before-after/002-before.jpg', name: 'Foto 8' },
    { id: '9', imageUrl: '/before-after/003-before.jpg', name: 'Foto 9' },
    { id: '10', imageUrl: '/before-after/001-before.jpg', name: 'Foto 10' },
    { id: '11', imageUrl: '/before-after/002-before.jpg', name: 'Foto 11' },
    { id: '12', imageUrl: '/before-after/003-before.jpg', name: 'Foto 12' },
    { id: 'placeholder', imageUrl: '', name: 'Add Photo', isPlaceholder: true },
  ];

  return (
    <div className={styles.imageGrid}>
      {photos.map(photo => (
        <PhotoCard
          key={photo.id}
          id={photo.id}
          imageUrl={photo.imageUrl}
          name={photo.name}
          isPlaceholder={photo.isPlaceholder}
        />
      ))}
    </div>
  );
};
