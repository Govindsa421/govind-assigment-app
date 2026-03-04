'use client'
import { Play, ChevronDown, X } from 'lucide-react'
import ActivityLog from './ActivityLog'
import { FindingLog } from './FindingLog'

export const ConsolePanel = () => (
  <div className='bg-white dark:bg-background rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden flex flex-col h-[700px]'>
    <div className='bg-gray-200 dark:bg-[#161a21] border-b border-gray-100 dark:border-gray-600 px-4 py-3 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 rounded-full bg-teal-500 animate-pulse' />
          <span className='font-semibold text-foreground'>Live Scan Console</span>
        </div>
        <div className='flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs text-slate-500'>
          <Play className='w-3 h-3 fill-current' />
          <span>Running...</span>
        </div>
      </div>
      <div className='flex items-center gap-2 text-slate-400'>
        <ChevronDown className='w-5 h-5 cursor-pointer hover:text-slate-600' />
        <X className='w-5 h-5 cursor-pointer hover:text-slate-600' />
      </div>
    </div>

    <div className='flex flex-1 overflow-hidden'>
      <ActivityLog />
      <FindingLog />
    </div>
  </div>
)
