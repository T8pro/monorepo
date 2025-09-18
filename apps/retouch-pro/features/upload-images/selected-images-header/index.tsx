import { Button, Icon } from '@t8pro/design-system';
import { usePhotosContext } from '../context';
import styles from './styles.module.scss';

const MAX_PHOTOS = 24;

export const SelectedImagesHeader = () => {
  const { photos, openFileSelector, finalizeOrder, isUploading } = usePhotosContext();
  const selectedCount = photos.length;

  const handleProcessClick = () => {
    finalizeOrder();
  };

  const checkoutIcon = isUploading ? 'hourglass_bottom' : 'credit_card';
  const checkoutLabel = isUploading ? 'Processing...' : 'Checkout';

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Icon name="garden_cart" className={styles.icon} />
        <span
          className={`${styles.text} ${selectedCount >= MAX_PHOTOS ? styles.textLimit : ''}`}
        >
          You selected {selectedCount} of {MAX_PHOTOS} photos
        </span>
      </div>

      <div className={styles.rightSection}>
        <Button
          variant="2"
          style="outline"
          onClick={openFileSelector}
          iconLeft="add_photo_alternate"
          className={styles.addPhotosButton}
        >
          Add Photos
        </Button>

        <Button
          variant="1"
          onClick={handleProcessClick}
          iconLeft={checkoutIcon}
          className={styles.processButton}
          disabled={isUploading}
        >
          {checkoutLabel}
        </Button>
      </div>
    </header>
  );
};
