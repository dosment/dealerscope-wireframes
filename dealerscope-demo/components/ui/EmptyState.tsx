import React from 'react';
import Button from './Button';

interface EmptyStateAction {
  label: string;
  onClick: () => void;
}

interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  message?: string;
  description?: string;
  action?: EmptyStateAction;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  message,
  description,
  action,
  actionLabel,
  onAction,
}) => {
  const heading = title ?? message ?? 'Nothing to display yet';
  const primaryAction = action ?? (actionLabel && onAction ? { label: actionLabel, onClick: onAction } : null);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-16 h-16 mb-4 rounded-full bg-secondary flex items-center justify-center">
        {icon ?? (
          <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        )}
      </div>
      <h3 className="text-lg font-medium text-hero mb-2">{heading}</h3>
      {description && (
        <p className="text-sm text-secondary max-w-md mb-6">{description}</p>
      )}
      {primaryAction && (
        <Button variant="primary" onClick={primaryAction.onClick}>
          {primaryAction.label}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
