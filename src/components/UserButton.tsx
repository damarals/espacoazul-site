import Image from 'next/image'
import { signOut } from 'next-auth/react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function UserButton({ name }: { name: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger className="h-fit items-end p-0">
            <div className="flex items-center gap-2">
              <div className="relative aspect-square h-8 overflow-hidden rounded-full bg-blue-500">
                <Image src="/avatar.svg" alt="" fill />
              </div>
              <div className="hidden flex-col items-start font-light sm:flex">
                <span className="text-xs font-normal">Olá,</span>
                <span className="-mt-1 text-sm font-medium">{name}</span>
              </div>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-col gap-2 bg-white p-2">
              <button
                className="w-[100px] text-left text-sm font-medium"
                onClick={() => signOut()}
              >
                Sair
              </button>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
