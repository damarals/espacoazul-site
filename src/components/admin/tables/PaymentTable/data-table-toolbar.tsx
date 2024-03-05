'use client'

import { Table } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
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
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Input
        placeholder="Buscar por registro..."
        value={(table.getColumn('usercode')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('usercode')?.setFilterValue(event.target.value)
        }
        className="h-10 md:min-w-[250px]"
      />
      <Dialog>
        <DialogTrigger
          className={cn(buttonVariants({ variant: 'outline' }), 'gap-1.5')}
        >
          <Icons.plus className="h-4 w-4" />
          <span className="hidden sm:block">Novo pagamento</span>
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
