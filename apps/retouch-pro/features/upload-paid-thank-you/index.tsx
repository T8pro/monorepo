'use client';

import { Heading, Icon, Text } from '@t8pro/design-system';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import { PENDING_UPLOAD_STORAGE_KEY } from '@/features/upload-images/context/constants';
import type { PendingUploadPayload } from '@/features/upload-images/context/types';

const infoCards = [
  {
    icon: 'cloud_upload',
    title: 'Uploading Your Photos',
    highlight: 'This takes just a moment',
    description:
      'We are securely transferring your files to our retouching team and logging them against your order.',
  },
  {
    icon: 'schedule',
    title: 'Production Timeline',
    highlight: 'Delivery within 48 hours',
    description:
      'Most paid orders are completed in two business days. Need it sooner? Reply to the confirmation email and let us know.',
  },
  {
    icon: 'support_agent',
    title: 'Need Anything Else?',
    highlight: 'We are here to help',
    description:
      'Share references, request tweaks, or ask questions at any time. Our specialists will follow up quickly.',
  },
] as const;

const parseError = async (response: Response) => {
  try {
    const data = await response.json();
    return data?.message || 'Unexpected server response.';
  } catch {
    return response.statusText || 'Unexpected server response.';
  }
};

export const UploadPaidThankYou = () => {
  const [pendingUpload, setPendingUpload] =
    useState<PendingUploadPayload | null>(null);
  const [uploadStatus, setUploadStatus] = useState<
    'idle' | 'uploading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const stored = sessionStorage.getItem(PENDING_UPLOAD_STORAGE_KEY);

    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored) as PendingUploadPayload;
      setPendingUpload(parsed);
      const controller = new AbortController();

      const uploadPhotos = async () => {
        setUploadStatus('uploading');
        try {
          const response = await fetch('/api/orders/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(parsed),
            signal: controller.signal,
          });

          if (response.ok) {
            setUploadStatus('success');
            sessionStorage.removeItem(PENDING_UPLOAD_STORAGE_KEY);
            return;
          }

          if (response.status === 404) {
            setUploadStatus('success');
            sessionStorage.removeItem(PENDING_UPLOAD_STORAGE_KEY);
            return;
          }

          const message = await parseError(response);
          throw new Error(message);
        } catch (error) {
          if (controller.signal.aborted) {
            return;
          }

          setErrorMessage(
            error instanceof Error
              ? error.message
              : 'We could not deliver your photos automatically. Please contact our team.',
          );
          setUploadStatus('error');
        }
      };

      void uploadPhotos();

      return () => {
        controller.abort();
      };
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'We could not resume your upload. Please contact support.',
      );
      setUploadStatus('error');
    }
  }, []);

  const statusMessage = useMemo(() => {
    if (!pendingUpload) {
      return null;
    }

    switch (uploadStatus) {
      case 'uploading':
        return `Sending ${pendingUpload.photoCount} photos to our API...`;
      case 'success':
        return `Your ${pendingUpload.photoCount} photos were sent successfully.`;
      case 'error':
        return errorMessage;
      default:
        return null;
    }
  }, [pendingUpload, uploadStatus, errorMessage]);

  const statusClassName = useMemo(() => {
    if (uploadStatus === 'error') {
      return `${styles.statusMessage} ${styles.statusMessageError}`;
    }

    return styles.statusMessage;
  }, [uploadStatus]);

  return (
    <section className={styles.thankYou}>
      <div className={styles.container}>
        <Heading as="h1" size="3xl" weight="bold" className={styles.title}>
          Thank you for your order!
        </Heading>
        <Text size="lg" className={styles.subtitle}>
          Your payment was confirmed and your photos are already in our
          retouching queue. We will keep you updated by email and let you know
          the moment everything is ready to download.
        </Text>

        {pendingUpload && (
          <div className={styles.summary}>
            <Text className={styles.summaryTitle}>Order summary</Text>
            <Text size="sm" className={styles.summaryDetail}>
              {pendingUpload.photoCount} photos · Package:{' '}
              {pendingUpload.packageType}
              {' · '}Total: ${pendingUpload.amount.toFixed(0)}
            </Text>
          </div>
        )}

        {statusMessage && (
          <Text size="sm" className={statusClassName}>
            {statusMessage}
          </Text>
        )}

        <div className={styles.infoGrid}>
          {infoCards.map(card => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardIcon}>
                <Icon name={card.icon} size={28} />
              </div>
              <Heading
                as="h2"
                size="lg"
                weight="semibold"
                className={styles.cardTitle}
              >
                {card.title}
              </Heading>
              <Text className={styles.cardHighlight}>{card.highlight}</Text>
              <Text size="sm" className={styles.cardDescription}>
                {card.description}
              </Text>
            </div>
          ))}
        </div>
        <div className={styles.social}>
          <Text className={styles.socialPrompt}>Need support?</Text>
          <Link href="mailto:support@t8pro.com" className={styles.socialLink}>
            <Icon name="support_agent" size={20} />
            support@t8pro.com
          </Link>
        </div>
      </div>
    </section>
  );
};
