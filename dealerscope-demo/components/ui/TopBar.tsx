import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Bell } from 'lucide-react';
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
  userType?: 'sales_rep' | 'admin' | 'automotive_group';
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
  const [showViewDropdown, setShowViewDropdown] = useState(false);

  return (
    <div className="bg-secondary border-b border-primary h-18 px-8 flex items-center justify-between">
      {/* Left section - Context */}
      <div className="flex items-center space-x-2.5 text-sm">
        <span className="font-bold text-primary tracking-wide">DealerScope</span>
        <ChevronRight className="w-3.5 h-3.5 text-muted" strokeWidth={2} />
        <span className="text-muted font-medium">
          {userType === 'admin' ? 'Admin Operations' :
           userType === 'automotive_group' ? 'Automotive Group' :
           'Sales Performance'}
        </span>
      </div>

      {/* Right section - Actions and user */}
      <div className="flex items-center space-x-5">
        {/* View Switcher Dropdown */}
        {onViewSwitch && (
          <div className="relative">
            <button
              onClick={() => setShowViewDropdown(!showViewDropdown)}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-accent text-primary border border-primary hover:bg-tertiary hover:shadow-sm transition-all duration-200"
            >
              <span>
                {userType === 'admin' ? 'Admin View' :
                 userType === 'automotive_group' ? 'Automotive Group View' :
                 'Sales Rep View'}
              </span>
              <ChevronDown className="w-4 h-4" strokeWidth={2} />
            </button>

            {/* Dropdown Menu */}
            {showViewDropdown && (
              <>
                {/* Backdrop to close dropdown */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowViewDropdown(false)}
                />

                {/* Dropdown Panel */}
                <div className="absolute right-0 mt-2 w-56 z-20 bg-elevated border border-primary rounded-xl shadow-lg overflow-hidden">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        window.location.href = '/';
                        setShowViewDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                        userType === 'sales_rep'
                          ? 'bg-accent text-hero'
                          : 'text-secondary hover:bg-accent/50 hover:text-primary'
                      }`}
                    >
                      Sales Rep View
                    </button>
                    <button
                      onClick={() => {
                        window.location.href = '/automotive-group';
                        setShowViewDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                        userType === 'automotive_group'
                          ? 'bg-accent text-hero'
                          : 'text-secondary hover:bg-accent/50 hover:text-primary'
                      }`}
                    >
                      Automotive Group View
                    </button>
                    <button
                      onClick={() => {
                        window.location.href = '/admin';
                        setShowViewDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                        userType === 'admin'
                          ? 'bg-accent text-hero'
                          : 'text-secondary hover:bg-accent/50 hover:text-primary'
                      }`}
                    >
                      Admin View
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
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
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold tabular-nums shadow-lg">
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

        {/* Scan Now button - for sales_rep and automotive_group */}
        {(userType === 'sales_rep' || userType === 'automotive_group') && (
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