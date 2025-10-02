import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...'
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Spinning loader icon */}
      <div className="relative mb-6">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary opacity-20"></div>

        {/* Animated icon */}
        <div className="relative bg-elevated rounded-full p-6 border border-primary">
          <Loader2 className="w-12 h-12 text-accent animate-spin" strokeWidth={1.5} />
        </div>
      </div>

      {/* Loading text */}
      <p className="text-sm text-secondary font-medium tracking-wide animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default LoadingState;