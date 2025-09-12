import { SelectedImages } from '@/features/selected-images';
import { Upload } from '@/features/upload';
import styles from './styles.module.scss';

export default function UploadPage() {
  return (
    <main id="upload" className={styles.uploadPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.selectedInfo}>
            <span className={styles.icon}>🛒</span>
            <span className={styles.text}>Você selecionou de 10 fotos</span>
          </div>
          <div className={styles.actions}>
            <button className={styles.outlineButton}>
              <span className={styles.icon}>📤</span>
              <span>Be Pro</span>
            </button>
            <button className={styles.primaryButton}>
              <span className={styles.icon}>📤</span>
              <span>Be Pro</span>
            </button>
          </div>
        </div>

        <div className={styles.imageGrid}>
          <SelectedImages />
        </div>

        <div className={styles.footer}>
          <div className={styles.packageInfo}>
            <div className={styles.packageDetails}>
              <h3 className={styles.packageTitle}>
                Pacote selecionado: Quick Fix: até 12 unidades
              </h3>
              <p className={styles.packagePrice}>
                Valor unitário: R$10 - Valor total: R$ 200
              </p>
            </div>
            <button className={styles.outlineButton}>
              <span className={styles.icon}>📤</span>
              <span>Be Pro</span>
            </button>
          </div>
          <div className={styles.pricingActions}>
            <span className={styles.discountPrice}>
              Valor com desconto: R$ 180
            </span>
            <button className={styles.primaryButton}>
              <span className={styles.icon}>📤</span>
              <span>Be Pro</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
