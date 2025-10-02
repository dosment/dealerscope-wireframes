import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'block bg-elevated border text-primary placeholder:text-muted focus:outline-none focus-ring transition-all font-body text-base';

  const widthClasses = fullWidth ? 'w-full' : '';
  const errorClasses = error ? 'border-danger focus:ring-danger' : 'border-primary focus:border-focus';
  const disabledClasses = disabled ? 'disabled' : '';
  const paddingClasses = 'px-4 py-3';

  const inputClasses = `${baseClasses} ${widthClasses} ${errorClasses} ${disabledClasses} ${paddingClasses} ${className}`;

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-primary mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary">
            {icon}
          </div>
        )}
        <input
          className={`${inputClasses} ${icon ? 'pl-12' : ''}`}
          style={{ borderRadius: 'var(--radius-lg)' }}
          disabled={disabled}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-danger flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;