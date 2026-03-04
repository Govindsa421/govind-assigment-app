'use client'

import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Fragment } from 'react'
import { LucideIcon } from 'lucide-react'

export type BreadcrumbItemType = {
  label?: string
  icon?: LucideIcon
  href?: string
  current?: boolean
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItemType[]
}

export function CustomBreadcrumb({ items }: CustomBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const Icon = item.icon
          const isActive = isLast || item.current

          return (
            <Fragment key={item.label}>
              <BreadcrumbItem>
                {isActive ? (
                  <BreadcrumbPage className=' text-primary '>
                    {Icon && <Icon className='w-3.5 h-3.5 shrink-0' />}
                    {item.label}
                  </BreadcrumbPage>
                ) : item.href ? (
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>
                      {Icon && <Icon className='w-3.5 h-3.5 shrink-0' />}
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>
                    {Icon && <Icon className='w-3.5 h-3.5 shrink-0' />}
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
