import { ReactNode } from 'react'
import { getServerAuthSession } from '@/server/auth'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface MainLayoutProps {
  children: ReactNode
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const session = await getServerAuthSession()
  return (
    <main className="flex min-h-screen flex-col gap-4">
      <Navbar session={session} />
      {children}
      <Footer />
    </main>
  )
}
