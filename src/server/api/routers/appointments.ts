import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'

export const appointmentsRouter = createTRPCRouter({
  getAllAppointments: protectedProcedure.query(({ ctx }) => {
    return ctx.db.appointment.findMany({
      include: {
        patient: true,
        professional: true,
      },
    })
  }),
})
