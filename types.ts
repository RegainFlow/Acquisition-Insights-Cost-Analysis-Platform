
export interface Vendor {
  id: string;
  name: string;
  category: string;
  riskScore: number;
  totalSpend: number;
  activeContracts: number;
  lastAuditDate: string;
  description: string;
}

export interface Proposal {
  id: string;
  vendorId: string;
  title: string;
  status: 'Draft' | 'Review' | 'Approved' | 'Rejected';
  amount: number;
  submissionDate: string;
  items: LineItem[];
}

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  category: string;
}

export interface ProcurementStat {
  month: string;
  spend: number;
  savings: number;
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  VENDORS = 'VENDORS',
  PROPOSALS = 'PROPOSALS',
  INSIGHTS = 'INSIGHTS'
}
