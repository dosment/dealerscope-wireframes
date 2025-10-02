'use client';

import React, { useState } from 'react';
import Layout from '@/components/ui/Layout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import EmptyState from '@/components/ui/EmptyState';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';

interface Dealership {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  oem: string;
  website: string;
  phone: string;
  lastScanned: string;
  status: 'active' | 'inactive' | 'duplicate' | 'pending_merge';
  productsDetected: number;
}

export default function AdminDealershipsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedDealerships, setSelectedDealerships] = useState<string[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showMergeModal, setShowMergeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mockDealerships: Dealership[] = [
    { id: '1', name: 'Miller Honda', address: '1234 N Lamar Blvd', city: 'Austin', state: 'TX', oem: 'Honda', website: 'millerhonda.com', phone: '(512) 555-0100', lastScanned: '2 hours ago', status: 'active', productsDetected: 5 },
    { id: '2', name: 'City Toyota', address: '5678 Main St', city: 'Dallas', state: 'TX', oem: 'Toyota', website: 'citytoyota.com', phone: '(214) 555-0200', lastScanned: '3 hours ago', status: 'active', productsDetected: 3 },
    { id: '3', name: 'Downtown Ford', address: '910 Westheimer Rd', city: 'Houston', state: 'TX', oem: 'Ford', website: 'downtownford.com', phone: '(713) 555-0300', lastScanned: '1 day ago', status: 'active', productsDetected: 7 },
    { id: '4', name: 'Metro Honda', address: '3456 Broadway', city: 'San Antonio', state: 'TX', oem: 'Honda', website: 'metrohonda.com', phone: '(210) 555-0400', lastScanned: '4 hours ago', status: 'active', productsDetected: 4 },
    { id: '5', name: 'West Ford', address: '7890 Montana Ave', city: 'El Paso', state: 'TX', oem: 'Ford', website: 'westford.com', phone: '(915) 555-0500', lastScanned: '6 hours ago', status: 'active', productsDetected: 6 },
    { id: '6', name: 'Miller Honda - Austin', address: '1234 N Lamar Blvd', city: 'Austin', state: 'TX', oem: 'Honda', website: 'millerhondaaustin.com', phone: '(512) 555-0100', lastScanned: '1 week ago', status: 'duplicate', productsDetected: 5 },
    { id: '7', name: 'Sunset Chevrolet', address: '2468 Sunset Blvd', city: 'Los Angeles', state: 'CA', oem: 'Chevrolet', website: 'sunsetchevy.com', phone: '(323) 555-0600', lastScanned: 'Never', status: 'inactive', productsDetected: 0 },
  ];

  const filteredDealerships = mockDealerships.filter(dealership => {
    const matchesSearch = dealership.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealership.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealership.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealership.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealership.website.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || dealership.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success-soft text-success';
      case 'inactive': return 'bg-tertiary text-muted';
      case 'duplicate': return 'bg-warning-soft text-warning';
      case 'pending_merge': return 'bg-info-soft text-info';
      default: return 'bg-tertiary text-muted';
    }
  };

  const handleSelectDealership = (id: string) => {
    setSelectedDealerships(prev =>
      prev.includes(id) ? prev.filter(dealershipId => dealershipId !== id) : [...prev, id]
    );
  };

  const handleMergeDealerships = () => {
    if (selectedDealerships.length >= 2) {
      setShowMergeModal(true);
    }
  };

  return (
    <Layout userType="admin">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-hero">Dealership Management</h1>
              <p className="text-secondary">Add, edit, merge, and manage dealerships in the database</p>
            </div>
            <div className="flex space-x-3">
              {selectedDealerships.length >= 2 && (
                <Button
                  variant="secondary"
                  onClick={handleMergeDealerships}
                >
                  Merge Selected ({selectedDealerships.length})
                </Button>
              )}
              <button
                onClick={() => setShowAddModal(true)}
                className="action-primary px-6 h-11 text-sm font-semibold rounded-xl tracking-wide transition-all duration-200"
              >
                Add Dealership
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Total Dealerships</p>
              <p className="text-2xl font-bold text-hero">{mockDealerships.length}</p>
            </div>
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Active</p>
              <p className="text-2xl font-bold text-success">
                {mockDealerships.filter(d => d.status === 'active').length}
              </p>
            </div>
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Duplicates</p>
              <p className="text-2xl font-bold text-warning">
                {mockDealerships.filter(d => d.status === 'duplicate').length}
              </p>
            </div>
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Inactive</p>
              <p className="text-2xl font-bold text-secondary">
                {mockDealerships.filter(d => d.status === 'inactive').length}
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-elevated border border-primary rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Search by name, address, city, or website..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-elevated text-primary font-medium transition-all duration-200"
                />
              </div>
              <div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-elevated text-primary font-medium transition-all duration-200"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="duplicate">Duplicates</option>
                  <option value="pending_merge">Pending Merge</option>
                </select>
              </div>
            </div>
          </div>

          {/* Dealerships Table */}
          <div className="bg-elevated border border-primary rounded-lg overflow-hidden">
            {isLoading ? (
              <LoadingState message="Loading dealerships..." />
            ) : error ? (
              <ErrorState
                message={error}
                onRetry={() => {
                  setError(null);
                  setIsLoading(true);
                  setTimeout(() => setIsLoading(false), 1000);
                }}
              />
            ) : filteredDealerships.length === 0 ? (
              <EmptyState
                message={searchTerm || filterStatus !== 'all'
                  ? "No dealerships match your filters"
                  : "No dealerships found"}
                description={searchTerm || filterStatus !== 'all'
                  ? "Try adjusting your search or filters to find what you're looking for"
                  : "Get started by adding your first dealership to the system"}
                actionLabel={searchTerm || filterStatus !== 'all' ? "Clear Filters" : "Add Dealership"}
                onAction={() => {
                  if (searchTerm || filterStatus !== 'all') {
                    setSearchTerm('');
                    setFilterStatus('all');
                  } else {
                    setShowAddModal(true);
                  }
                }}
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-primary">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-3 text-left">
                        <input
                          type="checkbox"
                          className="rounded border-secondary"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedDealerships(filteredDealerships.map(d => d.id));
                            } else {
                              setSelectedDealerships([]);
                            }
                          }}
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Dealership
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        City/State
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        OEM
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Products
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Last Scanned
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-elevated divide-y divide-primary">
                    {filteredDealerships.map((dealership) => (
                      <tr key={dealership.id} className="hover:bg-secondary">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            className="rounded border-secondary"
                            checked={selectedDealerships.includes(dealership.id)}
                            onChange={() => handleSelectDealership(dealership.id)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-hero">{dealership.name}</div>
                          <a href={`https://${dealership.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-hero transition-colors duration-200">
                            {dealership.website}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-hero">{dealership.city}, {dealership.state}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-hero">{dealership.oem}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(dealership.status)}`}>
                            {dealership.status.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                          {dealership.productsDetected}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                          {dealership.lastScanned}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => window.location.href = `/admin/dealerships/${dealership.id}`}
                            className="text-accent hover:text-hero transition-colors duration-200 mr-3"
                          >
                            Edit
                          </button>
                          <button className="text-danger-600 hover:text-danger-700 transition-colors duration-200">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Results Summary */}
          <div className="mt-4 text-sm text-muted">
            Showing {filteredDealerships.length} of {mockDealerships.length} dealerships
          </div>

          {/* Add Dealership Modal */}
          {showAddModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-elevated rounded-lg p-6 max-w-2xl w-full mx-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-hero">Add New Dealership</h2>
                  <button onClick={() => setShowAddModal(false)} className="text-disabled hover:text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <Input label="Dealership Name" type="text" placeholder="Enter dealership name" fullWidth />
                  <Input label="Website URL" type="text" placeholder="example.com" fullWidth />
                  <Input label="Phone Number" type="tel" placeholder="(555) 555-5555" fullWidth />
                  <Input label="Street Address" type="text" placeholder="123 Main St" fullWidth />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="City" type="text" placeholder="City" fullWidth />
                    <Input label="State" type="text" placeholder="TX" fullWidth />
                  </div>
                  <Input label="ZIP Code" type="text" placeholder="12345" fullWidth />
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setShowAddModal(false)}>
                    Add Dealership
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Merge Dealerships Modal */}
          {showMergeModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-elevated rounded-lg p-6 max-w-3xl w-full mx-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-hero">Merge Dealerships</h2>
                  <button onClick={() => setShowMergeModal(false)} className="text-disabled hover:text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-secondary">
                    You are merging {selectedDealerships.length} dealerships. Select the primary dealership to keep:
                  </p>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {mockDealerships
                    .filter(d => selectedDealerships.includes(d.id))
                    .map((dealership) => (
                      <label
                        key={dealership.id}
                        className="flex items-start p-4 border border-primary rounded-lg hover:bg-secondary cursor-pointer"
                      >
                        <input type="radio" name="primary" className="mt-1 mr-3" />
                        <div className="flex-1">
                          <div className="font-medium text-hero">{dealership.name}</div>
                          <div className="text-sm text-muted">{dealership.address}</div>
                          <div className="text-sm text-muted">{dealership.city}, {dealership.state}</div>
                          <div className="text-sm text-accent">{dealership.website}</div>
                          <div className="text-xs text-disabled mt-1">
                            {dealership.productsDetected} products detected • Last scanned: {dealership.lastScanned}
                          </div>
                        </div>
                      </label>
                    ))}
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="secondary" onClick={() => setShowMergeModal(false)}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setShowMergeModal(false);
                      setSelectedDealerships([]);
                    }}
                  >
                    Merge Dealerships
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}