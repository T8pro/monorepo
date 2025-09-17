'use client';

import { useMutation } from '@tanstack/react-query';
import {
  ChangeEvent,
  DragEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { UploadFreeFormState, UploadFreeSubmitPayload } from './types';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const initialFormState: UploadFreeFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
};

type FieldErrors = Partial<Record<keyof UploadFreeFormState | 'photo', string>>;

type VerifyResponse = {
  email?: string;
  exists: boolean;
};

type SubmitResponse = {
  success: boolean;
  receivedAt: string;
};

const parseError = async (response: Response) => {
  try {
    const data = await response.json();
    return data?.message || 'Unexpected server response.';
  } catch {
    return response.statusText || 'Unexpected server response.';
  }
};

export const useUploadFree = () => {
  const [formState, setFormState] =
    useState<UploadFreeFormState>(initialFormState);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const verifyMutation = useMutation<VerifyResponse, Error, { email: string }>({
    mutationKey: ['upload-free', 'verify'],
    mutationFn: async ({ email }) => {
      const response = await fetch('/api/upload-free/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const message = await parseError(response);
        throw new Error(message);
      }

      return (await response.json()) as VerifyResponse;
    },
  });

  // TODO: Wire this mutation to a production API once backend support exists.
  const submitMutation = useMutation<
    SubmitResponse,
    Error,
    UploadFreeSubmitPayload
  >({
    mutationKey: ['upload-free', 'submit'],
    mutationFn: async payload => {
      const response = await fetch('/api/upload-free/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const message = await parseError(response);
        throw new Error(message);
      }

      return (await response.json()) as SubmitResponse;
    },
  });

  const revokePreview = useCallback((url: string | null) => {
    if (url) {
      URL.revokeObjectURL(url);
    }
  }, []);

  useEffect(() => {
    return () => {
      revokePreview(previewUrl);
    };
  }, [previewUrl, revokePreview]);

  const handleInputChange = useCallback(
    (field: keyof UploadFreeFormState) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFormState(prev => ({ ...prev, [field]: value }));
        setFieldErrors(prev => ({ ...prev, [field]: undefined }));
      },
    [],
  );

  const attachPhoto = useCallback(
    (file: File) => {
      if (!file.type.startsWith('image/')) {
        setFieldErrors(prev => ({
          ...prev,
          photo: 'Only image files are allowed.',
        }));
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setFieldErrors(prev => ({
          ...prev,
          photo: 'Image must be 10MB or less.',
        }));
        return;
      }

      revokePreview(previewUrl);
      setSelectedPhoto(file);
      setPreviewUrl(URL.createObjectURL(file));
      setFieldErrors(prev => ({ ...prev, photo: undefined }));
    },
    [previewUrl, revokePreview],
  );

  const handleFileSelect = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) {
        return;
      }

      const [file] = files;
      attachPhoto(file as File);
    },
    [attachPhoto],
  );

  const handleRemovePhoto = useCallback(() => {
    revokePreview(previewUrl);
    setSelectedPhoto(null);
    setPreviewUrl(null);
  }, [previewUrl, revokePreview]);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);
      handleFileSelect(event.dataTransfer.files);
    },
    [handleFileSelect],
  );

  const validateForm = useCallback(() => {
    const errors: FieldErrors = {};

    if (!formState.name.trim()) {
      errors.name = 'Name is required.';
    }

    if (!formState.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Enter a valid email address.';
    }

    if (!formState.phone.trim()) {
      errors.phone = 'Phone is required.';
    }

    if (!formState.company.trim()) {
      errors.company = 'Company name is required.';
    }

    if (!selectedPhoto) {
      errors.photo = 'Please upload a photo to continue.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formState, selectedPhoto]);

  const resetForm = useCallback(() => {
    setFormState(initialFormState);
    setSelectedPhoto(null);
    setFieldErrors({});
    setIsDragging(false);
    revokePreview(previewUrl);
    setPreviewUrl(null);
  }, [previewUrl, revokePreview]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setFormError(null);
      setFormSuccess(null);

      if (!validateForm() || !selectedPhoto) {
        if (!selectedPhoto) {
          setFieldErrors(prev => ({
            ...prev,
            photo: 'Please upload a photo to continue.',
          }));
        }
        setFormError('Please fix the highlighted fields.');
        return;
      }

      try {
        const verification = await verifyMutation.mutateAsync({
          email: formState.email,
        });

        if (verification.exists) {
          setFieldErrors(prev => ({
            ...prev,
            email: 'This email has already requested a free upload.',
          }));
          setFormError('This email has already been used for a free upload.');
          return;
        }

        await submitMutation.mutateAsync({
          ...formState,
          photo: {
            name: selectedPhoto.name,
            size: selectedPhoto.size,
            type: selectedPhoto.type,
          },
        });

        resetForm();
        setFormSuccess('Thanks! Your free retouch request is on the way.');
      } catch (error) {
        setFormError(
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
        );
      }
    },
    [
      formState,
      resetForm,
      selectedPhoto,
      submitMutation,
      validateForm,
      verifyMutation,
    ],
  );

  const isSubmitting = useMemo(
    () => verifyMutation.isPending || submitMutation.isPending,
    [submitMutation.isPending, verifyMutation.isPending],
  );

  return {
    formState,
    fieldErrors,
    formError,
    formSuccess,
    handleInputChange,
    handleSubmit,
    handleFileSelect,
    handleRemovePhoto,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    isDragging,
    isSubmitting,
    previewUrl,
    selectedPhoto,
  };
};
