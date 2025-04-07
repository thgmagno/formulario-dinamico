import { Textarea as TextareaCN } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface Props {
  label?: string
  name: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  errorMessage?: string[]
  required?: boolean
}

export function Textarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
  required,
}: Props) {
  return (
    <div className="col-span-4 grid gap-1">
      {label && (
        <Label>
          {label}
          {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      <TextareaCN
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
