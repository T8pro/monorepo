import { Heading, Text } from '@t8pro/design-system';
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
        <Heading
          as="h2"
          size="4xl"
          weight="black"
          color="secondary"
          align="center"
          marginBottom="3xl"
        >
          How It Works
        </Heading>
        <div className={styles.grid}>
          {steps.map(step => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <Heading
                as="h3"
                size="xl"
                weight="extrabold"
                color="secondary"
                align="center"
              >
                {step.title}
              </Heading>
              <Text className={styles.stepDescription}>{step.description}</Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
