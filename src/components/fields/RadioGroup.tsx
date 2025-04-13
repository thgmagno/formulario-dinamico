import { Label } from '@/components/ui/label'
import {
  RadioGroup as RadioGroupCN,
  RadioGroupItem,
} from '@/components/ui/radio-group'

interface Props {
  label?: string
  name: string
  value: string
  onChange: (value: string) => void
  errorMessage?: string[]
  required?: boolean
  options: { value: string; label: string }[]
}

export function RadioGroup({
  label,
  name,
  value,
  onChange,
  errorMessage,
  required,
  options,
}: Props) {
  const msg = Array.isArray(errorMessage) ? errorMessage[0] : errorMessage

  return (
    <div className="col-span-4 space-y-1 rounded-lg border px-4 py-2 md:col-span-2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}

      <RadioGroupCN
        key={name}
        name={name}
        value={value}
        onValueChange={onChange}
        className="my-4 flex flex-wrap gap-4"
      >
        {options.map((op) => (
          <div key={op.value} className="flex items-center space-x-2">
            <RadioGroupItem value={op.value} id={`${name}-${op.value}`} />
            <Label htmlFor={`${name}-${op.value}`}>{op.label}</Label>
          </div>
        ))}
      </RadioGroupCN>

      {msg && <p className="text-destructive text-xs">{msg}</p>}
    </div>
  )
}
