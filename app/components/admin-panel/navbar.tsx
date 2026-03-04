'use client'
import { ModeToggle } from '@/app/components/mode-toggle'

import { SheetMenu } from './sheet-menu'
import { UserNav } from './user-nav'
import { BreadcrumbItemType, CustomBreadcrumb } from '@/app/custom/breadcrumbs/CustomBreadcrumb'
import { Home, LayoutDashboard } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  title?: string
  breadcrumbs?: BreadcrumbItemType[]
}

export function Navbar({ title, breadcrumbs }: NavbarProps) {
  const defaultBreadcrumbs = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Dashboard', icon: LayoutDashboard },
  ]

  const breadcrumbItems = breadcrumbs ?? defaultBreadcrumbs

  return (
    <header className='sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-backdrop-filter:bg-background/60 dark:shadow-secondary'>
      <div className='mx-4 sm:mx-8 flex h-14 items-center'>
        <div className='flex items-center space-x-4 lg:space-x-0'>
          <SheetMenu />
          <h1 className='font-bold'>{title}</h1>

          <div className='flex items-center justify-between ml-3'>
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <ModeToggle />
          <div className='flex gap-4 '>
            <button className='border border-foreground rounded-sm px-2 py-1'>Export Report</button>
            <button className='border border-red-400 bg-red-700/10 text-red-400 rounded-sm px-2 py-1'>Stop Scan</button>
          </div>
        </div>
      </div>
    </header>
  )
}
