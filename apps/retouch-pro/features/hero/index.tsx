'use client';

import { useRef } from 'react';
import { Button, Heading, Text, ThemeToggle } from '@t8pro/design-system';
import { FaWhatsapp, FaImage } from 'react-icons/fa';
import styles from './styles.module.scss';
import { Logo } from '@/components/logo';
import { FaultyTerminal } from '@/components/faulty-terminal';
import type { HeroProps } from './types';
import { useHero } from './hooks';
import { getIconComponent } from './utils';
import Link from 'next/link';

export const Hero = (props: HeroProps) => {
  const {
    content,
    trustBadges,
    terminalConfig,
    splitTitle,
    dragDropState,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileSelect,
    handleClick,
    fileInputRef,
  } = useHero(props);
  const { firstPart, secondPart } = splitTitle(content.title);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <ThemeToggle className={styles.themeToggle} />

        <div className={styles.logoContainer}>
          <Logo />
        </div>

        {/* Drag and Drop Area */}
        <div
          className={`${styles.dragDropArea} ${
            dragDropState.isDragOver ? styles['dragDropArea--dragOver'] : ''
          } ${dragDropState.isDragActive ? styles['dragDropArea--active'] : ''}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-label="Upload photos"
        >
          <div className={styles.dragDropContent}>
            <FaImage className={styles.dragDropIcon} />

            <div>
              <h2 className={styles.dragDropTitle}>{firstPart}</h2>
              <h3 className={styles.dragDropSubtitle}>{secondPart}</h3>
            </div>

            <Link href="/#before-after" className={styles.dragDropLink}>
              {content.secondaryCtaText}
            </Link>

            <button
              type="button"
              className={styles.dragDropButton}
              onClick={e => {
                e.stopPropagation();
                handleClick();
              }}
            >
              {content.ctaText}
            </button>

            <p className={styles.dragDropHint}>{content.ctaSubtext}</p>
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

        <div className={styles.trustBadges}>
          {trustBadges.map((badge, index) => {
            const IconComponent = getIconComponent(badge.icon);
            return (
              <div key={index} className={styles.badge}>
                {IconComponent && (
                  <IconComponent style={{ color: badge.color }} />
                )}
                {badge.text}
              </div>
            );
          })}
        </div>
      </div>

      <FaultyTerminal {...terminalConfig} />
    </section>
  );
};
