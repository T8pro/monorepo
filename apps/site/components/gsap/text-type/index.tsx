'use client';

import { useTextType } from './hooks';
import styles from './styles.module.scss';
import { TextTypeProps } from './types';

export const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const hooksProps = {
    text,
    typingSpeed,
    initialDelay,
    pauseDuration,
    deletingSpeed,
    loop,
    hideCursorWhileTyping,
    cursorBlinkDuration,
    textColors,
    variableSpeed,
    onSentenceComplete,
    startOnVisible,
    reverseMode,
    showCursor,
  };

  const {
    containerRef,
    displayedText,
    getCurrentTextColor,
    cursorRef,
    shouldHideCursor,
  } = useTextType(hooksProps);

  return (
    <Component
      ref={containerRef}
      className={styles.textType + ' ' + className}
      {...props}
    >
      <span
        className={styles.textTypeContent}
        style={{ color: getCurrentTextColor() }}
      >
        {displayedText}
      </span>

      {showCursor && (
        <span
          ref={cursorRef}
          className={
            styles.textTypeCursor +
            ' ' +
            cursorClassName +
            ' ' +
            (shouldHideCursor ? styles.textTypeCursorHidden : '')
          }
        >
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
};
