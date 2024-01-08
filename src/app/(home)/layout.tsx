import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { currentUser } from '@/lib/auth'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { ImageGallery, PostGallery } from '@/components/gallery'
import Navbar from '@/components/Navbar'
import ParticlesBackground from '@/components/ParticlesBackground'

interface MainLayoutProps {
  children: ReactNode
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const user = await currentUser()
  return (
    <main className="bg-grainy flex flex-col">
      <div className="bg-radial flex min-h-screen flex-col">
        <Navbar user={user} />
        {children}
        <ParticlesBackground />
      </div>
      <div
        // z-10 to keep the particles (z-0) behind the content
        // bg-[#eff8ff] to keep the particles behind the background
        className="z-10 bg-[#eff8ff]"
      >
        <div
          // bg-grainy to keep the texture in the remaining sections
          className="bg-grainy flex flex-col"
        >
          {/* Our Kids */}
          <div className="flex h-screen flex-col items-center gap-10 pb-12 pt-24">
            <h1 className="max-w-4xl px-4 text-center font-serif text-5xl font-semibold text-primary-dark">
              Nossas Crianças
            </h1>
            <ImageGallery />
            <p className="max-w-4xl px-4 text-center text-lg font-normal text-primary-dark">
              <span className="hidden max-w-4xl text-center text-lg font-normal text-primary-dark sm:inline-block">
                Compartilhe momentos de sua criança conosco!
              </span>{' '}
              Se seu filho(a) faz parte do Projeto Espaço Azul, você pode
              incluir a foto dele(a) acima. Preencha o formulário através deste{' '}
              <Link href="" className="font-medium underline">
                link
              </Link>
              .{' '}
              <span className="hidden max-w-4xl text-center text-lg font-normal text-primary-dark sm:inline-block">
                Juntos, celebramos a alegria e a beleza de cada jornada única.
              </span>
            </p>
          </div>
          {/* Posts & News */}
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
          {/* Donate */}
          <div className="flex h-screen flex-col items-center gap-10 pb-12 pt-24">
            <h1 className="max-w-4xl text-center font-serif text-5xl font-semibold text-primary-dark">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h1>
          </div>
          {/* Location */}
          <div className="flex h-screen flex-col items-center gap-10 pb-12 pt-24">
            <h1 className="max-w-4xl text-center font-serif text-5xl font-semibold text-primary-dark">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h1>
            <div className="flex h-full w-full gap-8 px-8">
              <iframe
                className="hidden w-full lg:block lg:w-1/2"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!4v1704464527369!6m8!1m7!1sE7wnityzBlNEq7FoMEu0dA!2m2!1d-3.723947433876113!2d-38.65758680833927!3f69.34831334746002!4f-10.96318767377798!5f0.7820865974627469"
              />
              <iframe
                className="w-full lg:w-1/2"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?hl=pt&q=Projeto+Espaço+Azul+(APAAC)+-+Rua+Um+-+Padre+Romualdo,+Caucaia+-+CE,+Brasil&z=15&output=embed"
              />
            </div>
          </div>
          {/* Contact */}
          <div
            className="flex h-screen flex-col items-center gap-2 pb-4 pt-24 sm:gap-10 sm:pb-12"
            id="contato"
          >
            <h1 className="max-w-4xl text-center font-serif text-5xl font-semibold text-primary-dark">
              Fale conosco
            </h1>
            <div className="flex h-full w-full gap-8 px-8">
              <div className="w-full lg:w-1/2">
                <ContactForm />
              </div>
              <div className="relative hidden w-1/2 bg-red-300 lg:block">
                <Image
                  src="/kids.jpg"
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  )
}
