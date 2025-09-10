import { ElementType } from 'react';

export type TextTypeProps = {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
};

export type UseTextTypeProps = {
  text: TextTypeProps['text'];
  typingSpeed?: TextTypeProps['typingSpeed'];
  initialDelay?: TextTypeProps['initialDelay'];
  pauseDuration?: TextTypeProps['pauseDuration'];
  deletingSpeed?: TextTypeProps['deletingSpeed'];
  loop?: TextTypeProps['loop'];
  hideCursorWhileTyping?: TextTypeProps['hideCursorWhileTyping'];
  cursorBlinkDuration?: TextTypeProps['cursorBlinkDuration'];
  textColors?: TextTypeProps['textColors'];
  variableSpeed?: TextTypeProps['variableSpeed'];
  onSentenceComplete?: TextTypeProps['onSentenceComplete'];
  startOnVisible?: TextTypeProps['startOnVisible'];
  reverseMode?: TextTypeProps['reverseMode'];
  showCursor?: TextTypeProps['showCursor'];
};
