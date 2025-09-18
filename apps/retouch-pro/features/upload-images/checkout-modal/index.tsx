'use client';

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button, Text } from '@t8pro/design-system';
import { useState } from 'react';
import { usePhotosContext } from '../context';
import styles from './styles.module.scss';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

interface CheckoutFormProps {
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
  onClose: () => void;
}

const CheckoutForm = ({ onSuccess, onError, onClose }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { photos, processPhotosAfterPayment, clearPhotos } = usePhotosContext();
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
        // Process photos after successful payment
        await processPhotosAfterPayment(paymentIntent.id);
        clearPhotos();
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
    <div className={styles.checkoutModal}>
      <div className={styles.overlay} onClick={onClose} />

      <div className={styles.modalContent}>
        <div className={styles.header}>
          <Text size="lg" className={styles.title}>
            Complete Your Order
          </Text>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.summary}>
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

          <div className={styles.actions}>
            <Button
              type="button"
              variant="2"
              size="medium"
              onClick={onClose}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="1"
              size="medium"
              disabled={!stripe || isProcessing}
              className={styles.payButton}
            >
              {isProcessing
                ? 'Processing...'
                : `Pay $${packageInfo.discountedPrice.toFixed(2)}`}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const CheckoutModal = () => {
  const { isCheckoutOpen, clientSecret, closeCheckout, setError } =
    usePhotosContext();

  if (!isCheckoutOpen || !clientSecret) {
    return null;
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
    },
  };

  const handleSuccess = () => {
    // Photos are already processed and cleared in CheckoutForm
    closeCheckout();
    // Redirect to thank you page
    window.location.href = '/upload/thank-you';
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm
        onSuccess={handleSuccess}
        onError={handleError}
        onClose={closeCheckout}
      />
    </Elements>
  );
};
