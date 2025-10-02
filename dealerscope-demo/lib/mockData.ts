import { Dealership, ProductChange, Product, User, DashboardStats } from '@/types';

// Mock dealership data based on wireframe examples
export const mockDealerships: Dealership[] = [
  {
    id: '1',
    name: 'Miller Honda',
    location: 'Austin, TX',
    zipCode: '78701',
    state: 'TX',
    trackedProducts: ['YourCRM', 'CompetitorCRM'],
    lastChange: new Date('2024-01-15T10:30:00'),
    status: 'changed',
    website: 'https://millerhonda.com',
    priority: 'high'
  },
  {
    id: '2',
    name: 'City Toyota',
    location: 'Dallas, TX',
    zipCode: '75201',
    state: 'TX',
    trackedProducts: [],
    lastChange: new Date('2024-01-14T15:45:00'),
    status: 'opportunity',
    website: 'https://citytoyota.com',
    priority: 'high'
  },
  {
    id: '3',
    name: 'West Ford',
    location: 'Houston, TX',
    zipCode: '77001',
    state: 'TX',
    trackedProducts: ['YourProduct'],
    lastChange: new Date('2024-01-12T09:20:00'),
    status: 'stable',
    website: 'https://westford.com',
    priority: 'medium'
  },
  {
    id: '4',
    name: 'Elite Chevy',
    location: 'San Antonio, TX',
    zipCode: '78201',
    state: 'TX',
    trackedProducts: [],
    lastChange: new Date(),
    status: 'scanning',
    website: 'https://elitechevy.com',
    priority: 'medium'
  },
  {
    id: '5',
    name: 'Premium Auto',
    location: 'Fort Worth, TX',
    zipCode: '76101',
    state: 'TX',
    trackedProducts: [],
    lastChange: new Date('2024-01-13T14:10:00'),
    status: 'error',
    website: 'https://premiumauto.com',
    priority: 'low'
  },
  {
    id: '6',
    name: 'Downtown Ford',
    location: 'Houston, TX',
    zipCode: '77002',
    state: 'TX',
    trackedProducts: [],
    lastChange: new Date('2024-01-15T08:00:00'),
    status: 'opportunity',
    website: 'https://downtownford.com',
    priority: 'high'
  },
  {
    id: '7',
    name: 'Luxury Motors',
    location: 'Austin, TX',
    zipCode: '78704',
    state: 'TX',
    trackedProducts: ['LivePerson', 'Dealer.com'],
    lastChange: new Date('2024-01-10T11:30:00'),
    status: 'stable',
    website: 'https://luxurymotors.com',
    priority: 'medium'
  },
  {
    id: '8',
    name: 'Metro Honda',
    location: 'Dallas, TX',
    zipCode: '75202',
    state: 'TX',
    trackedProducts: ['Intercom'],
    lastChange: new Date('2024-01-14T16:20:00'),
    status: 'changed',
    website: 'https://metrohonda.com',
    priority: 'high'
  }
];

// Mock recent changes based on wireframe examples
export const mockRecentChanges: ProductChange[] = [
  {
    id: '1',
    dealershipId: '1',
    dealershipName: 'Miller Honda',
    productName: 'LivePerson',
    changeType: 'removed',
    timestamp: new Date('2024-01-15T10:30:00'),
    previousProduct: 'LivePerson',
    confidence: 0.95,
    notes: 'Previously installed since Jan 2024'
  },
  {
    id: '2',
    dealershipId: '1',
    dealershipName: 'Miller Honda',
    productName: 'Intercom',
    changeType: 'installed',
    timestamp: new Date('2024-01-15T10:30:00'),
    newProduct: 'Intercom',
    confidence: 0.92,
    notes: 'Competitor tool detected'
  },
  {
    id: '3',
    dealershipId: '2',
    dealershipName: 'City Toyota',
    productName: 'Zendesk',
    changeType: 'removed',
    timestamp: new Date('2024-01-15T06:00:00'),
    previousProduct: 'Zendesk',
    confidence: 0.88,
    notes: 'No replacement detected yet'
  },
  {
    id: '4',
    dealershipId: '6',
    dealershipName: 'Downtown Ford',
    productName: 'No Chat Tool',
    changeType: 'removed',
    timestamp: new Date('2024-01-15T08:00:00'),
    confidence: 0.90,
    notes: 'No chat tool detected on new scan'
  }
];

