export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'caption' | 'helper';

export type TypographyWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

export type TypographyColor = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';

export interface TypographyProps {
  variant: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
} 