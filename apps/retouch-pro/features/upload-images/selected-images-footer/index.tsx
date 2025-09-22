'use client';

import { Button, Text } from '@t8pro/design-system';
import { usePhotosContext } from '../context';
import { MAX_IMAGE_DIMENSION } from '../context/utils/image';
import styles from './styles.module.scss';

export const SelectedImagesFooter = () => {
  const {
    photos = [],
    openFileSelector,
    finalizeOrder,
    isUploading,
    uploadProgress,
    error,
  } = usePhotosContext();

  const selectedCount = photos.length;

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

  const checkoutIcon = isUploading ? 'hourglass_bottom' : 'credit_card';
  const checkoutLabel = isUploading ? 'Processing...' : 'Checkout';

  return (
    <div className={styles.footer}>
      <div className={styles.leftSection}>
        <div className={styles.packageSummary}>
          <Text>Selected package:</Text>

          <Text color="secondary">
            {packageInfo?.name}: up to {packageInfo?.maxUnits} units
          </Text>

          <Text color="secondary">Unit value: ${packageInfo?.unitPrice}</Text>

          <Text size="sm" className={styles.resizeHint}>
            We resize every photo to {MAX_IMAGE_DIMENSION}px on the longest side
            before uploading.
          </Text>
        </div>

        <Button
          variant="2"
          size="medium"
          iconLeft="add_photo_alternate"
          style="outline"
          onClick={openFileSelector}
          disabled={isUploading}
        >
          Add more photos
        </Button>
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

        <Button
          variant="1"
          size="medium"
          iconLeft={checkoutIcon}
          onClick={finalizeOrder}
          disabled={isUploading}
        >
          {checkoutLabel}
        </Button>
      </div>
    </div>
  );
};
