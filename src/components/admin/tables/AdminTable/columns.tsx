'use client'

import { api as server } from '@/trpc/server'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { DataTableColumnHeader } from '@/components/admin/DataTable/data-table-column-header'
import { DataTableRowActions } from '@/components/admin/DataTable/data-table-row-actions'

type Admin = Awaited<ReturnType<typeof server.users.getAllAdmins.query>>[number]

type ExtendedColumnDef<TData> = ColumnDef<TData> & {
  hiddenAt?: string[]
}

export const columns: ExtendedColumnDef<Admin>[] = [
  {
    id: 'usercode',
    accessorKey: 'usercode',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Registro" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('usercode')}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: 'fullName',
    accessorKey: 'fullName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[200px]">{row.getValue('fullName')}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: 'email',
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="E-mail" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[200px]">{row.getValue('email')}</div>
    ),
    hiddenAt: ['xs', 'sm', 'md'],
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'createdAt',
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Criado em" />
    ),
    cell: ({ row }) => (
      <div className="w-[90px]">
        {format(row.getValue('createdAt'), 'd MMM yyyy', { locale: ptBR })}
      </div>
    ),
    hiddenAt: ['xs'],
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
