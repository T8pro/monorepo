import { Pricing } from '@/features/pricing';
import { SelectedImages } from '@/features/upload-images';

export default function UploadPage() {
  return (
    <main id="upload">
      <SelectedImages />
      <Pricing />
    </main>
  );
}
