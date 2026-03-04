import { SCAN_STATS, STEPS } from '@/lib/mock-data'
import { StepItem } from './StepItem'
import { StatItem } from './StatItem'

export const ProgressCard = () => (
  <div>
    <div className='bg-white dark:bg-[#161a21] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 flex gap-8 items-center'>
      <div className='relative shrink-0 border-t lg:border-t-0 lg:border-r border-gray-100'>
        <div className='w-32 h-32 rounded-full  bg-foreground dark:bg-gray-800 flex flex-col items-center justify-center mr-9 '>
          <span className='text-3xl font-bold text-primary '>0%</span>
          <span className='text-[10px] text-slate-500 uppercase font-medium'>In Progress</span>
        </div>
      </div>

      <div>
        <div className=' flex justify-between items-start relative px-4'>
          <div className='absolute top-5 left-12 right-12 h-px bg-gray-200 z-0' />
          {STEPS.map((step) => (
            <StepItem key={step.label} icon={step.icon} label={step.label} status={step.status} />
          ))}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4  pt-4 lg:pt-0 lg:pl-8 mt-10'>
          {SCAN_STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  </div>
)
