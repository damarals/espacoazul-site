import '@/styles/globals.css'

import { ReactNode } from 'react'
import { Figtree, Petrona } from 'next/font/google'
import { cookies } from 'next/headers'
import { TRPCReactProvider } from '@/trpc/react'

import { cn } from '@/lib/utils'
import TailwindIndicator from '@/components/TailwindIndicator'
import { Toaster } from '@/components/ui/toaster'

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const petrona = Petrona({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

export const metadata = {
  title: 'Projeto Espaço Azul',
  description: '',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={cn(
        'scroll-smooth font-sans',
        figtree.variable,
        petrona.variable,
      )}
    >
      <body className="bg-[#eff8ff]">
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
          <Toaster />
          <TailwindIndicator />
        </TRPCReactProvider>
      </body>
    </html>
  )
}
