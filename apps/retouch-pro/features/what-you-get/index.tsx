import styles from './styles.module.scss';

const features = [
  {
    icon: 'fas fa-check-circle',
    title: 'Enhanced photos ready for all platforms',
    description:
      'Uber Eats, DoorDash, Grubhub, Instagram, Google Business Profile',
  },
  {
    icon: 'fas fa-check-circle',
    title: 'Platform-specific crops',
    description: '1:1, 4:5, 9:16 as needed',
  },
  {
    icon: 'fas fa-check-circle',
    title: '48-hour delivery',
    description: 'Fast turnaround, no waiting',
  },
  {
    icon: 'fas fa-check-circle',
    title: 'Quick deployment guide',
    description: 'Easy instructions for every platform',
  },
];

export const WhatYouGet = () => {
  return (
    <section className={styles.whatYouGet}>
      <div className={styles.container}>
        <h2 className={styles.title}>What You Get</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <i className={`${feature.icon} ${styles.icon}`} />
              <div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
