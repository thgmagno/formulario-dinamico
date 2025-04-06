'use client'

import { ButtonWithEmoji } from '@/components/common/ButtonWithEmoji'

export function Provider() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ButtonWithEmoji emoji="🌐" title="Internet" />
      <ButtonWithEmoji emoji="📺" title="TV" />
    </div>
  )
}
