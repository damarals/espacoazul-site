export default function Location() {
  return (
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
  )
}
