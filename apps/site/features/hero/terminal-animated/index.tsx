import { RiGeminiFill } from 'react-icons/ri';
import { Button } from '@/components/button';
import { TextType } from '@/components/gsap/text-type';
import styles from './styles.module.scss';

export const TerminalAnimated = () => {
  return (
    <div className={styles.terminalAnimated}>
      <TextType
        className={styles.ctaText}
        text={[
          'Unlock Potential. Ignite Creativity. Grow with T8 Pro.',
          'Empowering businesses with innovative solutions that drive growth and success.',
        ]}
        typingSpeed={75}
        pauseDuration={3000}
        showCursor={true}
        cursorCharacter='|'
      />

      <Button
        iconLeft={<RiGeminiFill />}
        variant='secondary'
        size='large'
        className={styles.cta}
      >
        GENERATE RESULTS
      </Button>
    </div>
  );
};
