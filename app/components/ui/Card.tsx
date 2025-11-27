import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 p-4 sm:p-5 md:p-6 ${
        hover ? 'hover:bg-gray-800/70 hover:border-white/20 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

