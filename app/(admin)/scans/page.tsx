'use client'
import { ContentLayout } from '@/app/components/admin-panel/content-layout'
import Scans from '@/app/components/scans/Scans'
import { Home, ScanLine } from 'lucide-react'
import React from 'react'

const ScansPage = () => {
  return (
    <div>
      <ContentLayout title='Scans' breadcrumbs={[{ href: '/', icon: Home }, { label: 'Scans' }]}>
        <Scans />
      </ContentLayout>
    </div>
  )
}

export default ScansPage
