'use client'

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function BaseForm({
  title,
  description,
  action,
  isPending,
  isValid,
  children,
}: {
  title: string
  description: string
  action: (formData: FormData) => void
  isPending: boolean
  isValid: boolean
  children: React.ReactNode
}) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>

      <form action={action} className="grid grid-cols-4 items-start gap-4">
        {children}

        {!isValid && (
          <p className="bg-destructive/40 col-span-4 rounded-md p-2 text-sm">
            Por favor, corrija os campos destacados antes de continuar.
          </p>
        )}

        <DialogFooter className="col-span-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Aguarde...' : 'Cadastrar'}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
