'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Building2, Zap, Activity, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/ui/Layout';
import Button from '@/components/ui/Button';

export default function AutomotiveGroupHome() {
  const router = useRouter();

  return (
    <Layout userType="automotive_group">
      <div className="h-full px-6 sm:px-8 lg:px-12 py-8">
        <div className="max-w-screen-2xl mx-auto space-y-10">
          {/* Page Header */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-semibold text-hero tracking-tight">Dashboard</h1>
            <p className="text-base text-secondary">Monitor your dealership group's vendor landscape</p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* Total Dealerships */}
            <div className="bg-elevated border border-primary rounded-xl p-8 hover:border-hover transition-all duration-200 hover:shadow-lg group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-muted uppercase tracking-wide">Your Locations</span>
                <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors">
                  <Building2 className="w-5 h-5 text-muted" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-4xl font-bold text-hero mb-2 tracking-tight">12</div>
              <p className="text-sm text-muted">Active dealerships</p>
            </div>

            {/* Opportunities */}
            <div className="bg-elevated border border-primary rounded-xl p-8 hover:border-hover transition-all duration-200 hover:shadow-lg group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-muted uppercase tracking-wide">Vendor Changes</span>
                <div className="p-2 rounded-lg bg-warning-soft group-hover:bg-warning-100 transition-colors">
                  <Zap className="w-5 h-5 text-warning" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-4xl font-bold text-warning mb-2 tracking-tight">8</div>
              <p className="text-sm text-muted">Recent updates</p>
            </div>

            {/* Recent Changes */}
            <div className="bg-elevated border border-primary rounded-xl p-8 hover:border-hover transition-all duration-200 hover:shadow-lg group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-muted uppercase tracking-wide">Products Tracked</span>
                <div className="p-2 rounded-lg bg-info-soft group-hover:bg-info-100 transition-colors">
                  <Activity className="w-5 h-5 text-info" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-4xl font-bold text-info mb-2 tracking-tight">47</div>
              <p className="text-sm text-muted">Across all locations</p>
            </div>

            {/* Using Your Product */}
            <div className="bg-elevated border border-primary rounded-xl p-8 hover:border-hover transition-all duration-200 hover:shadow-lg group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-muted uppercase tracking-wide">Scan Status</span>
                <div className="p-2 rounded-lg bg-success-soft group-hover:bg-success-100 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-success" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-4xl font-bold text-success mb-2 tracking-tight">100%</div>
              <p className="text-sm text-muted">All sites current</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-elevated border border-primary rounded-xl p-8">
            <h2 className="text-xl font-semibold text-hero mb-6 tracking-tight">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button variant="secondary" fullWidth onClick={() => router.push('/dealerships')}>
                View All Locations
              </Button>
              <Button variant="secondary" fullWidth onClick={() => router.push('/reports')}>
                Generate Report
              </Button>
              <Button variant="secondary" fullWidth onClick={() => router.push('/alerts')}>
                View Alerts
              </Button>
            </div>
          </div>

          {/* Location Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Recent Activity */}
            <div className="bg-elevated border border-primary rounded-xl p-8">
              <h2 className="text-xl font-semibold text-hero mb-8 tracking-tight">Recent Activity</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">Miller Honda - Austin</div>
                    <div className="text-sm text-muted mt-0.5">Added new chat tool</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-muted">2 hours ago</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">City Toyota - Dallas</div>
                    <div className="text-sm text-muted mt-0.5">Removed legacy CRM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-muted">1 day ago</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">West Ford - Houston</div>
                    <div className="text-sm text-muted mt-0.5">Updated analytics platform</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-muted">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Locations */}
            <div className="bg-elevated border border-primary rounded-xl p-8">
              <h2 className="text-xl font-semibold text-hero mb-8 tracking-tight">Your Locations</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">Miller Honda</div>
                    <div className="text-sm text-muted mt-0.5">Austin, TX</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success tabular-nums">12 products</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">City Toyota</div>
                    <div className="text-sm text-muted mt-0.5">Dallas, TX</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success tabular-nums">9 products</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">West Ford</div>
                    <div className="text-sm text-muted mt-0.5">Houston, TX</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success tabular-nums">15 products</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">Elite Chevy</div>
                    <div className="text-sm text-muted mt-0.5">San Antonio, TX</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success tabular-nums">11 products</div>
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
