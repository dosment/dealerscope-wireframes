import React from 'react';
import { ButtonProps } from '@/types';

/**
 * Button Component
 *
 * Refactored to:
 * - Remove inline styles
 * - Use Tailwind rounded-lg instead of CSS variable
 * - Extract Spinner to separate component (future improvement)
 * - Consistent with design system
 */

const LoadingSpinner: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={`spin -ml-1 mr-2 h-4 w-4 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold focus:outline-none focus-ring transition-all rounded-lg';

  const variantClasses = {
    primary: 'action-primary',
    secondary: 'action-secondary',
    tertiary: 'bg-elevated text-primary border border-primary hover:border-hover hover:elevation-2',
    ghost: 'bg-transparent text-secondary hover:bg-hover hover:text-primary border border-transparent',
    danger: 'bg-danger-600 text-white hover:bg-danger-700 elevation-2'
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const paddingClasses = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4'
  };

  const widthClasses = fullWidth ? 'w-full' : '';
  const disabledClasses = disabled || loading ? 'disabled' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${paddingClasses[size]} ${widthClasses} ${disabledClasses} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  );
};

export default Button;