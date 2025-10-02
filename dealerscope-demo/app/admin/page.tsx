'use client';

import React, { useState, useEffect } from 'react';
import Layout from '@/components/ui/Layout';
import LoadingState from '@/components/ui/LoadingState';
import { UserPlus, FileText, Mail, Settings } from 'lucide-react';

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
                      <button className="flex items-center justify-center px-4 py-3 bg-accent/10 text-accent rounded-xl hover:bg-accent/20 transition-all duration-200">
                        <UserPlus className="w-5 h-5 mr-2" strokeWidth={1.5} />
                        Add User
                      </button>
                      <button className="flex items-center justify-center px-4 py-3 bg-success-soft text-success rounded-xl hover:bg-success-soft/70 transition-all duration-200">
                        <FileText className="w-5 h-5 mr-2" strokeWidth={1.5} />
                        View Reports
                      </button>
                      <button className="flex items-center justify-center px-4 py-3 bg-warning-soft text-warning rounded-xl hover:bg-warning-soft/70 transition-all duration-200">
                        <Mail className="w-5 h-5 mr-2" strokeWidth={1.5} />
                        Send Email
                      </button>
                      <button className="flex items-center justify-center px-4 py-3 bg-elevated border border-primary text-secondary rounded-xl hover:border-hover hover:text-primary transition-all duration-200">
                        <Settings className="w-5 h-5 mr-2" strokeWidth={1.5} />
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