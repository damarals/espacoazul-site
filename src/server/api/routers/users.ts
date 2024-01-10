import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { UserRole } from '@prisma/client'
import bcrypt from 'bcrypt'
import { z } from 'zod'

export const usersRouter = createTRPCRouter({
  getAllPatients: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
      where: {
        role: {
          role: UserRole.PATIENT,
        },
      },
    })
  }),
  getAllProfessionals: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
      where: {
        role: {
          role: UserRole.PROFESSIONAL,
        },
      },
    })
  }),
  getAllAdmins: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
      where: {
        role: {
          role: UserRole.ADMIN,
        },
      },
    })
  }),
  createPatient: protectedProcedure
    .input(
      z.object({
        usercode: z.number(),
        fullName: z.string(),
        shortName: z.string(),
        email: z.string(),
        password: z.string(),
        image: z.string(),
        role: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(input.password, salt)

      return ctx.db.user.create({
        data: {
          usercode: input.usercode,
          fullName: input.fullName,
          shortName: input.shortName,
          email: input.email,
          password: hashedPassword,
          salt,
          image: input.image,
          role: {
            connect: {
              role: UserRole.PATIENT,
            },
          },
        },
      })
    }),
  createProfessional: protectedProcedure
    .input(
      z.object({
        usercode: z.number(),
        fullName: z.string(),
        shortName: z.string(),
        email: z.string(),
        password: z.string(),
        image: z.string(),
        role: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(input.password, salt)

      return ctx.db.user.create({
        data: {
          usercode: input.usercode,
          fullName: input.fullName,
          shortName: input.shortName,
          email: input.email,
          password: hashedPassword,
          salt,
          image: input.image,
          role: {
            connect: {
              role: UserRole.PROFESSIONAL,
            },
          },
        },
      })
    }),
  createAdmin: protectedProcedure
    .input(
      z.object({
        usercode: z.number(),
        fullName: z.string(),
        shortName: z.string(),
        email: z.string(),
        password: z.string(),
        image: z.string(),
        role: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(input.password, salt)

      return ctx.db.user.create({
        data: {
          usercode: input.usercode,
          fullName: input.fullName,
          shortName: input.shortName,
          email: input.email,
          password: hashedPassword,
          salt,
          image: input.image,
          role: {
            connect: {
              role: UserRole.ADMIN,
            },
          },
        },
      })
    }),
})
