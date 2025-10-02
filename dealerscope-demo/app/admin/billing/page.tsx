'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/components/ui/Layout';
import LoadingState from '@/components/ui/LoadingState';

interface Subscription {
  id: string;
  userName: string;
  userEmail: string;
  plan: string;
  amount: number;
  status: 'active' | 'past_due' | 'canceled' | 'trialing';
  nextBilling: string;
  customerSince: string;
}

interface Transaction {
  id: string;
  userName: string;
  amount: number;
  status: 'succeeded' | 'failed' | 'refunded';
  date: string;
  invoice: string;
}

export default function AdminBillingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'subscriptions' | 'transactions'>('subscriptions');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPlan, setFilterPlan] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsLoading(false);
    };
    loadData();
  }, []);

  const mockSubscriptions: Subscription[] = [
    { id: '1', userName: 'John Doe', userEmail: 'john@example.com', plan: 'Tier 3', amount: 199, status: 'active', nextBilling: 'Apr 15, 2024', customerSince: 'Jan 2023' },
    { id: '2', userName: 'Sarah Miller', userEmail: 'sarah@example.com', plan: 'Tier 2', amount: 49, status: 'active', nextBilling: 'Apr 18, 2024', customerSince: 'Mar 2023' },
    { id: '3', userName: 'Mike Johnson', userEmail: 'mike@example.com', plan: 'Tier 1', amount: 0, status: 'active', nextBilling: 'N/A', customerSince: 'Feb 2024' },
    { id: '4', userName: 'Emily Davis', userEmail: 'emily@example.com', plan: 'Tier 2', amount: 49, status: 'past_due', nextBilling: 'Apr 10, 2024', customerSince: 'Jun 2023' },
    { id: '5', userName: 'Robert Wilson', userEmail: 'robert@example.com', plan: 'Tier 3', amount: 199, status: 'canceled', nextBilling: 'N/A', customerSince: 'Aug 2022' },
    { id: '6', userName: 'Lisa Anderson', userEmail: 'lisa@example.com', plan: 'Tier 2', amount: 49, status: 'trialing', nextBilling: 'Apr 25, 2024', customerSince: 'Apr 2024' },
  ];

  const mockTransactions: Transaction[] = [
    { id: '1', userName: 'John Doe', amount: 199, status: 'succeeded', date: 'Mar 15, 2024', invoice: 'INV-2024-001' },
    { id: '2', userName: 'Sarah Miller', amount: 49, status: 'succeeded', date: 'Mar 18, 2024', invoice: 'INV-2024-002' },
    { id: '3', userName: 'Emily Davis', amount: 49, status: 'failed', date: 'Mar 10, 2024', invoice: 'INV-2024-003' },
    { id: '4', userName: 'Lisa Anderson', amount: 49, status: 'succeeded', date: 'Mar 25, 2024', invoice: 'INV-2024-005' },
    { id: '5', userName: 'John Doe', amount: 199, status: 'succeeded', date: 'Feb 15, 2024', invoice: 'INV-2024-006' },
    { id: '6', userName: 'David Brown', amount: 49, status: 'refunded', date: 'Feb 12, 2024', invoice: 'INV-2024-007' },
  ];

  const filteredSubscriptions = mockSubscriptions.filter(sub => {
    const matchesStatus = filterStatus === 'all' || sub.status === filterStatus;
    const matchesPlan = filterPlan === 'all' || sub.plan === filterPlan;
    return matchesStatus && matchesPlan;
  });

  const totalMRR = mockSubscriptions
    .filter(sub => sub.status === 'active' || sub.status === 'trialing')
    .reduce((sum, sub) => sum + sub.amount, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'past_due': return 'bg-yellow-100 text-yellow-800';
      case 'canceled': return 'bg-red-100 text-red-800';
      case 'trialing': return 'bg-blue-100 text-blue-800';
      case 'succeeded': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-tertiary text-primary';
      default: return 'bg-tertiary text-primary';
    }
  };

  return (
    <Layout userType="admin">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto">
          {isLoading ? (
            <LoadingState message="Loading billing data..." />
          ) : (
            <>
              {/* Header */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-hero">Billing & Revenue</h1>
                  <p className="text-secondary">Manage subscriptions and track revenue</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Export Report
                </button>
              </div>

          {/* Revenue Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-elevated border border-primary rounded-lg p-6">
              <p className="text-sm text-muted mb-2">Monthly Recurring Revenue</p>
              <p className="text-3xl font-bold text-hero">${totalMRR.toLocaleString()}</p>
              <p className="text-sm text-green-600 mt-2">+8.2% vs last month</p>
            </div>

            <div className="bg-elevated border border-primary rounded-lg p-6">
              <p className="text-sm text-muted mb-2">Active Subscriptions</p>
              <p className="text-3xl font-bold text-hero">
                {mockSubscriptions.filter(s => s.status === 'active').length}
              </p>
              <p className="text-sm text-secondary mt-2">Out of {mockSubscriptions.length} total</p>
            </div>

            <div className="bg-elevated border border-primary rounded-lg p-6">
              <p className="text-sm text-muted mb-2">Failed Payments</p>
              <p className="text-3xl font-bold text-red-600">
                {mockSubscriptions.filter(s => s.status === 'past_due').length}
              </p>
              <p className="text-sm text-red-600 mt-2">Requires attention</p>
            </div>

            <div className="bg-elevated border border-primary rounded-lg p-6">
              <p className="text-sm text-muted mb-2">Trial Conversions</p>
              <p className="text-3xl font-bold text-blue-600">
                {mockSubscriptions.filter(s => s.status === 'trialing').length}
              </p>
              <p className="text-sm text-secondary mt-2">Active trials</p>
            </div>
          </div>

          {/* Plan Distribution */}
          <div className="bg-elevated border border-primary rounded-lg p-6 mb-8">
            <h2 className="text-lg font-medium text-hero mb-4">Revenue by Plan</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-secondary">Tier 3 - Enterprise ($199/mo)</span>
                  <span className="text-sm font-medium text-hero">
                    {mockSubscriptions.filter(s => s.plan === 'Tier 3' && s.status === 'active').length} users - $
                    {mockSubscriptions.filter(s => s.plan === 'Tier 3' && s.status === 'active').length * 199}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-secondary">Tier 2 - Pro ($49/mo)</span>
                  <span className="text-sm font-medium text-hero">
                    {mockSubscriptions.filter(s => s.plan === 'Tier 2' && s.status === 'active').length} users - $
                    {mockSubscriptions.filter(s => s.plan === 'Tier 2' && s.status === 'active').length * 49}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-secondary">Tier 1 - Free ($0/mo)</span>
                  <span className="text-sm font-medium text-hero">
                    {mockSubscriptions.filter(s => s.plan === 'Tier 1' && s.status === 'active').length} users - $0
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-primary">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('subscriptions')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'subscriptions'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-muted hover:text-tertiary hover:border-secondary'
                  }`}
                >
                  Subscriptions
                </button>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'transactions'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-muted hover:text-tertiary hover:border-secondary'
                  }`}
                >
                  Transaction History
                </button>
              </nav>
            </div>
          </div>

          {/* Subscriptions Tab */}
          {activeTab === 'subscriptions' && (
            <>
              {/* Filters */}
              <div className="bg-elevated border border-primary rounded-lg p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">Filter by Status</label>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All Statuses</option>
                      <option value="active">Active</option>
                      <option value="past_due">Past Due</option>
                      <option value="trialing">Trialing</option>
                      <option value="canceled">Canceled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">Filter by Plan</label>
                    <select
                      value={filterPlan}
                      onChange={(e) => setFilterPlan(e.target.value)}
                      className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All Plans</option>
                      <option value="Tier 1">Tier 1 (Free)</option>
                      <option value="Tier 2">Tier 2 (Pro)</option>
                      <option value="Tier 3">Tier 3 (Enterprise)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Subscriptions Table */}
              <div className="bg-elevated border border-primary rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                          Plan
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                          Next Billing
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                          Customer Since
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-elevated divide-y divide-gray-200">
                      {filteredSubscriptions.map((sub) => (
                        <tr key={sub.id} className="hover:bg-secondary">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-hero">{sub.userName}</div>
                              <div className="text-sm text-muted">{sub.userEmail}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-hero">{sub.plan}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-medium text-hero">${sub.amount}/mo</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(sub.status)}`}>
                              {sub.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                            {sub.nextBilling}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                            {sub.customerSince}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                            {sub.status === 'past_due' && (
                              <button className="text-orange-600 hover:text-orange-900 mr-3">Retry</button>
                            )}
                            <button className="text-red-600 hover:text-red-900">Cancel</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Transactions Tab */}
          {activeTab === 'transactions' && (
            <div className="bg-elevated border border-primary rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Invoice
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-elevated divide-y divide-gray-200">
                    {mockTransactions.map((txn) => (
                      <tr key={txn.id} className="hover:bg-secondary">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-mono text-hero">{txn.invoice}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-hero">{txn.userName}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-hero">${txn.amount}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(txn.status)}`}>
                            {txn.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                          {txn.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">View Invoice</button>
                          {txn.status === 'succeeded' && (
                            <button className="text-secondary hover:text-hero">Refund</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Results Summary */}
          <div className="mt-4 text-sm text-muted">
            {activeTab === 'subscriptions'
              ? `Showing ${filteredSubscriptions.length} of ${mockSubscriptions.length} subscriptions`
              : `Showing ${mockTransactions.length} transactions`
            }
          </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}