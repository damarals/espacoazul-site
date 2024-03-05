import Image from 'next/image'
import { db } from '@/server/db'
import { api } from '@/trpc/server'

type Post = {
  slug: string
  title: string
  content: string
  date: Date
  cover: string
}

type PostProps = {
  params: { slug: string }
}

export default async function Post({ params }: PostProps) {
  console.log(params)
  const post = await api.posts.getOne.query(params)

  if (!post) return <div>Postagem não encontrada</div>
  return (
    <div className="flex flex-col gap-4 px-8 pt-28">
      <Image src={post.banner} alt={post.title} width={400} height={400} />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await db.post.findMany({
    select: {
      slug: true,
    },
  })

  return posts
}
