import { Button } from '@t8pro/design-system';
import styles from './styles.module.scss';

export const Upload = () => {
  return (
    <section className={styles.upload}>
      <div className={styles.container}>
        <h2 className={styles.title}>Upload Your Photos</h2>
        <div className={styles.uploadArea}>
          <i className="fas fa-cloud-upload-alt" />
          <h3 className={styles.uploadTitle}>Drag and drop your photos here</h3>
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
