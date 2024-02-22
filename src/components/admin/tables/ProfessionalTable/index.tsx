'use client'

import { api } from '@/trpc/react'
import { ColumnDef } from '@tanstack/react-table'

import DataTable from '@/components/admin/DataTable'
import useResponsiveColumns from '@/hooks/use-responsive-columns'
import { columns as allColumns } from './columns'
import { DataTablePagination } from './data-table-pagination'
import { DataTableToolbar } from './data-table-toolbar'

type ProfessionalTableProps = {
  insertData: boolean
}

export default function ProfessionalTable({
  insertData = false,
}: ProfessionalTableProps) {
  const [data] = api.users.getAllProfessionals.useSuspenseQuery()
  const columns = useResponsiveColumns(allColumns)

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
