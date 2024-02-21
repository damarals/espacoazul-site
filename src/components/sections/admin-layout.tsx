'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { UserButton } from '@/components/auth'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import useTailwindBreakpoint from '@/hooks/useTailwindBreakpoint'

export default function AdminLayoutClient({
  children,
  defaultCollapsed = false,
}: PropsWithChildren & { defaultCollapsed: boolean }) {
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
  }, [isCollapsed, isHardCollapsed, twBreakpoint])

  return (
    <div className="flex max-h-screen min-h-0 flex-col">
      <div className="fixed z-40 flex w-full border-b-2 sm:sticky sm:border-none">
        <div
          className="relative flex w-72 items-center bg-white px-4 data-[collapsed=true]:w-20 sm:bg-[#eff8ff]"
          data-collapsed={isCollapsed}
        >
          <Drawer direction="top">
            <DrawerTrigger asChild>
              <Button variant="ghost" className="sm:hidden">
                <Icons.menu className="h-4 w-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="top-[58px] mt-0">
              <div className="flex flex-col items-center justify-center gap-4 bg-white px-6 py-8">
                <Button className="w-fit rounded-xl px-12 text-base font-bold text-white">
                  Pacientes
                </Button>
                <Button className="w-fit rounded-xl px-12 text-base font-bold text-white">
                  Consultas
                </Button>
                <Button className="w-fit rounded-xl px-12 text-base font-bold text-white">
                  Pagamentos
                </Button>
                <Button className="w-fit rounded-xl px-12 text-base font-bold text-white">
                  Profissionais
                </Button>
                <Button className="w-fit rounded-xl px-12 text-base font-bold text-white">
                  Administradores
                </Button>
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
            className="absolute -right-[11px] hidden rounded-md bg-[#eff8ff] p-0.5 data-[collapsed=true]:-right-3 data-[collapsed=true]:rounded-md data-[collapsed=true]:bg-[#eff8ff] data-[collapsed=true]:p-0.5 sm:block"
            data-collapsed={isCollapsed}
            onClick={() => {
              setIsCollapsed(!isCollapsed)
              setIsHardCollapsed(!isCollapsed)
              document.cookie = `sidebar:collapsed=${JSON.stringify(
                !isCollapsed,
              )}; sameSite=strict;`
            }}
          >
            <Icons.sidebarArrowCollapse
              className="h-5 w-5 data-[hidden=true]:hidden"
              data-hidden={isCollapsed}
            />
            <Icons.sidebarArrowExpand
              className="h-5 w-5 data-[hidden=true]:hidden"
              data-hidden={!isCollapsed}
            />
          </button>
        </div>
        <div className="flex h-[56px] flex-1 items-center justify-end gap-3 bg-white px-6 py-2">
          <UserButton name="Admin" />
        </div>
      </div>
      <Separator className="bg-gray-200" />
      <div className="flex w-full flex-1 justify-center sm:max-h-[calc(100vh-58px)]">
        <div
          className="hidden w-72 flex-col gap-6 bg-[#eff8ff] py-3.5 data-[hidden=true]:hidden data-[collapsed=true]:w-20 sm:flex sm:justify-between data-[hidden=true]:sm:block"
          data-collapsed={isCollapsed}
        >
          {/* Menu */}
          <div className="flex flex-col gap-6 py-3">
            {/* Patients Group */}
            <div className="flex flex-col gap-2 px-3">
              <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={isCollapsed}
                >
                  Pacientes
                </p>
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={!isCollapsed}
                >
                  Pac
                </p>
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/admin/pacientes?acao=novo"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.userPlus className="h-6 w-6" />
                  </div>
                  <span
                    className="whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Novo Paciente
                  </span>
                </Link>
                <Link
                  href="/admin/pacientes"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.users className="h-6 w-6" />
                  </div>
                  <span
                    className="whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Ver Pacientes
                  </span>
                </Link>
              </div>
            </div>
            {/* Appointments Group */}
            <div className="flex flex-col gap-2 px-3">
              <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={isCollapsed}
                >
                  Consultas
                </p>
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={!isCollapsed}
                >
                  Con
                </p>
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/admin/consultas?acao=novo"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.filePlus className="h-6 w-6" />
                  </div>
                  <span
                    className="block whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Nova Consulta
                  </span>
                </Link>
                <Link
                  href="/admin/consultas"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.searchDocument className="h-6 w-6" />
                  </div>
                  <span
                    className="block whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Ver Consultas
                  </span>
                </Link>
              </div>
            </div>
            {/* Payments Group */}
            <div className="flex flex-col gap-2 px-3">
              <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={isCollapsed}
                >
                  Pagamentos
                </p>
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={!isCollapsed}
                >
                  Pag
                </p>
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/admin/pagamentos?acao=novo"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.creditCard className="h-6 w-6" />
                  </div>
                  <span
                    className="block whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Novo Pagamento
                  </span>
                </Link>
                <Link
                  href="/admin/pagamentos"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.receipt className="h-6 w-6" />
                  </div>
                  <span
                    className="block whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Ver Pagamentos
                  </span>
                </Link>
              </div>
            </div>
            {/* Professionals Group */}
            <div className="flex flex-col gap-2 px-3">
              <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={isCollapsed}
                >
                  Profissionais
                </p>
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={!isCollapsed}
                >
                  Pro
                </p>
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/admin/profissionais?acao=novo"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.doctor className="h-6 w-6" />
                  </div>
                  <span
                    className="block whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Novo Profissional
                  </span>
                </Link>
                <Link
                  href="/admin/profissionais"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.medical className="h-6 w-6" />
                  </div>
                  <span
                    className="block whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Ver Profissionais
                  </span>
                </Link>
              </div>
            </div>
            {/* Admin Group */}
            <div className="flex flex-col gap-2 px-3">
              <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={isCollapsed}
                >
                  Administração
                </p>
                <p
                  className="data-[hidden=true]:hidden"
                  data-hidden={!isCollapsed}
                >
                  Adm
                </p>
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/admin/administradores?acao=novo"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.admin className="h-6 w-6" />
                  </div>
                  <span
                    className="block whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Novo Administrador
                  </span>
                </Link>
                <Link
                  href="/admin/administradores"
                  className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
                >
                  <div
                    className="flex w-6 justify-center data-[collapsed=true]:w-8"
                    data-collapsed={isCollapsed}
                  >
                    <Icons.adminGroup className="h-6 w-6" />
                  </div>
                  <span
                    className="block whitespace-nowrap data-[hidden=true]:hidden"
                    data-hidden={isCollapsed}
                  >
                    Ver Administradores
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="flex flex-col gap-2 px-3">
            <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
              <div
                className="flex w-6 justify-center data-[collapsed=true]:w-8"
                data-collapsed={isCollapsed}
              >
                <Icons.logout className="h-6 w-6" />
              </div>
              <span
                className="block whitespace-nowrap data-[hidden=true]:hidden"
                data-hidden={isCollapsed}
              >
                Sair
              </span>
            </button>
          </div>
        </div>
        <ScrollArea className="flex min-h-[calc(100vh-58px)] flex-1 flex-col gap-2 overflow-y-auto rounded-bl-2xl bg-white py-3 shadow-md">
          {children}
        </ScrollArea>
      </div>
    </div>
  )
}

