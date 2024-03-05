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
    image: '/avatar.svg',
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
          role: UserRole.ADMIN,
        },
      },
    },
  }),
  prisma.user.create({
    data: {
      usercode: 10003,
      fullName: 'John Doe',
      shortName: 'John',
      email: 'johndoe@mail.com',
      image: '/avatar.svg',
      password: bcrypt.hashSync('JOHN@projeto2023', userSalt),
      salt: userSalt,
      role: {
        connect: {
          role: UserRole.PROFESSIONAL,
        },
      },
    },
  }),
  prisma.user.create({
    data: {
      usercode: 10004,
      fullName: 'Jane Doe',
      shortName: 'Jane',
      email: 'jane@mail.com',
      image: '/avatar.svg',
      password: bcrypt.hashSync('JANE@projeto2023', userSalt),
      salt: userSalt,
      role: {
        connect: {
          role: UserRole.PATIENT,
        },
      },
    },
  }),
]

const posts = [
  {
    title: 'Título da postagem 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, sapien quis aliquam ultricies, mauri s ante eleifend arcu, eget efficitur quam nunc a neque. Sed auctor, sapien quis aliquam ultricies, mauris ante eleifend arcu, eget efficitur quam nunc a neque.',
    published: true,
    banner: 'https://pub-23dab857c78448ae98d9436586ffc651.r2.dev/kids.jpg',
    authorCode: 10001,
  },
  {
    title: 'Título da postagem 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, sapien quis aliquam ultricies, mauri s ante eleifend arcu, eget efficitur quam nunc a neque. Sed auctor, sapien quis aliquam ultricies, mauris ante eleifend arcu, eget efficitur quam nunc a neque.',
    published: true,
    banner: 'https://pub-23dab857c78448ae98d9436586ffc651.r2.dev/kids.jpg',
    authorCode: 10001,
  },
  {
    title: 'Título da postagem 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, sapien quis aliquam ultricies, mauri s ante eleifend arcu, eget efficitur quam nunc a neque. Sed auctor, sapien quis aliquam ultricies, mauris ante eleifend arcu, eget efficitur quam nunc a neque.',
    published: true,
    banner: 'https://pub-23dab857c78448ae98d9436586ffc651.r2.dev/kids.jpg',
    authorCode: 10001,
  },
  {
    title: 'Título da postagem 4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, sapien quis aliquam ultricies, mauri s ante eleifend arcu, eget efficitur quam nunc a neque. Sed auctor, sapien quis aliquam ultricies, mauris ante eleifend arcu, eget efficitur quam nunc a neque.',
    published: true,
    banner: 'https://pub-23dab857c78448ae98d9436586ffc651.r2.dev/kids.jpg',
    authorCode: 10001,
  },
]

const createPosts = posts.map((post) => async () => {
  return prisma.$transaction(async (tx) => {
    const postCreated = await tx.post.create({
      data: {
        slug: post.title.toLowerCase().replace(/ /g, '-'),
        title: post.title,
        content: post.content,
        published: post.published,
        banner: post.banner,
        author: {
          connect: {
            usercode: post.authorCode,
          },
        },
      },
    })

    return tx.post.update({
      where: { id: postCreated.id },
      data: {
        slug: `${postCreated.slug}${postCreated.id}`,
      },
    })
  })
})

async function seedUsersTables() {
  await prisma.$transaction([...createRoles, createAdminUser, ...createUsers])
}

async function seedMainTables() {
  for (const createPost of createPosts) await createPost()
}

async function nuke() {
  console.log('🚀 Nuking database records')
  return prisma.$transaction(async (prisma) => {
    await prisma.post.deleteMany()
    // await prisma.role.deleteMany()
    // await prisma.user.deleteMany()
  })
}

async function seed() {
  console.log('🌱 Seeding database')
  // await seedUsersTables()
  await seedMainTables()
}

async function main() {
  await nuke()
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
