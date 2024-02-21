'use client'

import { HTMLAttributes, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'
import { userAuthSchema } from '@/lib/validations/auth'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>

type FormData = z.infer<typeof userAuthSchema>

export default function UserAuthForm({ className }: UserAuthFormProps) {
  const router = useRouter()
  const loginForm = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      usercode: '',
      password: '',
    },
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const searchParams = useSearchParams()

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn('credentials', {
      usercode: data.usercode,
      password: data.password,
      redirect: false,
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: 'Algo deu errado.',
        description:
          'Sua solicitação falhou. Por favor, verifique seu número de registro e senha.',
        variant: 'destructive',
      })
    }

    router.push(searchParams?.get('from') ?? '/')
    router.refresh()
  }

  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(onSubmit)}
        className={cn('flex flex-col gap-8', className)}
      >
        <div className="flex flex-col gap-3">
          <FormField
            control={loginForm.control}
            name="usercode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Número de Registro</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Número de Registro"
                    type="number"
                    className="text-lg"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Senha</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Senha"
                    type="password"
                    className="text-lg"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <button
          className={cn(
            buttonVariants(),
            'bg-blue text-lg font-medium text-white',
          )}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Icons.spinner
                className="mr-1 h-5 w-5 animate-spin"
                strokeWidth={2.4}
              />
              Autenticando...
            </>
          ) : (
            <>
              Entrar
              <Icons.chevronRight className="ml-1 h-5 w-5" strokeWidth={2.4} />
            </>
          )}
        </button>
      </form>
    </Form>
  )
}
