'use client';

import { Button, Icon, Heading, Text, Input } from '@t8pro/design-system';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.scss';
import type { EbookProps } from './types';

export const Ebook = (props: EbookProps = {}) => {
  const {
    title = 'Learn how photos can improve your sales',
    subtitle = 'Download FREE E-book',
    imageUrl,
    imageAlt = 'E-book about photos for sales',
    onDownloadAction,
  } = props;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onDownloadAction) {
      onDownloadAction(formData);
    }
  };

  return (
    <section className={styles.ebook}>
      <div className={styles.container}>
        <div className={styles.ebookImage}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className={styles.ebookImageElement}
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <Icon name="book" size={64} className={styles.placeholderIcon} />
              <Text className={styles.placeholderText}>E-book Preview</Text>
            </div>
          )}
        </div>

        <div className={styles.ebookContent}>
          <Heading as="h2" className={styles.ebookTitle}>
            {title}
          </Heading>

          <Text className={styles.ebookSubtitle}>{subtitle}</Text>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleInputChange}
                size="large"
                fullWidth
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleInputChange}
                size="large"
                fullWidth
                required
              />
            </div>

            <Button
              type="submit"
              variant="3"
              size="medium"
              iconLeft="download"
              className={styles.downloadButton}
            >
              Download E-book
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
