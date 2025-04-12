import { Input as InputCN } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  label?: string
  name: string
  placeholder?: string
  width: 'sm' | 'md' | 'lg' | 'full'
  errorMessage?: string[]
  required?: boolean
  maxLength?: number
  thousandsSeparator?: boolean
}

export function InputNumber({
  label,
  name,
  placeholder,
  width = 'full',
  errorMessage,
  required,
  maxLength = 3,
  thousandsSeparator,
}: Props) {
  const [value, setValue] = useState<string>('')

  const formatWithSeparator = (val: string) => {
    const numeric = val.replace(/\D/g, '').slice(0, maxLength)
    if (!thousandsSeparator) return numeric
    return Number(numeric).toLocaleString('pt-BR')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, maxLength)
    setValue(formatWithSeparator(raw))
  }

  return (
    <div
      className={clsx('grid gap-1', {
        'col-span-4 sm:col-span-2 lg:col-span-1': width === 'sm',
        'col-span-4 sm:col-span-2 lg:col-span-2': width === 'md',
        'col-span-4 sm:col-span-2 lg:col-span-3': width === 'lg',
        'col-span-4': width === 'full',
      })}
    >
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <InputCN
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        inputMode="numeric"
      />
      {errorMessage && (
        <p className="text-destructive truncate text-xs">{errorMessage[0]}</p>
      )}
    </div>
  )
}
