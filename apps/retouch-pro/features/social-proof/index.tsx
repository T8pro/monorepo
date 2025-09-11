import { Text } from '@t8pro/design-system';
import styles from './styles.module.scss';

const testimonials = [
  {
    text: 'As easy as it gets — sent photos on Monday, updated our DoorDash on Tuesday.',
    author: 'Charly, Righteous (Louisville, KY)',
  },
  {
    text: 'Consistent look across Uber, IG, and Google — finally.',
    author: 'Maria Rodriguez, Taco Luna (Austin, TX)',
  },
  {
    text: 'Kept it real, just brighter, cleaner, and more appetizing.',
    author: "James Chen, Chen's Kitchen (Seattle, WA)",
  },
];

export const SocialProof = () => {
  return (
    <section className={styles.socialProof}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <Text className={styles.text}>{testimonial.text}</Text>
              <div className={styles.author}>— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
