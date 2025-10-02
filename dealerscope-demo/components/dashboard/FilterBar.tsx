import React from 'react';
import { FilterState, DealershipStatus } from '@/types';
import Input from '@/components/ui/Input';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  dealershipCount: number;
  totalCount: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  dealershipCount,
  totalCount
}) => {
  const statusOptions: { value: DealershipStatus | 'all'; label: string }[] = [
    { value: 'all', label: 'All Statuses' },
    { value: 'changed', label: 'Changed' },
    { value: 'opportunity', label: 'Opportunity' },
    { value: 'stable', label: 'Stable' },
    { value: 'scanning', label: 'Scanning' },
    { value: 'error', label: 'Error' }
  ];

  const regionOptions = [
    { value: 'all', label: 'All Regions' },
    { value: 'TX', label: 'Texas' },
    { value: 'CA', label: 'California' },
    { value: 'FL', label: 'Florida' },
    { value: 'NY', label: 'New York' }
  ];

  const productCategoryOptions = [
    { value: 'all', label: 'All Products' },
    { value: 'chat', label: 'Chat Tools' },
    { value: 'digital_retailing', label: 'Digital Retailing' },
    { value: 'trade_tools', label: 'Trade Tools' },
    { value: 'inventory', label: 'Inventory Management' },
    { value: 'site_provider', label: 'Site Provider' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'marketing', label: 'Marketing Tools' },
    { value: 'finance', label: 'Finance Solutions' }
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      search: event.target.value
    });
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onFilterChange({
      ...filters,
      statuses: value === 'all' ? [] : [value as DealershipStatus]
    });
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onFilterChange({
      ...filters,
      regions: value === 'all' ? [] : [value]
    });
  };

  const handleClearFilters = () => {
    onFilterChange({
      search: '',
      productCategories: [],
      statuses: [],
      regions: []
    });
  };

  const hasActiveFilters = filters.search || filters.statuses.length > 0 || filters.regions.length > 0 || filters.productCategories.length > 0;

  return (
    <div
      className="rounded-lg p-6"
      style={{
        backgroundColor: 'var(--bg-elevated)',
        borderWidth: '1px',
        borderColor: 'var(--border-primary)'
      }}
    >
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="w-full">
          <Input
            type="text"
            placeholder="Search dealership name or location..."
            value={filters.search}
            onChange={handleSearchChange}
            fullWidth
            icon={
              <svg className="w-5 h-5" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Product Category Filter */}
          <div className="min-w-0 flex-1 md:flex-none md:w-48">
            <select
              className="block w-full rounded-md px-3 py-2 text-sm focus:outline-none"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderWidth: '1px',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
              defaultValue="all"
            >
              {productCategoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="min-w-0 flex-1 md:flex-none md:w-48">
            <select
              className="block w-full rounded-md px-3 py-2 text-sm focus:outline-none"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderWidth: '1px',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
              value={filters.statuses.length > 0 ? filters.statuses[0] : 'all'}
              onChange={handleStatusChange}
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Region Filter */}
          <div className="min-w-0 flex-1 md:flex-none md:w-48">
            <select
              className="block w-full rounded-md px-3 py-2 text-sm focus:outline-none"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderWidth: '1px',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
              value={filters.regions.length > 0 ? filters.regions[0] : 'all'}
              onChange={handleRegionChange}
            >
              {regionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 text-sm rounded-md"
              style={{
                color: 'var(--text-secondary)',
                borderWidth: '1px',
                borderColor: 'var(--border-primary)',
                backgroundColor: 'var(--bg-primary)'
              }}
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Results Summary */}
        <div
          className="flex items-center justify-between pt-2"
          style={{
            borderTopWidth: '1px',
            borderTopColor: 'var(--border-secondary)'
          }}
        >
          <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
            Showing {dealershipCount} of {totalCount} dealerships
          </span>

          <div className="flex items-center space-x-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span>Last scan: 2 hours ago</span>
            <span style={{ color: 'var(--text-info)' }}>Auto: 4x daily</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;