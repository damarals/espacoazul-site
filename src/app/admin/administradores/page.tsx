'use client'

import { Suspense } from 'react'

import AdminTable from '@/components/admin/tables/AdminTable'
import SkeletonTable from '@/components/admin/tables/skeleton'

export default function AdminAdministrators() {
  return (
    <div className="flex flex-1 flex-col gap-6 px-7 py-3">
      <h1 className="text-3xl font-bold">Administradores</h1>
      <Suspense fallback={<SkeletonTable />}>
        <AdminTable />
      </Suspense>
    </div>
  )
}
