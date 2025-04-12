'use client'

import { Button } from '@/components/ui/button'

export function BaseForm({
  action,
  isPending,
  isValid,
  children,
  buttonLabel,
}: {
  action: (formData: FormData) => void
  isPending: boolean
  isValid: boolean
  children: React.ReactNode
  buttonLabel?: string
}) {
  return (
    <form
      action={action}
      className="my-6 grid w-full grid-cols-4 items-start gap-4 rounded-lg bg-slate-900 p-5"
    >
      {children}

      {!isValid && (
        <p className="bg-destructive/40 col-span-4 rounded-md p-2 text-sm">
          Por favor, corrija os campos destacados antes de continuar.
        </p>
      )}

      <div className="col-span-4 flex w-full justify-end">
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Aguarde...' : buttonLabel || 'Cadastrar'}
        </Button>
      </div>
    </form>
  )
}
