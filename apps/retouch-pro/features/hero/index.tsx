'use client';

import { Button, Heading, Text, ThemeToggle } from '@t8pro/design-system';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './styles.module.scss';
import { Logo } from '@/components/logo';
import { FaultyTerminal } from '@/components/faulty-terminal';
import type { HeroProps } from './types';
import { useHero } from './hooks';
import { getIconComponent } from './utils';

export const Hero = (props: HeroProps) => {
  const { content, trustBadges, terminalConfig, splitTitle } = useHero(props);
  const { firstPart, secondPart } = splitTitle(content.title);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <ThemeToggle className={styles.themeToggle} />

        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <div className={styles.heroContent}>
          <Heading
            as="h1"
            size="5xl"
            weight="extrabold"
            color="secondary"
            align="center"
            lineHeight="tight"
            marginBottom="lg"
          >
            {firstPart} <br />
            {secondPart}
          </Heading>
          <Text>{content.subtitle}</Text>

          <div className={styles.ctaSection}>
            <Button variant="primary" size="large">
              {content.ctaText}
            </Button>

            <Text className={styles.ctaSubtext}>{content.ctaSubtext}</Text>

            <div className={styles.ctaContact}>
              <Button
                variant="secondary"
                size="medium"
                className={styles.whatsappButton}
              >
                <FaWhatsapp /> {content.whatsappButtonText}
              </Button>
              <Text className={styles.businessHours}>
                {content.businessHours}
              </Text>
            </div>
          </div>
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
