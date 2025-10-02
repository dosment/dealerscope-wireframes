import React, { useState } from 'react';
import Button from './Button';
import RecentChanges from '../dashboard/RecentChanges';
import { User } from '@/types';

/**
 * TopBar Component
 *
 * Application header with user info, notifications, and actions.
 *
 * Refactored to:
 * - Use User type from types/index.ts
 * - Remove all inline styles
 * - Use CSS hover states instead of JavaScript
 * - Use design system color variables
 */

interface TopBarProps {
  onScanNow?: () => void;
  isScanning?: boolean;
  notifications?: number;
  user?: User;
  userType?: 'sales_rep' | 'admin';
  onViewSwitch?: () => void;
  recentChanges?: any[];
}

const TopBar: React.FC<TopBarProps> = ({
  onScanNow,
  isScanning = false,
  notifications = 0,
  user,
  userType = 'sales_rep',
  onViewSwitch,
  recentChanges = []
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="bg-secondary border-b border-primary h-16 px-6 flex items-center justify-between">
      {/* Left section - Context */}
      <div className="flex items-center space-x-2 text-sm">
        <span className="font-semibold text-primary">DealerScope</span>
        <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-muted">{userType === 'admin' ? 'Admin Operations' : 'Sales Performance'}</span>
      </div>

      {/* Right section - Actions and user */}
      <div className="flex items-center space-x-4">
        {/* View Switcher */}
        {onViewSwitch && (
          <button
            onClick={onViewSwitch}
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium bg-accent text-primary border border-primary hover:bg-tertiary transition-colors"
            title={userType === 'admin' ? 'Switch to Sales Rep View' : 'Switch to Admin View'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>{userType === 'admin' ? 'Sales Rep View' : 'Admin View'}</span>
          </button>
        )}

        {/* Notifications */}
        {notifications > 0 && (
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-md text-muted hover:bg-accent transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-danger-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {notifications > 9 ? '9+' : notifications}
                </span>
              )}
            </button>

            {/* Notification Dropdown Panel */}
            {showNotifications && (
              <>
                {/* Backdrop to close panel when clicking outside */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowNotifications(false)}
                />

                {/* Notification Panel */}
                <div className="absolute right-0 mt-2 w-96 z-20 bg-elevated border border-primary rounded-lg shadow-lg overflow-hidden max-h-[calc(100vh-100px)]">
                  <RecentChanges changes={recentChanges} />
                </div>
              </>
            )}
          </div>
        )}

        {/* Scan Now button - only for sales_rep */}
        {userType === 'sales_rep' && (
          <Button
            variant="primary"
            size="sm"
            onClick={onScanNow}
            loading={isScanning}
            disabled={isScanning}
          >
            {isScanning ? 'Scanning Dealers...' : 'Scan Dealers'}
          </Button>
        )}

        {/* User menu */}
        <a
          href="/profile"
          className="flex items-center space-x-3 rounded-md px-3 py-2 transition-colors hover:bg-accent"
        >
          <div className="text-right">
            <p className="text-sm font-medium text-primary">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-muted">
              {user?.company || 'Company'}
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <span className="text-primary font-medium text-sm">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopBar;