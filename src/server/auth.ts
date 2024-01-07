import { env } from '@/env'
import { db } from '@/server/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { UserRole } from '@prisma/client'
import bcrypt from 'bcrypt'
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { userAuthSchema } from '@/lib/validations/auth'

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
    async jwt({ token }) {
      if (!token.sub) return token

      const user = await db.user.findUnique({
        where: { id: token.sub },
        include: { role: true },
      })

      if (!user) return token

      token.usercode = user.usercode
      token.name = user.fullName
      token.shortName = user.shortName
      token.email = user.email
      token.image = user.image
      token.role = user.role?.role as UserRole

      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.usercode = token.usercode as number
        session.user.name = token.name
        session.user.shortName = token.shortName as string
        session.user.email = token.email
        session.user.image = token.image as string
        if (token.sub) session.user.id = token.sub
        if (token.role) session.user.role = token.role as UserRole
      }

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
        const res = await userAuthSchema.safeParseAsync(credentials)
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
  pages: {
    signIn: '/entrar',
  },
  session: { strategy: 'jwt', maxAge: 7 * 24 * 60 * 60 }, // session expires in 1 week
  secret: env.NEXTAUTH_SECRET,
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
