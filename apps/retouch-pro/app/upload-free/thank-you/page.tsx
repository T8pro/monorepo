import type { Metadata } from 'next';
import { UploadFreeThankYou } from '@/features/upload-free-thank-you';

export const metadata: Metadata = {
  title: 'Thank You | Retouch Free Upload',
  description:
    'Thanks for trying Retouch Pro. Discover what happens after you send your free photo.',
};

export default function UploadFreeThankYouPage() {
  return <UploadFreeThankYou />;
}
