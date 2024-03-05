import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { z } from 'zod'

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      include: {
        author: {
          select: {
            fullName: true,
          },
        },
      },
    })
  }),
  getOne: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.post.findUnique({
        where: {
          slug: input.slug,
        },
        include: {
          author: {
            select: {
              fullName: true,
            },
          },
        },
      })
    }),
})
