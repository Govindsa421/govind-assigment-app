import { cn } from '@/lib/utils'
import { Circle } from 'lucide-react'
import { FooterStatItem } from '@/types/mock-data'

export const FooterStat = ({ label, value, color = 'text-slate-400' }: FooterStatItem) => (
  <div className='flex items-center gap-2'>
    <Circle className={cn('w-2 h-2 fill-current', color)} />
    <span>
      {label}: {value}
    </span>
  </div>
)
