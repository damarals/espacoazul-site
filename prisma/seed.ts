import { PrismaClient, UserRole } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const createRoles = Object.values(UserRole).map((role) =>
  prisma.role.create({
    data: { role },
  }),
)

const adminSalt = bcrypt.genSaltSync(10)
const createAdminUser = prisma.user.create({
  data: {
    usercode: 10001,
    fullName: 'Administrador',
    shortName: 'Admin',
    email: 'admin@gmail.com',
    image: 'https://github.com/shadcn.png',
    password: bcrypt.hashSync('ADMIN@projeto2023', adminSalt),
    salt: adminSalt,
    role: {
      connect: {
        role: UserRole.ADMIN,
      },
    },
  },
})

const userSalt = bcrypt.genSaltSync(10)
const createUsers = [
  prisma.user.create({
    data: {
      usercode: 10002,
      fullName: 'Rute Silva',
      shortName: 'Rute',
      email: 'rute@mail.com',
      image: '/avatar.svg',
      password: bcrypt.hashSync('RUTE@projeto2023', userSalt),
      salt: userSalt,
      role: {
        connect: {
          role: UserRole.STAFF,
        },
      },
    },
  }),
]

async function seedUsersTables() {
  // await prisma.$transaction([...createRoles, createAdminUser, ...createUsers])
  await prisma.$transaction([...createUsers])
}

async function nuke() {
  console.log('🚀 Nuking database records')
  return prisma.$transaction(async (prisma) => {
    await prisma.role.deleteMany()
    await prisma.user.deleteMany()
  })
}

async function seed() {
  console.log('🌱 Seeding database')
  await seedUsersTables()
}

async function main() {
  // await nuke()
  await seed()
}

main()
  .then(() => {
    console.log('✅ Database seeding completed')
  })
  .catch((e: Error) => {
    console.log(`❌ ${e.message}`)
  })
  .finally(() => {
    console.log('💀 Shutting down database connection')
    prisma.$disconnect()
  })
