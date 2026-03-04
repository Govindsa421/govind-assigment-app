import { cn } from '@/lib/utils'

interface StatItemProps {
  label: string
  value: string
  valueColor?: string
}

export const StatItem = ({ label, value, valueColor = 'text-foreground' }: StatItemProps) => (
  <div className='flex flex-col'>
    <span className='text-[10px] text-slate-400 uppercase font-bold tracking-tight mb-1'>{label}</span>
    <span className={cn('text-sm font-bold', valueColor)}>{value}</span>
  </div>
)
