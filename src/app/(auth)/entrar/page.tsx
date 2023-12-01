import { Metadata } from 'next'
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
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8',
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Voltar
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 rounded-md border px-4 py-6 shadow-md sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-20 w-24" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Bem-vindo de volta
          </h1>
          <p className="text-sm text-muted-foreground">
            Entre com seu número de registro e senha
            <br />
            para entrar na sua conta
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  )
}
