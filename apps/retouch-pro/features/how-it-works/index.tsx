import styles from './styles.module.scss';

const steps = [
  {
    number: 1,
    title: 'Upload 6–12 photos',
    description: 'Drag-and-drop, Dropbox/Drive, or text us a link',
  },
  {
    number: 2,
    title: 'We enhance and crop for each platform',
    description: 'AI + human touch + QA',
  },
  {
    number: 3,
    title: 'You deploy with our quick guide',
    description: 'Step-by-step instructions included',
  },
];

export const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.title}>How It Works</h2>
        <div className={styles.grid}>
          {steps.map(step => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
