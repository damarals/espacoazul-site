'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import PatientPaymentsTable from '@/components/admin/tables/PaymentTable'
import SkeletonTable from '@/components/admin/tables/skeleton'

export default function AdminPayments() {
  const searchParams = useSearchParams()
  const action = searchParams.get('acao')
  return (
    <div className="flex flex-1 flex-col gap-6 px-7 py-3">
      <h1 className="text-3xl font-bold">Pagamentos</h1>
      <Suspense fallback={<SkeletonTable />}>
        <PatientPaymentsTable insertData={action === 'novo'} />
      </Suspense>
    </div>
  )
}
