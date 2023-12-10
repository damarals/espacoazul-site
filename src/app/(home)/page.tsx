import Image from 'next/image'

import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className="z-20 mt-[100px] flex flex-1 flex-col items-center gap-7 px-6 text-center sm:px-12 md:mt-[190px] md:gap-14">
      <div className="flex max-w-lg flex-col items-center gap-4 text-primary-dark md:max-w-3xl">
        <h1 className="text-center font-serif text-5xl font-extrabold transition-all md:text-7xl">
          Lorem Ipsum is simply dummy text of the printing.
        </h1>
        <h2 className="text-xl font-normal transition-all md:text-3xl">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </h2>
      </div>
      <div className="flex flex-col items-center gap-4 transition-all md:flex-row">
        <Button className="rounded-full bg-white px-9 py-6 text-base font-extrabold text-primary-dark transition-all md:text-xl">
          Saiba mais
        </Button>
        <span className="hidden text-xl text-primary-dark md:block">ou</span>
        <Button className="rounded-full bg-blue px-9 py-6 text-base font-extrabold text-white transition-all md:text-xl">
          Entre em contato
        </Button>
      </div>
      <div className="relative w-full">
        <div className="absolute -top-4 left-1/2 h-[600px] w-[80vw] -translate-x-1/2 sm:top-8 sm:w-[440px] md:-top-10 md:left-[20%] md:h-[450px] md:w-[320px] md:-translate-x-1/3 lg:left-[15%] xl:left-[24%]">
          <Image
            src="/image.webp"
            fill
            className="object-contain"
            alt="criança brincando"
          />
        </div>
        <div className="absolute left-1/2 top-8 z-20 hidden h-[450px] w-[320px] -translate-x-1/2 lg:block">
          <Image
            src="/image (1).webp"
            fill
            className="object-contain"
            alt="criança brincando"
          />
        </div>
        <div className="absolute -top-10 right-[20%] z-20 hidden h-[450px] w-[320px] translate-x-1/3 md:block lg:right-[15%] xl:right-[24%]">
          <Image
            src="/image (2).webp"
            fill
            className="object-contain"
            alt="criança brincando"
          />
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <div className="bg-wave flex flex-1 flex-col">
      <Hero />
    </div>
  )
}
