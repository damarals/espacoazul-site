'use client'

import { useState } from 'react'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  openInsertDialog: boolean
}

export function DataTableToolbar<TData>({
  table,
  openInsertDialog,
}: DataTableToolbarProps<TData>) {
  const [open, setOpen] = useState<boolean>(openInsertDialog)
  return (
    <div className="flex items-center justify-between">
      <Input
        placeholder="Buscar por nome..."
        value={(table.getColumn('fullName')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('fullName')?.setFilterValue(event.target.value)
        }
        className="h-8 w-[150px] lg:w-[250px]"
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="border bg-white">Nova Consulta</Button>
        </DialogTrigger>
        <DialogContent className="bg-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button className="bg-blue font-bold text-white" type="button">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}