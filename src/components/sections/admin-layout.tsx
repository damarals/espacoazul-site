'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { UserButton } from '@/components/auth'
import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import useTailwindBreakpoint from '@/hooks/use-tailwind-breakpoint'

export default function AdminLayoutClient({
  children,
  defaultCollapsed = false,
}: PropsWithChildren & { defaultCollapsed: boolean }) {
  const activePath = usePathname()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const [isHardCollapsed, setIsHardCollapsed] = useState(false)
  const twBreakpoint = useTailwindBreakpoint()

  useEffect(() => {
    setIsCollapsed(
      twBreakpoint === 'sm'
        ? true
        : twBreakpoint === 'xs'
          ? false
          : isHardCollapsed,
    )
  }, [isHardCollapsed, twBreakpoint])

  // trick to prevent radix from blocking the
  // body from receiving pointer events when the
  // mobile menu is open
  useEffect(() => {
    if (openMobileMenu) {
      const timer = setTimeout(() => {
        document.body.style.pointerEvents = ''
      }, 0)
      return () => clearTimeout(timer)
    } else {
      document.body.style.pointerEvents = 'auto'
    }
  }, [openMobileMenu])

  async function handleCollapse() {
    setIsCollapsed(!isCollapsed)
    setIsHardCollapsed(!isCollapsed)
    document.cookie = `sidebar:collapsed=${JSON.stringify(
      !isCollapsed,
    )}; sameSite=strict;`
  }

  return (
    <div
      className="group flex h-screen max-h-screen min-h-0 flex-col"
      data-sidebar-collapsed={isCollapsed}
    >
      <div className="fixed top-0 z-40 flex w-full border-b-2 sm:sticky sm:border-none">
        <div className="relative flex w-72 items-center bg-white px-4 group-data-[sidebar-collapsed=true]:w-20 sm:bg-gray-50">
          <Drawer
            open={openMobileMenu}
            onOpenChange={setOpenMobileMenu}
            direction="top"
          >
            <DrawerTrigger asChild>
              <Button variant="ghost" className="sm:hidden">
                <Icons.menu className="h-4 w-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="top-[58px] mt-0">
              <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 p-6 pt-3">
                <DrawerTitle className="text-xl text-blue-dark">
                  Administração
                </DrawerTitle>
                <MobileMenuLink
                  href="/admin"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  Visão Geral
                </MobileMenuLink>
                <MobileMenuLink
                  href="/admin/pacientes"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  Pacientes
                </MobileMenuLink>
                <MobileMenuLink
                  href="/admin/consultas"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  Consultas
                </MobileMenuLink>
                <MobileMenuLink
                  href="/admin/pagamentos"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  Pagamentos
                </MobileMenuLink>
                <MobileMenuLink
                  href="/admin/profissionais"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  Profissionais
                </MobileMenuLink>
                <MobileMenuLink
                  href="/admin/administradores"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  Administradores
                </MobileMenuLink>
              </div>
            </DrawerContent>
          </Drawer>
          <div className="flex w-14 justify-center">
            <Link
              href="/"
              className="relative h-10 w-10 rounded-full border border-blue-dark bg-white"
            >
              <Image
                src="/logo.png"
                alt="Logo do Projeto Espaço Azul"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
            </Link>
          </div>
          <button
            className="absolute -right-[12px] z-20 hidden rounded-full border bg-gray-50 p-0.5 shadow-sm sm:block"
            onClick={handleCollapse}
          >
            {isCollapsed ? (
              <Icons.chevronRight className="-mr-[2px] h-5 w-5" />
            ) : (
              <Icons.chevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="z-10 flex h-[56px] flex-1 items-center justify-end gap-3 bg-white px-6 py-2 sm:shadow-[rgba(0,0,0,0.1)_0px_0px_4px_0px]">
          <UserButton name="Admin" />
        </div>
      </div>
      <Separator className="bg-gray-200" />
      <div className="flex w-full flex-1 justify-center sm:max-h-[calc(100vh-58px)]">
        <div className="hidden w-72 flex-col gap-6 bg-gray-50 py-3.5 group-data-[sidebar-collapsed=true]:w-20 sm:flex sm:justify-between">
          {/* Menu */}
          <div className="flex flex-col gap-5">
            {/* Overview */}
            <div className="gap-1.5 px-3">
              <SidebarItem href="/admin" active={activePath === '/admin'}>
                <Icons.grid className="h-[22px] w-[22px]" />
                <span className="whitespace-nowrap font-medium group-data-[sidebar-collapsed=true]:hidden">
                  Visão Geral
                </span>
              </SidebarItem>
            </div>
            {/* Clinic Group */}
            <SidebarGroup title="Clínica">
              <SidebarItem
                href="/admin/pacientes"
                active={activePath === '/admin/pacientes'}
              >
                <Icons.user className="h-[22px] w-[22px]" />
                <span className="whitespace-nowrap font-medium group-data-[sidebar-collapsed=true]:hidden">
                  Pacientes
                </span>
              </SidebarItem>
              <SidebarItem
                href="/admin/consultas"
                active={activePath === '/admin/consultas'}
              >
                <Icons.callendar className="h-[22px] w-[22px]" />
                <span className="block whitespace-nowrap font-medium group-data-[sidebar-collapsed=true]:hidden">
                  Consultas
                </span>
              </SidebarItem>
              <SidebarItem
                href="/admin/profissionais"
                active={activePath === '/admin/profissionais'}
              >
                <Icons.users className="h-[22px] w-[22px]" />
                <span className="block whitespace-nowrap font-medium group-data-[sidebar-collapsed=true]:hidden">
                  Profissionais
                </span>
              </SidebarItem>
            </SidebarGroup>
            {/* Payments Group */}
            <SidebarGroup title="Financeiro">
              <SidebarItem
                href="/admin/pagamentos"
                active={activePath === '/admin/pagamentos'}
              >
                <Icons.card className="h-[22px] w-[22px]" />
                <span className="block whitespace-nowrap font-medium group-data-[sidebar-collapsed=true]:hidden">
                  Pagamentos
                </span>
              </SidebarItem>
            </SidebarGroup>
            {/* Admin Group */}
            <SidebarGroup title="Administração">
              <SidebarItem
                href="/admin/administradores"
                active={activePath === '/admin/administradores'}
              >
                <Icons.adminGroup className="h-[22px] w-[22px]" />
                <span
                  className="block whitespace-nowrap font-medium group-data-[sidebar-collapsed=true]:hidden"
                  data-hidden={isCollapsed}
                >
                  Administradores
                </span>
              </SidebarItem>
            </SidebarGroup>
          </div>
          {/* Footer */}
          <div className="flex flex-col gap-2 px-3">
            <button
              className="flex h-10 items-center gap-4 rounded-md px-3 py-2 hover:bg-gray-100 group-data-[sidebar-collapsed=true]:justify-center"
              data-collapsed={isCollapsed}
            >
              <Icons.logout className="h-[22px] w-[22px]" />
              <span
                className="block whitespace-nowrap font-medium group-data-[sidebar-collapsed=true]:hidden"
                data-hidden={isCollapsed}
              >
                Sair
              </span>
            </button>
          </div>
        </div>
        <ScrollArea className="flex flex-1 flex-col gap-2 overflow-y-auto rounded-bl-2xl bg-white py-3 pt-[60px] shadow-md sm:pt-3">
          {children}
        </ScrollArea>
      </div>
    </div>
  )
}

function SidebarGroup({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  const minifiedTitle = title.split('').slice(0, 3).join('')
  return (
    <div className="flex flex-col gap-1.5 px-3">
      <span className="justify-start px-3 text-xs font-medium uppercase text-gray-700">
        <p className="group-data-[sidebar-collapsed=true]:hidden">{title}</p>
        <p className="text-center group-data-[sidebar-collapsed=false]:hidden">
          {minifiedTitle}
        </p>
      </span>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  )
}

function SidebarItem({
  href,
  children,
  active,
}: PropsWithChildren & {
  href: string
  active: boolean
}) {
  return (
    <Link
      href={href}
      className="flex h-10 items-center gap-4 rounded-md px-3 py-2 hover:bg-gray-100 data-[active=true]:bg-blue-100 data-[active=true]:text-blue-dark group-data-[sidebar-collapsed=true]:justify-center"
      data-active={active}
    >
      {children}
    </Link>
  )
}

function MobileMenuLink({
  href,
  onClick,
  children,
}: PropsWithChildren & { href: string; onClick?: () => void }) {
  return (
    <Link
      className={cn(
        buttonVariants(),
        'w-fit rounded-xl bg-blue-dark px-12 text-base font-bold text-white',
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
