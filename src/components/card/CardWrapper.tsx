import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
}

export function CardWrapper({ children, title }: Props) {
  return (
    <section className="my-4 flex w-full flex-col space-y-4 py-4">
      {title && <h2 className="text-xl font-medium">{title}</h2>}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">{children}</div>
    </section>
  )
}
