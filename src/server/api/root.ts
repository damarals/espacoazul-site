import { appointmentsRouter } from '@/server/api/routers/appointments'
import { paymentsRouter } from '@/server/api/routers/payments'
import { postsRouter } from '@/server/api/routers/posts'
import { usersRouter } from '@/server/api/routers/users'
import { createTRPCRouter } from '@/server/api/trpc'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  appointments: appointmentsRouter,
  payments: paymentsRouter,
  posts: postsRouter,
  users: usersRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
