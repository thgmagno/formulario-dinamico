import { withMask } from 'use-mask-input'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import clsx from 'clsx'

interface Props {
  width: 'sm' | 'md' | 'lg' | 'full'
}

export function InputCurrencyBRL({ width = 'full' }: Props) {
  return (
    <div
      className={clsx('grid gap-1', {
        'col-span-4 sm:col-span-2 lg:col-span-1': width === 'sm',
        'col-span-4 sm:col-span-2 lg:col-span-2': width === 'md',
        'col-span-4 sm:col-span-2 lg:col-span-3': width === 'lg',
        'col-span-4': width === 'full',
      })}
    >
      <Label>Valor</Label>
      <Input
        name="valor"
        placeholder="R$ 0,00"
        ref={withMask('brl-currency')}
      />
    </div>
  )
}
