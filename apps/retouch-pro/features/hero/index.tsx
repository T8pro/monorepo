'use client';

import { ThemeToggle, Icon, Heading, Button, Text } from '@t8pro/design-system';
import styles from './styles.module.scss';
import type { HeroProps } from './types';
import { useHero } from './hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Hero = (props: HeroProps) => {
  const { content, handleFileSelect, handleClick, fileInputRef } =
    useHero(props);
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <ThemeToggle className={styles.themeToggle} />

        <div className={styles.heroContent}>
          <div className={styles.contentFrame}>
            <Icon name="image" size={48} className={styles.heroIcon} />

            <Heading as="h1" className={styles.heroTitle} weight="bold">
              {content.title}
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
              {content.secondaryCtaText}
            </Link>

            <Button
              type="button"
              size="large"
              iconLeft={<Icon name="upload" size={24} />}
              onClick={e => {
                e.stopPropagation();
                handleClick();
              }}
            >
              {content.ctaText}
            </Button>

            <Text className={styles.heroSubtext}>{content.ctaSubtext}</Text>
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
