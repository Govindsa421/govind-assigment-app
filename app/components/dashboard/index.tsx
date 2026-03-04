'use client'
import React, { useState } from 'react'
import { CustomSpinner } from '@/app/custom/spinner/CustomSpinner'
import { scans } from '@/lib/mock-data'
import { Scan } from '@/types/scan'
import { AlertOctagon, AlertTriangle, RefreshCcw, Search, ShieldAlert } from 'lucide-react'
import DashboardDataTable from './DashboardDataTable'
import { dashboardColumns } from './DashboardColumn'

// ✅ Fixed StatCard - uses theme-aware colors
const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  colorClass,
  bgColorClass,
  iconColorClass,
}: {
  title: string
  value: string
  change: string
  icon: React.ElementType
  colorClass: string
  bgColorClass: string
  iconColorClass: string
}) => (
  <div className='flex flex-col bg-card text-card-foreground p-4 rounded-xl border border-border shadow-sm min-w-50 flex-1'>
    <div className='flex justify-between items-start mb-2'>
      {/* ✅ text-muted-foreground instead of text-gray-500 */}
      <span className='text-muted-foreground text-sm font-medium'>{title}</span>
      <div className={`p-1.5 rounded-lg ${bgColorClass}`}>
        <Icon size={18} className={iconColorClass} />
      </div>
    </div>
    <div className='flex items-baseline gap-2'>
      {/* ✅ text-foreground instead of text-gray-800 */}
      <span className='text-3xl font-bold text-foreground'>{value}</span>
      <span className={`text-[10px] font-semibold flex items-center ${colorClass}`}>{change}</span>
    </div>
  </div>
)

const Dashboard = () => {
  const [loading] = useState(false)
  const columns = dashboardColumns()

  return (
    <div className='space-y-6'>
      {/* ✅ Fixed info bar - theme-aware colors */}
      <div className='flex flex-wrap items-center gap-x-8 gap-y-2 mb-8 text-[13px] text-muted-foreground px-2'>
        <div className='flex items-center gap-2'>
          <span>Org:</span>
          {/* ✅ text-foreground instead of text-gray-800 */}
          <span className='font-bold text-foreground'>Project X</span>
        </div>
        {/* ✅ bg-border instead of bg-gray-300 */}
        <div className='h-4 w-px bg-border mx-1' />
        <div className='flex items-center gap-2'>
          <span>Owner:</span>
          <span className='font-bold text-foreground'>Nammagiri</span>
        </div>
        <div className='h-4 w-px bg-border mx-1' />
        <div className='flex items-center gap-2'>
          <span>Total Scans:</span>
          <span className='font-bold text-foreground'>100</span>
        </div>
        <div className='h-4 w-px bg-border mx-1' />
        <div className='flex items-center gap-2'>
          <span>Scheduled:</span>
          <span className='font-bold text-foreground'>1000</span>
        </div>
        <div className='h-4 w-px bg-border mx-1' />
        <div className='flex items-center gap-2'>
          <span>Rescans:</span>
          <span className='font-bold text-foreground'>100</span>
        </div>
        <div className='h-4 w-px bg-border mx-1' />
        <div className='flex items-center gap-2'>
          <span>Failed Scans:</span>
          <span className='font-bold text-foreground'>100</span>
        </div>
        <div className='flex-grow' />
        <div className='flex items-center gap-2 text-teal-500 font-medium'>
          <RefreshCcw size={14} />
          <span>10 mins ago</span>
        </div>
      </div>

      {/* Stat Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
        <StatCard
          title='Critical Severity'
          value='86'
          change='↑ +2% increase than yesterday'
          icon={AlertOctagon}
          colorClass='text-red-500'
          bgColorClass='bg-red-50 dark:bg-red-950'
          iconColorClass='text-red-500'
        />
        <StatCard
          title='High Severity'
          value='16'
          change='↑ +0.9% increase than yesterday'
          icon={AlertTriangle}
          colorClass='text-orange-500'
          bgColorClass='bg-orange-50 dark:bg-orange-950'
          iconColorClass='text-orange-500'
        />
        <StatCard
          title='Medium Severity'
          value='26'
          change='↓ +0.9% decrease than yesterday'
          icon={ShieldAlert}
          colorClass='text-teal-600'
          bgColorClass='bg-yellow-50 dark:bg-yellow-950'
          iconColorClass='text-yellow-500'
        />
        <StatCard
          title='Low Severity'
          value='16'
          change='↑ +0.9% increase than yesterday'
          icon={Search}
          colorClass='text-pink-500'
          bgColorClass='bg-blue-50 dark:bg-blue-950'
          iconColorClass='text-blue-500'
        />
      </div>

      {loading ? <CustomSpinner /> : <DashboardDataTable columns={columns} data={scans as Scan[]} />}
    </div>
  )
}

export default Dashboard
