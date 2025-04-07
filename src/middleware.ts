import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
  const developing = [
    'cadastro-multi-etapas',
    'feedback-contextual',
    'planos-personalizados',
  ]

  const url = request.nextUrl

  if (developing.some((route) => url.pathname.includes(route))) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: [
    '/cadastro-multi-etapas/:path*',
    '/feedback-contextual/:path*',
    '/planos-personalizados/:path*',
  ],
}
