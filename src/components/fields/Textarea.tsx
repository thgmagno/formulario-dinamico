import { Textarea as TextareaCN } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface Props {
  label?: string
  name: string
  placeholder?: string
}

export function Textarea({ label, name, placeholder }: Props) {
  return (
    <div className="col-span-4 grid gap-1">
      {label && <Label>{label}</Label>}
      <TextareaCN name={name} placeholder={placeholder} />
    </div>
  )
}
