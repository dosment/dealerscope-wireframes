'use client';

import React, { useState } from 'react';
import Layout from '@/components/ui/Layout';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ProfilePage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@yourcompany.com');
  const [company, setCompany] = useState('Automotive Solutions Inc');
  const [phone, setPhone] = useState('(555) 123-4567');
  const [timezone, setTimezone] = useState('America/New_York');

  return (
    <Layout userType="sales_rep">
      <div className="h-full p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-hero">Profile Settings</h1>
            <p className="text-secondary">Manage your account information and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <div className="bg-elevated border border-primary rounded-lg p-6">
                <h2 className="text-lg font-medium text-hero mb-4">Personal Information</h2>

                <div className="space-y-4">
                  <div>
                    <Input
                      label="Full Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth
                    />
                  </div>

                  <div>
                    <Input
                      label="Email Address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                    />
                  </div>

                  <div>
                    <Input
                      label="Company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      fullWidth
                    />
                  </div>

                  <div>
                    <Input
                      label="Phone Number"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      fullWidth
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">
                      Timezone
                    </label>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="block w-full border border-secondary rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="America/Chicago">Central Time (CT)</option>
                      <option value="America/Denver">Mountain Time (MT)</option>
                      <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="bg-elevated border border-primary rounded-lg p-6">
                <h2 className="text-lg font-medium text-hero mb-4">Change Password</h2>

                <div className="space-y-4">
                  <div>
                    <Input
                      label="Current Password"
                      type="password"
                      placeholder="Enter current password"
                      fullWidth
                    />
                  </div>

                  <div>
                    <Input
                      label="New Password"
                      type="password"
                      placeholder="Enter new password"
                      fullWidth
                    />
                  </div>

                  <div>
                    <Input
                      label="Confirm New Password"
                      type="password"
                      placeholder="Confirm new password"
                      fullWidth
                    />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="bg-elevated border border-primary rounded-lg p-6">
                <h2 className="text-lg font-medium text-hero mb-4">Preferences</h2>

                <div className="space-y-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-secondary text-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-tertiary">Email notifications for new changes</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-secondary text-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-tertiary">Weekly digest emails</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-secondary text-blue-600" />
                    <span className="ml-2 text-sm text-tertiary">Push notifications (browser)</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-secondary text-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-tertiary">Marketing emails</span>
                  </label>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end space-x-3">
                <Button variant="secondary">
                  Cancel
                </Button>
                <Button variant="primary">
                  Save Changes
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Profile Picture */}
              <div className="bg-elevated border border-primary rounded-lg p-6 mb-6">
                <h3 className="text-sm font-medium text-hero mb-4">Profile Picture</h3>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-blue-700 font-bold text-3xl">
                      {name.charAt(0)}
                    </span>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    Change Photo
                  </button>
                </div>
              </div>

              {/* Account Info */}
              <div className="bg-elevated border border-primary rounded-lg p-6 mb-6">
                <h3 className="text-sm font-medium text-hero mb-4">Account Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted">Plan:</span>
                    <span className="ml-2 font-medium text-hero">Enterprise</span>
                  </div>
                  <div>
                    <span className="text-muted">Dealerships:</span>
                    <span className="ml-2 font-medium text-hero">25 / 50</span>
                  </div>
                  <div>
                    <span className="text-muted">Member since:</span>
                    <span className="ml-2 font-medium text-hero">Jan 2023</span>
                  </div>
                  <div>
                    <span className="text-muted">Last login:</span>
                    <span className="ml-2 font-medium text-hero">Today at 9:42 AM</span>
                  </div>
                </div>
                <button className="mt-4 w-full text-sm text-blue-600 hover:text-blue-700 text-center">
                  Upgrade Plan
                </button>
              </div>

              {/* Danger Zone */}
              <div className="bg-elevated border border-red-200 rounded-lg p-6">
                <h3 className="text-sm font-medium text-red-900 mb-4">Danger Zone</h3>
                <p className="text-sm text-secondary mb-4">
                  Permanently delete your account and all associated data.
                </p>
                <button className="w-full px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}