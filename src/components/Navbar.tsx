'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Session } from 'next-auth'

import { UserButton } from '@/components/auth'
import { Icons } from '@/components/icons'
import { Button } from './ui/button'

type NavbarProps = {
  user?: Session['user']
}

export default function Navbar({ user }: NavbarProps) {
  const path = usePathname()
  // 1. Blur & round nav on scroll
  // 2. Scale & translate logo on scroll
  useEffect(() => {
    const nav = document.querySelector('nav')
    const handleScroll = () => {
      const navClasses = ['bg-blur', 'md:rounded-3xl']
      if (path !== '/' || window.scrollY > 0) {
        nav?.classList.add(...navClasses)
      } else {
        nav?.classList.remove(...navClasses)
      }
    }
    setTimeout(() => handleScroll(), 50) // fire once on load
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [path])

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 py-3 text-base font-bold text-blue-dark transition-all md:mx-3 md:mt-2 md:py-3">
      {/* Main Nav */}
      <div className="relative flex h-10 w-full items-center justify-between px-4 md:px-7">
        {/* Mobile Menu (Hamburger) */}
        <Button variant="ghost" className="md:hidden">
          <Icons.menu className="h-4 w-4" />
        </Button>
        {/* Logo */}
        <Link
          className="flex shrink-0 items-center gap-2 transition-all delay-0 duration-300 ease-in-out"
          href="/"
          id="logo"
        >
          <div className="relative aspect-square h-8 rounded-full bg-white">
            <Image
              src="/logo.png"
              alt="Logo do Projeto Espaço Azul"
              fill
              className="rounded-full border border-blue-dark object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          </div>
          <span className="hidden whitespace-nowrap text-2xl sm:block">
            Espaço Azul
          </span>
        </Link>
        {/* Sections & Pages */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 gap-4 pt-1.5 text-base md:flex">
          <Link
            className="font-semibold underline decoration-1 underline-offset-2 hover:decoration-2"
            href="/"
          >
            Início
          </Link>
          <Link
            className="font-medium decoration-1 underline-offset-2 hover:underline"
            href="/institucional"
          >
            Institucional
          </Link>
          <Link
            className="font-medium decoration-1 underline-offset-2 hover:underline"
            href="/#contato"
          >
            Contato
          </Link>
        </div>
        {/* Menu */}
        <div className="flex items-center gap-3">
          <div className="flex gap-3">
            {user ? (
              <UserButton name={user.shortName} />
            ) : (
              <Link
                href="/entrar"
                className="underline decoration-1 underline-offset-2 transition-all hover:decoration-2"
              >
                <span className="hidden md:block">Entrar</span>
                <Icons.login className="h-5 w-5 md:hidden" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
