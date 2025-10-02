'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/components/ui/Layout';
import LoadingState from '@/components/ui/LoadingState';

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <Layout userType="admin">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto">
          {isLoading ? (
            <LoadingState message="Loading dashboard..." />
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-semibold text-hero">Admin Dashboard</h1>
                <p className="text-secondary">System overview and business metrics</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-elevated shadow-sm rounded-lg p-6 border border-transparent">
                      <h3 className="text-sm font-medium text-muted mb-2">Active Users</h3>
                      <p className="text-3xl font-bold text-hero">247</p>
                      <p className="text-sm text-success mt-2">+12 this month</p>
                    </div>

                    <div className="bg-elevated shadow-sm rounded-lg p-6 border border-transparent">
                      <h3 className="text-sm font-medium text-muted mb-2">Revenue (MRR)</h3>
                      <p className="text-3xl font-bold text-hero">$24,890</p>
                      <p className="text-sm text-success mt-2">+8.2% vs last month</p>
                    </div>

                    <div className="bg-elevated shadow-sm rounded-lg p-6 border border-transparent">
                      <h3 className="text-sm font-medium text-muted mb-2">New Signups</h3>
                      <p className="text-3xl font-bold text-hero">18</p>
                      <p className="text-sm text-success mt-2">+3 this week</p>
                    </div>
                  </div>

                  <div className="bg-elevated shadow-sm rounded-lg p-6 border border-transparent">
                    <h2 className="text-lg font-medium text-hero mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <button className="flex items-center justify-center px-4 py-3 bg-info-soft text-info rounded-lg hover:bg-info-soft/70 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add User
                      </button>
                      <button className="flex items-center justify-center px-4 py-3 bg-success-soft text-success rounded-lg hover:bg-success-soft/70 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Reports
                      </button>
                      <button className="flex items-center justify-center px-4 py-3 bg-warning-soft text-warning rounded-lg hover:bg-warning-soft/70 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Email
                      </button>
                      <button className="flex items-center justify-center px-4 py-3 bg-secondary text-tertiary rounded-lg hover:bg-tertiary transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </button>
                    </div>
                  </div>
                </div>

                <aside className="space-y-6">
                  <div className="bg-elevated shadow-sm rounded-lg p-6 border border-transparent">
                    <h2 className="text-lg font-medium text-hero mb-4">System Health</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-success rounded-full"></div>
                          <span className="text-sm text-tertiary">API Services</span>
                        </div>
                        <span className="text-sm font-medium text-hero">Operational</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-success rounded-full"></div>
                          <span className="text-sm text-tertiary">Scan Queue</span>
                        </div>
                        <span className="text-sm font-medium text-hero">Processing</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-success rounded-full"></div>
                          <span className="text-sm text-tertiary">Database</span>
                        </div>
                        <span className="text-sm font-medium text-hero">Healthy</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-elevated shadow-sm rounded-lg p-6 border border-transparent">
                    <h2 className="text-lg font-medium text-hero mb-4">Insights</h2>
                    <ul className="space-y-3 text-sm text-secondary">
                      <li>- Trials are converting at <span className="font-semibold text-highlight">89%</span> this week.</li>
                      <li>- Scan queue utilization is holding at <span className="font-semibold text-highlight">78%</span>.</li>
                      <li>- Stripe dunning recovered <span className="font-semibold text-highlight">63%</span> of failed payments.</li>
                    </ul>
                  </div>
                </aside>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}