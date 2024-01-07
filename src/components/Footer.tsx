import Link from 'next/link'

import { Icons } from '@/components/icons'

export default function Footer() {
  return (
    <footer className="flex h-16 w-full items-center justify-between px-8 text-blue-dark md:px-8">
      <span className="text-sm font-medium">
        &copy;2023 - Projeto Espaço Azul
      </span>
      <div>
        <Link
          href="https://www.instagram.com/projetoespacoazul"
          target="_blank"
        >
          <Icons.instagram className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  )
}
