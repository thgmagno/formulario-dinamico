import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import clsx from 'clsx'
import { useCallback } from 'react'

interface Props {
  width: 'sm' | 'md' | 'lg' | 'full'
  label?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string[]
  required?: boolean
}

export function InputCurrencyBRL({
  width = 'full',
  label,
  value,
  onChange,
  errorMessage,
  required,
}: Props) {
  const handleMaskedChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value.replace(/\D/g, '')
      const number = Number(rawValue) / 100

      const formatted = number.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })

      const event = {
        ...e,
        target: {
          ...e.target,
          value: formatted,
        },
      }

      onChange(event as React.ChangeEvent<HTMLInputElement>)
    },
    [onChange],
  )

  return (
    <div
      className={clsx('grid gap-1', {
        'col-span-4 sm:col-span-2 lg:col-span-1': width === 'sm',
        'col-span-4 sm:col-span-2 lg:col-span-2': width === 'md',
        'col-span-4 sm:col-span-2 lg:col-span-3': width === 'lg',
        'col-span-4': width === 'full',
      })}
    >
      <Label>
        {label || 'Valor'}{' '}
        {required && <span className="text-destructive">*</span>}
      </Label>
      <Input
        name="valor"
        placeholder="R$ 0,00"
        value={value}
        onChange={handleMaskedChange}
      />
      {errorMessage && (
        <p className="text-destructive truncate text-xs">{errorMessage[0]}</p>
      )}
    </div>
  )
}
