'use client'

import { useEffect } from 'react'
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
  // 1. Blur & round nav on scroll
  // 2. Scale & translate logo on scroll
  useEffect(() => {
    const nav = document.querySelector('nav')
    const logo = document.querySelector('#logo')
    const handleScroll = () => {
      const navClasses = ['bg-blur', 'md:rounded-3xl']
      const onTopLogoClasses = ['md:top-[4.5rem]', 'md:scale-100']
      const onScrollLogoClasses = ['md:top-0', 'md:scale-[0.6]']
      if (window.scrollY > 0) {
        nav?.classList.add(...navClasses)
        logo?.classList.add(...onScrollLogoClasses)
        logo?.classList.remove(...onTopLogoClasses)
      } else {
        nav?.classList.remove(...navClasses)
        logo?.classList.add(...onTopLogoClasses)
        logo?.classList.remove(...onScrollLogoClasses)
      }
    }
    setTimeout(() => handleScroll(), 50) // fire once on load
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 py-3 text-base font-bold text-blue-dark transition-all md:mx-3 md:mt-2 md:py-4">
      {/* Main Nav */}
      <div className="relative flex h-10 w-full flex-wrap items-center justify-between px-4 md:px-6">
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
          className="absolute left-1/2 top-0 flex shrink-0 -translate-x-1/2 scale-[0.6] items-center gap-2 transition-all delay-0 duration-300 ease-in-out md:top-[4.5rem] md:scale-100"
          href="/"
          id="logo"
        >
          <div className="relative h-10 w-10 rounded-full border border-blue-dark bg-white">
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
