'use client';

import { Icon, Heading, Button, Text } from '@t8pro/design-system';
import styles from './styles.module.scss';
import { useHero } from './hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Hero = () => {
  const { handleFileSelect, handleClick, fileInputRef } = useHero();
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.contentFrame}>
            <svg
              className={styles.borderSvg}
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <rect
                width="100%"
                height="100%"
                fill="none"
                stroke="var(--color-secondary)"
                strokeWidth="2"
                strokeDasharray="16 16"
                rx="16"
                ry="16"
              />
            </svg>

            <Icon name="image" size={48} className={styles.heroIcon} />

            <Heading as="h1" className={styles.heroTitle} weight="bold">
              Transforme suas fotos comuns em fotos profissionais.
            </Heading>

            <Link
              href="/#before-after"
              className={styles.secondaryLink}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                router.push('/#before-after');
              }}
            >
              Veja o que é possível fazer
            </Link>

            <Button
              type="button"
              size="large"
              variant="1"
              iconLeft="upload"
              onClick={e => {
                e.stopPropagation();
                handleClick();
              }}
            >
              Selecione suas fotos
            </Button>

            <Text className={styles.heroSubtext}>
              Você pode enviar até 24 fotos de uma vez
            </Text>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={e => handleFileSelect(e.target.files)}
            className={styles.hiddenFileInput}
            aria-label="Select photos to upload"
          />
        </div>
      </div>
    </section>
  );
};
