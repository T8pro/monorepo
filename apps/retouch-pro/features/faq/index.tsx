'use client';

import { useState } from 'react';
import { Heading } from '@t8pro/design-system';
import { FaChevronDown } from 'react-icons/fa';
import styles from './styles.module.scss';

const faqs = [
  {
    question: 'Do you change the dish?',
    answer:
      'No — we keep it real and appetizing. We enhance lighting, color, and composition without adding fake ingredients.',
  },
  {
    question: 'How do I send photos?',
    answer:
      'Drag-and-drop on our website, or share a Drive/Dropbox link. We also accept WhatsApp uploads.',
  },
  {
    question: "What if I don't like the result?",
    answer: 'Full refund on your first order, no questions asked.',
  },
  {
    question: 'How fast is the turnaround?',
    answer:
      '24 hours for up to 12 photos. Rush orders available for an additional fee.',
  },
  {
    question: 'Can you handle multiple locations?',
    answer: 'Yes — ask about our multi-location plans with volume discounts.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <Heading
          as="h2"
          size="4xl"
          weight="bold"
          color="gray-900"
          align="center"
          marginBottom="3xl"
        >
          Frequently Asked Questions
        </Heading>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3>{faq.question}</h3>
                <FaChevronDown
                  className={openIndex === index ? styles.rotated : ''}
                />
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
