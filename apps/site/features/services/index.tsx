import { Card, Heading } from '@t8pro/design-system';
import { ADDITIONAL_SERVICES, SERVICES } from './constants';
import styles from './styles.module.scss';

export const Services = () => {
  return (
    <section id="what-we-do" className={styles.services}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Heading
            as="h2"
            size="5xl"
            weight="black"
            color="secondary"
            align="center"
            marginBottom="none"
            uppercase
            italic
            letterSpacing="wider"
          >
            WHAT WE DO
          </Heading>
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
                <Heading
                  as="h3"
                  size="base"
                  weight="bold"
                  color="primary"
                  marginBottom="sm"
                >
                  {service.title}
                </Heading>
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
