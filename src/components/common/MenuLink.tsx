import Link from 'next/link'
import clsx from 'clsx'

export function MenuLink({
  href,
  emoji,
  label,
  developing,
}: {
  href: string
  emoji: string
  label: string
  developing?: boolean
}) {
  return (
    <Link
      href={developing ? '#' : href}
      className={clsx(
        'btn-menu',
        developing && 'pointer-events-none cursor-not-allowed opacity-50',
      )}
    >
      <span className="text-3xl md:text-4xl">{emoji}</span>
      <span className="mt-4 text-base font-medium md:text-lg">{label}</span>
      {developing && (
        <span className="mt-3 text-sm font-medium">Em desenvolvimento...</span>
      )}
    </Link>
  )
}
