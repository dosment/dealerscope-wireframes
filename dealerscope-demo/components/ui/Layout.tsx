'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TopBar from './TopBar';
import LeftNav from './LeftNav';
import { mockRecentChanges } from '@/lib/mockData';

interface LayoutProps {
  children: React.ReactNode;
  userType?: 'sales_rep' | 'admin' | 'automotive_group';
}

const Layout: React.FC<LayoutProps> = ({ children, userType = 'sales_rep' }) => {
  const [isScanning, setIsScanning] = useState(false);
  const router = useRouter();

  const handleScanNow = () => {
    setIsScanning(true);
    // Simulate scan process
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  const handleViewSwitch = () => {
    if (userType === 'admin') {
      // Switch to sales rep view
      router.push('/dealerships');
    } else {
      // Switch to admin view
      router.push('/admin');
    }
  };

  const mockUser = {
    name: 'John Doe',
    email: 'john.doe@yourcompany.com',
    company: 'Automotive Solutions Inc'
  };

  return (
    <div className="flex min-h-screen theme-bg-primary">
      {/* Left Navigation */}
      <LeftNav
        userType={userType}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <TopBar
          onScanNow={handleScanNow}
          isScanning={isScanning}
          notifications={mockRecentChanges.length}
          user={mockUser}
          userType={userType}
          onViewSwitch={handleViewSwitch}
          recentChanges={mockRecentChanges}
        />

        {/* Content Pane */}
        <main className="flex-1 overflow-y-auto theme-bg-primary">
          <div className="h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;