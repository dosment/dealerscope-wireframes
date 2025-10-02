'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/components/ui/Layout';
import EmptyState from '@/components/ui/EmptyState';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';

interface User {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin: string;
  dealerships: number;
}

const mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', plan: 'Tier 3', status: 'active', lastLogin: '2 hours ago', dealerships: 45 },
  { id: '2', name: 'Sarah Miller', email: 'sarah@example.com', plan: 'Tier 2', status: 'active', lastLogin: '1 day ago', dealerships: 28 },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', plan: 'Tier 1', status: 'active', lastLogin: '3 hours ago', dealerships: 12 },
  { id: '4', name: 'Emily Davis', email: 'emily@example.com', plan: 'Tier 2', status: 'active', lastLogin: '5 hours ago', dealerships: 32 },
  { id: '5', name: 'Robert Wilson', email: 'robert@example.com', plan: 'Tier 3', status: 'inactive', lastLogin: '2 weeks ago', dealerships: 50 },
  { id: '6', name: 'Lisa Anderson', email: 'lisa@example.com', plan: 'Tier 1', status: 'active', lastLogin: '1 hour ago', dealerships: 8 },
  { id: '7', name: 'David Brown', email: 'david@example.com', plan: 'Tier 2', status: 'suspended', lastLogin: '1 month ago', dealerships: 22 },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPlan, setFilterPlan] = useState('all');

  // Simulate loading data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await new Promise(resolve => setTimeout(resolve, 600));
        setUsers(mockUsers);
      } catch (err) {
        setError('Failed to load users');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    const matchesPlan = filterPlan === 'all' || user.plan === filterPlan;
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    setTimeout(() => {
      setUsers(mockUsers);
      setIsLoading(false);
    }, 600);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilterStatus('all');
    setFilterPlan('all');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-tertiary text-primary';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-tertiary text-primary';
    }
  };

  return (
    <Layout userType="admin">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-hero">User Management</h1>
              <p className="text-secondary">Manage user accounts and access</p>
            </div>
            <button className="action-primary px-6 h-11 text-sm font-semibold rounded-xl tracking-wide transition-all duration-200">
              Add New User
            </button>
          </div>

          {/* Filters */}
          <div className="bg-elevated border border-primary rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div>
                <select
                  value={filterPlan}
                  onChange={(e) => setFilterPlan(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Plans</option>
                  <option value="Tier 1">Tier 1</option>
                  <option value="Tier 2">Tier 2</option>
                  <option value="Tier 3">Tier 3</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Total Users</p>
              <p className="text-2xl font-bold text-hero">{mockUsers.length}</p>
            </div>
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Active</p>
              <p className="text-2xl font-bold text-green-600">
                {mockUsers.filter(u => u.status === 'active').length}
              </p>
            </div>
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Inactive</p>
              <p className="text-2xl font-bold text-secondary">
                {mockUsers.filter(u => u.status === 'inactive').length}
              </p>
            </div>
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <p className="text-sm text-muted">Suspended</p>
              <p className="text-2xl font-bold text-red-600">
                {mockUsers.filter(u => u.status === 'suspended').length}
              </p>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-elevated border border-primary rounded-lg overflow-hidden">
            {/* Loading State */}
            {isLoading && <LoadingState message="Loading users..." />}

            {/* Error State */}
            {error && !isLoading && <ErrorState onRetry={handleRetry} />}

            {/* Empty State */}
            {!isLoading && !error && filteredUsers.length === 0 && users.length === 0 && (
              <EmptyState
                icon={
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                }
                title="No users yet"
                description="Get started by adding your first user account."
                action={{
                  label: 'Add New User',
                  onClick: () => console.log('Add user')
                }}
              />
            )}

            {/* No Results State */}
            {!isLoading && !error && filteredUsers.length === 0 && users.length > 0 && (
              <EmptyState
                icon={
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                title="No users match your filters"
                description="Try adjusting your search or filter criteria."
                action={{
                  label: 'Clear Filters',
                  onClick: handleClearFilters
                }}
              />
            )}

            {/* Table with data */}
            {!isLoading && !error && filteredUsers.length > 0 && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Dealerships
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Last Login
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-elevated divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-secondary">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-700 font-medium text-sm">
                                  {user.name.charAt(0)}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-hero">{user.name}</div>
                              <div className="text-sm text-muted">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-hero">{user.plan}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                          {user.dealerships}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                          {user.lastLogin}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-accent hover:text-hero transition-colors duration-200 mr-3">Edit</button>
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
            Showing {filteredUsers.length} of {mockUsers.length} users
          </div>
        </div>
      </div>
    </Layout>
  );
}