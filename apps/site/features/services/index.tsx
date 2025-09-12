import { Card, Heading, Text, Icon } from '@t8pro/design-system';
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
            italic
            letterSpacing="wider"
          >
            WHAT WE DO
          </Heading>
        </header>

        <div className={styles.mainServices}>
          {SERVICES.map((service, index) => {
            return (
              <Card
                key={index}
                variant="service"
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}>
                  <Icon name={service.icon} size={32} />
                </div>
                <Heading
                  as="h3"
                  size="base"
                  weight="bold"
                  color="primary"
                  marginBottom="sm"
                >
                  {service.title}
                </Heading>
                <Text className={styles.serviceDescription}>
                  {service.description}
                </Text>
              </Card>
            );
          })}
        </div>

        <div className={styles.additionalServices}>
          {ADDITIONAL_SERVICES.map((service, index) => {
            return (
              <div key={index} className={styles.additionalService}>
                <div className={styles.additionalIcon}>
                  <Icon name={service.icon} size={24} />
                </div>
                <div className={styles.additionalContent}>
                  <Text className={styles.additionalLine}>
                    <strong>{service.title}: </strong>
                    {service.description}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
