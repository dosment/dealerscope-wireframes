import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dealership } from '@/types';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';

interface DealershipTableProps {
  dealerships: Dealership[];
  selectedDealerships: string[];
  onSelectDealership: (id: string) => void;
  onSelectAll: () => void;
}

type SortField = 'name' | 'lastChange' | 'status';
type SortDirection = 'asc' | 'desc';

const DealershipTable: React.FC<DealershipTableProps> = ({
  dealerships,
  selectedDealerships,
  onSelectDealership,
  onSelectAll
}) => {
  const router = useRouter();
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  const getProductDisplay = (dealership: Dealership) => {
    if (dealership.status === 'scanning') {
      return (
        <span className="text-sm" style={{ color: 'var(--text-warning)' }}>
          Scanning...
        </span>
      );
    }

    if (dealership.status === 'error') {
      return (
        <span className="text-sm" style={{ color: 'var(--text-danger)' }}>
          Site Error
        </span>
      );
    }

    if (dealership.trackedProducts.length === 0) {
      if (dealership.status === 'opportunity') {
        return (
          <span className="text-sm" style={{ color: 'var(--text-warning)' }}>
            No CRM System
          </span>
        );
      }
      return (
        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
          No products detected
        </span>
      );
    }

    const primaryProduct = dealership.trackedProducts[0];
    const isYourProduct = primaryProduct === 'YourProduct' || primaryProduct === 'YourCRM' || primaryProduct === 'LivePerson';

    if (dealership.status === 'changed' && dealership.trackedProducts.length > 1) {
      return (
        <div className="text-sm">
          <span style={{ color: 'var(--text-danger)' }}>
            {dealership.trackedProducts[0]} →
          </span>
          <br />
          <span style={{ color: 'var(--text-secondary)' }}>
            {dealership.trackedProducts[1]}
          </span>
        </div>
      );
    }

    return (
      <div className="text-sm">
        <span style={{ color: isYourProduct ? 'var(--text-success)' : 'var(--text-secondary)' }}>
          {primaryProduct}
        </span>
        {dealership.status === 'stable' && (
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
            (since Jan 2024)
          </div>
        )}
      </div>
    );
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedDealerships = [...dealerships].sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'lastChange':
        comparison = new Date(a.lastChange).getTime() - new Date(b.lastChange).getTime();
        break;
      case 'status':
        comparison = a.status.localeCompare(b.status);
        break;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return (
        <svg className="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }

    return sortDirection === 'asc' ? (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  const isAllSelected = dealerships.length > 0 && selectedDealerships.length === dealerships.length;
  const isIndeterminate = selectedDealerships.length > 0 && selectedDealerships.length < dealerships.length;

  if (dealerships.length === 0) {
    return (
      <div className="p-12 text-center theme-bg-secondary">
        <div
          className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: 'var(--bg-accent)' }}
        >
          <svg className="w-6 h-6 theme-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-lg font-medium theme-text-primary mb-2">No Dealerships Found</h3>
        <p className="theme-text-muted mb-4">
          No dealerships match your current filters. Try adjusting your search criteria.
        </p>
        <Button variant="primary" size="sm">
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead style={{ backgroundColor: 'var(--bg-accent)' }}>
          <tr>
            <th className="px-6 py-3 text-left">
              <input
                type="checkbox"
                checked={isAllSelected}
                ref={(el) => {
                  if (el) el.indeterminate = isIndeterminate;
                }}
                onChange={onSelectAll}
                className="h-4 w-4 rounded"
                style={{
                  accentColor: 'var(--brand-highlight)',
                  backgroundColor: 'var(--bg-accent)',
                  borderColor: 'var(--border-secondary)'
                }}
              />
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium theme-text-muted uppercase tracking-wider cursor-pointer hover:bg-opacity-70 transition-colors"
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center space-x-1">
                <span>Dealership Name</span>
                <SortIcon field="name" />
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium theme-text-muted uppercase tracking-wider">
              Tracked Products
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium theme-text-muted uppercase tracking-wider cursor-pointer hover:bg-opacity-70 transition-colors"
              onClick={() => handleSort('lastChange')}
            >
              <div className="flex items-center space-x-1">
                <span>Last Change</span>
                <SortIcon field="lastChange" />
              </div>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium theme-text-muted uppercase tracking-wider cursor-pointer hover:bg-opacity-70 transition-colors"
              onClick={() => handleSort('status')}
            >
              <div className="flex items-center space-x-1">
                <span>Status</span>
                <SortIcon field="status" />
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium theme-text-muted uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody
          style={{
            backgroundColor: 'var(--bg-secondary)'
          }}
        >
          {sortedDealerships.map((dealership) => (
            <tr
              key={dealership.id}
              className="transition-colors"
              style={{
                backgroundColor: selectedDealerships.includes(dealership.id)
                  ? 'rgba(249, 115, 22, 0.1)'
                  : 'transparent',
                borderLeftWidth: selectedDealerships.includes(dealership.id) ? '2px' : '0px',
                borderLeftColor: selectedDealerships.includes(dealership.id) ? 'var(--brand-highlight)' : 'transparent',
                borderBottomWidth: '1px',
                borderBottomColor: 'var(--border-primary)'
              }}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedDealerships.includes(dealership.id)}
                  onChange={() => onSelectDealership(dealership.id)}
                  className="h-4 w-4 rounded"
                  style={{
                    accentColor: 'var(--brand-highlight)',
                    backgroundColor: 'var(--bg-accent)',
                    borderColor: 'var(--border-secondary)'
                  }}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm font-medium theme-text-primary">
                    {dealership.name}
                  </div>
                  <div className="text-sm theme-text-muted">
                    {dealership.location}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getProductDisplay(dealership)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm theme-text-secondary">
                {dealership.status === 'scanning' ? '--' : formatTimeAgo(dealership.lastChange)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={dealership.status} size="sm" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                <Button variant="ghost" size="sm" disabled={dealership.status === 'scanning'}>
                  Scan
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={dealership.status === 'scanning'}
                  onClick={() => router.push(`/dealerships/${dealership.id}`)}
                >
                  Details
                </Button>
                <Button variant="ghost" size="sm" disabled={dealership.status === 'scanning'}>
                  Export
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DealershipTable;