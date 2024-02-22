'use client'

import { api } from '@/trpc/react'
import { ColumnDef } from '@tanstack/react-table'

import DataTable from '@/components/admin/DataTable'
import useResponsiveColumns from '@/hooks/use-responsive-columns'
import { columns as allColumns } from './columns'
import { DataTablePagination } from './data-table-pagination'
import { DataTableToolbar } from './data-table-toolbar'

type AdminTableProps = {
  insertData: boolean
}

export default function AdminTable({ insertData = false }: AdminTableProps) {
  const [data] = api.users.getAllAdmins.useSuspenseQuery()
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
