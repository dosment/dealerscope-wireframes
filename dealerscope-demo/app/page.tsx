'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/ui/Layout';
import Button from '@/components/ui/Button';

export default function Home() {
  const router = useRouter();

  return (
    <Layout userType="sales_rep">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto space-y-6">
          {/* Page Header */}
          <div>
            <h1 className="text-2xl font-semibold text-hero">Dashboard</h1>
            <p className="text-secondary">Quick overview of your territory performance</p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Dealerships */}
            <div className="bg-elevated border border-primary rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted">Total Dealerships</span>
                <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-hero">127</div>
              <p className="text-xs text-muted mt-1">In your territory</p>
            </div>

            {/* Opportunities */}
            <div className="bg-elevated border border-primary rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted">Opportunities</span>
                <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-warning">23</div>
              <p className="text-xs text-muted mt-1">Potential leads</p>
            </div>

            {/* Recent Changes */}
            <div className="bg-elevated border border-primary rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted">Recent Changes</span>
                <svg className="w-5 h-5 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-info">8</div>
              <p className="text-xs text-muted mt-1">In last 7 days</p>
            </div>

            {/* Using Your Product */}
            <div className="bg-elevated border border-primary rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted">Your Product</span>
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-success">45</div>
              <p className="text-xs text-muted mt-1">Active customers</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-elevated border border-primary rounded-lg p-6">
            <h2 className="text-lg font-medium text-hero mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="secondary" fullWidth onClick={() => router.push('/dealerships')}>
                View All Dealerships
              </Button>
              <Button variant="secondary" fullWidth onClick={() => router.push('/reports')}>
                Generate Report
              </Button>
              <Button variant="secondary" fullWidth onClick={() => router.push('/alerts')}>
                View Alerts
              </Button>
            </div>
          </div>

          {/* Territory Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Status Breakdown */}
            <div className="bg-elevated border border-primary rounded-lg p-6">
              <h2 className="text-lg font-medium text-hero mb-4">Status Breakdown</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Opportunities</span>
                  <span className="text-sm font-medium text-hero">23 (18%)</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-warning-token h-2 rounded-full" style={{ width: '18%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Changed Recently</span>
                  <span className="text-sm font-medium text-hero">8 (6%)</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-info h-2 rounded-full" style={{ width: '6%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Using Your Product</span>
                  <span className="text-sm font-medium text-hero">45 (35%)</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Stable</span>
                  <span className="text-sm font-medium text-hero">51 (40%)</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-tertiary h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>

            {/* Top Regions */}
            <div className="bg-elevated border border-primary rounded-lg p-6">
              <h2 className="text-lg font-medium text-hero mb-4">Top Regions</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-hero">Austin, TX</div>
                    <div className="text-xs text-muted">45 dealerships</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success">12 opps</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-hero">Dallas, TX</div>
                    <div className="text-xs text-muted">38 dealerships</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success">7 opps</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-hero">Houston, TX</div>
                    <div className="text-xs text-muted">32 dealerships</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success">4 opps</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-hero">San Antonio, TX</div>
                    <div className="text-xs text-muted">12 dealerships</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success">0 opps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}