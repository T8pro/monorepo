import { Button, Icon } from '@t8pro/design-system';
import { usePhotosContext } from '../../../contexts/photos-upload/context';
import styles from './styles.module.scss';

const MAX_PHOTOS = 10;

export const SelectedImagesHeader = () => {
  const { photos } = usePhotosContext();
  const selectedCount = photos.length;

  const handleBeProClick = () => {
    // TODO: Implement Be Pro functionality
    // This could open a modal, navigate to pricing, etc.
  };

  const handleProcessClick = () => {
    // TODO: Implement photo processing functionality
    // This could start the retouching process
  };

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
          onClick={handleBeProClick}
          iconLeft="animation"
          className={styles.beProButton}
        >
          Be Pro
        </Button>

        <Button
          variant="1"
          onClick={handleProcessClick}
          iconLeft="animation"
          className={styles.processButton}
        >
          Process
        </Button>
      </div>
    </header>
  );
};
