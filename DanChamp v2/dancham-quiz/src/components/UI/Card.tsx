import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  selected = false,
  hoverable = true,
}) => {
  const baseClasses = 'rounded-lg p-2.5 sm:p-3 transition-all duration-200 touch-manipulation';
  const stateClasses = selected
    ? 'bg-danish-red text-white border border-danish-red shadow-lg transform scale-[1.01]'
    : 'bg-white border border-grey-light hover:border-danish-red hover:shadow-md active:scale-[0.99]';
  const interactiveClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseClasses} ${stateClasses} ${interactiveClasses} ${hoverable ? '' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  );
};
