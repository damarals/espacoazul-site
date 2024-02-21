import { PropsWithChildren } from 'react'
import { cookies } from 'next/headers'

import AdminLayoutClient from '@/components/sections/admin-layout'

export default function AdminLayout({ children }: PropsWithChildren) {
  const collapsed = Boolean(cookies().get('sidebar:collapsed')?.value)

  return (
    <AdminLayoutClient defaultCollapsed={collapsed}>
      {children}
    </AdminLayoutClient>
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
//           className="relative flex w-72 items-center bg-white px-4 data-[collapse=true]:w-20 sm:bg-[#eff8ff]"
//           data-collapse={
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
//             className="absolute -right-[11px] hidden rounded-md bg-[#eff8ff] p-0.5 data-[collapse=true]:-right-3 data-[collapse=true]:rounded-md data-[collapse=true]:bg-[#eff8ff] data-[collapse=true]:p-0.5 sm:block"
//             data-collapse={collapsed}
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
//             'flex w-72 flex-col gap-6 overflow-y-auto bg-[#eff8ff] py-3.5 data-[hidden=true]:hidden data-[collapse=true]:w-20 sm:justify-between data-[hidden=true]:sm:block',
//             twBreakpoint === 'xs' && 'fixed left-0 top-14 z-10 h-full',
//           )}
//           data-collapse={
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={collapsed}
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={collapsed}
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={collapsed}
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={collapsed}
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={isSidebarCollapsed}
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={isSidebarCollapsed}
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={isSidebarCollapsed}
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={isSidebarCollapsed}
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={isSidebarCollapsed}
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
//                     className="flex w-6 justify-center data-[collapse=true]:w-8"
//                     data-collapse={isSidebarCollapsed}
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
//                 className="flex w-6 justify-center data-[collapse=true]:w-8"
//                 data-collapse={isSidebarCollapsed}
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
