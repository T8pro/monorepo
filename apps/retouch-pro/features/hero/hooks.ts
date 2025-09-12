import { useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@t8pro/design-system';
import { usePhotos } from '../../contexts/photos-upload/context';

/**
 * Custom hook for Hero component logic
 * @param customContent - Optional custom content to override defaults
 * @returns Hero data and configuration
 */
export const useHero = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { addPhotos } = usePhotos();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const terminalConfig = {
    scale: 3,
    timeScale: 1,
    scanlineIntensity: 1,
    curvature: 0.2,
    tint: theme === 'light' ? '#181914' : '#cbd4c6',
    mouseReact: true,
    mouseStrength: 1,
    pageLoadAnimation: false,
    brightness: 0.4,
    background: theme === 'light' ? '#cbd4c6' : '#181914',
  };

  const validateFiles = useCallback((files: FileList): File[] => {
    const validFiles: File[] = [];
    const maxSize = 10 * 1024 * 1024; // 10MB per file
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

    Array.from(files).forEach(file => {
      if (file.size > maxSize) {
        console.warn(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }
      if (!allowedTypes.includes(file.type)) {
        console.warn(`File ${file.name} has an unsupported format.`);
        return;
      }
      if (validFiles.length >= 24) {
        console.warn(`Maximum 24 photos allowed.`);
        return;
      }
      validFiles.push(file);
    });

    return validFiles;
  }, []);

  const processFiles = useCallback(
    (files: File[]) => {
      if (files && files.length === 0) return;

      const validFiles = validateFiles(files as unknown as FileList);
      if (validFiles.length > 0) {
        addPhotos(validFiles);
        router.push('/upload');
      }
    },
    [addPhotos, router, validateFiles],
  );

  const handleFileSelect = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      processFiles(Array.from(files));
    },
    [processFiles],
  );

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return {
    terminalConfig,
    theme,
    handleFileSelect,
    handleClick,
    fileInputRef,
  };
};
