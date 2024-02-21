'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import AdminTable from '@/components/admin/tables/AdminTable'
import SkeletonTable from '@/components/admin/tables/skeleton'

export default function AdminAdministrators() {
  const searchParams = useSearchParams()
  const action = searchParams.get('acao')
  return (
    <div className="flex flex-1 flex-col gap-6 px-7 py-3">
      <h1 className="text-2xl font-medium">Administradores</h1>
      <Suspense fallback={<SkeletonTable />}>
        <AdminTable insertData={action === 'novo'} />
      </Suspense>
    </div>
  )
}