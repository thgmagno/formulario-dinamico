import { Provider } from './provider'
import { getItems } from '@/actions/session'

import { isEletronico, isVeiculo } from '@/lib/typeGuards/produtos'
import { AppPage } from '@/components/common/AppPage'
import { Accordion } from '@/components/common/Accordion'

export default async function CadastroDeProdutos() {
  const items = await getItems()

  const veiculos = items.filter(isVeiculo)
  const eletronicos = items.filter(isEletronico)

  return (
    <AppPage pageTitle="Escolha o produto" showBackButton>
      <Provider />
      {veiculos.length > 0 && (
        <Accordion
          data={[
            { key: 'veiculos', label: 'Veículos cadastrados', data: veiculos },
          ]}
        />
      )}
      {eletronicos.length > 0 && (
        <Accordion
          data={[
            {
              key: 'eletronicos',
              label: 'Eletrônicos cadastrados',
              data: eletronicos,
            },
          ]}
        />
      )}
    </AppPage>
  )
}
