'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

type NavbarProps = {
  session: Session | null
}

export default function Navbar({ session }: NavbarProps) {
  return (
    <nav className="relative z-20 px-2 py-3 text-base font-bold text-blue-dark transition-all md:px-9 md:py-6">
      {/* Main Nav */}
      <div className="flex h-10 w-full flex-wrap items-center justify-between">
        {/* Sections & Pages */}
        <div>
          <Icons.burger className="h-5 w-5 md:hidden" />
          <div className="hidden gap-4 md:flex">
            <Link
              className="underline decoration-1 underline-offset-2 hover:decoration-2"
              href="/"
            >
              Institucional
            </Link>
            <Link
              className="underline decoration-1 underline-offset-2 hover:decoration-2"
              href="/"
            >
              Contato
            </Link>
          </div>
        </div>
        {/* Logo */}
        <Link
          className="absolute left-1/2 top-3 flex shrink-0 -translate-x-1/2 scale-[0.6] items-center gap-2 transition-all delay-0 duration-300 ease-in-out md:top-[4.5rem] md:scale-100"
          href="/"
        >
          <div className="relative h-10 w-10 rounded-full border border-blue-dark">
            <Image
              src="/logo.png"
              alt="Logo do Projeto Espaço Azul"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          </div>
          <span className="whitespace-nowrap text-4xl">Espaço Azul</span>
        </Link>
        {/* Menu */}
        <div className="flex items-center gap-3">
          <div className="flex gap-3">
            <span className="text-center text-base font-light">
              {session && <span>Olá, {session.user?.shortName}</span>}
            </span>

            {session ? (
              <Button
                variant="secondary"
                size="sm"
                type="button"
                onClick={() => signOut()}
              >
                Sair
              </Button>
            ) : (
              <Link
                href="/entrar"
                className="underline decoration-1 underline-offset-2 transition-all hover:decoration-2"
              >
                <span className="hidden md:block">
                  {session ? 'Sair' : 'Entrar'}
                </span>
                <Icons.login className="h-5 w-5 md:hidden" />
              </Link>
            )}
          </div>
          <Icons.moon className="h-5 w-5" />
        </div>
      </div>
    </nav>
  )
}
