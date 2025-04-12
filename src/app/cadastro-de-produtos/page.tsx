import { getItems } from '@/actions/session'

import { isEletronico, isVeiculo } from '@/lib/typeGuards/produtos'
import { AppPage } from '@/components/common/AppPage'
import { CardWrapper } from '@/components/card/CardWrapper'
import { CardItem } from '@/components/card/CardItem'
import Link from 'next/link'

export default async function CadastroDeProdutos() {
  const items = await getItems()

  const veiculos = items.filter(isVeiculo)
  const eletronicos = items.filter(isEletronico)
  const produtos = [...veiculos, ...eletronicos]

  return (
    <AppPage pageTitle="Escolha o produto" showBackButton>
      <div className="grid w-full grid-cols-2 gap-4">
        <Link
          href="/cadastro-de-produtos/veiculo"
          className="btn-menu bg-card hover:bg-card-foreground"
        >
          <span className="emoji">🚘</span>
          <span className="btn-label">Veículo</span>
        </Link>
        <Link
          href="/cadastro-de-produtos/eletronico"
          className="btn-menu bg-card hover:bg-card-foreground"
        >
          <span className="emoji">📱</span>
          <span className="btn-label">Eletrônico</span>
        </Link>
      </div>
      <CardWrapper
        title="Produtos cadastrados"
        isEmpty={produtos.length === 0}
        fallback={[
          'Nenhum produto cadastrado no momento.',
          'Que tal adicionar alguns produtos para experimentar as validações dos formulários?',
        ]}
      >
        {produtos.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </CardWrapper>
    </AppPage>
  )
}
