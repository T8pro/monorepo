export interface UploadFreeFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export interface UploadFreeSubmitPayload extends UploadFreeFormState {
  photo: {
    name: string;
    size: number;
    type: string;
  };
}
