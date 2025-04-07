import { ReactNode } from 'react'

export function MenuContainer({ children }: { children: ReactNode }) {
  return (
    <section className="grid w-full gap-4 sm:grid-cols-2">{children}</section>
  )
}
