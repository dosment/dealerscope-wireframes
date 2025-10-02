import React from 'react';

interface BulkActionBarProps {
  selectedCount: number;
  onClearSelection: () => void;
  onInitiateContact: () => void;
  onExportIntel: () => void;
  onLogNotes: () => void;
  variant?: 'floating' | 'inline';
}

/**
 * BulkActionBar Component
 *
 * Displays when one or more dealerships are selected.
 * Provides bulk actions: contact, export, and notes.
 *
 * Design Rationale:
 * - Extracted from Dashboard.tsx for single responsibility
 * - Uses semantic class names instead of cryptic ones
 * - Follows design system color variables
 */
const BulkActionBar: React.FC<BulkActionBarProps> = ({
  selectedCount,
  onClearSelection,
  onInitiateContact,
  onExportIntel,
  onLogNotes,
  variant = 'floating'
}) => {
  if (selectedCount === 0) return null;

  const containerClasses =
    variant === 'inline'
      ? 'px-6 py-4 border-b border-primary bg-accent'
      : 'bg-elevated border border-primary rounded-md p-4';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-primary">
            {selectedCount} dealership{selectedCount !== 1 ? 's' : ''} selected
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={onInitiateContact}
              className="px-3 py-1.5 text-sm font-semibold text-white bg-info hover:opacity-90 rounded-md transition-colors"
            >
              Initiate Contact
            </button>
            <button
              onClick={onExportIntel}
              className="px-3 py-1.5 text-sm font-semibold text-white bg-success hover:opacity-90 rounded-md transition-colors"
            >
              Export Data
            </button>
            <button
              onClick={onLogNotes}
              className="px-3 py-1.5 text-sm font-semibold text-primary bg-secondary hover:bg-tertiary rounded-md transition-colors border border-primary"
            >
              Add Notes
            </button>
          </div>
        </div>
        <button
          onClick={onClearSelection}
          className="text-sm font-semibold text-highlight hover:text-primary transition-colors"
        >
          Clear Selection
        </button>
      </div>
    </div>
  );
};

export default BulkActionBar;