export type StepStatus = 'completed' | 'active' | 'pending'
export type Severity = 'Critical' | 'High' | 'Medium' | 'Low'

export interface Step {
  label: string
  status: StepStatus
}

export interface StatItem {
  label: string
  value: string
  valueColor?: string
}

export interface LogEntry {
  id: string
  time?: string
  text: React.ReactNode
}

export interface Finding {
  id: string
  severity: Severity
  time: string
  title: string
  path: string
  description: string
}

export interface FooterStatItem {
  label: string
  value: string | number
  color?: string
}
