'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Slider as SliderCN } from '@/components/ui/slider'

interface Props {
  label?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string | string[]
  required?: boolean
  min?: number
  max?: number
  step?: number
  type?: 'currency' | 'hoursByWeek'
}

export function Slider({
  label,
  name,
  value,
  errorMessage,
  onChange,
  required,
  min = 0,
  max = 100,
  step = 1,
  type,
}: Props) {
  const [val, setVal] = useState([Number(value) || min])
  const msg = Array.isArray(errorMessage) ? errorMessage[0] : errorMessage

  const formatarValor = (n: number) => {
    if (type === 'currency') {
      return n.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      })
    }

    if (type === 'hoursByWeek') {
      return `${n} horas/semana`
    }

    return n
  }

  return (
    <div className="col-span-4 space-y-1 rounded-lg border px-4 py-2 md:col-span-2">
      {label && (
        <Label className="mb-3">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}

      <div className="flex items-center gap-4">
        <SliderCN
          name={name}
          value={val}
          onValueChange={setVal}
          min={min}
          max={max}
          step={step}
          className="flex-1"
          onChange={onChange}
        />
        <span className="text-muted-foreground mb-2 w-[120px] text-right text-sm">
          {formatarValor(val[0])}
        </span>
      </div>

      {msg && <p className="text-destructive truncate text-xs">{msg}</p>}
    </div>
  )
}
