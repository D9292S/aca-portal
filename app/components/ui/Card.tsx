'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  const variants = {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-xl',
    bordered: 'bg-white border-2 border-gray-200',
    ghost: 'bg-transparent',
  };

  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClass = hoverable ? 'hover:shadow-lg transition-shadow duration-300 cursor-pointer' : '';

  return (
    <motion.div
      className={`rounded-lg ${variants[variant]} ${paddings[padding]} ${hoverClass} ${className}`}
      onClick={onClick}
      whileHover={hoverable ? { y: -2 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  className = '',
}) => {
  return (
    <div className={`flex items-start justify-between mb-4 ${className}`}>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return <div className={`${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  separator?: boolean;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  separator = true,
}) => {
  return (
    <div
      className={`mt-6 ${
        separator ? 'pt-4 border-t border-gray-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  height?: number;
  className?: string;
  overlay?: React.ReactNode;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  height = 200,
  className = '',
  overlay,
}) => {
  return (
    <div className={`relative ${className}`} style={{ height }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-t-lg"
      />
      {overlay && (
        <div className="absolute inset-0 flex items-center justify-center">
          {overlay}
        </div>
      )}
    </div>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  onClick?: () => void;
  color?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  link,
  linkText = 'Learn More',
  onClick,
  color = 'red',
}) => {
  return (
    <Card variant="bordered" hoverable onClick={onClick}>
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-full bg-${color}-100 flex items-center justify-center mb-4`}>
          <div className={`text-${color}-600 text-2xl`}>{icon}</div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            className={`text-${color}-600 hover:text-${color}-700 text-sm font-medium`}
          >
            {linkText} →
          </a>
        )}
      </div>
    </Card>
  );
};

// Stats Card Component
interface StatsCardProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  color?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  change,
  icon,
  color = 'gray',
}) => {
  const isPositive = change && change > 0;

  return (
    <Card variant="elevated">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change !== undefined && (
            <p className={`text-sm mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '↑' : '↓'} {Math.abs(change)}%
            </p>
          )}
        </div>
        {icon && (
          <div className={`w-12 h-12 rounded-lg bg-${color}-100 flex items-center justify-center`}>
            <div className={`text-${color}-600 text-xl`}>{icon}</div>
          </div>
        )}
      </div>
    </Card>
  );
};
