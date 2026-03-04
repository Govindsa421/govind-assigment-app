import { Scan } from '@/types/scan'

export const scans: Scan[] = [
  {
    id: 'scan-1',
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    lastScan: '4d ago',
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
  },
  {
    id: 'scan-2',
    name: 'IoT Devices',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    lastScan: '3d ago',
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
  },
  {
    id: 'scan-3',
    name: 'Internal APIs',
    type: 'Greybox',
    status: 'Scheduled',
    progress: 0,
    lastScan: '—',
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
  },
  {
    id: 'scan-4',
    name: 'Payment Gateway',
    type: 'Blackbox',
    status: 'Completed',
    progress: 100,
    lastScan: '2d ago',
    vulnerabilities: { critical: 1, high: 7, medium: 14, low: 9 },
  },
  {
    id: 'scan-5',
    name: 'Admin Panel',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    lastScan: '1d ago',
    vulnerabilities: { critical: 3, high: 9, medium: 11, low: 6 },
  },
  {
    id: 'scan-6',
    name: 'Mobile Backend',
    type: 'Greybox',
    status: 'Scheduled',
    progress: 0,
    lastScan: '—',
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
  },
  {
    id: 'scan-7',
    name: 'Authentication Service',
    type: 'Blackbox',
    status: 'Completed',
    progress: 100,
    lastScan: '5h ago',
    vulnerabilities: { critical: 4, high: 6, medium: 10, low: 5 },
  },
  {
    id: 'scan-8',
    name: 'Cloud Infrastructure',
    type: 'Greybox',
    status: 'Failed',
    progress: 45,
    lastScan: '6h ago',
    vulnerabilities: { critical: 2, high: 3, medium: 6, low: 2 },
  },
  {
    id: 'scan-9',
    name: 'External Client Portal',
    type: 'Blackbox',
    status: 'Completed',
    progress: 100,
    lastScan: '8h ago',
    vulnerabilities: { critical: 0, high: 5, medium: 9, low: 12 },
  },
]

import { Search, Network, FlaskConical, CheckSquare, FileText } from 'lucide-react'
import { StatItem, FooterStatItem, Finding } from '@/types/mock-data'

export const STEPS = [
  { label: 'Spidering', icon: Search, status: 'active' },
  { label: 'Mapping', icon: Network, status: 'pending' },
  { label: 'Testing', icon: FlaskConical, status: 'pending' },
  { label: 'Validating', icon: CheckSquare, status: 'pending' },
  { label: 'Reporting', icon: FileText, status: 'pending' },
] as const

export const SCAN_STATS: StatItem[] = [
  { label: 'Scan Type', value: 'Grey Box' },
  { label: 'Targets', value: 'google.com' },
  { label: 'Started At', value: 'Nov 22, 09:00AM' },
  { label: 'Credentials', value: '2 Active' },
  { label: 'Files', value: 'Control.pdf' },
  { label: 'Checklists', value: '40/350', valueColor: 'text-teal-500' },
]

export const FINDINGS: Finding[] = [
  {
    id: 'f-1',
    severity: 'Critical',
    time: '10:45:23',
    title: 'SQL Injection in Authentication Endpoint',
    path: '/api/users/profile',
    description:
      'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.',
  },
  {
    id: 'f-2',
    severity: 'High',
    time: '10:45:23',
    title: 'Unauthorized Access to User Metadata',
    path: '/api/auth/login',
    description:
      'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
  },
  {
    id: 'f-3',
    severity: 'Medium',
    time: '10:45:23',
    title: 'Broken Authentication Rate Limiting',
    path: '/api/search',
    description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
  },
]

export const FOOTER_LEFT_STATS: FooterStatItem[] = [
  { label: 'Sub-Agents', value: 0 },
  { label: 'Parallel Executions', value: 2 },
  { label: 'Operations', value: 1 },
]

export const FOOTER_RIGHT_STATS: FooterStatItem[] = [
  { label: 'Critical', value: 0, color: 'text-rose-500' },
  { label: 'High', value: 0, color: 'text-orange-500' },
  { label: 'Medium', value: 0, color: 'text-amber-500' },
  { label: 'Low', value: 0, color: 'text-teal-500' },
]
