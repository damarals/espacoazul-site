'use client'

// import { Icons } from '@/components/icons'
// import { Separator } from '@/components/ui/separator'
import UserButton from '@/components/UserButton'

export default function AdminHeader() {
  return (
    <div className="flex h-[56px] items-center justify-end gap-3 px-6 py-2">
      {/* <button
        className="relative data-[empty=false]:after:rounded-full data-[empty=false]:after:border-2 data-[empty=false]:after:border-white data-[empty=false]:after:content-[*]"
        data-empty={false}
      >
        <Icons.notifications className="h-5 w-5" />
        <div className="absolute right-[1px] top-0 overflow-hidden rounded-full border-[1.5px] border-white bg-red-600 p-1" />
      </button>
      <Separator className="h-6 w-[2px] bg-gray-200" orientation="vertical" /> */}
      <UserButton name="Admin" />
    </div>
  )
}
