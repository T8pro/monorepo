import Image from 'next/image';
import { Heading } from '@t8pro/design-system';
import { processSteps } from './constants';
import styles from './styles.module.scss';

export const Process = () => {
  return (
    <section id="how-we-work" className={styles.process}>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <Heading
              as="h2"
              size="4xl"
              weight="black"
              color="primary"
              align="center"
              marginBottom="none"
              uppercase
              italic
              letterSpacing="wider"
            >
              HOW WE WORK
            </Heading>
          </header>

          <div className={styles.steps}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <Heading
                    as="h3"
                    size="lg"
                    weight="extrabold"
                    marginBottom="sm"
                    color="primary"
                  >
                    {step.title}
                  </Heading>

                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/how-we-work.jpg"
            alt=""
            width={600}
            height={800}
            className={styles.processImage}
          />
        </div>
      </div>
    </section>
  );
};
