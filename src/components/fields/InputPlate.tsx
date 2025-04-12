import { useState } from 'react'
import { Select } from './Select'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function InputPlate({
  errorMessage,
  required,
}: {
  errorMessage?: string[]
  required?: boolean
}) {
  const [value, setValue] = useState('')
  const [padrao, setPadrao] = useState<'mercosul' | 'antiga'>('mercosul')

  const formatPlate = (input: string) => {
    const raw = input.toUpperCase().replace(/[^A-Z0-9]/g, '')
    let formatted = ''

    const pattern =
      padrao === 'mercosul'
        ? ['L', 'L', 'L', 'N', 'L', 'N', 'N']
        : ['L', 'L', 'L', 'N', 'N', 'N', 'N']

    let j = 0
    for (let i = 0; i < pattern.length && j < raw.length; ) {
      const char = raw[j]
      if (
        (pattern[i] === 'L' && /[A-Z]/.test(char)) ||
        (pattern[i] === 'N' && /[0-9]/.test(char))
      ) {
        formatted += char
        i++
      }
      j++
    }

    if (formatted.length > 3) {
      formatted = formatted.slice(0, 3) + ' ' + formatted.slice(3)
    }

    return formatted
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatPlate(e.target.value))
  }

  return (
    <>
      <Select
        width="sm"
        name="padraoPlaca"
        label="Formato placa"
        value={padrao}
        onChange={(e) => {
          setPadrao(e as 'mercosul' | 'antiga')
          setValue('')
        }}
        options={[
          { value: 'mercosul', label: 'Mercosul' },
          { value: 'antiga', label: 'Antigo (cinza)' },
        ]}
      />

      <div className="col-span-4 grid gap-1 sm:col-span-2 lg:col-span-1">
        <Label>
          Placa {required && <span className="text-destructive">*</span>}
        </Label>
        <Input
          name="placa"
          placeholder={padrao === 'mercosul' ? 'Ex: RIO 2A18' : 'Ex: ELD 2022'}
          value={value}
          onChange={handleChange}
        />
        {errorMessage && (
          <p className="text-destructive truncate text-xs">{errorMessage[0]}</p>
        )}
      </div>
    </>
  )
}
