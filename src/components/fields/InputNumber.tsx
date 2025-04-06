import { Input as InputCN } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  label?: string
  name: string
  placeholder?: string
  width: 'sm' | 'md' | 'lg' | 'full'
}

export function InputNumber({
  label,
  name,
  placeholder,
  width = 'full',
}: Props) {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/\D/g, '').slice(0, 3)
    setValue(onlyNumbers)
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
      {label && <Label>{label}</Label>}
      <InputCN
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        inputMode="numeric"
      />
    </div>
  )
}
