import { Icon } from '@t8pro/design-system';
import { usePhotosContext } from '../context';
import styles from './styles.module.scss';

const MAX_PHOTOS = 24;

export const SelectedImagesHeader = () => {
  const { photos } = usePhotosContext();
  const selectedCount = photos.length;

  return (
    <header className={styles.header}>
      <div className={styles.contentRow}>
        <div className={styles.leftSection}>
          <Icon name="garden_cart" className={styles.icon} />
          <span
            className={`${styles.text} ${selectedCount >= MAX_PHOTOS ? styles.textLimit : ''}`}
          >
            You selected {selectedCount} of {MAX_PHOTOS} photos
          </span>
        </div>
      </div>
    </header>
  );
};
