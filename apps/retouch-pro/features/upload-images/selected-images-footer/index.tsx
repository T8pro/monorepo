'use client';

import { Button, Text } from '@t8pro/design-system';
import Link from 'next/link';
import { usePhotosContext } from '../context';
import styles from './styles.module.scss';

export const SelectedImagesFooter = () => {
  const {
    photos = [],
    openFileSelector,
    viewPricing,
    finalizeOrder,
  } = usePhotosContext();

  const selectedCount = photos.length;

  // Calculate pricing based on selected photos
  const getPackageInfo = () => {
    if (selectedCount === 0) return null;

    if (selectedCount <= 6) {
      return {
        name: 'Quick Fix',
        unitPrice: 10,
        maxUnits: 6,
        totalPrice: selectedCount * 10,
        discountedPrice: selectedCount * 10 * 0.9, // 10% discount
      };
    } else if (selectedCount <= 12) {
      return {
        name: 'Growth Accelerator',
        unitPrice: 8.33,
        maxUnits: 12,
        totalPrice: selectedCount * 8.33,
        discountedPrice: selectedCount * 8.33 * 0.9, // 10% discount
      };
    } else {
      return {
        name: 'Custom Package',
        unitPrice: 8.33,
        maxUnits: selectedCount,
        totalPrice: selectedCount * 8.33,
        discountedPrice: selectedCount * 8.33 * 0.9, // 10% discount
      };
    }
  };

  const packageInfo = getPackageInfo();

  if (selectedCount === 0) {
    return null;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.leftSection}>
        <div className={styles.packageSummary}>
          <Text className={styles.packageLabel}>Selected package:</Text>
          <Text className={styles.packageName}>
            {packageInfo?.name}: up to {packageInfo?.maxUnits} units
          </Text>
          <Text className={styles.packageDetails}>
            Unit value: R${packageInfo?.unitPrice} - Total value: R${' '}
            {packageInfo?.totalPrice.toFixed(0)}
          </Text>
        </div>

        <Button
          variant="2"
          size="medium"
          iconLeft="add_photo_alternate"
          className={styles.addPhotosButton}
          onClick={openFileSelector}
        >
          ADD MORE PHOTOS
        </Button>

        <Link href="#pricing">
          <Button
            variant="2"
            size="medium"
            iconLeft="attach_money"
            className={styles.pricingButton}
            onClick={viewPricing}
          >
            SEE HOW PRICING WORKS
          </Button>
        </Link>
      </div>

      <div className={styles.rightSection}>
        <Text className={styles.discountedPrice}>
          Discounted value: R$ {packageInfo?.discountedPrice.toFixed(0)}
        </Text>

        <Button
          variant="1"
          size="medium"
          iconLeft="credit_card"
          className={styles.finalizeButton}
          onClick={finalizeOrder}
        >
          FINALIZE
        </Button>
      </div>
    </div>
  );
};
