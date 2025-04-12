import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
  isEmpty: boolean
  fallback: string[]
}

export function CardWrapper({ children, title, isEmpty, fallback }: Props) {
  return (
    <section className="my-4 flex w-full flex-col space-y-4 py-4">
      <h2 className="text-xl font-medium">{title}</h2>
      {isEmpty ? (
        <div className="text-muted-foreground bg-card rounded-lg p-6 md:text-center">
          {fallback.map((text) => (
            <p key={text} className="mb-1 first:font-bold">
              {text}
            </p>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">{children}</div>
      )}
    </section>
  )
}
