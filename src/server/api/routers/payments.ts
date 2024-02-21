import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { UserRole } from '@prisma/client'

export const paymentsRouter = createTRPCRouter({
  getAllPatients: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
      where: {
        role: {
          role: UserRole.PATIENT,
        },
      },
      include: {
        payments: true,
      },
    })
  }),
})
