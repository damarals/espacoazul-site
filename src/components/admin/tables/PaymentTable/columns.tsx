'use client'

import { api as server } from '@/trpc/server'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { DataTableColumnHeader } from '@/components/admin/DataTable/data-table-column-header'
import { DataTableRowActions } from '@/components/admin/DataTable/data-table-row-actions'

type PatientPayments = Awaited<
  ReturnType<typeof server.payments.getAllPatients.query>
>[number]

type ExtendedColumnDef<TData> = ColumnDef<TData> & {
  hiddenAt?: string[]
}

export const columns: ExtendedColumnDef<PatientPayments>[] = [
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
    hiddenAt: ['xs'],
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const payments = row.original.payments
      const statusList = payments.map((payment) => payment.status)
      const status = statusList.includes('pending')
        ? 'Pendente'
        : statusList.includes('overdue')
          ? 'Atrasado'
          : statusList.includes('paid')
            ? 'Pago'
            : ''
      return (
        <div className="max-w-[200px]">
          <div
            className="w-fit rounded-md border-none px-3 py-1 font-medium data-[status='Atrasado']:bg-red-200 data-[status='Pago']:bg-green-200 data-[status='Pendente']:bg-yellow-200"
            data-status={status}
          >
            {status}
          </div>
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'lastPayment',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Último pagamento" />
    ),
    cell: ({ row }) => {
      const lastPayment = row.original.payments[0]
      return (
        <div className="w-[90px]">
          {lastPayment
            ? format(lastPayment.createdAt, 'd MMM yyyy', { locale: ptBR })
            : ''}
        </div>
      )
    },
    hiddenAt: ['xs', 'sm'],
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
