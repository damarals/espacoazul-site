import { PropsWithChildren } from 'react'

import { currentUser } from '@/lib/auth'
import Navbar from '@/components/Navbar'

export default async function MainLayout({ children }: PropsWithChildren) {
  const user = await currentUser()
  return (
    <main className="bg-grainy flex flex-col">
      <Navbar user={user} />
      {children}
    </main>
  )
}
