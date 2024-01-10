'use client'

import { useSearchParams } from 'next/navigation'
import { api } from '@/trpc/react'

import ProfessionalTable from '@/components/admin/tables/ProfessionalTable'

export default function AdminProfessionals() {
  const { data: professionals } = api.users.getAllProfessionals.useQuery()
  const searchParams = useSearchParams()
  const action = searchParams.get('acao')
  return (
    <div className="flex flex-1 flex-col gap-6 px-7 py-3">
      <h1 className="text-2xl font-medium">Pacientes</h1>
      {professionals && (
        <ProfessionalTable
          data={professionals}
          insertData={action === 'novo'}
        />
      )}
    </div>
  )
}
