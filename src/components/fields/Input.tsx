import { Input as InputCN } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import clsx from 'clsx'

interface Props {
  label?: string
  name: string
  placeholder?: string
  width: 'sm' | 'md' | 'lg' | 'full'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string[]
  required?: boolean
}

export function Input({
  label,
  name,
  placeholder,
  width = 'full',
  value,
  onChange,
  errorMessage,
  required,
}: Props) {
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
        onChange={onChange}
      />
      {errorMessage && (
        <p className="text-destructive truncate text-xs">
          {errorMessage.join(', ')}
        </p>
      )}
    </div>
  )
}
