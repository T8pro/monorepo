import { Button, Heading, Text } from '@t8pro/design-system';
import { FaCheck, FaWhatsapp, FaGift, FaStar } from 'react-icons/fa';
import styles from './styles.module.scss';

const plans = [
  {
    name: 'FREE Trial',
    price: '$0',
    period: 'No credit card required',
    description: 'Try before you buy',
    buttonText: 'Get 1 Photo FREE',
    buttonVariant: 'primary' as const,
    features: [
      '1 enhanced photo',
      '24-hour turnaround',
      'Platform crops included',
      'No credit card required',
    ],
    highlighted: true,
    isFree: true,
    category: 'trial',
  },
  {
    name: '1 Photo',
    price: '$10',
    period: 'One-time',
    description: 'Perfect for testing',
    buttonText: 'Order Now',
    buttonVariant: 'secondary' as const,
    features: [
      '1 enhanced photo',
      '24-hour turnaround',
      'Platform crops included',
      'Instant delivery',
    ],
    category: 'pay-as-you-go',
  },
  {
    name: '10 Photos',
    price: '$80',
    period: 'One-time',
    description: 'Best value',
    originalPrice: '$100',
    savings: '20% off',
    buttonText: 'Order Now',
    buttonVariant: 'secondary' as const,
    features: [
      '10 enhanced photos',
      '24-hour turnaround',
      'Platform crops included',
      'Bulk discount applied',
    ],
    popular: true,
    category: 'pay-as-you-go',
  },
  {
    name: '20 Photos',
    price: '$140',
    period: 'One-time',
    description: 'Maximum savings',
    originalPrice: '$200',
    savings: '30% off',
    buttonText: 'Order Now',
    buttonVariant: 'secondary' as const,
    features: [
      '20 enhanced photos',
      '24-hour turnaround',
      'Platform crops included',
      'Best bulk discount',
    ],
    category: 'pay-as-you-go',
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
      '24-hour turnaround',
      'Platform crops',
      'Deployment guide',
    ],
    category: 'subscription',
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
    category: 'subscription',
  },
];

export const Plans = () => {
  const trialPlans = plans.filter(plan => plan.category === 'trial');
  const payAsYouGoPlans = plans.filter(
    plan => plan.category === 'pay-as-you-go',
  );

  return (
    <section className={styles.plans}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="4xl"
          weight="black"
          color="secondary"
          align="center"
          marginBottom="3xl"
        >
          Choose Your Plan
        </Heading>

        {/* Free Trial Section */}
        <div className={styles.section}>
          <Heading
            as="h3"
            size="2xl"
            weight="bold"
            color="secondary"
            align="center"
            marginBottom="lg"
          >
            Start with Our Free Trial
          </Heading>

          <div className={styles.grid}>
            {trialPlans.map((plan, index) => (
              <div
                key={index}
                className={`${styles.plan} ${plan.highlighted ? styles.highlighted : ''} ${
                  plan.popular ? styles.popular : ''
                }`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>
                    <FaStar />
                    Most Popular
                  </div>
                )}

                <div className={styles.planHeader}>
                  <div className={styles.planIcon}>
                    {plan.isFree ? <FaGift /> : null}
                  </div>

                  <Heading
                    as="h4"
                    size="xl"
                    weight="bold"
                    color="gray-900"
                    align="center"
                    marginBottom="sm"
                  >
                    {plan.name}
                  </Heading>

                  <div className={styles.planPrice}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>

                  {plan.originalPrice && (
                    <div className={styles.originalPrice}>
                      <span className={styles.strikethrough}>
                        {plan.originalPrice}
                      </span>
                      <span className={styles.savings}>{plan.savings}</span>
                    </div>
                  )}

                  <Text className={styles.planDescription}>
                    {plan.description}
                  </Text>

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
                      <FaCheck />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pay-As-You-Go Section */}
        <div className={styles.section}>
          <Heading
            as="h3"
            size="2xl"
            weight="bold"
            color="secondary"
            align="center"
            marginBottom="lg"
          >
            Pay-As-You-Go Packages
          </Heading>
          <div className={styles.grid}>
            {payAsYouGoPlans.map((plan, index) => (
              <div
                key={index}
                className={`${styles.plan} ${plan.highlighted ? styles.highlighted : ''} ${
                  plan.popular ? styles.popular : ''
                }`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>
                    <FaStar />
                    Most Popular
                  </div>
                )}

                <div className={styles.planHeader}>
                  <div className={styles.planIcon}>
                    {plan.isFree ? <FaGift /> : null}
                  </div>

                  <Heading
                    as="h4"
                    size="xl"
                    weight="bold"
                    color="gray-900"
                    align="center"
                    marginBottom="sm"
                  >
                    {plan.name}
                  </Heading>

                  <div className={styles.planPrice}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>

                  {plan.originalPrice && (
                    <div className={styles.originalPrice}>
                      <span className={styles.strikethrough}>
                        {plan.originalPrice}
                      </span>
                      <span className={styles.savings}>{plan.savings}</span>
                    </div>
                  )}

                  <Text className={styles.planDescription}>
                    {plan.description}
                  </Text>

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
                      <FaCheck />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.whatsappCta}>
          <Button variant="whatsapp" size="large">
            <FaWhatsapp />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
