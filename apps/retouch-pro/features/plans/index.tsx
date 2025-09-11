import { Button, Heading, Text } from '@t8pro/design-system';
import { FaCheck, FaWhatsapp, FaGift, FaStar } from 'react-icons/fa';
import styles from './styles.module.scss';

const trialPlan = {
  name: 'FREE Trial',
  price: '$0',
  period: 'No credit card required',
  description: 'Send us 1 real photo and see how it works',
  buttonText: 'Get 1 Photo FREE',
  buttonVariant: 'primary' as const,
  features: [
    '1 enhanced photo',
    '48-hour turnaround',
    'Platform crops included',
    'No credit card required',
  ],
  highlighted: true,
  isFree: true,
  category: 'trial',
};

const revenuePackages = [
  {
    name: 'QUICK FIX',
    emoji: '🚀',
    subtitle: 'Most Popular',
    photoCount: '6 Photos',
    price: '$60',
    description: 'Perfect for testing top performers',
    buttonText: 'START WITH QUICK FIX - $60',
    buttonVariant: 'primary' as const,
    features: [
      '48-hour turnaround',
      '1 revision included',
      'Platform crops included',
      'Typical ROI: 300%+ in first month',
    ],
    popular: true,
    category: 'revenue-package',
  },
  {
    name: 'GROWTH ACCELERATOR',
    emoji: '📈',
    subtitle: '',
    photoCount: '12 Photos',
    price: '$115',
    description: 'Cover your core menu items',
    buttonText: 'Choose Growth Accelerator',
    buttonVariant: 'secondary' as const,
    features: [
      '48-hour turnaround',
      '1 revision included',
      'Platform crops included',
      'Typical ROI: 250%+ in first month',
    ],
    category: 'revenue-package',
  },
  {
    name: 'PROFIT MAXIMIZER',
    emoji: '💰',
    subtitle: 'Best Value',
    photoCount: '24 Photos',
    price: '$220',
    description: 'Complete menu transformation',
    buttonText: 'Choose Profit Maximizer',
    buttonVariant: 'secondary' as const,
    features: [
      '3 business day turnaround',
      '2 revision rounds',
      'Platform crops included',
      'Bonus: Hero variants for top items',
      'Typical ROI: 400%+ in first month',
    ],
    bestValue: true,
    category: 'revenue-package',
  },
];

export const Plans = () => {
  return (
    <section className={styles.plans}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="4xl"
          weight="black"
          color="secondary"
          align="center"
          marginBottom="lg"
        >
          PRICING
        </Heading>

        <Heading
          as="h3"
          size="2xl"
          weight="bold"
          color="secondary"
          align="center"
          marginBottom="3xl"
        >
          Choose Your Revenue Boost Package
        </Heading>

        {/* Free Trial Section */}
        <div className={styles.trialSection}>
          <div className={`${styles.plan} ${styles.trialPlan}`}>
            <div className={styles.planHeader}>
              <div className={styles.planIcon}>
                <FaGift />
              </div>

              <Heading
                as="h4"
                size="xl"
                weight="bold"
                color="gray-900"
                align="center"
                marginBottom="sm"
              >
                {trialPlan.name}
              </Heading>

              <div className={styles.planPrice}>
                <span className={styles.price}>{trialPlan.price}</span>
                <span className={styles.period}>{trialPlan.period}</span>
              </div>

              <Text className={styles.planDescription}>
                {trialPlan.description}
              </Text>

              <Button variant={trialPlan.buttonVariant} size="large">
                {trialPlan.buttonText}
              </Button>
            </div>

            <ul className={styles.features}>
              {trialPlan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.feature}>
                  <FaCheck />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Revenue Packages Section */}
        <div className={styles.revenuePackagesSection}>
          <div className={styles.revenueGrid}>
            {revenuePackages.map((plan, index) => (
              <div
                key={index}
                className={`${styles.revenuePlan} ${
                  plan.popular ? styles.popular : ''
                } ${plan.bestValue ? styles.bestValue : ''}`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>
                    <FaStar />
                    {plan.subtitle}
                  </div>
                )}

                {plan.bestValue && !plan.popular && (
                  <div className={styles.bestValueBadge}>
                    <FaStar />
                    {plan.subtitle}
                  </div>
                )}

                <div className={styles.revenuePlanHeader}>
                  <div className={styles.planEmoji}>{plan.emoji}</div>

                  <Heading
                    as="h4"
                    size="lg"
                    weight="bold"
                    color="gray-900"
                    align="center"
                    marginBottom="sm"
                  >
                    {plan.name}
                  </Heading>

                  <div className={styles.photoCount}>{plan.photoCount}</div>

                  <div className={styles.planPrice}>
                    <span className={styles.price}>{plan.price}</span>
                  </div>

                  <Text className={styles.planDescription}>
                    {plan.description}
                  </Text>

                  <Button variant={plan.buttonVariant} size="large">
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

        <div className={styles.guaranteeSection}>
          <div className={styles.guaranteeCard}>
            <Heading
              as="h3"
              size="xl"
              weight="bold"
              color="secondary"
              align="center"
              marginBottom="base"
            >
              Money-Back Performance Guarantee
            </Heading>
            <Text size="lg" className={styles.guaranteeText}>
              If your photos don&apos;t increase orders within 30 days,
              we&apos;ll refund your first package (up to 12 photos). No
              questions asked.
            </Text>
          </div>
        </div>

        <div className={styles.whatsappCta}>
          <Button variant="whatsapp" size="large" iconLeft={<FaWhatsapp />}>
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
