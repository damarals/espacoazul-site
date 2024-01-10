'use client'

import { ColumnDef } from '@tanstack/react-table'

import DataTable from '@/components/admin/DataTable'
import { columns } from './columns'
import { DataTablePagination } from './data-table-pagination'
import { DataTableToolbar } from './data-table-toolbar'

interface ProfessionalTableProps<TData> {
  data: TData[]
  insertData: boolean
}

export default function ProfessionalTable<TData>({
  data,
  insertData = false,
}: ProfessionalTableProps<TData>) {
  return (
    <DataTable
      data={data}
      columns={columns as ColumnDef<TData, typeof columns>[]}
      toolbar={DataTableToolbar}
      pagination={DataTablePagination}
      insertData={insertData}
    />
  )
}
