import { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@t8pro/design-system';
import { usePhotos } from '../../contexts/photos-upload/context';
import type {
  HeroContent,
  TerminalConfig,
  UseHeroReturn,
  DragDropState,
} from './types';
import { DEFAULT_HERO_CONTENT, TRUST_BADGES } from './constants';
import { splitTitle } from './utils';

/**
 * Custom hook for Hero component logic
 * @param customContent - Optional custom content to override defaults
 * @returns Hero data and configuration
 */
export const useHero = (
  customContent: Partial<HeroContent> = {},
): UseHeroReturn => {
  const { theme } = useTheme();
  const router = useRouter();
  const { addPhotos } = usePhotos();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const content: HeroContent = { ...DEFAULT_HERO_CONTENT, ...customContent };
  const trustBadges = TRUST_BADGES;

  const [dragDropState, setDragDropState] = useState<DragDropState>({
    isDragOver: false,
    isDragActive: false,
    dragCounter: 0,
  });

  const terminalConfig: TerminalConfig = {
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

  const validateFiles = useCallback(
    (files: FileList): File[] => {
      const validFiles: File[] = [];
      const maxSize = 10 * 1024 * 1024; // 10MB per file
      const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
      ];

      Array.from(files).forEach(file => {
        if (file.size > maxSize) {
          console.warn(`File ${file.name} is too large. Maximum size is 10MB.`);
          return;
        }
        if (!allowedTypes.includes(file.type)) {
          console.warn(`File ${file.name} has an unsupported format.`);
          return;
        }
        if (validFiles.length >= content.maxPhotos) {
          console.warn(`Maximum ${content.maxPhotos} photos allowed.`);
          return;
        }
        validFiles.push(file);
      });

      return validFiles;
    },
    [content.maxPhotos],
  );

  const processFiles = useCallback(
    (files: File[]) => {
      if (files.length === 0) return;

      const validFiles = validateFiles(files as any);
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

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDragDropState(prev => ({
      ...prev,
      dragCounter: prev.dragCounter + 1,
      isDragOver: true,
      isDragActive: true,
    }));
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDragDropState(prev => {
      const newCounter = prev.dragCounter - 1;
      return {
        ...prev,
        dragCounter: newCounter,
        isDragOver: newCounter > 0,
        isDragActive: newCounter > 0,
      };
    });
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      setDragDropState({
        isDragOver: false,
        isDragActive: false,
        dragCounter: 0,
      });

      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        handleFileSelect(files);
      }
    },
    [handleFileSelect],
  );

  return {
    content,
    trustBadges,
    terminalConfig,
    theme,
    splitTitle,
    dragDropState,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileSelect,
    handleClick,
    fileInputRef,
  };
};
