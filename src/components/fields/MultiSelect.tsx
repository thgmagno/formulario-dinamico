'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Checkbox } from '@/components/ui/checkbox'
import clsx from 'clsx'
import { Label } from '../ui/label'

interface Props {
  label?: string
  name: string
  width: 'sm' | 'md' | 'lg' | 'full'
  errorMessage?: string | string[]
  required?: boolean
  options: { value: string; label: string }[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MultiSelect({
  name,
  label,
  options,
  width,
  errorMessage,
  required,
  value,
  onChange,
}: Props) {
  const [selecionados, setSelecionados] = useState<string[]>([])

  useEffect(() => {
    setSelecionados(value ? value.split(',') : [])
  }, [value])

  const toggleValor = (val: string) => {
    const atualizado = selecionados.includes(val)
      ? selecionados.filter((v) => v !== val)
      : [...selecionados, val]

    setSelecionados(atualizado)

    const eventoFake = {
      target: {
        name,
        value: atualizado.join(','),
      },
    } as React.ChangeEvent<HTMLInputElement>

    onChange(eventoFake)
  }

  const labelsSelecionadas = options
    .filter((op) => selecionados.includes(op.value))
    .map((op) => op.label)
    .join(', ')

  const msg = Array.isArray(errorMessage) ? errorMessage[0] : errorMessage

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

      <Popover>
        <PopoverTrigger asChild>
          <Input
            readOnly
            value={labelsSelecionadas || 'Selecione opções'}
            className="w-full cursor-pointer text-start text-sm"
          />
        </PopoverTrigger>

        <PopoverContent className="p-0">
          <Command>
            <CommandGroup>
              {options.map((op) => (
                <CommandItem
                  key={op.value}
                  onSelect={() => toggleValor(op.value)}
                  className="flex items-center justify-between"
                >
                  {op.label}
                  <Checkbox checked={selecionados.includes(op.value)} />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      <input type="hidden" name={name} value={selecionados.join(',')} />

      {msg && <p className="text-destructive truncate text-xs">{msg}</p>}
    </div>
  )
}
