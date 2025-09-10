import Image from 'next/image';
import { processSteps } from './constants';
import styles from './styles.module.scss';

export const Process = () => {
  return (
    <section id="how-we-work" className={styles.process}>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h2 className={styles.title}>HOW WE WORK</h2>
          </header>

          <div className={styles.steps}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
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
