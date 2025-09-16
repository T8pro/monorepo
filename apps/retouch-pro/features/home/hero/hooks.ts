/* eslint-disable no-console */
import { useTheme } from '@t8pro/design-system';
import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { usePhotosContext } from '@/features/upload-images/context';

/**
 * Custom hook for Hero component logic
 * @param customContent - Optional custom content to override defaults
 * @returns Hero data and configuration
 */
export const useHero = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { addPhotos } = usePhotosContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

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
        console.warn('Maximum 24 photos allowed.');
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

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        handleFileSelect(files);
      }
    },
    [handleFileSelect],
  );

  return {
    terminalConfig,
    theme,
    handleFileSelect,
    handleClick,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    isDragOver,
    fileInputRef,
  };
};
