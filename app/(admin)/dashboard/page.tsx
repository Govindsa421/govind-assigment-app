'use client'
import React from 'react'
import Dashboard from '../../components/dashboard'
import { ContentLayout } from '../../components/admin-panel/content-layout'
import { CustomBreadcrumb } from '@/app/custom/breadcrumbs/CustomBreadcrumb'
import { Home, LayoutDashboard } from 'lucide-react'

const DashboardPage = () => {
  return (
    <div>
      <ContentLayout title='Dashboard' breadcrumbs={[{ href: '/', icon: Home }, { label: 'Dashboard' }]}>
        <Dashboard />
      </ContentLayout>
    </div>
  )
}

export default DashboardPage
