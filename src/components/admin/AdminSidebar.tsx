'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Icons } from '@/components/icons'
import { Separator } from '@/components/ui/separator'

export default function AdminSidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  return (
    <div
      className="flex h-screen w-72 flex-col gap-2 py-3 duration-500 data-[collapse=true]:w-20"
      data-collapse={isSidebarCollapsed}
    >
      {/* Header */}
      <div className="relative flex items-center px-3 py-2">
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
          className="absolute right-3 duration-200 data-[collapse=true]:-right-3 data-[collapse=true]:rounded-md data-[collapse=true]:bg-[#eff8ff] data-[collapse=true]:p-0.5"
          data-collapse={isSidebarCollapsed}
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        >
          <Icons.sidebarArrowCollapse
            className="h-5 w-5 data-[hidden=true]:hidden"
            data-hidden={isSidebarCollapsed}
          />
          <Icons.sidebarArrowExpand
            className="h-5 w-5 data-[hidden=true]:hidden"
            data-hidden={!isSidebarCollapsed}
          />
        </button>
      </div>
      <Separator className="bg-gray-200" />
      <div
        className="flex flex-1 flex-col justify-between"
        data-collapse={isSidebarCollapsed}
      >
        {/* Menu */}
        <div className="flex flex-col gap-6 py-3">
          {/* Patients Group */}
          <div className="flex flex-col gap-2 px-3">
            <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={isSidebarCollapsed}
              >
                Pacientes
              </p>
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={!isSidebarCollapsed}
              >
                Pac
              </p>
            </span>
            <div className="flex flex-col gap-1">
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.userPlus className="h-6 w-6" />
                </div>
                <span
                  className="whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Novo Paciente
                </span>
              </button>
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.users className="h-6 w-6" />
                </div>
                <span
                  className="whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Ver Pacientes
                </span>
              </button>
            </div>
          </div>
          {/* Appointments Group */}
          <div className="flex flex-col gap-2 px-3">
            <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={isSidebarCollapsed}
              >
                Consultas
              </p>
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={!isSidebarCollapsed}
              >
                Con
              </p>
            </span>
            <div className="flex flex-col gap-1">
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.filePlus className="h-6 w-6" />
                </div>
                <span
                  className="block whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Nova Consulta
                </span>
              </button>
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.searchDocument className="h-6 w-6" />
                </div>
                <span
                  className="block whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Ver Consultas
                </span>
              </button>
            </div>
          </div>
          {/* Professionals Group */}
          <div className="flex flex-col gap-2 px-3">
            <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={isSidebarCollapsed}
              >
                Profissionais
              </p>
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={!isSidebarCollapsed}
              >
                Pro
              </p>
            </span>
            <div className="flex flex-col gap-1">
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.doctor className="h-6 w-6" />
                </div>
                <span
                  className="block whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Novo Profissional
                </span>
              </button>
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.medical className="h-6 w-6" />
                </div>
                <span
                  className="block whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Ver Profissionais
                </span>
              </button>
            </div>
          </div>
          {/* Payments Group */}
          <div className="flex flex-col gap-2 px-3">
            <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={isSidebarCollapsed}
              >
                Pagamentos
              </p>
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={!isSidebarCollapsed}
              >
                Pag
              </p>
            </span>
            <div className="flex flex-col gap-1">
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.creditCard className="h-6 w-6" />
                </div>
                <span
                  className="block whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Novo Pagamento
                </span>
              </button>
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.receipt className="h-6 w-6" />
                </div>
                <span
                  className="block whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Ver Pagamentos
                </span>
              </button>
            </div>
          </div>
          {/* Admin Group */}
          <div className="flex flex-col gap-2 px-3">
            <span className="justify-start px-3 text-sm font-medium uppercase text-gray-700">
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={isSidebarCollapsed}
              >
                Administração
              </p>
              <p
                className="data-[hidden=true]:hidden"
                data-hidden={!isSidebarCollapsed}
              >
                Adm
              </p>
            </span>
            <div className="flex flex-col gap-1">
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.admin className="h-6 w-6" />
                </div>
                <span
                  className="block whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Novo Usuário
                </span>
              </button>
              <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
                <div
                  className="flex w-6 justify-center transition-all duration-200 data-[collapse=true]:w-8"
                  data-collapse={isSidebarCollapsed}
                >
                  <Icons.adminGroup className="h-6 w-6" />
                </div>
                <span
                  className="block whitespace-nowrap data-[hidden=true]:hidden"
                  data-hidden={isSidebarCollapsed}
                >
                  Ver Usuários
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex flex-col gap-2 px-3">
          <button className="flex items-center gap-4 rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-dark">
            <div
              className="flex w-6 justify-center data-[collapse=true]:w-8 data-[collapse=true]:transition-all data-[collapse=true]:duration-200"
              data-collapse={isSidebarCollapsed}
            >
              <Icons.logout className="h-6 w-6" />
            </div>
            <span
              className="block whitespace-nowrap data-[hidden=true]:hidden"
              data-hidden={isSidebarCollapsed}
            >
              Sair
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
