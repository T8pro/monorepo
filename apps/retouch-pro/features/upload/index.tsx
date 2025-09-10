import { Button, Heading } from '@t8pro/design-system';
import { FaCloudUploadAlt } from 'react-icons/fa';
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
          <FaCloudUploadAlt />
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
          <p className={styles.uploadDescription}>
            You can drag photos straight from your desktop or paste a link
          </p>
          <Button variant="primary" size="large">
            Browse Files
          </Button>
          <p className={styles.uploadInfo}>
            Supported formats: JPG, PNG, HEIC • Max 10MB per file
          </p>
        </div>
      </div>
    </section>
  );
};
