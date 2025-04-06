'use client'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { ButtonWithEmoji } from '@/components/common/ButtonWithEmoji'
import { EletronicoForm } from '@/components/forms/produtos/EletronicoForm'
import { VeiculoForm } from '@/components/forms/produtos/VeiculoForm'

export function Provider() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <ButtonWithEmoji emoji="🚘" title="Veículo" />
        </DialogTrigger>
        <VeiculoForm />
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <ButtonWithEmoji emoji="📱" title="Eletrônico" />
        </DialogTrigger>
        <EletronicoForm />
      </Dialog>
    </div>
  )
}
