import { Button, Heading, Text, Icon } from '@t8pro/design-system';
import styles from './styles.module.scss';

export const Upload = () => {
  return (
    <section className={styles.upload}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="3xl"
          weight="bold"
          color="gray-900"
          align="center"
          marginBottom="lg"
        >
          Upload Your Photos
        </Heading>
        <div className={styles.uploadArea}>
          <Icon name="cloud_upload" size={48} />
          <Heading
            as="h3"
            size="xl"
            weight="semibold"
            color="gray-900"
            align="center"
            marginBottom="sm"
          >
            Drag and drop your photos here
          </Heading>
          <Text className={styles.uploadDescription}>
            You can drag photos straight from your desktop or paste a link
          </Text>
          <Button variant="1" size="large">
            Browse Files
          </Button>
          <Text className={styles.uploadInfo}>
            Supported formats: JPG, PNG, HEIC • Max 10MB per file
          </Text>
        </div>
      </div>
    </section>
  );
};