// function AdminLayout({ children }: PropsWithChildren) {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
//   const [isSidebarHidden, setIsSidebarHidden] = useState(false)
//   const twBreakpoint = useTailwindBreakpoint()

//   // a useeffect that do:
//   // 1. if the breakpoint is md or more, set the sidebar to not collapsed
//   // 2. if the breakpoint is sm, set the sidebar to collapsed
//   // 3. if the breakpoint is xs, set the sidebar to hidden
//   useEffect(() => {
//     if (twBreakpoint === 'xs') {
//       setIsSidebarHidden(true)
//       setIsSidebarCollapsed(false)
//     }
//     if (twBreakpoint === 'sm') setIsSidebarCollapsed(true)
//   }, [twBreakpoint])

//   console.log(
//     twBreakpoint,
//     twBreakpoint === 'sm'
//       ? true
//       : twBreakpoint === 'xs'
//         ? false
//         : isSidebarCollapsed,
//   )

//   return (
//     <div className="flex min-h-screen flex-col">
//       <div className="fixed z-20 flex w-full border-b-2 sm:sticky sm:border-none">
//         <div
//           className="relative flex w-72 items-center bg-white px-4 data-[collapsed=true]:w-20 sm:bg-[#eff8ff]"
//           data-collapsed={
//             twBreakpoint === 'sm'
//               ? true
//               : twBreakpoint === 'xs'
//                 ? false
//                 : isSidebarCollapsed
//           }
//         >
//           <Button
//             variant="ghost"
//             className="sm:hidden"
//             onClick={() => setIsSidebarHidden(!isSidebarHidden)}
//           >
//             <Icons.menu className="h-4 w-4" />
//           </Button>
//           <div className="flex w-14 justify-center">
//             <Link
//               href="/"
//               className="relative h-10 w-10 rounded-full border border-blue-dark bg-white"
//             >
//               <Image
//                 src="/logo.png"
//                 alt="Logo do Projeto Espaço Azul"
//                 fill
//                 className="object-contain"
//                 sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
//               />
//             </Link>
//           </div>
//           <button
//             className="absolute -right-[11px] hidden rounded-md bg-[#eff8ff] p-0.5 data-[collapsed=true]:-right-3 data-[collapsed=true]:rounded-md data-[collapsed=true]:bg-[#eff8ff] data-[collapsed=true]:p-0.5 sm:block"
//             data-collapsed={collapsed}
//             onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
//           >
//             <Icons.sidebarArrowCollapse
//               className="h-5 w-5 data-[hidden=true]:hidden"
//               data-hidden={collapsed}
//             />
//             <Icons.sidebarArrowExpand
//               className="h-5 w-5 data-[hidden=true]:hidden"
//               data-hidden={!collapsed}
//             />
//           </button>
//         </div>
//         <div className="flex h-[56px] flex-1 items-center justify-end gap-3 bg-white px-6 py-2">
//           <UserButton name="Admin" />
//         </div>
//       </div>
//       <Separator className="bg-gray-200" />
//       <div className="flex w-full flex-1 justify-center">
//         <div
//           className={cn(
//             'flex w-72 flex-col gap-6 overflow-y-auto bg-[#eff8ff] py-3.5 data-[hidden=true]:hidden data-[collapsed=true]:w-20 sm:justify-between data-[hidden=true]:sm:block',
//             twBreakpoint === 'xs' && 'fixed left-0 top-14 z-10 h-full',
//           )}
//           data-collapsed={
//             twBreakpoint === 'sm'
//               ? true
//               : twBreakpoint === 'xs'
//                 ? false
//                 : isSidebarCollapsed
//           }
//           data-hidden={isSidebarHidden}
//         >
//           {/* Menu */}
//           <div className="flex flex-col gap-6 py-3">
//             {/* Patients Group */}
//             <div className="flex flex-col gap-2 px-3">
//               <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={collapsed}
//                 >
//                   Pacientes
//                 </p>
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={!collapsed}
//                 >
//                   Pac
//                 </p>
//               </span>
//               <div className="flex flex-col gap-1">
//                 <Link
//                   href="/admin/pacientes?acao=novo"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={collapsed}
//                   >
//                     <Icons.userPlus className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={collapsed}
//                   >
//                     Novo Paciente
//                   </span>
//                 </Link>
//                 <Link
//                   href="/admin/pacientes"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={collapsed}
//                   >
//                     <Icons.users className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={collapsed}
//                   >
//                     Ver Pacientes
//                   </span>
//                 </Link>
//               </div>
//             </div>
//             {/* Appointments Group */}
//             <div className="flex flex-col gap-2 px-3">
//               <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={collapsed}
//                 >
//                   Consultas
//                 </p>
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={!collapsed}
//                 >
//                   Con
//                 </p>
//               </span>
//               <div className="flex flex-col gap-1">
//                 <Link
//                   href="/admin/consultas?acao=novo"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={collapsed}
//                   >
//                     <Icons.filePlus className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="block whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={collapsed}
//                   >
//                     Nova Consulta
//                   </span>
//                 </Link>
//                 <Link
//                   href="/admin/consultas"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={collapsed}
//                   >
//                     <Icons.searchDocument className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="block whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={collapsed}
//                   >
//                     Ver Consultas
//                   </span>
//                 </Link>
//               </div>
//             </div>
//             {/* Payments Group */}
//             <div className="flex flex-col gap-2 px-3">
//               <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={collapsed}
//                 >
//                   Pagamentos
//                 </p>
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={!collapsed}
//                 >
//                   Pag
//                 </p>
//               </span>
//               <div className="flex flex-col gap-1">
//                 <Link
//                   href="/admin/pagamentos?acao=novo"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={isSidebarCollapsed}
//                   >
//                     <Icons.creditCard className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="block whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={isSidebarCollapsed}
//                   >
//                     Novo Pagamento
//                   </span>
//                 </Link>
//                 <Link
//                   href="/admin/pagamentos"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={isSidebarCollapsed}
//                   >
//                     <Icons.receipt className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="block whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={isSidebarCollapsed}
//                   >
//                     Ver Pagamentos
//                   </span>
//                 </Link>
//               </div>
//             </div>
//             {/* Professionals Group */}
//             <div className="flex flex-col gap-2 px-3">
//               <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={isSidebarCollapsed}
//                 >
//                   Profissionais
//                 </p>
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={!isSidebarCollapsed}
//                 >
//                   Pro
//                 </p>
//               </span>
//               <div className="flex flex-col gap-1">
//                 <Link
//                   href="/admin/profissionais?acao=novo"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={isSidebarCollapsed}
//                   >
//                     <Icons.doctor className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="block whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={isSidebarCollapsed}
//                   >
//                     Novo Profissional
//                   </span>
//                 </Link>
//                 <Link
//                   href="/admin/profissionais"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={isSidebarCollapsed}
//                   >
//                     <Icons.medical className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="block whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={isSidebarCollapsed}
//                   >
//                     Ver Profissionais
//                   </span>
//                 </Link>
//               </div>
//             </div>
//             {/* Admin Group */}
//             <div className="flex flex-col gap-2 px-3">
//               <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={isSidebarCollapsed}
//                 >
//                   Administração
//                 </p>
//                 <p
//                   className="data-[hidden=true]:hidden"
//                   data-hidden={!isSidebarCollapsed}
//                 >
//                   Adm
//                 </p>
//               </span>
//               <div className="flex flex-col gap-1">
//                 <Link
//                   href="/admin/administradores?acao=novo"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={isSidebarCollapsed}
//                   >
//                     <Icons.admin className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="block whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={isSidebarCollapsed}
//                   >
//                     Novo Administrador
//                   </span>
//                 </Link>
//                 <Link
//                   href="/admin/administradores"
//                   className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark"
//                 >
//                   <div
//                     className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                     data-collapsed={isSidebarCollapsed}
//                   >
//                     <Icons.adminGroup className="h-6 w-6" />
//                   </div>
//                   <span
//                     className="block whitespace-nowrap data-[hidden=true]:hidden"
//                     data-hidden={isSidebarCollapsed}
//                   >
//                     Ver Administradores
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* Footer */}
//           <div className="flex flex-col gap-2 px-3">
//             <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
//               <div
//                 className="flex w-6 justify-center data-[collapsed=true]:w-8"
//                 data-collapsed={isSidebarCollapsed}
//               >
//                 <Icons.logout className="h-6 w-6" />
//               </div>
//               <span
//                 className="block whitespace-nowrap data-[hidden=true]:hidden"
//                 data-hidden={isSidebarCollapsed}
//               >
//                 Sair
//               </span>
//             </button>
//           </div>
//         </div>
//         <div className="flex flex-1 flex-col gap-2 rounded-bl-2xl bg-white py-3 shadow-md">
//           {children}
//         </div>
//       </div>
//     </div>
//   )
// }
