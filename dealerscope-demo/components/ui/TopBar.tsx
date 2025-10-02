import React, { useState } from 'react';
import { ChevronRight, ArrowLeftRight, Bell } from 'lucide-react';
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
    <div className="bg-secondary border-b border-primary h-18 px-8 flex items-center justify-between">
      {/* Left section - Context */}
      <div className="flex items-center space-x-2.5 text-sm">
        <span className="font-bold text-primary tracking-wide">DealerScope</span>
        <ChevronRight className="w-3.5 h-3.5 text-muted" strokeWidth={2} />
        <span className="text-muted font-medium">{userType === 'admin' ? 'Admin Operations' : 'Sales Performance'}</span>
      </div>

      {/* Right section - Actions and user */}
      <div className="flex items-center space-x-5">
        {/* View Switcher */}
        {onViewSwitch && (
          <button
            onClick={onViewSwitch}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-accent text-primary border border-primary hover:bg-tertiary hover:shadow-sm transition-all duration-200"
            title={userType === 'admin' ? 'Switch to Sales Rep View' : 'Switch to Admin View'}
          >
            <ArrowLeftRight className="w-4 h-4" strokeWidth={2} />
            <span>{userType === 'admin' ? 'Sales Rep View' : 'Admin View'}</span>
          </button>
        )}

        {/* Notifications */}
        {notifications > 0 && (
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 rounded-xl text-muted hover:bg-accent hover:text-primary transition-all duration-200"
            >
              <Bell className="w-5 h-5" strokeWidth={1.5} />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-danger-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold tabular-nums">
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
                <div className="absolute right-0 mt-3 w-96 z-20 bg-elevated border border-primary rounded-xl shadow-lg overflow-hidden max-h-[calc(100vh-100px)]">
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
          className="flex items-center space-x-3 rounded-xl px-4 py-2 transition-all duration-200 hover:bg-accent/50"
        >
          <div className="text-right">
            <p className="text-sm font-semibold text-primary">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-muted font-medium">
              {user?.company || 'Company'}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-accent border-2 border-primary flex items-center justify-center">
            <span className="text-primary font-bold text-sm">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopBar;