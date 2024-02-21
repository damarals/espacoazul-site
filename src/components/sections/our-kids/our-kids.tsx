import Link from 'next/link'

import ImageGallery from './image-gallery'

export default function OurKids() {
  return (
    <div className="flex h-screen flex-col items-center gap-10 pb-12 pt-24">
      <h1 className="max-w-4xl px-4 text-center font-serif text-5xl font-semibold text-primary-dark">
        Nossas Crianças
      </h1>
      <ImageGallery />
      <p className="max-w-4xl px-4 text-center text-lg font-normal text-primary-dark">
        <span className="hidden max-w-4xl text-center text-lg font-normal text-primary-dark sm:inline-block">
          Compartilhe momentos de sua criança conosco!
        </span>{' '}
        Se seu filho(a) faz parte do Projeto Espaço Azul, você pode incluir a
        foto dele(a) acima. Preencha o formulário através deste{' '}
        <Link href="" className="font-medium underline">
          link
        </Link>
        .{' '}
        <span className="hidden max-w-4xl text-center text-lg font-normal text-primary-dark sm:inline-block">
          Juntos, celebramos a alegria e a beleza de cada jornada única.
        </span>
      </p>
    </div>
  )
}
