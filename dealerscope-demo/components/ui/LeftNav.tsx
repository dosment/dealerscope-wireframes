import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

interface LeftNavProps {
  userType?: 'sales_rep' | 'admin';
}

const LeftNav: React.FC<LeftNavProps> = ({
  userType = 'sales_rep'
}) => {
  const pathname = usePathname();
  const salesRepNavigation: NavigationItem[] = [
    {
      id: 'dealerships',
      label: 'My Dealers',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      href: '/dealerships'
    },
    {
      id: 'alerts',
      label: 'Alerts',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      href: '/alerts'
    },
    {
      id: 'reports',
      label: 'Prospecting',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      href: '/reports'
    },
    {
      id: 'settings',
      label: 'Email Setup',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: '/settings'
    }
  ];

  const adminNavigation: NavigationItem[] = [
    {
      id: 'admin-dashboard',
      label: 'Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      ),
      href: '/admin'
    },
    {
      id: 'users',
      label: 'Users',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      href: '/admin/users'
    },
    {
      id: 'dealerships',
      label: 'Dealerships',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      href: '/admin/dealerships'
    },
    {
      id: 'vendors',
      label: 'Vendors',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: '/admin/vendors'
    },
    {
      id: 'alerts',
      label: 'Alerts',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      href: '/admin/alerts'
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      href: '/admin/billing'
    }
  ];

  const navigation = userType === 'admin' ? adminNavigation : salesRepNavigation;

  return (
    <div className="w-64 min-h-full flex flex-col border-r border-primary bg-secondary">
      {/* Logo and Branding */}
      <div className="px-4 py-4 flex items-center space-x-3 border-b border-primary">
        <div className="w-16 h-16 flex items-center justify-center">
          <img src="/raccoon.svg" alt="DealerScope" className="w-full h-full object-contain" />
        </div>
        <h1 className="brand-headline text-lg font-semibold text-primary">
          DEALERSCOPE
        </h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`) ||
            (item.href === '/dealerships' && pathname === '/');

          const linkClasses = [
            'w-full flex items-center px-3 py-2 text-sm rounded-md transition-all duration-200',
            isActive
              ? 'bg-accent text-highlight border-r-2 border-highlight font-semibold'
              : 'text-secondary hover:bg-accent hover:text-primary'
          ].join(' ');

          return (
            <Link key={item.id} href={item.href} className={linkClasses}>
              <span className={`mr-3 ${isActive ? 'text-highlight' : 'text-muted'}`}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="px-4 py-4 border-t border-primary">
        {userType === 'sales_rep' ? (
          <div className="text-xs theme-text-muted space-y-1">
            <div className="flex items-center justify-between">
              <span>Plan:</span>
              <span className="font-medium theme-text-primary">Enterprise</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Usage:</span>
              <span className="font-medium theme-text-primary">25/50 dealers</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Last scan:</span>
              <span className="font-medium theme-text-primary">2h ago</span>
            </div>
          </div>
        ) : (
          <div className="text-xs theme-text-muted space-y-1">
            <div className="flex items-center justify-between">
              <span>Total Users:</span>
              <span className="font-medium theme-text-primary">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Active Dealers:</span>
              <span className="font-medium theme-text-primary">125</span>
            </div>
            <div className="flex items-center justify-between">
              <span>System Status:</span>
              <span className="font-medium text-green-600">Operational</span>
            </div>
          </div>
        )}

        {/* Help and Support */}
        <div className="mt-4 space-y-1">
          <button
            className="w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors text-secondary hover:text-primary hover:bg-accent"
          >
            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Help & Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;