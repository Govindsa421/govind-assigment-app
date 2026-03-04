'use client'
import { BreadcrumbItemType } from '@/app/custom/breadcrumbs/CustomBreadcrumb'
import { Navbar } from './navbar'

interface ContentLayoutProps {
  title: string
  children: React.ReactNode

  breadcrumbs?: BreadcrumbItemType[]
}

export function ContentLayout({ title, children, breadcrumbs }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} breadcrumbs={breadcrumbs} />
      <div className='bg-zinc-100 dark:bg-background pt-8 pb-8 px-4 sm:px-8'>{children}</div>
    </div>
  )
}
