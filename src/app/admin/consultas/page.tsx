'use client'

import { Suspense } from 'react'

import AppointmentTable from '@/components/admin/tables/AppointmentTable'
import SkeletonTable from '@/components/admin/tables/skeleton'

export default function AdminAppointments() {
  return (
    <div className="flex flex-1 flex-col gap-6 px-7 py-3">
      <h1 className="text-3xl font-bold">Consultas</h1>
      <Suspense fallback={<SkeletonTable />}>
        <AppointmentTable />
      </Suspense>
    </div>
  )
}
