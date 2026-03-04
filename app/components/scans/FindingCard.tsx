import { cn } from '@/lib/utils'
import { Finding } from '@/types/mock-data'

const SEVERITY_STYLES: Record<Finding['severity'], string> = {
  Critical: 'bg-rose-500',
  High: 'bg-orange-500',
  Medium: 'bg-amber-500',
  Low: 'bg-teal-500',
}

interface FindingCardProps {
  finding: Finding
}

export const FindingCard = ({ finding }: FindingCardProps) => {
  const { severity, time, title, path, description } = finding

  return (
    <div className='bg-background border border-gray-100 dark:border-gray-600 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow'>
      {/* Header */}
      <div className='flex justify-between items-start mb-3'>
        <span
          className={cn('text-[10px] text-white px-2 py-0.5 rounded font-bold uppercase', SEVERITY_STYLES[severity])}
        >
          {severity}
        </span>
        <span className='text-[10px] text-slate-300 font-mono'>{time}</span>
      </div>

      {/* Content */}
      <h4 className='font-bold text-foreground mb-1 leading-tight'>{title}</h4>
      <div className='text-xs text-teal-500 font-mono mb-3'>{path}</div>
      <p className='text-xs text-slate-500 leading-relaxed'>{description}</p>
    </div>
  )
}
