'use client'

import { useSearchParams } from 'next/navigation'
import { api } from '@/trpc/react'

import PatientTable from '@/components/admin/tables/PatientTable'

export default function AdminPatients() {
  const { data: patients } = api.users.getAllPatients.useQuery()
  const searchParams = useSearchParams()
  const action = searchParams.get('acao')
  return (
    <div className="flex flex-1 flex-col gap-6 px-7 py-3">
      <h1 className="text-2xl font-medium">Pacientes</h1>
      {patients && (
        <PatientTable data={patients} insertData={action === 'novo'} />
      )}
    </div>
  )
}
