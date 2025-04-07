import {
  Select as SelectCN,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import clsx from 'clsx'

interface Options {
  value: string
  label: string
}

interface Props {
  label?: string
  name: string
  options: Options[]
  placeholder?: string
  width: 'sm' | 'md' | 'lg' | 'full'
  value?: string
  onChange?: (value: string) => void
  errorMessage?: string[]
  required?: boolean
}

export function Select({
  label,
  name,
  options,
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
      <SelectCN name={name} value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectCN>
      {errorMessage && (
        <p className="text-destructive truncate text-xs">
          {errorMessage.join(', ')}
        </p>
      )}
    </div>
  )
}
