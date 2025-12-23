import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  color?: 'default' | 'green' | 'purple' | 'blue';
}

export function Heading({ children, level, className = '', color = 'default' }: HeadingProps) {
  const colors = {
    default: 'text-brandiq-gray',
    green: 'text-brandiq-green',
    purple: 'text-brandiq-purple',
    blue: 'text-brandiq-blue',
  };

  const styles = {
    1: 'text-5xl md:text-6xl font-bold leading-tight',
    2: 'text-4xl md:text-5xl font-bold leading-tight',
    3: 'text-3xl md:text-4xl font-bold',
    4: 'text-2xl md:text-3xl font-semibold',
    5: 'text-xl md:text-2xl font-semibold',
    6: 'text-lg md:text-xl font-semibold',
  };

  const combinedClassName = `${styles[level]} ${colors[color]} ${className}`;

  return React.createElement(
    `h${level}`,
    { className: combinedClassName },
    children
  );
}

interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'lead' | 'small' | 'caption';
  className?: string;
  color?: 'default' | 'muted' | 'light';
}

export function Text({ children, variant = 'body', className = '', color = 'default' }: TextProps) {
  const colors = {
    default: 'text-brandiq-gray',
    muted: 'text-gray-600',
    light: 'text-gray-500',
  };

  const variants = {
    lead: 'text-xl md:text-2xl leading-relaxed',
    body: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm md:text-base',
    caption: 'text-xs md:text-sm',
  };

  return (
    <p className={`${variants[variant]} ${colors[color]} ${className}`}>
      {children}
    </p>
  );
}
