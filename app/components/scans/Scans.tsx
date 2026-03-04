import React from 'react'
import { ProgressCard } from './ProgressCard'
import { ConsolePanel } from './ControlPanel'
import { FOOTER_LEFT_STATS, FOOTER_RIGHT_STATS } from '@/lib/mock-data'
import { FooterStat } from './FooterStat'

const Scans = () => {
  return (
    <div className='min-h-screen  font-sans'>
      <div className='max-w-350 mx-auto space-y-6'>
        <ProgressCard />

        <ConsolePanel />

        <footer className='flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2'>
          <div className='flex gap-8'>
            {FOOTER_LEFT_STATS.map((stat) => (
              <FooterStat key={stat.label} {...stat} />
            ))}
          </div>
          <div className='flex gap-8'>
            {FOOTER_RIGHT_STATS.map((stat) => (
              <FooterStat key={stat.label} {...stat} />
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Scans
