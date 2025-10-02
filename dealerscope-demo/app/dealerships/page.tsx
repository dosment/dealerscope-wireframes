'use client';

import React from 'react';
import Layout from '@/components/ui/Layout';
import Dashboard from '@/components/dashboard/Dashboard';

export default function DealershipsPage() {
  return (
    <Layout userType="sales_rep">
      <Dashboard />
    </Layout>
  );
}