import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  pageTitle?: string
  showBackButton?: boolean
}

export function AppPage({ children, pageTitle, showBackButton }: Props) {
  return (
    <main className="mx-auto mt-20 mb-36 flex w-[90%] max-w-4xl flex-col items-center">
      <header className="mb-4 flex w-full items-center border-b pb-4">
        {showBackButton && (
          <Link href="/">
            <ChevronLeft />
          </Link>
        )}
        <h1 className="flex-1 text-center text-2xl">{pageTitle}</h1>
      </header>
      {children}
    </main>
  )
}
