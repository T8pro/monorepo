import { Heading } from '@t8pro/design-system';
import { FaChartLine, FaBrain, FaEye, FaPercentage } from 'react-icons/fa';
import styles from './styles.module.scss';
import type { PlatformData, PsychologyFact } from './types';

const platformData: PlatformData[] = [
  {
    platform: 'DoorDash Internal',
    stat: '35% more orders',
    description: 'Professional photos = 35% more orders',
    icon: <FaChartLine />,
    color: '#FF6000',
  },
  {
    platform: 'Uber Eats Report',
    stat: '2x more orders',
    description: 'Good photos = 2x more orders than competitors',
    icon: <FaChartLine />,
    color: '#06C167',
  },
  {
    platform: 'Grubhub Study',
    stat: '42% longer browsing',
    description: 'Quality images = 42% longer browsing time',
    icon: <FaChartLine />,
    color: '#FF6B35',
  },
];

const psychologyFacts: PsychologyFact[] = [
  {
    stat: '78%',
    description: 'decide what to eat based on photos alone',
    icon: <FaEye />,
  },
  {
    stat: 'Uncertainty Aversion',
    description: 'Poor photos trigger "uncertainty aversion" (neuroscience)',
    icon: <FaBrain />,
  },
  {
    stat: 'Reward Anticipation',
    description:
      'Professional photos activate "reward anticipation" in the brain',
    icon: <FaPercentage />,
  },
];

export const ScienceBehindSales = () => {
  return (
    <section className={styles.scienceBehindSales}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="4xl"
          weight="black"
          color="secondary"
          align="center"
          marginBottom="lg"
        >
          The Science Behind Food Photography Sales
        </Heading>

        <div className={styles.dataSection}>
          <Heading
            as="h3"
            size="2xl"
            weight="bold"
            color="secondary"
            align="center"
            marginBottom="lg"
          >
            Platform Data Reveals:
          </Heading>

          <div className={styles.platformGrid}>
            {platformData.map((data, index) => (
              <div key={index} className={styles.platformCard}>
                <div
                  className={styles.platformIcon}
                  style={{ color: data.color }}
                >
                  {data.icon}
                </div>
                <div className={styles.platformName}>{data.platform}</div>
                <div className={styles.platformStat}>{data.stat}</div>
                <div className={styles.platformDescription}>
                  {data.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.psychologySection}>
          <Heading
            as="h3"
            size="2xl"
            weight="bold"
            color="secondary"
            align="center"
            marginBottom="lg"
          >
            Consumer Psychology:
          </Heading>

          <div className={styles.psychologyGrid}>
            {psychologyFacts.map((fact, index) => (
              <div key={index} className={styles.psychologyCard}>
                <div className={styles.psychologyIcon}>{fact.icon}</div>
                <div className={styles.psychologyStat}>{fact.stat}</div>
                <div className={styles.psychologyDescription}>
                  {fact.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
