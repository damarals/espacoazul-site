import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-blue-700 px-10 py-2">
      <Link className="relative h-16 w-16 shrink-0" href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        />
      </Link>
    </nav>
  )
}
