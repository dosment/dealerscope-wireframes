'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Layout from '@/components/ui/Layout';
import { mockRecentChanges, mockAdminAlerts } from '@/lib/mockData';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';

export default function AlertsPage() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');
  const [filter, setFilter] = useState('all');

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  const getAlertType = (change: any) => {
    if (change.changeType === 'removed' && change.productName !== 'YourProduct') {
      return 'opportunity';
    }
    if (change.changeType === 'installed' && change.productName !== 'YourProduct') {
      return 'competitor';
    }
    return 'change';
  };

  const alertTypeColors = {
    opportunity: 'bg-warning-soft text-warning border-warning-soft',
    competitor: 'bg-danger-soft text-danger border-danger-soft',
    change: 'bg-info-soft text-info border-info-soft'
  };

  const alertTypeLabels = {
    opportunity: 'Opportunity',
    competitor: 'Competitor Alert',
    change: 'Change'
  };

  if (isAdmin) {
    return (
      <Layout userType="admin">
        <div className="h-full p-6">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-hero">System Alerts</h1>
              <p className="text-secondary">Monitor subscriptions, users, and system activities</p>
            </div>

            {/* Admin Alert Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-elevated border border-primary rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-success-soft rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-hero">New Subscriptions</p>
                    <p className="text-2xl font-semibold text-hero">2</p>
                  </div>
                </div>
              </div>

              <div className="bg-elevated border border-primary rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-danger-soft rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-hero">Cancellations</p>
                    <p className="text-2xl font-semibold text-hero">1</p>
                  </div>
                </div>
              </div>

              <div className="bg-elevated border border-primary rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-info-soft rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-hero">New Dealerships</p>
                    <p className="text-2xl font-semibold text-hero">3</p>
                  </div>
                </div>
              </div>

              <div className="bg-elevated border border-primary rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-tertiary rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-hero" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-hero">New Users</p>
                    <p className="text-2xl font-semibold text-hero">4</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Alerts Feed */}
            <div className="bg-elevated border border-primary rounded-lg">
              <div className="px-6 py-4 border-b border-primary">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-hero">Recent Activity</h2>
                  <div className="flex space-x-2">
                    <Button variant="secondary" size="sm">
                      Export
                    </Button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-primary">
                {mockAdminAlerts.map((alert) => {
                  const iconConfig = {
                    subscription_new: { bg: 'bg-success-soft', text: 'text-success', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
                    subscription_cancelled: { bg: 'bg-danger-soft', text: 'text-danger', icon: 'M6 18L18 6M6 6l12 12' },
                    subscription_upgraded: { bg: 'bg-info-soft', text: 'text-info', icon: 'M5 10l7-7m0 0l7 7m-7-7v18' },
                    dealership_added: { bg: 'bg-info-soft', text: 'text-info', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                    user_added: { bg: 'bg-tertiary', text: 'text-hero', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' }
                  };

                  const config = iconConfig[alert.type as keyof typeof iconConfig];

                  return (
                    <div key={alert.id} className="p-6 hover:bg-secondary">
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${config.bg}`}>
                          <svg className={`w-5 h-5 ${config.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.icon} />
                          </svg>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${
                              alert.priority === 'high' ? 'bg-danger-soft text-danger' :
                              alert.priority === 'medium' ? 'bg-warning-soft text-warning' :
                              'bg-tertiary text-muted'
                            }`}>
                              {alert.priority.toUpperCase()}
                            </span>
                            <span className="text-sm text-muted">{formatTimeAgo(alert.timestamp)}</span>
                          </div>

                          <h3 className="text-sm font-medium text-hero mb-1">
                            {alert.title}
                          </h3>

                          <p className="text-sm text-secondary">
                            {alert.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout userType="sales_rep">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-hero">Alerts & Notifications</h1>
            <p className="text-secondary">Monitor important changes and opportunities across your dealership portfolio</p>
          </div>

          {/* Alert Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-elevated border border-primary rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-danger-soft rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-hero">High Priority</p>
                  <p className="text-2xl font-semibold text-hero">3</p>
                </div>
              </div>
            </div>

            <div className="bg-elevated border border-primary rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-warning-soft rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-hero">Opportunities</p>
                  <p className="text-2xl font-semibold text-hero">8</p>
                </div>
              </div>
            </div>

            <div className="bg-elevated border border-primary rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-info-soft rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-hero">New Changes</p>
                  <p className="text-2xl font-semibold text-hero">12</p>
                </div>
              </div>
            </div>

            <div className="bg-elevated border border-primary rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-success-soft rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-hero">Resolved</p>
                  <p className="text-2xl font-semibold text-hero">24</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-elevated border border-primary rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-tertiary">Filter by:</span>
              <div className="flex space-x-2">
                {['all', 'opportunity', 'competitor', 'change'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      filter === type
                        ? 'bg-hero text-white'
                        : 'bg-tertiary text-muted hover:bg-secondary'
                    }`}
                  >
                    {type === 'all' ? 'All Alerts' : alertTypeLabels[type as keyof typeof alertTypeLabels]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts Feed */}
          <div className="bg-elevated border border-primary rounded-lg">
            <div className="px-6 py-4 border-b border-primary">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-hero">Alert Feed</h2>
                <div className="flex space-x-2">
                  <Button variant="secondary" size="sm">
                    Mark All Read
                  </Button>
                  <Button variant="secondary" size="sm">
                    Export
                  </Button>
                </div>
              </div>
            </div>

            <div className="divide-y divide-primary">
              {mockRecentChanges.map((change) => {
                const alertType = getAlertType(change);

                return (
                  <div key={change.id} className="p-6 hover:bg-secondary">
                    <div className="flex items-start space-x-4">
                      {/* Alert Icon */}
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        alertType === 'opportunity' ? 'bg-warning-soft' :
                        alertType === 'competitor' ? 'bg-danger-soft' : 'bg-info-soft'
                      }`}>
                        {alertType === 'opportunity' ? (
                          <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : alertType === 'competitor' ? (
                          <svg className="w-5 h-5 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md border ${alertTypeColors[alertType]}`}>
                            {alertTypeLabels[alertType]}
                          </span>
                          <span className="text-sm text-muted">{formatTimeAgo(change.timestamp)}</span>
                        </div>

                        <h3 className="text-sm font-medium text-hero mb-1">
                          {change.changeType.toUpperCase()}: {change.productName} at {change.dealershipName}
                        </h3>

                        <p className="text-sm text-secondary mb-3">
                          {change.notes || `Product ${change.changeType} detected. Confidence: ${Math.round(change.confidence * 100)}%`}
                        </p>

                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                          <Button variant="ghost" size="sm">
                            Contact Dealer
                          </Button>
                          <Button variant="ghost" size="sm">
                            Add to CRM
                          </Button>
                          <Button variant="ghost" size="sm">
                            Mark as Read
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="px-6 py-4 border-t border-primary text-center">
              <Button variant="ghost" size="sm">
                Load More Alerts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}