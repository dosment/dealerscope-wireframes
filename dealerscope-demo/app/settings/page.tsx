'use client';

import React, { useState } from 'react';
import Layout from '@/components/ui/Layout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function SettingsPage() {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [frequency, setFrequency] = useState('daily');
  const [timeOfDay, setTimeOfDay] = useState('09:00');
  const [categories, setCategories] = useState(['chat', 'digital_retailing']);

  const handleCategoryChange = (category: string) => {
    setCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Layout userType="sales_rep">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-hero">Email Digest Settings</h1>
            <p className="text-secondary">Configure your daily and weekly email summaries</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Settings Form */}
            <div className="space-y-6">
              {/* Email Digest Toggle */}
              <div className="bg-elevated border border-primary rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-hero">Email Digest</h3>
                    <p className="text-sm text-muted">Receive regular summaries of dealership changes</p>
                  </div>
                  <button
                    onClick={() => setEmailEnabled(!emailEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      emailEnabled ? 'bg-accent' : 'bg-tertiary'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-elevated transition-transform ${
                        emailEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {emailEnabled && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-tertiary mb-2">
                        Frequency
                      </label>
                      <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="block w-full border border-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-elevated text-primary font-medium transition-all duration-200"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="never">Never</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-tertiary mb-2">
                        Time of Day
                      </label>
                      <select
                        value={timeOfDay}
                        onChange={(e) => setTimeOfDay(e.target.value)}
                        className="block w-full border border-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-elevated text-primary font-medium transition-all duration-200"
                      >
                        <option value="07:00">7:00 AM</option>
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Category Filters */}
              <div className="bg-elevated border border-primary rounded-lg p-6">
                <h3 className="text-lg font-medium text-hero mb-4">Alert Categories</h3>
                <p className="text-sm text-muted mb-4">Choose which types of changes to include in your digest</p>

                <div className="space-y-3">
                  {[
                    { id: 'chat', label: 'Chat Tools', desc: 'LivePerson, Intercom, Zendesk, etc.' },
                    { id: 'digital_retailing', label: 'Digital Retailing', desc: 'Online showrooms, digital financing, e-commerce platforms' },
                    { id: 'trade_tools', label: 'Trade Tools', desc: 'Vehicle appraisal, trade valuation, ICO platforms' },
                    { id: 'inventory', label: 'Inventory Management', desc: 'Stock management, merchandising, pricing tools' },
                    { id: 'site_provider', label: 'Site Provider', desc: 'Website platforms, hosting, digital presence' },
                    { id: 'analytics', label: 'Analytics', desc: 'Web analytics and tracking tools' },
                    { id: 'marketing', label: 'Marketing Tools', desc: 'Email marketing, automation platforms' },
                    { id: 'finance', label: 'Finance Solutions', desc: 'Payment processing, financing tools' }
                  ].map((category) => (
                    <label key={category.id} className="flex items-start space-x-3 p-3 border border-primary rounded-lg hover:bg-secondary cursor-pointer">
                      <input
                        type="checkbox"
                        checked={categories.includes(category.id)}
                        onChange={() => handleCategoryChange(category.id)}
                        className="mt-1 h-4 w-4 text-accent focus:ring-accent border-secondary rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-hero">{category.label}</div>
                        <div className="text-sm text-muted">{category.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* CRM Integration */}
              <div className="bg-elevated border border-primary rounded-lg p-6">
                <h3 className="text-lg font-medium text-hero mb-4">CRM Integration</h3>
                <p className="text-sm text-muted mb-4">Connect your CRM to automatically create leads from opportunities</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">
                      CRM Platform
                    </label>
                    <select className="block w-full border border-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-elevated text-primary font-medium transition-all duration-200">
                      <option value="">Select your CRM</option>
                      <option value="salesforce">Salesforce</option>
                      <option value="hubspot">HubSpot</option>
                      <option value="pipedrive">Pipedrive</option>
                      <option value="zoho">Zoho CRM</option>
                    </select>
                  </div>

                  <div>
                    <Input
                      label="API Key"
                      type="password"
                      placeholder="Enter your CRM API key"
                      fullWidth
                    />
                  </div>

                  <Button variant="secondary" size="sm">
                    Test Connection
                  </Button>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end space-x-3">
                <Button variant="secondary">
                  Cancel
                </Button>
                <Button variant="primary">
                  Save Settings
                </Button>
              </div>
            </div>

            {/* Preview Panel */}
            <div>
              <div className="bg-elevated border border-primary rounded-lg p-6 sticky top-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <h3 className="text-lg font-medium text-hero mb-4">Email Preview</h3>

                <div className="border border-primary rounded-lg p-4 bg-secondary">
                  <div className="text-sm text-muted mb-2">Subject:</div>
                  <div className="text-sm font-medium text-hero mb-4 break-words">
                    DealerScope Daily Digest - 5 Changes, 3 Opportunities
                  </div>

                  <div className="text-sm text-muted mb-2">Preview:</div>
                  <div className="text-sm text-tertiary space-y-3">
                    <div className="font-medium">Good morning John,</div>
                    <div className="leading-relaxed">Here's your daily summary of dealership changes:</div>

                    <div className="bg-elevated rounded p-3">
                      <div className="font-medium text-danger mb-2">New Opportunities (3)</div>
                      <div className="space-y-1">
                        <div>• Miller Honda - Chat tool removed</div>
                        <div>• City Toyota - No chat tool detected</div>
                        <div>• Downtown Ford - Fresh lead</div>
                      </div>
                    </div>

                    <div className="bg-elevated rounded p-3">
                      <div className="font-medium text-info mb-2">Recent Changes (5)</div>
                      <div className="space-y-1">
                        <div>• Metro Honda - Switched to Intercom</div>
                        <div>• West Ford - Updated chat system</div>
                      </div>
                    </div>

                    <div className="text-sm pt-2">
                      View full details in DealerScope →
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-muted">
                  This preview updates as you change your settings above.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}