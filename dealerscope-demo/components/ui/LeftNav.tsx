import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Bell, BarChart3, Mail, LayoutDashboard, Users, Briefcase, CreditCard, HelpCircle } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

interface LeftNavProps {
  userType?: 'sales_rep' | 'admin' | 'automotive_group';
}

const LeftNav: React.FC<LeftNavProps> = ({
  userType = 'sales_rep'
}) => {
  const pathname = usePathname();
  const salesRepNavigation: NavigationItem[] = [
    {
      id: 'dealerships',
      label: 'My Dealers',
      icon: <Building2 className="w-5 h-5" strokeWidth={1.5} />,
      href: '/dealerships'
    },
    {
      id: 'alerts',
      label: 'Alerts',
      icon: <Bell className="w-5 h-5" strokeWidth={1.5} />,
      href: '/alerts'
    },
    {
      id: 'reports',
      label: 'Prospecting',
      icon: <BarChart3 className="w-5 h-5" strokeWidth={1.5} />,
      href: '/reports'
    },
    {
      id: 'settings',
      label: 'Email Setup',
      icon: <Mail className="w-5 h-5" strokeWidth={1.5} />,
      href: '/settings'
    }
  ];

  // Automotive Group navigation - mirrors sales rep for now
  const automotiveGroupNavigation: NavigationItem[] = [
    {
      id: 'dealerships',
      label: 'My Dealers',
      icon: <Building2 className="w-5 h-5" strokeWidth={1.5} />,
      href: '/dealerships'
    },
    {
      id: 'alerts',
      label: 'Alerts',
      icon: <Bell className="w-5 h-5" strokeWidth={1.5} />,
      href: '/alerts'
    },
    {
      id: 'reports',
      label: 'Prospecting',
      icon: <BarChart3 className="w-5 h-5" strokeWidth={1.5} />,
      href: '/reports'
    },
    {
      id: 'settings',
      label: 'Email Setup',
      icon: <Mail className="w-5 h-5" strokeWidth={1.5} />,
      href: '/settings'
    }
  ];

  const adminNavigation: NavigationItem[] = [
    {
      id: 'admin-dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" strokeWidth={1.5} />,
      href: '/admin'
    },
    {
      id: 'alerts',
      label: 'Alerts',
      icon: <Bell className="w-5 h-5" strokeWidth={1.5} />,
      href: '/admin/alerts'
    },
    {
      id: 'users',
      label: 'Users',
      icon: <Users className="w-5 h-5" strokeWidth={1.5} />,
      href: '/admin/users'
    },
    {
      id: 'dealerships',
      label: 'Dealerships',
      icon: <Building2 className="w-5 h-5" strokeWidth={1.5} />,
      href: '/admin/dealerships'
    },
    {
      id: 'vendors',
      label: 'Vendors',
      icon: <Briefcase className="w-5 h-5" strokeWidth={1.5} />,
      href: '/admin/vendors'
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: <CreditCard className="w-5 h-5" strokeWidth={1.5} />,
      href: '/admin/billing'
    }
  ];

  const navigation =
    userType === 'admin' ? adminNavigation :
    userType === 'automotive_group' ? automotiveGroupNavigation :
    salesRepNavigation;

  return (
    <div className="w-64 min-h-full flex flex-col border-r border-primary bg-secondary">
      {/* Logo and Branding */}
      <div className="px-6 py-8 flex items-center space-x-4 border-b border-primary">
        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-elevated p-2">
          <img src="/Racoon.png" alt="DealerScope" className="w-full h-full object-contain" />
        </div>
        <h1 className="brand-headline text-lg font-bold text-primary tracking-wider">
          DEALERSCOPE
        </h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-8 space-y-1.5">
        {navigation.map((item) => {
          // Check for exact match or starts with (for sub-routes)
          let isActive = false;

          if (item.href === pathname) {
            // Exact match
            isActive = true;
          } else if (pathname.startsWith(`${item.href}/`) && item.href !== '/' && item.href !== '/admin' && item.href !== '/dealerships' && item.href !== '/automotive-group') {
            // Starts with match for sub-routes, but exclude base routes that shouldn't match their sub-routes
            isActive = true;
          } else if (item.href === '/dealerships' && pathname === '/' && userType !== 'admin') {
            // Special case: sales_rep and automotive_group default to /dealerships view on /
            isActive = true;
          } else if (item.href === '/admin' && pathname === '/' && userType === 'admin') {
            // Special case: admin defaults to /admin view on /
            isActive = true;
          } else if (item.href === '/automotive-group' && pathname === '/' && userType === 'automotive_group') {
            // Special case: automotive_group defaults to /automotive-group view on /
            isActive = true;
          }

          const linkClasses = [
            'w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200',
            isActive
              ? 'bg-accent text-hero shadow-sm'
              : 'text-secondary hover:bg-accent/50 hover:text-primary'
          ].join(' ');

          return (
            <Link key={item.id} href={item.href} className={linkClasses}>
              <span className={`mr-3 ${isActive ? 'text-hero' : 'text-muted'}`}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="px-4 py-4 border-t border-primary">
        {userType === 'automotive_group' ? (
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
        ) : userType === 'sales_rep' ? (
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
              <span className="font-medium text-success">Operational</span>
            </div>
          </div>
        )}

        {/* Help and Support */}
        <div className="mt-4 space-y-1">
          <button
            className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 text-secondary hover:text-primary hover:bg-accent/50"
          >
            <HelpCircle className="w-4 h-4 mr-3" strokeWidth={1.5} />
            Help & Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;