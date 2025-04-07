'use client'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { EletronicoForm } from '@/components/forms/produtos/EletronicoForm'
import { VeiculoForm } from '@/components/forms/produtos/VeiculoForm'
import { MenuContainer } from '@/components/common/MenuContainer'
export function Provider() {
  return (
    <MenuContainer>
      <Dialog>
        <DialogTrigger asChild>
          <button className="btn-menu">
            <span className="emoji">🌟</span>
            <span className="btn-label">Elogio</span>
          </button>
        </DialogTrigger>
        <VeiculoForm />
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <button className="btn-menu">
            <span className="emoji">🐞</span>
            <span className="btn-label">Bug</span>
          </button>
        </DialogTrigger>
        <EletronicoForm />
      </Dialog>
    </MenuContainer>
  )
}
