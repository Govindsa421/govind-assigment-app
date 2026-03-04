interface SeverityBadgeProps {
  level: 'critical' | 'high' | 'medium' | 'low'
  count: number
}

const severityStyles = {
  critical: 'bg-red-500 text-white',
  high: 'bg-orange-500 text-white',
  medium: 'bg-amber-400 text-black',
  low: 'bg-green-500 text-white',
}

export function SeverityBadge({ level, count }: SeverityBadgeProps) {
  return <span className={`px-2 py-1 text-xs font-semibold rounded-md ${severityStyles[level]}`}>{count}</span>
}
