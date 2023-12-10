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
    <main className="bg-grainy flex flex-col">
      <div className="bg-radial flex min-h-screen flex-col">
        <Navbar session={session} />
        {children}
        <ParticlesBackground />
      </div>
      <div className="mt-[240px] flex min-h-fit justify-center text-center md:mt-[300px]">
        <div className="flex max-w-4xl flex-col gap-4 px-12" id="sobre">
          <h1 className="font-serif text-5xl font-semibold text-primary-dark">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h1>
          <p className="text-lg font-normal text-primary-dark">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
