import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import type { EbookFormData } from '../types';

export type DownloadEbookResponse = {
  success: boolean;
  message: string;
};

const mutationFn = async (
  payload: EbookFormData,
): Promise<DownloadEbookResponse> => {
  const response = await fetch('/api/ebook/download', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = 'Unable to request the e-book. Please try again later.';

    try {
      const data = (await response.json()) as Partial<DownloadEbookResponse>;
      if (data?.message) {
        message = data.message;
      }
    } catch {
      // Ignore JSON parse errors and fall back to default message
    }

    throw new Error(message);
  }

  return (await response.json()) as DownloadEbookResponse;
};

export const useMutationDownloadEbook = () => {
  return useMutation({
    mutationFn,
    onSuccess: data => {
      toast.success(data.message ?? 'We emailed the e-book to you.');
    },
    onError: error => {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to request the e-book. Please try again later.';

      toast.error(message);
    },
  });
};
