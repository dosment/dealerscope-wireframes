// Core TypeScript interfaces for DealerScope application

export interface Dealership {
  id: string;
  name: string;
  location: string;
  address?: string;
  zipCode: string;
  state: string;
  trackedProducts: string[];
  lastChange: Date;
  status: DealershipStatus;
  website?: string;
  notes?: string;
  priority?: 'high' | 'medium' | 'low';
}

export type DealershipStatus = 'active' | 'changed' | 'opportunity' | 'scanning' | 'error' | 'stable';

export interface ProductChange {
  id: string;
  dealershipId: string;
  dealershipName: string;
  productName: string;
  changeType: 'installed' | 'removed' | 'replaced';
  timestamp: Date;
  previousProduct?: string;
  newProduct?: string;
  confidence: number;
  notes?: string;
}

export interface Product {
  id: string;
  name: string;
  vendor: string;
  category: ProductCategory;
  description?: string;
  cssSelectors?: string[];
  isCompetitor: boolean;
}

export type ProductCategory = 'chat' | 'crm' | 'analytics' | 'marketing' | 'finance' | 'digital_retailing' | 'trade_tools' | 'inventory' | 'site_provider' | 'other';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'sales_rep' | 'admin';
  company?: string;
  territory?: string[];
  preferences: UserPreferences;
  lastLogin?: Date;
}

export interface UserPreferences {
  emailDigest: boolean;
  digestFrequency: 'daily' | 'weekly' | 'never';
  alertCategories: ProductCategory[];
  defaultFilters: FilterState;
  timezone: string;
}

export interface FilterState {
  search: string;
  productCategories: ProductCategory[];
  statuses: DealershipStatus[];
  regions: string[];
  zipCode?: string;
  radius?: number;
}

export interface ScanJob {
  id: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  startTime: Date;
  endTime?: Date;
  dealershipsScanned: number;
  changesDetected: number;
  errorsEncountered: number;
  progress: number;
}

export interface Alert {
  id: string;
  type: 'change' | 'opportunity' | 'error' | 'system';
  title: string;
  message: string;
  timestamp: Date;
  dealershipId?: string;
  isRead: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface DashboardStats {
  totalDealerships: number;
  recentChanges: number;
  opportunities: number;
  activeScans: number;
  lastScanTime?: Date;
  nextScanTime?: Date;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export interface StatusBadgeProps {
  status: DealershipStatus;
  size?: 'sm' | 'md' | 'lg';
}

// Store interface for state management
export interface DealerscopeStore {
  // Data
  dealerships: Dealership[];
  recentChanges: ProductChange[];
  currentUser: User | null;
  filters: FilterState;
  scanJob: ScanJob | null;
  alerts: Alert[];

  // UI State
  selectedDealerships: string[];
  isScanning: boolean;
  sidebarOpen: boolean;

  // Actions
  setDealerships: (dealerships: Dealership[]) => void;
  updateDealership: (id: string, updates: Partial<Dealership>) => void;
  setFilters: (filters: FilterState) => void;
  setSelectedDealerships: (ids: string[]) => void;
  startScan: () => void;
  stopScan: () => void;
  addAlert: (alert: Omit<Alert, 'id'>) => void;
  markAlertAsRead: (id: string) => void;
  toggleSidebar: () => void;
}