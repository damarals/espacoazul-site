import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'

export default function Error403() {
  return (
    <div className="relative flex h-screen items-center justify-center gap-4">
      <div className="flex max-w-[500px] flex-col items-center justify-center text-center">
        <span className="text-9xl font-bold">403</span>
        <span className="text-xl font-semibold">
          O acesso a esta página é restrito.
        </span>
        <p className="font-normal">
          Por favor, entre em contato com o administrador do sistema caso você
          acredite que isto seja um erro.
        </p>
      </div>
      <Link
        href="/"
        className={cn(
          buttonVariants(),
          'absolute left-4 top-5 inline-flex rounded-lg bg-black font-bold text-white',
        )}
      >
        <Icons.chevronLeft className="mr-2 h-6 w-6" />
        Página inicial
      </Link>
    </div>
  )
}
