'use client';

import { Button, Text } from '@t8pro/design-system';
import { usePhotosContext } from '../context';
import styles from './styles.module.scss';

export const SelectedImagesFooter = () => {
  const { photos = [], openFileSelector, finalizeOrder } = usePhotosContext();

  const selectedCount = photos.length;

  // Calculate pricing based on selected photos
  const getPackageInfo = () => {
    if (selectedCount === 0) return null;

    if (selectedCount <= 5) {
      return {
        name: 'No Package',
        unitPrice: 15,
        maxUnits: 5,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 15, // No discount
      };
    } else if (selectedCount <= 11) {
      return {
        name: 'Quick Fix',
        unitPrice: 10,
        maxUnits: 11,
        totalPrice: selectedCount * 15, // Preço original sem desconto
        discountedPrice: selectedCount * 10, // Preço com desconto do plano
      };
    } else if (selectedCount <= 23) {
      return {
        name: 'Growth Accelerator',
        unitPrice: 8.33,
        maxUnits: 23,
        totalPrice: selectedCount * 15, // Preço original sem desconto
        discountedPrice: selectedCount * 8.33, // Preço com desconto do plano
      };
    } else {
      return {
        name: 'Premium',
        unitPrice: 6,
        maxUnits: selectedCount,
        totalPrice: selectedCount * 15, // Preço original sem desconto
        discountedPrice: selectedCount * 6, // Preço com desconto do plano
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
          <Text>Selected package:</Text>

          <Text color="secondary">
            {packageInfo?.name}: up to {packageInfo?.maxUnits} units
          </Text>

          <Text color="secondary">Unit value: R${packageInfo?.unitPrice}</Text>
        </div>

        <Button
          variant="2"
          size="medium"
          iconLeft="add_photo_alternate"
          style="outline"
          onClick={openFileSelector}
        >
          ADD MORE PHOTOS
        </Button>
      </div>

      <div className={styles.rightSection}>
        <Text color="secondary">
          <s>Original value: R$ {packageInfo?.totalPrice.toFixed(0)}</s>
        </Text>

        {packageInfo?.name !== 'No Package' && (
          <Text color="secondary">
            <strong>
              Total value with discount: R${' '}
              {packageInfo?.discountedPrice.toFixed(0)}
            </strong>
          </Text>
        )}
        <Button
          variant="1"
          size="medium"
          iconLeft="credit_card"
          onClick={finalizeOrder}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
