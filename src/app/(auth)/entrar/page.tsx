import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { UserAuthForm } from '@/components/UserAuthForm'

export const metadata: Metadata = {
  title: 'Entrar',
  description: 'Entrar na sua conta',
}

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 z-10 bg-white/70 md:left-8 md:top-8',
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Voltar
        </>
      </Link>
      <div className="absolute h-screen w-screen md:relative md:flex md:w-1/2">
        <Image
          src="/kids.jpg"
          alt="Logo do Projeto Espaço Azul"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 70vw"
        />
      </div>
      <div className="z-10 flex w-full items-center justify-center md:w-1/2 md:bg-[#01a5f5]">
        <div className="flex flex-col justify-center space-y-6 rounded-md bg-white/70 p-8 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="relative flex h-20 w-full justify-center">
              <Image
                src="/logo.svg"
                alt="Logo do Projeto Espaço Azul"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo de volta
            </h1>
            <p className="text-sm">
              Entre com seu número de registro e senha
              <br />
              para entrar na sua conta
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  )
}
