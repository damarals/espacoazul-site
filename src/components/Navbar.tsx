'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

type NavbarProps = {
  session: Session | null
}

export default function Navbar({ session }: NavbarProps) {
  return (
    <nav className="flex w-full flex-wrap items-center justify-between bg-blue-700 px-10 py-3">
      {/* Logo */}
      <Link className="relative h-16 w-16 shrink-0" href="/">
        <Image
          src="/logo.svg"
          alt="Logo do Projeto Espaço Azul"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        />
      </Link>
      {/* Menu */}
      <div className="flex items-center gap-3">
        <span className="text-center text-base font-light text-white">
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
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-4',
            )}
          >
            {session ? 'Sair' : 'Entrar'}
          </Link>
        )}
      </div>
    </nav>
  )
}
