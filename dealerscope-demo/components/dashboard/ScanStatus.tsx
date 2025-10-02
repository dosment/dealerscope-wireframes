import React from 'react';
import { DashboardStats } from '@/types';
import Button from '@/components/ui/Button';

interface ScanStatusProps {
  stats: DashboardStats;
}

const ScanStatus: React.FC<ScanStatusProps> = ({ stats }) => {
  const formatDateTime = (date: Date | undefined) => {
    if (!date) return 'Never';

    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const formatTime = (date: Date | undefined) => {
    if (!date) return 'Not scheduled';

    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <div className="bg-elevated border border-primary rounded-lg p-6 min-w-80">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-hero">Scan Status</h3>
        {stats.activeScans > 0 && (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-600">Scanning</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {/* Last Scan Info */}
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-hero">Last Full Scan:</span>
          </div>
          <p className="text-sm text-secondary">
            {formatDateTime(stats.lastScanTime)}
          </p>
        </div>

        {/* Next Scan */}
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-hero">Auto Scan:</span>
          </div>
          <p className="text-sm text-secondary">
            Every 6 hours (next: {formatTime(stats.nextScanTime)})
          </p>
        </div>

        {/* Performance Stats */}
        <div className="bg-secondary rounded-lg p-4">
          <h4 className="text-sm font-medium text-hero mb-3">Recent Performance:</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted">Dealerships scanned:</span>
              <div className="font-medium text-hero">{stats.totalDealerships}</div>
            </div>
            <div>
              <span className="text-muted">Changes detected:</span>
              <div className="font-medium text-hero">{stats.recentChanges}</div>
            </div>
            <div>
              <span className="text-muted">Opportunities:</span>
              <div className="font-medium text-hero">{stats.opportunities}</div>
            </div>
            <div>
              <span className="text-muted">Avg scan time:</span>
              <div className="font-medium text-hero">2.3 seconds</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Button variant="primary" size="sm" className="flex-1">
            Scan Now
          </Button>
          <Button variant="secondary" size="sm" className="flex-1">
            Change Frequency
          </Button>
        </div>

        <Button variant="ghost" size="sm" className="w-full">
          View History
        </Button>
      </div>
    </div>
  );
};

export default ScanStatus;