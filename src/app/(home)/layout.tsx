import { ReactNode } from 'react'
import { getServerAuthSession } from '@/server/auth'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ParticlesBackground from '@/components/ParticlesBackground'

interface MainLayoutProps {
  children: ReactNode
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const session = await getServerAuthSession()
  return (
    <main className="bg-grainy flex min-h-screen flex-col">
      <div className="bg-radial flex min-h-screen flex-col">
        <Navbar session={session} />
        {children}
        <ParticlesBackground />
      </div>
      <Footer />
    </main>
  )
}
