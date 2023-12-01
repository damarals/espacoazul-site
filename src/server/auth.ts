import { env } from '@/env'
import { db } from '@/server/db'
import { loginSchema } from '@/server/schemas/auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { UserRole } from '@prisma/client'
import bcrypt from 'bcrypt'
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      usercode: number
      fullName: string
      shortName: string
      role: UserRole
    } & DefaultSession['user']
  }

  interface User {
    id: string
    usercode: number
    fullName: string
    shortName: string
    role: UserRole
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.usercode = user.usercode
        token.name = user.fullName
        token.shortName = user.shortName
        token.role = user.role
        token.email = user.email
      }
      return token
    },
    // session is a subset of JWT token
    session({ session, token }) {
      session.user.id = token.id as string
      session.user.usercode = token.usercode as number
      session.user.name = token.name as string
      session.user.shortName = token.shortName as string
      session.user.role = token.role as UserRole
      session.user.email = token.email as string
      return session
    },
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        usercode: { label: 'Usercode', type: 'number' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const res = await loginSchema.safeParseAsync(credentials)
        if (!res.success) throw new Error('Invalid Credentials')
        const cred = res.data

        const user = await db.user.findUnique({
          where: { usercode: Number(cred.usercode) },
          include: { role: true },
        })
        if (!user) throw new Error('Invalid Credentials')

        const isValidPassword = await bcrypt.compare(
          cred.password,
          user.password,
        )
        if (!isValidPassword) throw new Error('Invalid Credentials')

        return {
          id: user.id,
          usercode: user.usercode,
          role: user.role?.role as UserRole,
          fullName: user.fullName,
          shortName: user.shortName,
          email: user.email,
          image: user.image,
        }
      },
    }),
  ],
  session: { strategy: 'jwt', maxAge: 7 * 24 * 60 * 60 }, // session expires in 1 week
  secret: env.NEXTAUTH_SECRET,
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
