import Image from 'next/image';
import { Heading, Text } from '@t8pro/design-system';
import styles from './styles.module.scss';
import { TerminalAnimated } from './terminal-animated';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <Heading
              as="h1"
              size="5xl"
              weight="black"
              color="secondary"
              lineHeight="tight"
              marginBottom="lg"
              uppercase
              letterSpacing="wide"
            >
              <span className={styles.creative}>CREATIVE SOLUTIONS</span>
              <span>
                FOR{' '}
                <span className={styles.highlight}>AMBITIOUS BUSINESSES</span>!
              </span>
            </Heading>

            <Text className={styles.lead}>
              At T8 Pro, we empower businesses of all sizes with innovative
              solutions designed to propel your brand to new heights. Whether
              you&apos;re a startup ready to make your mark, a mid-size
              enterprise looking to scale, or a large corporation aiming for
              industry leadership, we offer a full suite of services to fit your
              vision and needs.
            </Text>

            <TerminalAnimated />
          </div>
        </div>

        <Image
          className={styles.symbol}
          src="/symbol.svg"
          alt="Symbol"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};
