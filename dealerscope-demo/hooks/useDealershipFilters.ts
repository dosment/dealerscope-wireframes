import { useState, useMemo } from 'react';
import { Dealership, FilterState } from '@/types';

/**
 * useDealershipFilters Hook
 *
 * Custom hook to manage dealership filtering logic.
 * Separates business logic from UI components.
 *
 * Benefits:
 * - Reusable across different views
 * - Testable in isolation
 * - Clean separation of concerns
 * - Memoized for performance
 *
 * @param dealerships - Array of dealerships to filter
 * @returns Filtered dealerships and filter state management
 */
export const useDealershipFilters = (dealerships: Dealership[]) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    productCategories: [],
    statuses: [],
    regions: [],
  });

  // Memoize filtered results to avoid unnecessary recalculations
  const filteredDealerships = useMemo(() => {
    return dealerships.filter((dealership) => {
      // Search filter - checks name and location
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesName = dealership.name.toLowerCase().includes(searchLower);
        const matchesLocation = dealership.location.toLowerCase().includes(searchLower);

        if (!matchesName && !matchesLocation) {
          return false;
        }
      }

      // Status filter
      if (filters.statuses.length > 0 && !filters.statuses.includes(dealership.status)) {
        return false;
      }

      // Region filter (state)
      if (filters.regions.length > 0 && !filters.regions.includes(dealership.state)) {
        return false;
      }

      return true;
    });
  }, [dealerships, filters]);

  return {
    filters,
    setFilters,
    filteredDealerships,
  };
};