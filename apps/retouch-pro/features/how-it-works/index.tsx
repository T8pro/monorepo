import { Heading, Text } from '@t8pro/design-system';
import { FaCloudUploadAlt, FaMagic, FaRocket } from 'react-icons/fa';
import styles from './styles.module.scss';

const steps = [
  {
    number: 1,
    title: 'Upload your photos',
    description: 'Drag-and-drop, Dropbox/Drive, or WhatsApp us a link',
    timeEstimate: '1 min',
    userAction: 'Click upload and provide 6-12 photos',
    icon: <FaCloudUploadAlt />,
  },
  {
    number: 2,
    title: 'We enhance and crop for each platform',
    description: 'AI-driven enhancement with human quality check',
    timeEstimate: '24 hrs',
    userAction: 'Wait for notification',
    icon: <FaMagic />,
    details:
      'Photos enhanced with brightness/contrast adjustment, color correction, sharpening, and cropped specifically for Uber Eats, DoorDash, Instagram, and Google',
  },
  {
    number: 3,
    title: 'You deploy with our quick guide',
    description: 'Ready-to-upload images + deployment guide',
    timeEstimate: 'Instant',
    userAction: 'Download and update menu everywhere',
    icon: <FaRocket />,
    details:
      'Optional add-on: Let us help you upload them to each platform for a fee',
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
          marginBottom="lg"
        >
          How It Works
        </Heading>
        <Text
          size="lg"
          marginBottom="3xl"
          className={styles.sectionDescription}
        >
          Simple 3-step process to transform your menu photos
        </Text>

        <div className={styles.flowDiagram}>
          <div className={styles.flowLine}></div>
          <div className={styles.grid}>
            {steps.map(step => (
              <div key={step.number} className={styles.step}>
                <div className={styles.stepIcon}>{step.icon}</div>
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
                <Text className={styles.stepDescription}>
                  {step.description}
                </Text>

                <div className={styles.stepDetails}>
                  <div className={styles.timeEstimate}>
                    <strong>Time:</strong> {step.timeEstimate}
                  </div>
                  <div className={styles.userAction}>
                    <strong>You:</strong> {step.userAction}
                  </div>
                  {step.details && (
                    <div className={styles.additionalDetails}>
                      {step.details}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
