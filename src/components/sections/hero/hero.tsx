import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import ParticlesBackground from './particles-background'

export default function Hero() {
  return (
    <div className="bg-radial-left relative min-h-screen">
      <div className="flex h-screen w-full flex-col gap-12 overflow-hidden px-10 pt-[50px] sm:pt-[80px] md:flex-row md:pb-20 xl:px-16">
        {/* Info */}
        <div className="relative z-20 flex w-full flex-1 flex-col items-center justify-center gap-9 text-center text-primary-dark sm:gap-24 md:items-start md:gap-16 md:text-left lg:gap-24 lg:pr-10">
          {/* Text */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="hidden text-xl font-bold uppercase tracking-[0.45em] md:block 2xl:text-2xl">
              Sobre nós
            </h3>
            <div className="flex flex-col gap-5 sm:gap-10">
              <h1 className="max-w-2xl font-serif text-6xl font-extrabold sm:text-7xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <h2 className="text-lg font-normal sm:text-xl md:max-w-2xl md:text-lg lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat aliquam erat volutpat.
              </h2>
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Link
                  href="/#contato"
                  className={cn(
                    buttonVariants(),
                    'rounded-full bg-blue px-6 py-6 text-base font-extrabold text-white lg:px-9 lg:text-lg',
                  )}
                >
                  Entre em contato
                </Link>
                <span className="hidden text-base text-primary-dark xl:block xl:text-lg">
                  ou
                </span>
                <Link
                  href="/institucional"
                  className={cn(
                    buttonVariants(),
                    'rounded-full bg-white px-6 py-6 text-base font-extrabold text-primary-dark lg:px-9 lg:text-lg',
                  )}
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="flex w-full max-w-[300px] flex-row flex-wrap justify-between gap-4 sm:max-w-[460px] md:flex-col lg:max-w-[440px] xl:flex-row xl:gap-5 2xl:max-w-[510px]">
            <div className="flex flex-col items-center gap-1 md:flex-row md:items-end md:gap-2 xl:flex-col xl:items-start xl:gap-1">
              <span className="text-2xl font-extrabold md:text-2xl">+7</span>
              <span className="pb-[0] text-lg font-medium md:pb-[1px] md:text-base xl:pb-0 xl:text-lg">
                Anos de atuação
              </span>
            </div>
            <div className="hidden flex-col items-center gap-1 sm:flex md:flex-row md:items-end md:gap-2 xl:flex-col xl:items-start xl:gap-1">
              <span className="text-2xl font-extrabold md:text-2xl">+1000</span>
              <span className="pb-[0] text-lg font-medium md:pb-[1px] md:text-base xl:pb-0 xl:text-lg">
                Crianças atendidas
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 md:flex-row md:items-end md:gap-2 xl:flex-col xl:items-start xl:gap-1">
              <span className="text-2xl font-extrabold md:text-2xl">+100</span>
              <span className="pb-[0] text-lg font-medium md:pb-[1px] md:text-base xl:pb-0 xl:text-lg">
                Voluntários
              </span>
            </div>
          </div>
          {/* Shape */}
          <div className="absolute -left-[70px] -top-[80px] -z-10 hidden h-[calc(100vh-2.5rem)] w-[52vw] rounded-br-[160px] bg-white opacity-30 md:block lg:w-[54vw] xl:w-[48vw] xl:rounded-br-[200px] 2xl:rounded-br-[300px]" />
        </div>
        {/* Image */}
        <div className="z-20 hidden aspect-square w-full max-w-[800px] flex-1 grid-cols-1 gap-6 md:grid xl:grid-cols-2">
          <div className="relative">
            <Image
              src="/hero-4.png"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              className="z-10 rounded-3xl rounded-tl-[240px] border-[8px] border-yellow-500"
            />
            <div className="absolute left-0 top-0 aspect-square h-4 rounded-full bg-yellow-200" />
            <div className="absolute -bottom-[16px] -right-[20px] aspect-square h-11 rounded-full bg-yellow-500" />
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/hero-1.png"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              className="z-10 rounded-3xl border-[8px] border-blue-500 bg-blue-300"
            />
            <div className="absolute -left-[30px] -top-[5px] aspect-square h-4 rounded-full bg-blue-500" />
            <div className="absolute -right-[50px] -top-[60px] aspect-square h-40 rounded-full bg-blue-200" />
          </div>
          <div className="relative hidden xl:block">
            <Image
              src="/hero-2.png"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-3xl border-[8px] border-red-500 bg-red-300"
            />
            <div className="absolute -left-[60px] bottom-0 aspect-square h-10 rounded-full bg-red-400" />
          </div>
          <div className="relative hidden xl:block">
            <Image
              src="/hero-3.png"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-full border-[8px] border-emerald-600 bg-emerald-300"
            />
            <div className="absolute -top-[2px] left-[10px] aspect-square h-4 rounded-full bg-emerald-500" />
          </div>
        </div>
      </div>
      {/* Shape */}
      <div className="absolute -top-1 right-0 z-10 hidden h-screen w-[340px] bg-[url('/hero-lines.svg')] bg-no-repeat sm:block" />
      <ParticlesBackground />
    </div>
  )
}
