import PostGallery from './post-gallery'

export default function PostAndNews() {
  return (
    <div className="flex h-screen flex-col items-center gap-6 pb-12 pt-24 sm:gap-10">
      <h1 className="max-w-4xl px-4 text-center font-serif text-5xl font-semibold text-primary-dark">
        Notícias e Novidades
      </h1>
      <p className="max-w-4xl px-4 text-center text-lg font-normal text-primary-dark">
        Fique por dentro das últimas novidades, eventos e informações
        importantes
      </p>
      <PostGallery />
    </div>
  )
}
