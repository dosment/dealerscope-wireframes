import React from 'react';
import { FilterState, DealershipStatus } from '@/types';

interface DealershipFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

/**
 * DealershipFilters Component
 *
 * Provides search and filter controls for the dealership list.
 * Extracted from Dashboard.tsx for single responsibility.
 *
 * Design Rationale:
 * - Focuses only on filter UI and state
 * - Uses semantic class names from design system
 * - Consistent styling with Tailwind utilities
 */
const DealershipFilters: React.FC<DealershipFiltersProps> = ({
  filters,
  onFilterChange
}) => {
  const statusOptions: { value: DealershipStatus | 'all'; label: string }[] = [
    { value: 'all', label: 'All Statuses' },
    { value: 'changed', label: 'Changed' },
    { value: 'opportunity', label: 'Opportunity' },
    { value: 'stable', label: 'Stable' },
    { value: 'scanning', label: 'Scanning' },
    { value: 'error', label: 'Error' }
  ];

  const handleSearchChange = (search: string) => {
    onFilterChange({ ...filters, search });
  };

  const handleStatusChange = (status: string) => {
    onFilterChange({
      ...filters,
      statuses: status === 'all' ? [] : [status as DealershipStatus]
    });
  };

  return (
    <div className="bg-secondary border-t border-b border-primary px-6 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Search Input */}
        <div className="md:col-span-1">
          <input
            type="text"
            placeholder="Search dealership name or location..."
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-secondary rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 bg-elevated text-primary placeholder-muted"
          />
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={filters.statuses.length > 0 ? filters.statuses[0] : 'all'}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="w-full px-3 py-2 border border-secondary rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 bg-elevated text-primary"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DealershipFilters;