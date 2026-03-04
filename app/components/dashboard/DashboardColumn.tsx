'use client'
import { ColumnDef } from '@tanstack/react-table'
import { Scan, ScanStatus } from '@/types/scan'
import { Badge } from '@/components/ui/badge'

// ✅ Fixed ProgressBar - theme-aware colors
const ProgressBar = ({ value, status }: { value: number; status: ScanStatus }) => {
  const fillColor = status === 'Failed' ? 'bg-red-500' : 'bg-teal-500'

  return (
    <div className='flex items-center gap-3 w-36'>
      {/* ✅ bg-muted instead of bg-gray-200 */}
      <div className='relative h-2 w-full bg-muted rounded-full overflow-hidden'>
        <div
          className={`absolute left-0 top-0 h-full ${fillColor} rounded-full transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
      {/* ✅ text-muted-foreground instead of text-gray-600 */}
      <span className='text-xs font-bold text-muted-foreground min-w-[32px] text-right'>{value}%</span>
    </div>
  )
}

// ✅ Fixed StatusBadge - added dark mode variants
const StatusBadge = ({ status }: { status: ScanStatus }) => {
  const styles: Record<ScanStatus, string> = {
    Completed:
      'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800',
    Scheduled:
      'bg-indigo-50 text-indigo-500 border-indigo-100  dark:bg-indigo-950 dark:text-indigo-400 dark:border-indigo-800',
    Failed: 'bg-red-50 text-red-500 border-red-100 dark:bg-red-950 dark:text-red-400 dark:border-red-800',
    Running: 'bg-blue-50 text-blue-500 border-blue-100 dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800',
  }
  return <span className={`px-3 py-1 rounded-md text-xs font-bold border ${styles[status]}`}>{status}</span>
}

const VulnerabilityBadges = ({ counts }: { counts: Scan['vulnerabilities'] }) => {
  const badges = [
    { key: 'critical', value: counts.critical, color: 'bg-red-500' },
    { key: 'high', value: counts.high, color: 'bg-orange-500' },
    { key: 'medium', value: counts.medium, color: 'bg-yellow-400' },
    { key: 'low', value: counts.low, color: 'bg-emerald-500' },
  ]

  return (
    <div className='flex gap-1.5'>
      {badges.map(({ key, value, color }) =>
        value > 0 ? (
          <span
            key={key}
            title={`${key}: ${value}`}
            className={`w-6 h-6 flex items-center justify-center ${color} text-white text-[10px] font-bold rounded-md`}
          >
            {value}
          </span>
        ) : null,
      )}
    </div>
  )
}

export const dashboardColumns = (): ColumnDef<Scan>[] => {
  return [
    {
      accessorKey: 'name',
      header: 'Scan Name',
      cell: ({ row }) => (
        // ✅ text-foreground for visibility in dark mode
        <span className='font-medium text-foreground'>{row.getValue('name')}</span>
      ),
    },
    {
      accessorKey: 'type',
      header: 'Type',
      cell: ({ row }) => <Badge variant='outline'>{row.getValue('type')}</Badge>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <StatusBadge status={row.getValue('status') as ScanStatus} />,
    },
    {
      accessorKey: 'progress',
      header: 'Progress',
      cell: ({ row }) => <ProgressBar value={row.getValue('progress') as number} status={row.original.status} />,
    },
    {
      accessorKey: 'vulnerabilities',
      header: 'Vulnerabilities',
      cell: ({ row }) => <VulnerabilityBadges counts={row.getValue('vulnerabilities') as Scan['vulnerabilities']} />,
    },
    {
      accessorKey: 'lastScan',
      header: 'Last Scan',
      cell: ({ row }) => <span className='text-muted-foreground text-sm'>{row.getValue('lastScan')}</span>,
    },
  ]
}
