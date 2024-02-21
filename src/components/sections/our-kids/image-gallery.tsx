'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default function ImageGallery() {
  return (
    <Carousel
      className="h-full w-full flex-1"
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
      opts={{
        loop: true,
        align: 'center',
      }}
    >
      <CarouselContent className="h-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="basis-3/4 lg:basis-1/2">
            <div className="relative mx-0 flex h-full flex-col items-center justify-center rounded-xl bg-red-300 p-2">
              <Image
                src="/kids.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
