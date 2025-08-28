'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { colors, typography, animations } from '../../lib/design-tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gold';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  animate?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  disabled = false,
  loading = false,
  icon,
  className = '',
  type = 'button',
  fullWidth = false,
  animate = true,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-offset-2 relative overflow-hidden';
  
  const variants = {
    primary: `bg-[${colors.primary.red}] text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl`,
    secondary: `bg-[${colors.primary.navy}] text-white hover:bg-blue-800 focus:ring-blue-500 shadow-lg hover:shadow-xl`,
    outline: `border-2 border-[${colors.primary.red}] text-[${colors.primary.red}] hover:bg-red-50 focus:ring-red-500 bg-white`,
    ghost: `text-[${colors.neutral.darkGray}] hover:bg-gray-100 focus:ring-gray-400`,
    danger: 'bg-red-700 text-white hover:bg-red-800 focus:ring-red-600 shadow-lg hover:shadow-xl',
    gold: `bg-[${colors.secondary.gold}] text-[${colors.neutral.darkGray}] hover:bg-yellow-500 focus:ring-yellow-500 shadow-lg hover:shadow-xl font-bold`,
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed hover:transform-none';
  const fullWidthClass = fullWidth ? 'w-full' : '';

  const combinedClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled || loading ? disabledClasses : ''}
    ${fullWidthClass}
    ${className}
  `.trim();

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href && !disabled && !loading) {
    return (
      <Link href={href}>
        <motion.a
          className={combinedClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
    >
      {content}
    </motion.button>
  );
};

export default Button;
