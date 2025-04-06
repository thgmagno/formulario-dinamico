import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function GoHome() {
  return (
    <Link href="/">
      <ArrowLeft />
    </Link>
  )
}
