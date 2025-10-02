import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  className = '',
  variant = 'rectangular',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'text':
        return 'rounded';
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
      default:
        return 'rounded-md';
    }
  };

  return (
    <div
      className={`skeleton ${getVariantStyles()} ${className}`}
      style={{ width, height }}
      aria-live="polite"
      aria-busy="true"
    />
  );
};

export const TableSkeleton: React.FC<{ rows?: number }> = ({ rows = 5 }) => {
  return (
    <div className="w-full space-y-3">
      {/* Header */}
      <div className="flex gap-4 pb-3 border-b border-primary">
        <Skeleton width="20%" height="1rem" />
        <Skeleton width="25%" height="1rem" />
        <Skeleton width="15%" height="1rem" />
        <Skeleton width="20%" height="1rem" />
        <Skeleton width="20%" height="1rem" />
      </div>

      {/* Rows */}
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex gap-4 py-3">
          <Skeleton width="20%" height="1rem" />
          <Skeleton width="25%" height="1rem" />
          <Skeleton width="15%" height="1rem" />
          <Skeleton width="20%" height="1rem" />
          <Skeleton width="20%" height="1rem" />
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-elevated p-6 rounded-lg border border-primary">
      <Skeleton width="40%" height="1.5rem" className="mb-4" />
      <Skeleton width="100%" height="1rem" className="mb-2" />
      <Skeleton width="90%" height="1rem" className="mb-2" />
      <Skeleton width="95%" height="1rem" className="mb-4" />
      <div className="flex gap-4 mt-6">
        <Skeleton width="30%" height="2.5rem" />
        <Skeleton width="30%" height="2.5rem" />
      </div>
    </div>
  );
};

export const DashboardSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Skeleton width="200px" height="2rem" />
        <Skeleton width="120px" height="2.5rem" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>

      {/* Table */}
      <div className="bg-elevated p-6 rounded-lg border border-primary">
        <Skeleton width="150px" height="1.5rem" className="mb-4" />
        <TableSkeleton rows={8} />
      </div>
    </div>
  );
};