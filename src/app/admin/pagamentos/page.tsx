'use client'

import { useSearchParams } from 'next/navigation'

export default function AdminPayments() {
  const searchParams = useSearchParams()
  const action = searchParams.get('acao')
  return (
    <div className="flex flex-1 items-center justify-center">
      Pagamentos
      {action && <div>(Ação: {action})</div>}
    </div>
  )
}
