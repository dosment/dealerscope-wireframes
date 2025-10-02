'use client';

import React, { useState } from 'react';
import Layout from '@/components/ui/Layout';
import { mockAdminAlerts } from '@/lib/mockData';
import Button from '@/components/ui/Button';

export default function AdminAlertsPage() {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All activity' },
    { id: 'subscriptions', label: 'Subscriptions' },
    { id: 'billing', label: 'Billing' },
    { id: 'system', label: 'System' },
    { id: 'users', label: 'Users' }
  ];

  const classifyAlert = (type: string) => {
    if (type.includes('cancel')) return 'billing';
    if (type.includes('subscription')) return 'subscriptions';
    if (type.includes('user')) return 'users';
    if (type.includes('dealership')) return 'system';
    return 'system';
  };

  const highPriorityCount = mockAdminAlerts.filter(alert => alert.priority === 'high').length;
  const unreadCount = mockAdminAlerts.length;
  const subscriptionCount = mockAdminAlerts.filter(alert => alert.type.includes('subscription')).length;

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  const filteredAlerts = filter === 'all'
    ? mockAdminAlerts
    : mockAdminAlerts.filter(alert => classifyAlert(alert.type) === filter);

  return (
    <Layout userType="admin">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-hero">System Alerts</h1>
            <p className="text-secondary">Monitor subscriptions, users, and system activities</p>
          </div>

          {/* Alert Filters */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => {
                const isActive = filter === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setFilter(option.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                      isActive
                        ? 'bg-accent text-highlight border-highlight'
                        : 'bg-secondary text-secondary border-primary hover:bg-accent hover:text-primary'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-elevated shadow-sm rounded-lg p-4 border border-transparent">
              <p className="text-sm text-muted">Unread alerts</p>
              <p className="text-2xl font-semibold text-hero">{unreadCount}</p>
            </div>
            <div className="bg-elevated shadow-sm rounded-lg p-4 border border-transparent">
              <p className="text-sm text-muted">High priority</p>
              <p className="text-2xl font-semibold text-hero">{highPriorityCount}</p>
            </div>
            <div className="bg-elevated shadow-sm rounded-lg p-4 border border-transparent">
              <p className="text-sm text-muted">Subscription events</p>
              <p className="text-2xl font-semibold text-hero">{subscriptionCount}</p>
            </div>
          </div>

          {/* Admin Alerts Feed */}
          <div className="bg-elevated border border-primary rounded-lg">
            <div className="px-6 py-4 border-b border-primary">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-hero">Recent Activity</h2>
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

            <div className="divide-y divide-gray-200">
              {filteredAlerts.map((alert) => {
                const iconConfig = {
                  subscription_new: { bg: 'bg-success-soft', text: 'text-success', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
                  subscription_cancelled: { bg: 'bg-danger-soft', text: 'text-danger', icon: 'M6 18L18 6M6 6l12 12' },
                  subscription_upgraded: { bg: 'bg-info-soft', text: 'text-info', icon: 'M5 10l7-7m0 0l7 7m-7-7v18' },
                  dealership_added: { bg: 'bg-info-soft', text: 'text-info', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                  user_added: { bg: 'bg-highlight', text: 'text-highlight', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' }
                };

                const config = iconConfig[alert.type as keyof typeof iconConfig];

                return (
                  <div key={alert.id} className="p-6 hover:bg-secondary transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${config.bg}`}>
                        <svg className={`w-5 h-5 ${config.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.icon} />
                        </svg>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${
                            alert.priority === 'high' ? 'bg-danger-soft text-red-800' :
                            alert.priority === 'medium' ? 'bg-warning-soft text-warning' :
                            'bg-secondary text-primary'
                          }`}>
                            {alert.priority.toUpperCase()}
                          </span>
                          <span className="text-sm text-muted">{formatTimeAgo(alert.timestamp)}</span>
                        </div>

                        <h3 className="text-sm font-medium text-hero mb-1">
                          {alert.title}
                        </h3>

                        <p className="text-sm text-secondary mb-3">
                          {alert.message}
                        </p>

                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            View Details
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