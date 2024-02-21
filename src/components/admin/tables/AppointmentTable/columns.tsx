'use client'

import { api as server } from '@/trpc/server'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { DataTableColumnHeader } from '@/components/admin/DataTable/data-table-column-header'
import { DataTableRowActions } from '@/components/admin/DataTable/data-table-row-actions'

type Appointment = Awaited<
  ReturnType<typeof server.appointments.getAllAppointments.query>
>[number]

export const columns: ColumnDef<Appointment>[] = [
  {
    id: 'idPatient',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Registro" />
    ),
    cell: ({ row }) => {
      const patient = row.original.patient
      return <div className="w-[80px]">{patient.usercode}</div>
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: 'professional',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Profissional" />
    ),
    cell: ({ row }) => {
      const professional = row.original.professional
      return <div className="max-w-[200px]">{professional.fullName}</div>
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: 'category',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tipo" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[200px]">{row.getValue('category')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data" />
    ),
    cell: ({ row }) => (
      <div className="w-[90px]">
        {format(row.getValue('date'), 'd MMM yyyy', { locale: ptBR })}
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
