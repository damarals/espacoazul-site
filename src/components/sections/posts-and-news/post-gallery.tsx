'use client'

import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function PostGallery() {
  return (
    <Carousel
      className="h-full w-full flex-1 px-4"
      opts={{
        loop: false,
        align: 'start',
      }}
    >
      <CarouselContent className="h-[96%]">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-3/4 data-[isfirst=true]:md:ml-24 lg:basis-2/4 xl:basis-1/3 2xl:basis-1/4"
            data-isfirst={index === 0}
          >
            <div className="mx-1 flex h-full flex-col items-center gap-4 overflow-hidden rounded-xl pb-2 shadow-lg">
              <div className="relative min-h-[40%] w-full flex-1">
                <Image
                  src="/kids.jpg"
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex flex-col gap-3 p-8 pt-0 sm:pt-2">
                <span className="text-center text-xl font-semibold text-blue-dark sm:text-2xl">
                  Título da notícia
                </span>
                <span className="line-clamp-3 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  auctor, sapien quis aliquam ultricies, mauri s ante eleifend
                  arcu, eget efficitur quam nunc a neque. Sed auctor, sapien
                  quis aliquam ultricies, mauris ante eleifend arcu, eget
                  efficitur quam nunc a neque.
                </span>
                <Button className="mt-1 w-full rounded-xl bg-blue text-base font-extrabold text-white">
                  Ler mais
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-8 bg-white shadow-lg" />
      <CarouselNext className="right-8 bg-white shadow-lg" />
    </Carousel>
  )
}
