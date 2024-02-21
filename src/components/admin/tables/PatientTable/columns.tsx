'use client'

import { api as server } from '@/trpc/server'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { DataTableColumnHeader } from '@/components/admin/DataTable/data-table-column-header'
import { DataTableRowActions } from '@/components/admin/DataTable/data-table-row-actions'

type Patient = Awaited<
  ReturnType<typeof server.users.getAllPatients.query>
>[number]

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: 'usercode',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-[80px]"
        column={column}
        title="Registro"
      />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('usercode')}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: 'fullName',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-[140px] lg:w-[200px]"
        column={column}
        title="Nome"
      />
    ),
    cell: ({ row }) => (
      <div className="w-[140px] lg:w-[200px]">{row.getValue('fullName')}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="hidden w-[200px] lg:block"
        column={column}
        title="E-mail"
      />
    ),
    cell: ({ row }) => (
      <div className="hidden w-[200px] lg:block">{row.getValue('email')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="hidden w-[90px] sm:block md:hidden lg:block"
        column={column}
        title="Criado em"
      />
    ),
    cell: ({ row }) => (
      <div className="hidden w-[90px] sm:block md:hidden lg:block">
        {format(row.getValue('createdAt'), 'd MMM yyyy', { locale: ptBR })}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <div className="flex items-center justify-end">
        <DataTableRowActions row={row} />
      </div>
    ),
  },
]
