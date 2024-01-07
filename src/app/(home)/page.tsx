import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className="z-20 mt-[100px] flex flex-1 flex-col items-center gap-7 px-6 text-center sm:px-12 md:mt-[190px] md:gap-14">
      <div className="flex max-w-lg flex-col items-center gap-4 text-primary-dark md:max-w-3xl">
        <h1 className="text-center font-serif text-5xl font-extrabold transition-all md:text-7xl">
          Lorem Ipsum is simply dummy text.
        </h1>
        <h2 className="text-xl font-normal transition-all md:text-3xl">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin.
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
    </div>
  )
}

export default async function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
    </div>
  )
}
