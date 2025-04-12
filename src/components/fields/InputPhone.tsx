'use client'

import { Input as InputCN } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import clsx from 'clsx'
import { useState, useEffect } from 'react'

interface Props {
  label?: string
  name: string
  placeholder?: string
  width?: 'sm' | 'md' | 'lg' | 'full'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string[]
  required?: boolean
}

export function InputPhone({
  label,
  name,
  placeholder = '(99) 99999-9999',
  width = 'full',
  value,
  onChange,
  errorMessage,
  required,
}: Props) {
  const [interno, setInterno] = useState('')

  useEffect(() => {
    setInterno(value)
  }, [value])

  const formatarTelefone = (valor: string) => {
    const numeros = valor.replace(/\D/g, '').slice(0, 11)
    if (numeros.length <= 10) {
      return numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    }
    return numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatado = formatarTelefone(e.target.value)
    setInterno(formatado)
    const eventoFormatado = {
      ...e,
      target: {
        ...e.target,
        value: formatado,
      },
    }
    onChange(eventoFormatado as React.ChangeEvent<HTMLInputElement>)
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
        <Label htmlFor={name}>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <InputCN
        id={name}
        name={name}
        placeholder={placeholder}
        value={interno}
        onChange={handleChange}
        inputMode="tel"
        maxLength={15}
      />
      {errorMessage && (
        <p className="text-destructive truncate text-xs">{errorMessage[0]}</p>
      )}
    </div>
  )
}
