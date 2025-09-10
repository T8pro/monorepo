import { Card } from '@/components/card';
import { ADDITIONAL_SERVICES, SERVICES } from './constants';
import styles from './styles.module.scss';

export const Services = () => {
  return (
    <section id="what-we-do" className={styles.services}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>WHAT WE DO</h2>
        </header>

        <div className={styles.mainServices}>
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                variant="service"
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}>{<Icon />}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className={styles.additionalServices}>
          {ADDITIONAL_SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={index} className={styles.additionalService}>
                <div className={styles.additionalIcon}>{<Icon />}</div>
                <div className={styles.additionalContent}>
                  <p className={styles.additionalLine}>
                    <strong>{service.title}: </strong>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
