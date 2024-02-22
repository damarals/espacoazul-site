'use client'

import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'

import useTailwindBreakpoint from './use-tailwind-breakpoint'

type ExtendedColumnDef<TData> = ColumnDef<TData> & {
  hiddenAt?: string[]
}

export default function useResponsiveColumns<TData>(
  columns: ExtendedColumnDef<TData>[],
) {
  const twBreakpoint = useTailwindBreakpoint()
  const [responsiveColumns, setResponsiveColumns] = useState(columns)

  useEffect(() => {
    setResponsiveColumns(
      columns.filter((column) => !column.hiddenAt?.includes(twBreakpoint)),
    )
  }, [columns, twBreakpoint])

  return responsiveColumns
}
