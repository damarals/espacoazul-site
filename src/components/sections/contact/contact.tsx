import Image from 'next/image'

import ContactForm from './contact-form'

export default function Contact() {
  return (
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
          <Image src="/kids.jpg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  )
}
