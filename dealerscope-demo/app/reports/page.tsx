'use client';

import React, { useState, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';
import Layout from '@/components/ui/Layout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import LoadingState from '@/components/ui/LoadingState';

export default function ReportsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [zipCode, setZipCode] = useState('');
  const [radius, setRadius] = useState('50');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <Layout userType="sales_rep">
      <div className="h-full px-6 sm:px-8 lg:px-12 py-8">
        <div className="max-w-screen-2xl mx-auto">
          {isLoading ? (
            <LoadingState message="Loading reports..." />
          ) : (
            <>
              <div className="mb-10 space-y-2">
                <h1 className="text-3xl sm:text-4xl font-semibold text-hero tracking-tight">Prospecting</h1>
                <p className="text-base text-secondary">Find dealerships and opportunities in specific regions</p>
              </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Report Builder */}
            <div className="bg-elevated border border-primary rounded-xl p-8">
              <h2 className="text-xl font-semibold text-hero mb-8 tracking-tight">Build Report</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-tertiary mb-2">
                    ZIP Code + Radius Search
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="ZIP Code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      fullWidth
                    />
                    <select
                      value={radius}
                      onChange={(e) => setRadius(e.target.value)}
                      className="block w-full border border-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-elevated text-primary font-medium transition-all duration-200"
                    >
                      <option value="25">25 miles</option>
                      <option value="50">50 miles</option>
                      <option value="100">100 miles</option>
                      <option value="200">200 miles</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-tertiary mb-2">
                    Product Category Filter
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-full border border-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-elevated text-primary font-medium transition-all duration-200"
                  >
                    <option value="all">All Product Categories</option>
                    <option value="chat">Chat Tools</option>
                    <option value="digital_retailing">Digital Retailing</option>
                    <option value="trade_tools">Trade Tools</option>
                    <option value="inventory">Inventory Management</option>
                    <option value="analytics">Analytics Platforms</option>
                    <option value="marketing">Marketing Tools</option>
                    <option value="finance">Finance Solutions</option>
                  </select>
                </div>

                <div className="bg-secondary rounded-lg p-4">
                  <h3 className="text-sm font-medium text-hero mb-3">Report Options</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-secondary text-info" defaultChecked />
                      <span className="ml-2 text-sm text-tertiary">Dealers with target products</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-secondary text-info" defaultChecked />
                      <span className="ml-2 text-sm text-tertiary">Dealers with competitor products</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-secondary text-info" defaultChecked />
                      <span className="ml-2 text-sm text-tertiary">Dealers missing products (opportunities)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-secondary text-info" />
                      <span className="ml-2 text-sm text-tertiary">Exclude existing customers</span>
                    </label>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="primary" className="flex-1">
                    Generate Report
                  </Button>
                  <Button variant="secondary">
                    Save Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Preview */}
            <div className="bg-elevated border border-primary rounded-xl p-8">
              <h2 className="text-xl font-semibold text-hero mb-8 tracking-tight">Report Results</h2>

              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-tertiary/30 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 text-muted" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-hero mb-3 tracking-tight">Ready to Generate</h3>
                <p className="text-muted mb-6">
                  Enter search criteria and click "Generate Report" to see results
                </p>

                <div className="text-left bg-secondary rounded-lg p-4">
                  <h4 className="text-sm font-medium text-hero mb-2">Example Results Will Include:</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Dealership names and locations</li>
                    <li>• Current product installations</li>
                    <li>• Opportunity assessment</li>
                    <li>• Contact information</li>
                    <li>• Distance from search center</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Saved Reports */}
          <div className="mt-8 bg-elevated border border-primary rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-hero tracking-tight">Saved Reports</h2>
              <Button variant="secondary" size="sm">
                Manage Saved Reports
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="border border-primary rounded-xl p-6 hover:bg-secondary/30 hover:border-hover cursor-pointer transition-all duration-200">
                <h3 className="font-semibold text-hero text-base">Texas Market Analysis</h3>
                <p className="text-sm text-muted mt-2">All chat tools within 100 miles of Austin</p>
                <p className="text-xs text-disabled mt-3">Last run: 2 days ago</p>
              </div>

              <div className="border border-primary rounded-xl p-6 hover:bg-secondary/30 hover:border-hover cursor-pointer transition-all duration-200">
                <h3 className="font-semibold text-hero text-base">California Opportunities</h3>
                <p className="text-sm text-muted mt-2">CRM opportunities in LA metro area</p>
                <p className="text-xs text-disabled mt-3">Last run: 1 week ago</p>
              </div>

              <div className="border border-primary rounded-xl p-6 hover:bg-secondary/30 hover:border-hover cursor-pointer transition-all duration-200">
                <h3 className="font-semibold text-hero text-base">Competitor Analysis</h3>
                <p className="text-sm text-muted mt-2">Dealers using competitor solutions</p>
                <p className="text-xs text-disabled mt-3">Last run: 3 days ago</p>
              </div>
            </div>
          </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}