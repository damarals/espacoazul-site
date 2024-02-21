'use client'

import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const data = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatarSrc: '/avatar.svg',
    avatarFallback: 'OM',
    createdAt: new Date(2021, 8, 1),
  },
  {
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    avatarSrc: '/avatar.svg',
    avatarFallback: 'JL',
    createdAt: new Date(2024, 2, 4),
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    avatarSrc: '/avatar.svg',
    avatarFallback: 'IN',
    createdAt: new Date(2020, 3, 15),
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    avatarSrc: '/avatar.svg',
    avatarFallback: 'WK',
    createdAt: new Date(2023, 5, 23),
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    avatarSrc: '/avatar.svg',
    avatarFallback: 'SD',
    createdAt: new Date(2022, 7, 30),
  },
  {
    name: 'James Wilson',
    email: 'james.wilson@email.com',
    avatarSrc: '/avatar.svg',
    avatarFallback: 'JW',
    createdAt: new Date(2021, 9, 12),
  },
  {
    name: 'Sophia Johnson',
    email: 'sophia.johnson',
    avatarSrc: '/avatar.svg',
    avatarFallback: 'SJ',
    createdAt: new Date(2022, 11, 5),
  },
]

function useListSizeResponsive() {
  const [size, setSize] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setSize(
        Math.floor(
          (parseFloat(
            window.getComputedStyle(document.body as HTMLElement).height,
          ) -
            340) / // negative list height (all the other elements height)
            40, // row height
        ),
      )
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

export default function RecentPatients() {
  const listSize = useListSizeResponsive()
  return (
    <div className="flex flex-col gap-7">
      {data
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, listSize)
        .map((patient, index) => (
          <div className="flex items-center gap-4" key={index}>
            <Avatar className="hidden h-9 w-9 sm:block">
              <AvatarImage src={patient.avatarSrc} alt="Avatar" />
              <AvatarFallback>{patient.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium leading-none">{patient.name}</p>
              <p className="text-muted-foreground text-xs sm:text-sm">
                {patient.email}
              </p>
            </div>
            <div className="ml-auto flex flex-col items-end text-sm font-medium">
              {patient.createdAt.toLocaleDateString('pt-BR')}
              <span className="text-xs font-light sm:text-sm">
                ({formatDistanceToNow(patient.createdAt, { locale: ptBR })})
              </span>
            </div>
          </div>
        ))}
    </div>
  )
}
