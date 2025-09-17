import type { Metadata } from 'next';
import { UploadFree } from '@/features/upload-free';

export const metadata: Metadata = {
  title: 'Try Retouch Pro For Free',
  description:
    'Upload a single photo, share your details, and experience our retouching workflow without any commitment.',
};

export default function UploadFreePage() {
  return <UploadFree />;
}
