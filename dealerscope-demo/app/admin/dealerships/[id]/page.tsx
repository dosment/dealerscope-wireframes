'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from '@/components/ui/Layout';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import { ChevronLeft, Globe, Phone, MapPin, Building2, Calendar, Activity, AlertTriangle, Save, Trash2 } from 'lucide-react';

export default function AdminDealershipDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dealershipId = params.id as string;

  // Mock data - in real app, fetch based on ID
  const [dealership, setDealership] = useState({
    id: dealershipId,
    name: 'Miller Honda',
    website: 'https://millerhonda.com',
    websiteNormalized: 'millerhonda.com',
    phone: '(512) 555-0100',
    address: '1234 N Lamar Blvd',
    city: 'Austin',
    state: 'TX',
    zipCode: '78701',
    oem: 'Honda',
    status: 'active' as 'active' | 'inactive' | 'duplicate' | 'pending_merge',
    productsDetected: 5,
    lastScanned: '2 hours ago',
    createdAt: 'Jan 15, 2024',
    assignedUsers: 3,
    mergedIntoId: null,
    mergedAt: null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this dealership? This action cannot be undone.')) {
      // Handle delete
      router.push('/admin/dealerships');
    }
  };

  return (
    <Layout userType="admin">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto space-y-6">
          {/* Back Button */}
          <button
            onClick={() => router.push('/admin/dealerships')}
            className="flex items-center text-sm text-secondary hover:text-primary transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4 mr-1" strokeWidth={2} />
            Back to Dealerships
          </button>

          {/* Header */}
          <div className="bg-elevated border border-primary rounded-xl p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={dealership.name}
                    onChange={(e) => setDealership({ ...dealership, name: e.target.value })}
                    className="text-2xl font-semibold text-hero bg-secondary border border-primary rounded-lg px-3 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                ) : (
                  <h1 className="text-2xl font-semibold text-hero">{dealership.name}</h1>
                )}
                <div className="flex items-center gap-4 mt-3">
                  <StatusBadge status={dealership.status} />
                  <span className="text-sm text-muted">{dealership.oem}</span>
                  <span className="text-sm text-muted">ID: {dealership.id}</span>
                </div>
              </div>
              <div className="flex gap-3">
                {isEditing ? (
                  <>
                    <Button
                      variant="tertiary"
                      size="md"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      loading={isSaving}
                      onClick={handleSave}
                    >
                      <Save className="w-4 h-4 mr-2" strokeWidth={2} />
                      Save Changes
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="danger"
                      size="md"
                      onClick={handleDelete}
                    >
                      <Trash2 className="w-4 h-4 mr-2" strokeWidth={2} />
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Dealership
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-secondary rounded-lg p-4 border border-primary">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Products Detected</span>
                  <Activity className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <p className="text-2xl font-bold text-hero mt-2">{dealership.productsDetected}</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 border border-primary">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Assigned Users</span>
                  <Building2 className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <p className="text-2xl font-bold text-hero mt-2">{dealership.assignedUsers}</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 border border-primary">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Last Scanned</span>
                  <Calendar className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-hero mt-2">{dealership.lastScanned}</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 border border-primary">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Created</span>
                  <Calendar className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-hero mt-2">{dealership.createdAt}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column - Details */}
            <div className="xl:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="bg-elevated border border-primary rounded-xl p-6">
                <h2 className="text-lg font-medium text-hero mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">
                      <Globe className="w-4 h-4 inline mr-2" strokeWidth={1.5} />
                      Website URL
                    </label>
                    {isEditing ? (
                      <input
                        type="url"
                        value={dealership.website}
                        onChange={(e) => setDealership({ ...dealership, website: e.target.value })}
                        className="w-full px-3 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    ) : (
                      <a
                        href={dealership.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-hero transition-colors duration-200"
                      >
                        {dealership.website}
                      </a>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">
                      <Phone className="w-4 h-4 inline mr-2" strokeWidth={1.5} />
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={dealership.phone}
                        onChange={(e) => setDealership({ ...dealership, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    ) : (
                      <p className="text-hero">{dealership.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Location Information */}
              <div className="bg-elevated border border-primary rounded-xl p-6">
                <h2 className="text-lg font-medium text-hero mb-6">
                  <MapPin className="w-5 h-5 inline mr-2" strokeWidth={1.5} />
                  Location
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">Street Address</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={dealership.address}
                        onChange={(e) => setDealership({ ...dealership, address: e.target.value })}
                        className="w-full px-3 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    ) : (
                      <p className="text-hero">{dealership.address}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-tertiary mb-2">City</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={dealership.city}
                          onChange={(e) => setDealership({ ...dealership, city: e.target.value })}
                          className="w-full px-3 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      ) : (
                        <p className="text-hero">{dealership.city}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-tertiary mb-2">State</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={dealership.state}
                          onChange={(e) => setDealership({ ...dealership, state: e.target.value })}
                          className="w-full px-3 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      ) : (
                        <p className="text-hero">{dealership.state}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-tertiary mb-2">ZIP Code</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={dealership.zipCode}
                          onChange={(e) => setDealership({ ...dealership, zipCode: e.target.value })}
                          className="w-full px-3 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      ) : (
                        <p className="text-hero">{dealership.zipCode}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* OEM & Classification */}
              <div className="bg-elevated border border-primary rounded-xl p-6">
                <h2 className="text-lg font-medium text-hero mb-6">Classification</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">OEM/Brand</label>
                    {isEditing ? (
                      <select
                        value={dealership.oem}
                        onChange={(e) => setDealership({ ...dealership, oem: e.target.value })}
                        className="w-full px-3 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="Honda">Honda</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Ford">Ford</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                      </select>
                    ) : (
                      <p className="text-hero">{dealership.oem}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tertiary mb-2">Status</label>
                    {isEditing ? (
                      <select
                        value={dealership.status}
                        onChange={(e) => setDealership({ ...dealership, status: e.target.value as any })}
                        className="w-full px-3 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="duplicate">Duplicate</option>
                        <option value="pending_merge">Pending Merge</option>
                      </select>
                    ) : (
                      <StatusBadge status={dealership.status} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Activity & Notes */}
            <div className="space-y-6">
              {/* Scan Activity */}
              <div className="bg-elevated border border-primary rounded-xl p-6">
                <h2 className="text-lg font-medium text-hero mb-4">Scan Activity</h2>
                <div className="space-y-4">
                  <button className="w-full action-primary px-4 h-11 text-sm font-semibold rounded-xl tracking-wide transition-all duration-200">
                    Trigger Manual Scan
                  </button>
                  <div className="text-sm text-secondary space-y-2">
                    <p>Last scan: <span className="text-hero font-medium">{dealership.lastScanned}</span></p>
                    <p>Products detected: <span className="text-hero font-medium">{dealership.productsDetected}</span></p>
                  </div>
                </div>
              </div>

              {/* Assigned Users */}
              <div className="bg-elevated border border-primary rounded-xl p-6">
                <h2 className="text-lg font-medium text-hero mb-4">Assigned Users</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-primary">
                    <div>
                      <p className="text-sm font-medium text-hero">John Doe</p>
                      <p className="text-xs text-muted">Sales Rep - Tier 3</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-primary">
                    <div>
                      <p className="text-sm font-medium text-hero">Sarah Miller</p>
                      <p className="text-xs text-muted">Sales Rep - Tier 2</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-primary">
                    <div>
                      <p className="text-sm font-medium text-hero">Mike Johnson</p>
                      <p className="text-xs text-muted">Automotive Group - Tier 2</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warnings/Alerts */}
              {dealership.status === 'duplicate' && (
                <div className="bg-warning-soft border border-warning rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-sm font-medium text-warning mb-1">Duplicate Detected</h3>
                      <p className="text-sm text-warning/80">This dealership may be a duplicate. Review and merge if necessary.</p>
                      <button className="mt-3 text-sm font-medium text-warning hover:text-warning/80 transition-colors duration-200">
                        View Merge Options →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
