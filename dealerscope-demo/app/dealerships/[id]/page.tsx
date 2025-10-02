'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from '@/components/ui/Layout';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import { ChevronLeft } from 'lucide-react';

export default function DealershipDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dealershipId = params.id as string;

  // Mock data - in real app, this would be fetched based on ID
  const dealership = {
    id: dealershipId,
    name: 'Miller Honda',
    location: 'Austin, TX',
    website: 'millerhonda.com',
    phone: '(512) 555-0100',
    status: 'changed' as const,
    lastScanned: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    currentProducts: [
      { name: 'Intercom', category: 'Chat Tools', installedDate: '2024-01-15' }
    ],
    previousProducts: [
      { name: 'LivePerson', category: 'Chat Tools', removedDate: '2024-01-14' }
    ],
    scanHistory: [
      { date: '2024-01-15 10:30 AM', status: 'completed', changes: 'Switched from LivePerson to Intercom' },
      { date: '2024-01-14 02:15 PM', status: 'completed', changes: 'No changes detected' },
      { date: '2024-01-13 09:45 AM', status: 'completed', changes: 'No changes detected' }
    ]
  };

  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  return (
    <Layout userType="sales_rep">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto space-y-6">
          {/* Back Button */}
          <button
            onClick={() => router.push('/dealerships')}
            className="flex items-center text-sm text-secondary hover:text-primary transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4 mr-1" strokeWidth={2} />
            Back to My Dealers
          </button>

          {/* Header Section */}
          <div className="bg-elevated border border-primary rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <h1 className="text-2xl font-semibold text-hero">{dealership.name}</h1>
                  <StatusBadge status={dealership.status} size="md" />
                </div>
                <p className="text-secondary mb-4">{dealership.location}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted">Website:</span>
                    <a
                      href={`https://${dealership.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      {dealership.website}
                    </a>
                  </div>
                  <div>
                    <span className="text-muted">Phone:</span>
                    <span className="ml-2 text-primary">{dealership.phone}</span>
                  </div>
                  <div>
                    <span className="text-muted">Last Scanned:</span>
                    <span className="ml-2 text-primary">{formatDate(dealership.lastScanned)}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="secondary" size="sm" onClick={handleScan} disabled={isScanning}>
                  {isScanning ? 'Scanning...' : 'Scan Now'}
                </Button>
                <Button variant="primary" size="sm">
                  Export Data
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Current Products */}
            <div className="bg-elevated border border-primary rounded-lg p-6">
              <h2 className="text-lg font-medium text-hero mb-4">Current Products</h2>
              {dealership.currentProducts.length > 0 ? (
                <div className="space-y-3">
                  {dealership.currentProducts.map((product, index) => (
                    <div key={index} className="border border-primary rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-hero">{product.name}</h3>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted">
                        Installed: {new Date(product.installedDate).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted">No products currently detected</p>
              )}
            </div>

            {/* Previous Products */}
            <div className="bg-elevated border border-primary rounded-lg p-6">
              <h2 className="text-lg font-medium text-hero mb-4">Previous Products</h2>
              {dealership.previousProducts.length > 0 ? (
                <div className="space-y-3">
                  {dealership.previousProducts.map((product, index) => (
                    <div key={index} className="border border-primary rounded-lg p-4 opacity-75">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-hero">{product.name}</h3>
                        <span className="text-xs px-2 py-1 bg-tertiary text-primary rounded">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted">
                        Removed: {new Date(product.removedDate).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted">No previous products on record</p>
              )}
            </div>
          </div>

          {/* Scan History */}
          <div className="bg-elevated border border-primary rounded-lg p-6">
            <h2 className="text-lg font-medium text-hero mb-4">Scan History</h2>
            <div className="space-y-3">
              {dealership.scanHistory.map((scan, index) => (
                <div
                  key={index}
                  className="border border-primary rounded-lg p-4 flex items-start justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-primary">{scan.date}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        scan.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-tertiary text-primary'
                      }`}>
                        {scan.status}
                      </span>
                    </div>
                    <p className="text-sm text-secondary">{scan.changes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions Section */}
          <div className="bg-elevated border border-primary rounded-lg p-6">
            <h2 className="text-lg font-medium text-hero mb-4">Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="secondary" fullWidth>
                Add Note
              </Button>
              <Button variant="secondary" fullWidth>
                Schedule Follow-up
              </Button>
              <Button variant="secondary" fullWidth>
                Mark as Customer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}