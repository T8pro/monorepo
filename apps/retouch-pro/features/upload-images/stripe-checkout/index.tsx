'use client';

import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { Button, Text } from '@t8pro/design-system';
import { useState } from 'react';
import { usePhotosContext } from '../context';
import styles from './styles.module.scss';

interface StripeCheckoutProps {
  clientSecret: string;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
}

export const StripeCheckout = ({ onSuccess, onError }: StripeCheckoutProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { photos, isUploading } = usePhotosContext();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/upload/thank-you`,
        },
        redirect: 'if_required',
      });

      if (error) {
        onError(error.message || 'Payment failed. Please try again.');
      } else if (paymentIntent?.id) {
        onSuccess(paymentIntent.id);
      } else {
        onError('Payment successful but could not retrieve payment details.');
      }
    } catch {
      onError('An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const selectedCount = photos.length;
  const getPackageInfo = () => {
    if (selectedCount <= 5) {
      return {
        name: 'No Package',
        unitPrice: 15,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 15,
      };
    } else if (selectedCount <= 11) {
      return {
        name: 'Quick Fix',
        unitPrice: 10,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 10,
      };
    } else if (selectedCount <= 23) {
      return {
        name: 'Growth Accelerator',
        unitPrice: 8.33,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 8.33,
      };
    } else {
      return {
        name: 'Premium',
        unitPrice: 6,
        totalPrice: selectedCount * 15,
        discountedPrice: selectedCount * 6,
      };
    }
  };

  const packageInfo = getPackageInfo();

  return (
    <div className={styles.checkout}>
      <div className={styles.summary}>
        <Text size="lg" className={styles.title}>
          Complete Your Order
        </Text>

        <div className={styles.packageDetails}>
          <Text>Package: {packageInfo.name}</Text>
          <Text color="secondary">Photos: {selectedCount}</Text>
          <Text color="secondary">Unit Price: ${packageInfo.unitPrice}</Text>
          <Text className={styles.total}>
            Total: ${packageInfo.discountedPrice.toFixed(2)}
          </Text>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.paymentForm}>
        <div className={styles.paymentElement}>
          <PaymentElement
            options={{
              layout: 'tabs',
            }}
          />
        </div>

        <Button
          type="submit"
          variant="1"
          size="large"
          disabled={!stripe || isProcessing || isUploading}
          className={styles.payButton}
        >
          {isProcessing
            ? 'Processing...'
            : `Pay $${packageInfo.discountedPrice.toFixed(2)}`}
        </Button>
      </form>
    </div>
  );
};
