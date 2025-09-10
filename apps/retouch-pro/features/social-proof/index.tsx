import styles from './styles.module.scss';

const testimonials = [
  {
    text: 'As easy as it gets — sent photos on Monday, updated our DoorDash on Wednesday.',
    author: 'Restaurant Owner, Louisville',
  },
  {
    text: 'Consistent look across Uber, IG, and Google — finally.',
    author: 'Pizza Shop Manager',
  },
  {
    text: 'Kept it real, just brighter, cleaner, and more appetizing.',
    author: 'Taco Truck Owner',
  },
];

export const SocialProof = () => {
  return (
    <section className={styles.socialProof}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
