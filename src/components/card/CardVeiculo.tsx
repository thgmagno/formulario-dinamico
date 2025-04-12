import { VeiculoType } from '@/lib/types/produtos'
import { CardBase } from './CardBase'

interface Props {
  emoji: string
  item: VeiculoType
}

export function CardVeiculo({ item, emoji }: Props) {
  return (
    <CardBase id={item.id} title={item.modelo} emoji={emoji}>
      <p>Ano: {item.ano}</p>
      <p>KM: {item.km}</p>
      <p>Cor: {item.cor}</p>
      <p>Valor: {item.valor}</p>
    </CardBase>
  )
}
