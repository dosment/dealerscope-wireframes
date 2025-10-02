'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Building2, Zap, Activity, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/ui/Layout';
import Button from '@/components/ui/Button';

export default function Home() {
  const router = useRouter();

  return (
    <Layout userType="sales_rep">
      <div className="h-full px-6 sm:px-8 lg:px-12 py-8">
        <div className="max-w-screen-2xl mx-auto space-y-10">
          {/* Page Header */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-semibold text-hero tracking-tight">Dashboard</h1>
            <p className="text-base text-secondary">Quick overview of your territory performance</p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* Total Dealerships */}
            <div className="bg-elevated border border-primary rounded-xl p-8 hover:border-hover transition-all duration-200 hover:shadow-lg group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-muted uppercase tracking-wide">Total Dealerships</span>
                <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors">
                  <Building2 className="w-5 h-5 text-muted" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-4xl font-bold text-hero mb-2 tracking-tight">127</div>
              <p className="text-sm text-muted">In your territory</p>
            </div>

            {/* Opportunities */}
            <div className="bg-elevated border border-primary rounded-xl p-8 hover:border-hover transition-all duration-200 hover:shadow-lg group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-muted uppercase tracking-wide">Opportunities</span>
                <div className="p-2 rounded-lg bg-warning-soft group-hover:bg-warning-100 transition-colors">
                  <Zap className="w-5 h-5 text-warning" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-4xl font-bold text-warning mb-2 tracking-tight">23</div>
              <p className="text-sm text-muted">Potential leads</p>
            </div>

            {/* Recent Changes */}
            <div className="bg-elevated border border-primary rounded-xl p-8 hover:border-hover transition-all duration-200 hover:shadow-lg group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-muted uppercase tracking-wide">Recent Changes</span>
                <div className="p-2 rounded-lg bg-info-soft group-hover:bg-info-100 transition-colors">
                  <Activity className="w-5 h-5 text-info" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-4xl font-bold text-info mb-2 tracking-tight">8</div>
              <p className="text-sm text-muted">In last 7 days</p>
            </div>

            {/* Using Your Product */}
            <div className="bg-elevated border border-primary rounded-xl p-8 hover:border-hover transition-all duration-200 hover:shadow-lg group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-muted uppercase tracking-wide">Your Product</span>
                <div className="p-2 rounded-lg bg-success-soft group-hover:bg-success-100 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-success" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-4xl font-bold text-success mb-2 tracking-tight">45</div>
              <p className="text-sm text-muted">Active customers</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-elevated border border-primary rounded-xl p-8">
            <h2 className="text-xl font-semibold text-hero mb-6 tracking-tight">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Status Breakdown */}
            <div className="bg-elevated border border-primary rounded-xl p-8">
              <h2 className="text-xl font-semibold text-hero mb-8 tracking-tight">Status Breakdown</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-secondary">Opportunities</span>
                    <span className="text-sm font-semibold text-hero tabular-nums">23 (18%)</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-2.5">
                    <div className="bg-warning-token h-2.5 rounded-full transition-all duration-500" style={{ width: '18%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-secondary">Changed Recently</span>
                    <span className="text-sm font-semibold text-hero tabular-nums">8 (6%)</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-2.5">
                    <div className="bg-info h-2.5 rounded-full transition-all duration-500" style={{ width: '6%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-secondary">Using Your Product</span>
                    <span className="text-sm font-semibold text-hero tabular-nums">45 (35%)</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-2.5">
                    <div className="bg-success h-2.5 rounded-full transition-all duration-500" style={{ width: '35%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-secondary">Stable</span>
                    <span className="text-sm font-semibold text-hero tabular-nums">51 (40%)</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-2.5">
                    <div className="bg-tertiary h-2.5 rounded-full transition-all duration-500" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Regions */}
            <div className="bg-elevated border border-primary rounded-xl p-8">
              <h2 className="text-xl font-semibold text-hero mb-8 tracking-tight">Top Regions</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">Austin, TX</div>
                    <div className="text-sm text-muted mt-0.5">45 dealerships</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-semibold text-success tabular-nums">12 opps</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">Dallas, TX</div>
                    <div className="text-sm text-muted mt-0.5">38 dealerships</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-semibold text-success tabular-nums">7 opps</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">Houston, TX</div>
                    <div className="text-sm text-muted mt-0.5">32 dealerships</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-semibold text-success tabular-nums">4 opps</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 hover:bg-secondary/20 rounded-lg px-3 -mx-3 transition-colors">
                  <div>
                    <div className="text-base font-semibold text-hero">San Antonio, TX</div>
                    <div className="text-sm text-muted mt-0.5">12 dealerships</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-semibold text-muted tabular-nums">0 opps</div>
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