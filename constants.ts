
import { Vendor, Proposal, ProcurementStat } from './types';

export const MOCK_VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'CyberDyne Systems',
    category: 'IT Services',
    riskScore: 78,
    totalSpend: 1250000,
    activeContracts: 3,
    lastAuditDate: '2023-05-12',
    description: 'Provider of advanced neural network infrastructure and cloud AI services.'
  },
  {
    id: 'v2',
    name: 'Acme Logistics',
    category: 'Supply Chain',
    riskScore: 12,
    totalSpend: 450000,
    activeContracts: 1,
    lastAuditDate: '2024-01-10',
    description: 'Global shipping and freight forwarding services.'
  },
  {
    id: 'v3',
    name: 'Stark Industries',
    category: 'Hardware',
    riskScore: 45,
    totalSpend: 8900000,
    activeContracts: 5,
    lastAuditDate: '2023-11-20',
    description: 'High-tech hardware manufacturing and energy solutions.'
  },
  {
    id: 'v4',
    name: 'Wayne Enterprises',
    category: 'Consulting',
    riskScore: 5,
    totalSpend: 2100000,
    activeContracts: 2,
    lastAuditDate: '2024-02-15',
    description: 'Security consulting and urban infrastructure development.'
  }
];

export const MOCK_PROPOSALS: Proposal[] = [
  {
    id: 'p1',
    vendorId: 'v1',
    title: 'Neural Net Upgrade Q3',
    status: 'Review',
    amount: 350000,
    submissionDate: '2024-05-01',
    items: [
      { id: 'i1', description: 'H100 GPU Cluster Lease', quantity: 10, unitPrice: 25000, category: 'Hardware' },
      { id: 'i2', description: 'System Integration Labor', quantity: 200, unitPrice: 250, category: 'Services' },
      { id: 'i3', description: 'Cloud Storage (PB)', quantity: 5, unitPrice: 10000, category: 'Hosting' }
    ]
  },
  {
    id: 'p2',
    vendorId: 'v3',
    title: 'Arc Reactor Maintenance',
    status: 'Draft',
    amount: 120000,
    submissionDate: '2024-05-10',
    items: [
      { id: 'i4', description: 'Palladium Core Replacement', quantity: 2, unitPrice: 55000, category: 'Parts' },
      { id: 'i5', description: 'Technician Surcharge', quantity: 10, unitPrice: 1000, category: 'Services' }
    ]
  }
];

export const PROCUREMENT_STATS: ProcurementStat[] = [
  { month: 'Jan', spend: 400000, savings: 50000 },
  { month: 'Feb', spend: 300000, savings: 75000 },
  { month: 'Mar', spend: 550000, savings: 45000 },
  { month: 'Apr', spend: 450000, savings: 80000 },
  { month: 'May', spend: 600000, savings: 120000 },
  { month: 'Jun', spend: 350000, savings: 60000 },
];
