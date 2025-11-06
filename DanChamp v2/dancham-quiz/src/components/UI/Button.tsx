import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  disabled = false,
  children,
  className = '',
  type = 'button',
}) => {
  const baseClasses =
    'px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-danish-red focus:ring-offset-2 touch-manipulation';
  const variantClasses =
    variant === 'primary'
      ? 'bg-danish-red text-white shadow-button hover:bg-red-hover hover:shadow-button-hover hover:-translate-y-0.5 active:scale-95'
      : 'bg-transparent border-2 border-danish-red text-danish-red hover:bg-danish-red hover:text-white';

  return (
    <motion.button
      type={type}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`${baseClasses} ${variantClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
