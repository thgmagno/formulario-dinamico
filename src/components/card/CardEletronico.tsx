import { EletronicoType } from '@/lib/types/produtos'
import { CardBase } from './CardBase'

interface Props {
  emoji: string
  item: EletronicoType
}

export function CardEletronico({ emoji, item }: Props) {
  const preco = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(item.valor))

  return (
    <CardBase
      id={item.id}
      title={`${item.categoria}: ${item.marca} ${item.descricao}`}
      emoji={emoji}
    >
      <p>{`${preco} | ${item.estoque} unidades em estoque`}</p>
      <p>{`Garantia: ${item.garantia} meses | Voltagem: ${item.voltagem}`}</p>
      <p>{item.ficha}</p>
    </CardBase>
  )
}
