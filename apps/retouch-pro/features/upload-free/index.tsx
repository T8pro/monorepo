'use client';

import { Button, Card, Heading, Icon, Input, Text } from '@t8pro/design-system';
import { useRef } from 'react';
import { useUploadFree } from './hooks';
import styles from './styles.module.scss';

export const UploadFree = () => {
  const {
    formState,
    fieldErrors,
    formError,
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
  } = useUploadFree();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <section className={styles.uploadFree}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <Heading as="h1" size="3xl" weight="bold" color="secondary">
            Upload One Photo On Us
          </Heading>
          <Text size="lg" color="secondary">
            Put our retouching team to the test. Share a single image and your
            contact details—we&apos;ll send a polished result within one business
            day.
          </Text>
        </div>

        <Card className={styles.formCard}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="upload-free-name">
                Name
              </label>
              <Input
                id="upload-free-name"
                name="name"
                placeholder="Your full name"
                value={formState.name}
                onChange={handleInputChange('name')}
                fullWidth
              />
              {fieldErrors.name && (
                <span className={styles.errorText}>{fieldErrors.name}</span>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="upload-free-email">
                Email
              </label>
              <Input
                id="upload-free-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formState.email}
                onChange={handleInputChange('email')}
                fullWidth
              />
              {fieldErrors.email && (
                <span className={styles.errorText}>{fieldErrors.email}</span>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="upload-free-phone">
                Phone
              </label>
              <Input
                id="upload-free-phone"
                name="phone"
                placeholder="(+1) 555-555-5555"
                value={formState.phone}
                onChange={handleInputChange('phone')}
                fullWidth
              />
              {fieldErrors.phone && (
                <span className={styles.errorText}>{fieldErrors.phone}</span>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="upload-free-company">
                Company Name
              </label>
              <Input
                id="upload-free-company"
                name="company"
                placeholder="Your brand or restaurant"
                value={formState.company}
                onChange={handleInputChange('company')}
                fullWidth
              />
              {fieldErrors.company && (
                <span className={styles.errorText}>{fieldErrors.company}</span>
              )}
            </div>

            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label className={styles.label} htmlFor="upload-free-photo">
                Upload a Photo
              </label>
              <div
                role="button"
                tabIndex={0}
                className={styles.dropzone}
                data-dragging={isDragging || undefined}
                data-has-photo={selectedPhoto ? true : undefined}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    fileInputRef.current?.click();
                  }
                }}
              >
                {previewUrl && selectedPhoto ? (
                  <div className={styles.preview}>
                    <img
                      src={previewUrl}
                      alt="Selected preview"
                      className={styles.previewImage}
                    />
                    <Text size="sm" color="secondary">
                      {selectedPhoto.name} · {(selectedPhoto.size / 1024).toFixed(0)} KB
                    </Text>
                    <Button
                      type="button"
                      variant="3"
                      style="outline"
                      size="small"
                      iconLeft="close"
                      onClick={event => {
                        event.stopPropagation();
                        handleRemovePhoto();
                      }}
                    >
                      Remove photo
                    </Button>
                  </div>
                ) : (
                  <div className={styles.preview}>
                    <Icon name="add_a_photo" size={40} />
                    <Text size="sm" color="secondary">
                      Drag &amp; drop or click to upload a single image (10MB max).
                    </Text>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  id="upload-free-photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  className={styles.hiddenInput}
                  onChange={event => handleFileSelect(event.target.files)}
                />
              </div>
              {fieldErrors.photo && (
                <span className={styles.errorText}>{fieldErrors.photo}</span>
              )}
            </div>

            <div className={`${styles.actions} ${styles.fullWidth}`}>
              <Button
                type="submit"
                size="large"
                variant="2"
                iconLeft="rocket_launch"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send my free retouch'}
              </Button>

              <div className={styles.feedback}>
                {formError && (
                  <span className={styles.globalError}>{formError}</span>
                )}
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};
