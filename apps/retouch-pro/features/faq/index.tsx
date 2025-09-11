'use client';

import { useState } from 'react';
import { Heading, Text } from '@t8pro/design-system';
import { FaChevronDown } from 'react-icons/fa';
import styles from './styles.module.scss';

const faqs = [
  {
    question: 'Do you change the dish?',
    answer:
      "No, our process makes food brighter and more appealing, but never alters your dish's core look. We enhance lighting, color, and composition without adding fake ingredients or modifying the actual food presentation. What you see is what your customers will get—just looking its absolute best.",
  },
  {
    question: 'How do I send photos?',
    answer:
      'We offer multiple convenient options: drag-and-drop directly on our website, share a Google Drive/Dropbox link, or send images via WhatsApp to our dedicated number. For larger orders or multiple locations, we can set up a custom upload workflow that works best for your team.',
  },
  {
    question: "What if I don't like the result?",
    answer:
      'If you are unhappy with your enhanced photos for any reason, simply reply within 14 days for a full refund. We stand behind our work with a 100% satisfaction guarantee. We can also provide a revision if you have specific adjustments you would like to see.',
  },
  {
    question: 'How fast is the turnaround?',
    answer:
      'Standard delivery is 24 hours for up to 12 photos. Rush orders are available for an additional fee with same-day turnaround (orders submitted before 11am). For larger orders or ongoing partnerships, we can establish a custom delivery schedule that meets your needs.',
  },
  {
    question: 'Can you handle multiple locations?',
    answer:
      "Absolutely! We support restaurant chains and businesses with multiple locations. We offer volume discounts and can coordinate with different location managers. Our system keeps track of each location's photos separately, making it easy to maintain brand consistency while showcasing each location's unique offerings.",
  },
  {
    question: 'How do you ensure data security?',
    answer:
      'We take your data privacy seriously. All uploaded photos are stored securely with enterprise-grade encryption. We never share your images with third parties, and all staff members sign confidentiality agreements. Your photos are only used for the specific enhancement services you request and are never used for marketing without explicit permission.',
  },
  {
    question: 'Who owns the rights to the enhanced photos?',
    answer:
      'You retain full rights to all enhanced images. Once we deliver the photos, you can use them across any platform or marketing material without restrictions or additional fees. We do not claim any ownership of the enhanced images we create for you.',
  },
  {
    question: 'Do you offer integration support?',
    answer:
      'Yes, we provide detailed guidance on how to update your photos on each delivery platform. For clients who need additional assistance, we offer an optional add-on service where we can handle the uploading process for you across Uber Eats, DoorDash, Grubhub, and other platforms you use.',
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
                  <Text>{faq.answer}</Text>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