// Mock products data
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'YourCRM',
    vendor: 'Your Company',
    category: 'crm',
    description: 'Your company CRM solution',
    isCompetitor: false
  },
  {
    id: '2',
    name: 'LivePerson',
    vendor: 'LivePerson Inc',
    category: 'chat',
    description: 'Live chat solution',
    isCompetitor: false
  },
  {
    id: '3',
    name: 'Intercom',
    vendor: 'Intercom Inc',
    category: 'chat',
    description: 'Customer messaging platform',
    isCompetitor: true
  },
  {
    id: '4',
    name: 'Zendesk',
    vendor: 'Zendesk Inc',
    category: 'chat',
    description: 'Customer service platform',
    isCompetitor: true
  },
  {
    id: '5',
    name: 'CompetitorCRM',
    vendor: 'Competitor Corp',
    category: 'crm',
    description: 'Competitor CRM system',
    isCompetitor: true
  },
  {
    id: '6',
    name: 'AutoTrader Digital Showroom',
    vendor: 'AutoTrader',
    category: 'digital_retailing',
    description: 'Online vehicle shopping and financing platform',
    isCompetitor: true
  },
  {
    id: '7',
    name: 'Carvana Digital Retailing',
    vendor: 'Carvana',
    category: 'digital_retailing',
    description: 'End-to-end digital car buying experience',
    isCompetitor: true
  },
  {
    id: '8',
    name: 'YourDigitalShowroom',
    vendor: 'Your Company',
    category: 'digital_retailing',
    description: 'Complete digital retailing solution',
    isCompetitor: false
  },
  {
    id: '9',
    name: 'Kelley Blue Book ICO',
    vendor: 'KBB',
    category: 'trade_tools',
    description: 'Instant Cash Offer trade evaluation',
    isCompetitor: true
  },
  {
    id: '10',
    name: 'vAuto Provision',
    vendor: 'Cox Automotive',
    category: 'trade_tools',
    description: 'Trade appraisal and acquisition tool',
    isCompetitor: true
  },
  {
    id: '11',
    name: 'YourTradeAssist',
    vendor: 'Your Company',
    category: 'trade_tools',
    description: 'AI-powered trade valuation platform',
    isCompetitor: false
  },
  {
    id: '12',
    name: 'vAuto Stockwave',
    vendor: 'Cox Automotive',
    category: 'inventory',
    description: 'Inventory management and merchandising',
    isCompetitor: true
  },
  {
    id: '13',
    name: 'AutoManager',
    vendor: 'AutoManager Inc',
    category: 'inventory',
    description: 'Comprehensive inventory management system',
    isCompetitor: true
  },
  {
    id: '14',
    name: 'YourInventoryPro',
    vendor: 'Your Company',
    category: 'inventory',
    description: 'Advanced automotive inventory management',
    isCompetitor: false
  },
  {
    id: '15',
    name: 'Dealer.com',
    vendor: 'Cox Automotive',
    category: 'site_provider',
    description: 'Website platform and digital marketing solutions',
    isCompetitor: true
  },
  {
    id: '16',
    name: 'DealerOn',
    vendor: 'DealerOn Inc',
    category: 'site_provider',
    description: 'Automotive website design and hosting',
    isCompetitor: true
  },
  {
    id: '17',
    name: 'Dealer Inspire',
    vendor: 'Dealer Inspire',
    category: 'site_provider',
    description: 'Premium automotive website platform',
    isCompetitor: true
  },
  {
    id: '18',
    name: 'YourWebPro',
    vendor: 'Your Company',
    category: 'site_provider',
    description: 'Complete automotive website solution',
    isCompetitor: false
  }
];

// Mock current user
export const mockUser: User = {
  id: '1',
  email: 'john.doe@yourcompany.com',
  name: 'John Doe',
  role: 'sales_rep',
  company: 'Automotive Solutions Inc',
  territory: ['TX', 'OK'],
  preferences: {
    emailDigest: true,
    digestFrequency: 'daily',
    alertCategories: ['chat', 'crm'],
    defaultFilters: {
      search: '',
      productCategories: [],
      statuses: [],
      regions: ['TX'],
      zipCode: undefined,
      radius: undefined
    },
    timezone: 'America/Chicago'
  },
  lastLogin: new Date('2024-01-15T09:00:00')
};

// Mock dashboard stats
export const mockDashboardStats: DashboardStats = {
  totalDealerships: 125,
  recentChanges: 5,
  opportunities: 3,
  activeScans: 1,
  lastScanTime: new Date('2024-01-15T14:47:00'),
  nextScanTime: new Date('2024-01-15T20:47:00')
};

// Mock admin alerts
export const mockAdminAlerts = [
  {
    id: '1',
    type: 'subscription_new',
    title: 'New Subscription',
    message: 'Premium Motors subscribed to Enterprise plan',
    timestamp: new Date('2024-01-15T10:30:00'),
    priority: 'high'
  },
  {
    id: '2',
    type: 'subscription_cancelled',
    title: 'Subscription Cancelled',
    message: 'Elite Auto cancelled their subscription',
    timestamp: new Date('2024-01-15T08:15:00'),
    priority: 'high'
  },
  {
    id: '3',
    type: 'dealership_added',
    title: 'New Dealership Added',
    message: 'Luxury Motors was added to the system',
    timestamp: new Date('2024-01-15T06:45:00'),
    priority: 'medium'
  },
  {
    id: '4',
    type: 'user_added',
    title: 'New User Added',
    message: 'Sarah Johnson joined as Territory Rep',
    timestamp: new Date('2024-01-14T16:20:00'),
    priority: 'low'
  },
  {
    id: '5',
    type: 'subscription_upgraded',
    title: 'Subscription Upgraded',
    message: 'Metro Honda upgraded from Basic to Premium plan',
    timestamp: new Date('2024-01-14T14:10:00'),
    priority: 'medium'
  }
];

// Utility functions for mock data manipulation
export function getDealershipsByStatus(status: string): Dealership[] {
  if (status === 'all') return mockDealerships;
  return mockDealerships.filter(d => d.status === status);
}

export function getRecentChangesByTimeframe(hours: number): ProductChange[] {
  const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
  return mockRecentChanges.filter(change => change.timestamp >= cutoff);
}

export function searchDealerships(query: string): Dealership[] {
  if (!query.trim()) return mockDealerships;

  const lowercaseQuery = query.toLowerCase();
  return mockDealerships.filter(d =>
    d.name.toLowerCase().includes(lowercaseQuery) ||
    d.location.toLowerCase().includes(lowercaseQuery)
  );
}

export function filterDealerships(filters: {
  search?: string;
  status?: string;
  category?: string;
  region?: string;
}): Dealership[] {
  let filtered = [...mockDealerships];

  if (filters.search) {
    filtered = searchDealerships(filters.search);
  }

  if (filters.status && filters.status !== 'all') {
    filtered = filtered.filter(d => d.status === filters.status);
  }

  if (filters.region && filters.region !== 'all') {
    filtered = filtered.filter(d => d.state === filters.region);
  }

  return filtered;
}