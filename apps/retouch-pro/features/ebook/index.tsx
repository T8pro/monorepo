'use client';

import Image from 'next/image';
import { Button, Icon, Heading, Text } from '@t8pro/design-system';
import styles from './styles.module.scss';
import type { EbookProps } from './types';
import { DEFAULT_EBOOK_CONTENT, EBOOK_BUTTONS } from './constants';

export const Ebook = (props: EbookProps = {}) => {
  const {
    title = DEFAULT_EBOOK_CONTENT.title,
    subtitle = DEFAULT_EBOOK_CONTENT.subtitle,
    imageUrl,
    imageAlt = DEFAULT_EBOOK_CONTENT.imageAlt,
    buttons = EBOOK_BUTTONS,
  } = props;

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

          <div className={styles.buttonGroup}>
            {buttons.map(button => (
              <Button
                key={button.id}
                variant={button.variant}
                size="medium"
                iconLeft={button.icon}
                className={styles.button}
                onClick={button.onClick}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
