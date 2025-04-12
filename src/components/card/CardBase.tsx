'use client'

import { removeItem } from '@/actions/session'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Trash2 } from 'lucide-react'
import { ReactNode, useRef, useState } from 'react'

interface Props {
  id: number
  title: string
  emoji: string
  children: ReactNode
}

export function CardBase({ id, title, emoji, children }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      ref={cardRef}
      className="bg-card hover:bg-card-foreground relative flex rounded-lg p-2.5 shadow-sm transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <CardOptions id={id} />}
      <div className="mr-2 min-w-fit text-2xl">{emoji}</div>
      <div className="flex-1 overflow-hidden text-sm">
        <h3 className="font-medium">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

function CardOptions({ id }: { id: number }) {
  return (
    <div className="absolute top-2 right-2 flex gap-3 rounded-lg border bg-neutral-700 px-2 py-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <form action={removeItem}>
              <button type="submit" className="flex">
                <input type="hidden" name="id" value={id} />
                <Trash2 className="text-destructive h-4 w-4" />
              </button>
            </form>
          </TooltipTrigger>
          <TooltipContent>
            <p>Excluir</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
