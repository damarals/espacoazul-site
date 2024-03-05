import { NextResponse } from 'next/server'
import { UserRole } from '@prisma/client'
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'

const ADMIN_ROUTE_PERMISSIONS: Record<string, UserRole[]> = {
  '/admin': ['PATIENT', 'PROFESSIONAL'],
  '/admin/pacientes': ['PATIENT', 'PROFESSIONAL'],
  '/admin/consultas': ['PATIENT', 'PROFESSIONAL'],
  '/admin/pagamentos': ['PATIENT', 'PROFESSIONAL'],
  '/admin/profissionais': ['PATIENT', 'PROFESSIONAL'],
  '/admin/administradores': ['PATIENT', 'PROFESSIONAL', 'ADMIN'],
}

type AdminRoute = keyof typeof ADMIN_ROUTE_PERMISSIONS

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const pathname = request.nextUrl.pathname as AdminRoute
    const role = request.nextauth.token?.role as UserRole | undefined

    if (pathname.startsWith('/admin') && role) {
      const allowedRoles = ADMIN_ROUTE_PERMISSIONS[pathname]
      if (allowedRoles?.includes(role)) {
        return NextResponse.rewrite(new URL('/403', request.url))
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
)

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: '/admin/:path*' }
