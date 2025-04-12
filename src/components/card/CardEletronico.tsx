import { EletronicoType } from '@/lib/types/produtos'
import { CardBase } from './CardBase'

interface Props {
  emoji: string
  item: EletronicoType
}

export function CardEletronico({ emoji, item }: Props) {
  return (
    <CardBase id={item.id} title={item.descricao} emoji={emoji}>
      <p>Marca: {item.marca}</p>
      <p>Categoria: {item.categoria}</p>
      <p>Valor: {item.valor}</p>
      <p>Voltagem: {item.voltagem}</p>
    </CardBase>
  )
}
