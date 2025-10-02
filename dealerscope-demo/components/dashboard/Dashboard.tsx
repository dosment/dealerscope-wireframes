import React, { useState, useEffect } from 'react';
import DealershipTable from './DealershipTable';
import BulkActionBar from './BulkActionBar';
import DealershipFilters from './DealershipFilters';
import { mockDealerships } from '@/lib/mockData';
import { Dealership } from '@/types';
import { useDealershipFilters } from '@/hooks/useDealershipFilters';
import EmptyState from '@/components/ui/EmptyState';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';

const Dashboard: React.FC = () => {
  const [dealerships, setDealerships] = useState<Dealership[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDealerships, setSelectedDealerships] = useState<string[]>([]);

  // Use custom hook for filtering logic
  const { filters, setFilters, filteredDealerships } = useDealershipFilters(dealerships);

  // Simulate loading data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setDealerships(mockDealerships);
      } catch (err) {
        setError('Failed to load dealerships');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Bulk action handlers
  const handleInitiateContact = () => {
    console.log('Initiating contact for:', selectedDealerships);
  };

  const handleExportIntel = () => {
    console.log('Exporting data for:', selectedDealerships);
  };

  const handleLogNotes = () => {
    console.log('Logging notes for:', selectedDealerships);
  };

  const handleSelectDealership = (dealershipId: string) => {
    setSelectedDealerships(prev =>
      prev.includes(dealershipId)
        ? prev.filter(id => id !== dealershipId)
        : [...prev, dealershipId]
    );
  };

  const handleSelectAll = () => {
    if (selectedDealerships.length === filteredDealerships.length) {
      setSelectedDealerships([]);
    } else {
      setSelectedDealerships(filteredDealerships.map(d => d.id));
    }
  };

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    setTimeout(() => {
      setDealerships(mockDealerships);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="h-full p-6 space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-hero">My Dealers</h1>
        <p className="text-secondary">Monitor and track dealerships in your territory</p>
      </div>

      {/* Main Content Card */}
      <div className="bg-elevated shadow-sm border border-transparent rounded-lg overflow-hidden">
        {/* Filters */}
        <DealershipFilters filters={filters} onFilterChange={setFilters} />

        {selectedDealerships.length > 0 && (
          <BulkActionBar
            selectedCount={selectedDealerships.length}
            onClearSelection={() => setSelectedDealerships([])}
            onInitiateContact={handleInitiateContact}
            onExportIntel={handleExportIntel}
            onLogNotes={handleLogNotes}
            variant="inline"
          />
        )}

        {/* Loading State */}
        {isLoading && <LoadingState message="Loading dealerships..." />}

        {/* Error State */}
        {error && !isLoading && <ErrorState onRetry={handleRetry} />}

        {/* Empty State */}
        {!isLoading && !error && filteredDealerships.length === 0 && dealerships.length === 0 && (
          <EmptyState
            icon={
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            title="No dealerships yet"
            description="Start by scanning your territory to discover dealerships and track their products."
            action={{
              label: 'Scan Territory',
              onClick: () => console.log('Start scanning')
            }}
          />
        )}

        {/* No Results State */}
        {!isLoading && !error && filteredDealerships.length === 0 && dealerships.length > 0 && (
          <div className="p-12 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-lg font-medium text-primary mb-2">No dealerships match your filters</h3>
            <p className="text-muted mb-4">Try adjusting your search or filter criteria to see more results.</p>
            <button
              onClick={() => setFilters({ search: '', productCategories: [], statuses: [], regions: [] })}
              className="px-4 py-2 bg-navy-600 text-white rounded-md hover:bg-navy-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Table with data */}
        {!isLoading && !error && filteredDealerships.length > 0 && (
          <DealershipTable
            dealerships={filteredDealerships}
            selectedDealerships={selectedDealerships}
            onSelectDealership={handleSelectDealership}
            onSelectAll={handleSelectAll}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;