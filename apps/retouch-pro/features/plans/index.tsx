import { Button } from '@t8pro/design-system';
import styles from './styles.module.scss';

const plans = [
  {
    name: '3-Photo Trial',
    price: '$29',
    period: 'Credited to your first month',
    buttonText: 'Try Now',
    buttonVariant: 'primary' as const,
    features: [
      '3 enhanced photos',
      '24-hour turnaround',
      'Platform crops included',
      'Credit toward first month',
    ],
    highlighted: true,
  },
  {
    name: 'Starter',
    price: '$299',
    period: '/mo',
    description: 'Perfect for single location',
    buttonText: 'Get Started',
    buttonVariant: 'secondary' as const,
    features: [
      '6–12 photos/month',
      '48-hour turnaround',
      'Platform crops',
      'Deployment guide',
    ],
  },
  {
    name: 'Growth',
    price: '$599',
    period: '/mo',
    description: 'Everything in Starter plus',
    buttonText: 'Get Growth',
    buttonVariant: 'secondary' as const,
    features: [
      'Everything in Starter',
      '1 animated loop/month',
      'Monthly mini-report',
      'Priority support',
    ],
  },
];

export const Plans = () => {
  return (
    <section className={styles.plans}>
      <div className={styles.container}>
        <h2 className={styles.title}>Choose Your Plan</h2>
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.plan} ${plan.highlighted ? styles.highlighted : ''}`}
            >
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                {plan.description && (
                  <p className={styles.planDescription}>{plan.description}</p>
                )}
                <Button
                  variant={plan.buttonVariant}
                  size="large"
                  className={styles.planButton}
                >
                  {plan.buttonText}
                </Button>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.feature}>
                    <i className="fas fa-check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.whatsappCta}>
          <Button variant="whatsapp" size="large">
            <i className="fab fa-whatsapp" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
