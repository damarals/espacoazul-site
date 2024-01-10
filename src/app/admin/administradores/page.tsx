'use client'

import { useSearchParams } from 'next/navigation'
import { api } from '@/trpc/react'

import AdminTable from '@/components/admin/tables/AdminTable'

export default function AdminAdministrators() {
  const { data: admins } = api.users.getAllAdmins.useQuery()
  const searchParams = useSearchParams()
  const action = searchParams.get('acao')
  return (
    <div className="flex flex-1 flex-col gap-6 px-7 py-3">
      <h1 className="text-2xl font-medium">Administradores</h1>
      {admins && <AdminTable data={admins} insertData={action === 'novo'} />}
    </div>
  )
}
