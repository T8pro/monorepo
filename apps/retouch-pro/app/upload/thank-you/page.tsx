import type { Metadata } from 'next';
import { UploadPaidThankYou } from '@/features/upload-paid-thank-you';

export const metadata: Metadata = {
  title: 'Thank You | Retouch Pro Order',
  description:
    'Your payment was confirmed. See what happens next and how to reach our team if you need help.',
};

export default function UploadPaidThankYouPage() {
  return <UploadPaidThankYou />;
}
