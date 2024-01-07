import { getServerAuthSession } from '@/server/auth'

export async function currentUser() {
  const session = await getServerAuthSession()
  return session?.user
}
