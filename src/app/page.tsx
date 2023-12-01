import Link from 'next/link'
import { getServerAuthSession } from '@/server/auth'

export default async function Home() {
  const session = await getServerAuthSession()
  console.log(session)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        {session && <span>Logado como {session.user?.shortName}</span>}
      </p>
      <Link
        href={session ? '/api/auth/signout' : '/api/auth/signin'}
        className="rounded-full bg-black/80 px-10 py-3 font-semibold text-white no-underline transition hover:bg-black/90"
      >
        {session ? 'Sair' : 'Entrar'}
      </Link>
    </main>
  )
}
