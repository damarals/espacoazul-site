'use client'

import { api } from '@/trpc/react'
import { ColumnDef } from '@tanstack/react-table'

import DataTable from '@/components/admin/DataTable'
import { columns } from './columns'
import { DataTablePagination } from './data-table-pagination'
import { DataTableToolbar } from './data-table-toolbar'

type PatientTableProps = {
  insertData: boolean
}

export default function PatientTable({
  insertData = false,
}: PatientTableProps) {
  const [data] = api.users.getAllPatients.useSuspenseQuery()

  if (!data) return null
  return (
    <DataTable
      data={data}
      columns={columns as ColumnDef<(typeof data)[number], typeof columns>[]}
      toolbar={DataTableToolbar}
      pagination={DataTablePagination}
      insertData={insertData}
    />
  )
}