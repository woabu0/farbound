import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'gradient' | 'light';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'dark'
}) => {
  const backgrounds = {
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-b from-gray-900 via-orange-900/20 to-gray-900',
    light: 'bg-gray-800'
  };
  
  return (
    <section id={id} className={`${backgrounds[background]} py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

