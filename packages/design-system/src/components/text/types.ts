export type TextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export type TextMargin =
  | 'none'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'secondary-invert'
  | 'gray-900'
  | 'gray-700'
  | 'gray-500'
  | 'white'
  | 'black';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: TextSize;
  marginBottom?: TextMargin;
  marginTop?: TextMargin;
  marginLeft?: TextMargin;
  marginRight?: TextMargin;
  color?: TextColor;
}
