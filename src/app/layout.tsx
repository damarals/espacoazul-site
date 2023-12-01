import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { TRPCReactProvider } from '@/trpc/react'

import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Projeto Espaço Azul',
  description: '',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  )
}
