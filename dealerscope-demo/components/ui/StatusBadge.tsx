import React from 'react';
import { StatusBadgeProps } from '@/types';

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const paddingClasses = {
    sm: 'px-2 py-1',
    md: 'px-3 py-1.5',
    lg: 'px-4 py-2'
  };

  const statusConfig = {
    active: {
      label: 'Active',
      bgColor: 'var(--success-50)',
      textColor: 'var(--text-success)',
      borderColor: 'var(--success-500)',
      dotColor: 'var(--success-600)'
    },
    changed: {
      label: 'Changed',
      bgColor: 'var(--danger-50)',
      textColor: 'var(--text-danger)',
      borderColor: 'var(--danger-500)',
      dotColor: 'var(--danger-600)'
    },
    opportunity: {
      label: 'Opportunity',
      bgColor: 'var(--warning-50)',
      textColor: 'var(--text-warning)',
      borderColor: 'var(--warning-500)',
      dotColor: 'var(--warning-600)'
    },
    scanning: {
      label: 'Scanning',
      bgColor: 'var(--warning-50)',
      textColor: 'var(--text-warning)',
      borderColor: 'var(--warning-500)',
      dotColor: 'var(--warning-600)',
      pulse: true
    },
    error: {
      label: 'Error',
      bgColor: 'var(--danger-50)',
      textColor: 'var(--text-danger)',
      borderColor: 'var(--danger-500)',
      dotColor: 'var(--danger-600)'
    },
    stable: {
      label: 'No Change',
      bgColor: 'var(--success-50)',
      textColor: 'var(--text-success)',
      borderColor: 'var(--success-500)',
      dotColor: 'var(--success-600)'
    }
  };

  const config = statusConfig[status];
  const classes = `inline-flex items-center gap-2 font-semibold border transition-all ${config.pulse ? 'pulse' : ''} ${sizeClasses[size]} ${paddingClasses[size]}`;

  return (
    <span
      className={classes}
      style={{
        borderRadius: 'var(--radius-full)',
        backgroundColor: config.bgColor,
        color: config.textColor,
        borderColor: config.borderColor
      }}
    >
      <span
        className={`w-2 h-2 rounded-full ${config.pulse ? 'pulse' : ''}`}
        style={{ backgroundColor: config.dotColor }}
      ></span>
      {config.label}
    </span>
  );
};

export default StatusBadge;