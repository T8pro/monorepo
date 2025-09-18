import { Button, Icon, Input, Text } from '@t8pro/design-system';
import { usePhotosContext } from '../context';
import styles from './styles.module.scss';

const MAX_PHOTOS = 24;

export const SelectedImagesHeader = () => {
  const {
    photos,
    userData,
    setUserData,
    openFileSelector,
    finalizeOrder,
    isUploading,
  } = usePhotosContext();
  const selectedCount = photos.length;

  const handleProcessClick = () => {
    finalizeOrder();
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, name: event.target.value });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const checkoutIcon = isUploading ? 'hourglass_bottom' : 'credit_card';
  const checkoutLabel = isUploading ? 'Processing...' : 'Checkout';

  return (
    <header className={styles.header}>
      <div className={styles.userFormSection}>
        <Text className={styles.explanationText}>
          Please provide your contact information so we can send you the
          processed photos via email.
        </Text>
        <div className={styles.inputGroup}>
          <Input
            placeholder="Your name"
            value={userData.name}
            onChange={handleNameChange}
            className={styles.nameInput}
            required
          />
          <Input
            placeholder="Your email"
            type="email"
            value={userData.email}
            onChange={handleEmailChange}
            className={styles.emailInput}
            required
          />
        </div>
      </div>

      <div className={styles.contentRow}>
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
      </div>
    </header>
  );
};
