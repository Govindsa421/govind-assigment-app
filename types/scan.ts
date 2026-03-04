export type ScanStatus = 'Completed' | 'Failed' | 'Scheduled' | 'Running'
export type ScanType = 'Greybox' | 'Blackbox'

export interface Vulnerabilities {
  critical: number
  high: number
  medium: number
  low: number
}

export interface Scan {
  id: string
  name: string
  type: ScanType
  status: ScanStatus
  progress: number
  lastScan: string
  vulnerabilities: Vulnerabilities
}
