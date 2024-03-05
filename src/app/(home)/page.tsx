import Footer from '@/components/Footer'
import {
  Contact,
  Donate,
  Hero,
  Location,
  OurKids,
  PostAndNews,
} from '@/components/sections'

export default async function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <div className="z-10 bg-gray-50">
        <div className="bg-grainy flex flex-col">
          <OurKids />
          <PostAndNews />
          <Donate />
          <Location />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}
