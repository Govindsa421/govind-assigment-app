import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface StepItemProps {
  icon: LucideIcon
  label: string
  status?: 'active' | 'completed' | 'pending'
}

export const StepItem = ({ icon: Icon, label, status = 'pending' }: StepItemProps) => {
  const isActive = status === 'active'
  const isCompleted = status === 'completed'

  return (
    <div className='flex flex-col items-center gap-2 relative z-10'>
      <div
        className={cn(
          'w-11 h-11 rounded-full flex items-center justify-center border-2 transition-colors',
          isActive && 'bg-teal-500 border-teal-500  shadow-lg shadow-primary',
          isCompleted && 'bg-teal-100 border-teal-500 text-teal-600',
          !isActive && !isCompleted && 'bg-[#161a21] border-gray-700 text-slate-400',
        )}
      >
        <Icon className='w-5 h-5' />
      </div>
      <span className={cn('text-xs font-semibold', isActive || isCompleted ? 'text-slate-500' : 'text-slate-400')}>
        {label}
      </span>
    </div>
  )
}
