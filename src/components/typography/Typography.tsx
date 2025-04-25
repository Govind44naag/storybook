import React from 'react';
import { TypographyProps, TypographyVariant, TypographyWeight, TypographyColor } from '../../types/typography';

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'text-6xl font-bold',
  h2: 'text-5xl font-bold',
  h3: 'text-4xl font-bold',
  h4: 'text-3xl font-bold',
  h5: 'text-2xl font-bold',
  h6: 'text-xl font-bold',
  p: 'text-base',
  label: 'text-sm font-medium',
  caption: 'text-xs',
  helper: 'text-xs text-gray-500',
};

const weightClasses: Record<TypographyWeight, string> = {
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const colorClasses: Record<TypographyColor, string> = {
  primary: 'text-primary-600',
  secondary: 'text-gray-600',
  error: 'text-red-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600',
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  weight = 'regular',
  color = 'primary',
  className = '',
  children,
  as,
  ...props
}) => {
  const Component = as || variant;
  const baseClasses = variantClasses[variant];
  const weightClass = weightClasses[weight];
  const colorClass = colorClasses[color];

  return (
    <Component
      className={`${baseClasses} ${weightClass} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}; 