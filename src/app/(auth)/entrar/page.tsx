import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Icons } from '@/components/icons'
import { UserAuthForm } from '@/components/UserAuthForm'

export const metadata: Metadata = {
  title: 'Entrar',
  description: 'Entrar na sua conta',
}

export default function LoginPage() {
  return (
    <div className="relative flex h-screen w-screen">
      <Link
        href="/"
        className="bg-white/70 absolute left-4 top-5 flex items-center font-medium text-primary-dark md:left-8 md:top-8"
      >
        <>
          <Icons.chevronLeft className="mr-1 h-4 w-4" />
          Voltar
        </>
      </Link>
      <div className="flex w-full items-center justify-center bg-[#eff8ff] p-6">
        <div className="box-shadow flex flex-col justify-center space-y-6 rounded-3xl bg-white p-8 sm:w-[500px]">
          <div className="flex flex-col space-y-2 text-center text-dark">
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
              <span className="whitespace-nowrap text-4xl font-bold">
                Espaço Azul
              </span>
            </Link>
            <h1 className="text-3xl font-semibold tracking-tight">
              Bem-vindo de volta
            </h1>
            <p className="text-xl">
              Entre com seu número de registro e senha para entrar na sua conta
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  )
}
