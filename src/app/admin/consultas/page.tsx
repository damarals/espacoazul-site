'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import AppointmentTable from '@/components/admin/tables/AppointmentTable'
import SkeletonTable from '@/components/admin/tables/skeleton'

export default function AdminAppointments() {
  const searchParams = useSearchParams()
  const action = searchParams.get('acao')
  return (
    <div className="flex flex-1 flex-col gap-6 px-7 py-3">
      <h1 className="text-2xl font-medium">Consultas</h1>
      <Suspense fallback={<SkeletonTable />}>
        <AppointmentTable insertData={action === 'novo'} />
      </Suspense>
    </div>
  )
}
