import { PropsWithChildren } from 'react'
import { cookies } from 'next/headers'

import AdminLayoutClient from '@/components/sections/admin-layout'

export default function AdminLayout({ children }: PropsWithChildren) {
  const collapsed = Boolean(cookies().get('sidebar:collapsed')?.value)

  return (
    <AdminLayoutClient defaultCollapsed={collapsed}>
      {children}
    </AdminLayoutClient>
  )
}
