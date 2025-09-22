'use client';

import { Button, Input, Text } from '@t8pro/design-system';
import { usePhotosContext } from '../context';
import styles from './styles.module.scss';

export const SelectedImagesFooter = () => {
  const {
    photos = [],
    finalizeOrder,
    isUploading,
    uploadProgress,
    error,
    userData,
    setUserData,
  } = usePhotosContext();

  const selectedCount = photos.length;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, name: event.target.value });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const getPackageInfo = () => {
    if (selectedCount === 0) return null;

    if (selectedCount <= 5) {
      return {
        name: 'No Package',
        unitPrice: 15,
        maxUnits: 5,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 15,
      };
    } else if (selectedCount <= 11) {
      return {
        name: 'Quick Fix',
        unitPrice: 10,
        maxUnits: 11,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 10,
      };
    } else if (selectedCount <= 23) {
      return {
        name: 'Growth Accelerator',
        unitPrice: 8.33,
        maxUnits: 23,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 8.33,
      };
    } else {
      return {
        name: 'Premium',
        unitPrice: 6,
        maxUnits: selectedCount,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 6,
      };
    }
  };

  const packageInfo = getPackageInfo();

  if (selectedCount === 0) {
    return null;
  }

  const checkoutIcon = isUploading ? 'hourglass_bottom' : 'shield_lock';
  const checkoutLabel = isUploading ? 'Processing...' : 'Safe Checkout';

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.leftSection}>
          <div className={styles.packageSummary}>
            <Text>Selected package:</Text>

            <Text color="secondary">
              {packageInfo?.name}: up to {packageInfo?.maxUnits} units
            </Text>

            <Text color="secondary">Unit value: ${packageInfo?.unitPrice}</Text>
          </div>
        </div>

        <div className={styles.rightSection}>
          {packageInfo?.discountedPrice !== packageInfo?.totalPrice ? (
            <Text color="secondary">
              <s>Original value: ${packageInfo?.totalPrice.toFixed(0)}</s>
            </Text>
          ) : (
            <Text color="secondary">
              <strong>Total: ${packageInfo?.totalPrice.toFixed(0)}</strong>
            </Text>
          )}

          {packageInfo?.name !== 'No Package' && (
            <Text color="secondary">
              <strong>
                Total value with discount: ${' '}
                {packageInfo?.discountedPrice.toFixed(0)}
              </strong>
            </Text>
          )}

          {isUploading && (
            <Text size="sm" className={styles.status}>
              Preparing photos {uploadProgress}%
            </Text>
          )}

          {error && (
            <Text size="sm" className={styles.error}>
              {error}
            </Text>
          )}
        </div>
      </div>

      <div className={styles.userFormSection}>
        <Text>
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

      <Button
        variant="1"
        size="medium"
        iconLeft={checkoutIcon}
        onClick={finalizeOrder}
        disabled={isUploading}
      >
        {checkoutLabel}
      </Button>
    </>
  );
};
