'use client';

import React, { useState } from 'react';
import Layout from '@/components/ui/Layout';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';

interface Vendor {
  id: string;
  name: string;
  category: string;
  productsCount: number;
  dealershipsUsing: number;
  status: 'active' | 'inactive';
  lastUpdated: string;
  detectionMethod: string;
}

export default function AdminVendorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mockVendors: Vendor[] = [
    { id: '1', name: 'LivePerson', category: 'Chat Tools', productsCount: 3, dealershipsUsing: 145, status: 'active', lastUpdated: '2 days ago', detectionMethod: 'Script Tag' },
    { id: '2', name: 'Intercom', category: 'Chat Tools', productsCount: 2, dealershipsUsing: 89, status: 'active', lastUpdated: '1 week ago', detectionMethod: 'DOM Element' },
    { id: '3', name: 'Zendesk', category: 'Chat Tools', productsCount: 4, dealershipsUsing: 67, status: 'active', lastUpdated: '3 days ago', detectionMethod: 'Script Tag' },
    { id: '4', name: 'CarGurus', category: 'Digital Retailing', productsCount: 1, dealershipsUsing: 234, status: 'active', lastUpdated: '1 day ago', detectionMethod: 'DOM Element' },
    { id: '5', name: 'AutoTrader', category: 'Digital Retailing', productsCount: 2, dealershipsUsing: 198, status: 'active', lastUpdated: '5 hours ago', detectionMethod: 'Script Tag' },
    { id: '6', name: 'Kelley Blue Book', category: 'Trade Tools', productsCount: 1, dealershipsUsing: 156, status: 'active', lastUpdated: '1 week ago', detectionMethod: 'API Call' },
    { id: '7', name: 'vAuto', category: 'Inventory Management', productsCount: 3, dealershipsUsing: 112, status: 'active', lastUpdated: '2 days ago', detectionMethod: 'Script Tag' },
    { id: '8', name: 'Google Analytics', category: 'Analytics', productsCount: 1, dealershipsUsing: 456, status: 'active', lastUpdated: '1 day ago', detectionMethod: 'Script Tag' },
    { id: '9', name: 'DealerSocket', category: 'Digital Retailing', productsCount: 5, dealershipsUsing: 78, status: 'active', lastUpdated: '4 days ago', detectionMethod: 'DOM Element' },
    { id: '10', name: 'Legacy Chat Pro', category: 'Chat Tools', productsCount: 1, dealershipsUsing: 12, status: 'inactive', lastUpdated: '6 months ago', detectionMethod: 'Script Tag' },
    { id: '11', name: 'Dealer.com', category: 'Site Provider', productsCount: 2, dealershipsUsing: 287, status: 'active', lastUpdated: '1 day ago', detectionMethod: 'Meta Tag' },
    { id: '12', name: 'DealerOn', category: 'Site Provider', productsCount: 1, dealershipsUsing: 156, status: 'active', lastUpdated: '3 days ago', detectionMethod: 'Footer Content' },
    { id: '13', name: 'Dealer Inspire', category: 'Site Provider', productsCount: 1, dealershipsUsing: 198, status: 'active', lastUpdated: '2 days ago', detectionMethod: 'Meta Tag' },
    { id: '14', name: 'Dealership Web Services', category: 'Site Provider', productsCount: 1, dealershipsUsing: 89, status: 'active', lastUpdated: '1 week ago', detectionMethod: 'Footer Content' },
  ];

  const filteredVendors = mockVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || vendor.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || vendor.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-tertiary text-primary';
      default: return 'bg-tertiary text-primary';
    }
  };

  const categories = ['Chat Tools', 'Digital Retailing', 'Trade Tools', 'Inventory Management', 'Site Provider', 'Analytics', 'Marketing Tools', 'Finance Solutions'];

  return (
    <Layout userType="admin">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-hero">Vendor Management</h1>
              <p className="text-secondary">Manage vendors, products, and detection rules</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="action-primary px-6 h-11 text-sm font-semibold rounded-xl tracking-wide transition-all duration-200"
            >
              Add Vendor
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Total Vendors</p>
              <p className="text-2xl font-bold text-hero">{mockVendors.length}</p>
            </div>
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Active Vendors</p>
              <p className="text-2xl font-bold text-green-600">
                {mockVendors.filter(v => v.status === 'active').length}
              </p>
            </div>
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Total Products</p>
              <p className="text-2xl font-bold text-blue-600">
                {mockVendors.reduce((sum, v) => sum + v.productsCount, 0)}
              </p>
            </div>
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Categories</p>
              <p className="text-2xl font-bold text-purple-600">
                {categories.length}
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-elevated border border-primary rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Search by vendor name or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          {/* Vendors Table */}
          <div className="bg-elevated border border-primary rounded-lg overflow-hidden">
            {isLoading ? (
              <LoadingState message="Loading vendors..." />
            ) : error ? (
              <ErrorState
                message={error}
                onRetry={() => {
                  setError(null);
                  setIsLoading(true);
                  setTimeout(() => setIsLoading(false), 1000);
                }}
              />
            ) : filteredVendors.length === 0 ? (
              <EmptyState
                message={searchTerm || filterCategory !== 'all' || filterStatus !== 'all'
                  ? "No vendors match your filters"
                  : "No vendors found"}
                description={searchTerm || filterCategory !== 'all' || filterStatus !== 'all'
                  ? "Try adjusting your search or filters to find what you're looking for"
                  : "Get started by adding your first vendor to track their products"}
                actionLabel={searchTerm || filterCategory !== 'all' || filterStatus !== 'all' ? "Clear Filters" : "Add Vendor"}
                onAction={() => {
                  if (searchTerm || filterCategory !== 'all' || filterStatus !== 'all') {
                    setSearchTerm('');
                    setFilterCategory('all');
                    setFilterStatus('all');
                  } else {
                    setShowAddModal(true);
                  }
                }}
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Vendor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Products
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Dealerships Using
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Detection Method
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Last Updated
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-elevated divide-y divide-gray-200">
                    {filteredVendors.map((vendor) => (
                      <tr key={vendor.id} className="hover:bg-secondary">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-hero">{vendor.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-hero">{vendor.category}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-hero">{vendor.productsCount}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-hero">{vendor.dealershipsUsing}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-secondary">{vendor.detectionMethod}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(vendor.status)}`}>
                            {vendor.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                          {vendor.lastUpdated}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href={`/admin/vendors/${vendor.id}`} className="text-blue-600 hover:text-blue-900 mr-3">Manage</a>
                          <button className="text-secondary hover:text-hero">Delete</button>
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
            Showing {filteredVendors.length} of {mockVendors.length} vendors
          </div>

          {/* Add Vendor Modal */}
          {showAddModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-elevated rounded-lg p-6 max-w-2xl w-full mx-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-hero">Add New Vendor</h2>
                  <button onClick={() => setShowAddModal(false)} className="text-disabled hover:text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">Vendor Name</label>
                    <input
                      type="text"
                      placeholder="Enter vendor name"
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">Category</label>
                    <select className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">Website</label>
                    <input
                      type="text"
                      placeholder="vendor.com"
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">Description</label>
                    <textarea
                      rows={3}
                      placeholder="Brief description of the vendor and their products"
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setShowAddModal(false)}>
                    Add Vendor
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