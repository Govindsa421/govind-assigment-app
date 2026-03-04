import { FINDINGS } from '@/lib/mock-data'
import { FindingCard } from './FindingCard'

export const FindingLog = () => (
  <div className='w-[450px] bg-gray-50/50 dark:bg-[#161a21] flex flex-col'>
    <div className='px-6 py-3 border-b border-gray-100 dark:border-gray-600 bg-background'>
      <h3 className='font-semibold text-foreground'>Finding Log</h3>
    </div>
    <div className='flex-1 overflow-y-auto p-4 space-y-4'>
      {FINDINGS.map((finding) => (
        <FindingCard key={finding.id} finding={finding} />
      ))}
    </div>
  </div>
)
