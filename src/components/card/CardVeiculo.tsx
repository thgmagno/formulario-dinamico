import { VeiculoType } from '@/lib/types/produtos'
import { CardBase } from './CardBase'

interface Props {
  emoji: string
  item: VeiculoType
}

export function CardVeiculo({ item, emoji }: Props) {
  const preco = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(item.valor))

  const km = new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 0,
  }).format(Number(item.km))

  return (
    <CardBase
      id={item.id}
      title={`${item.tipo}: ${item.marca} ${item.modelo} ${item.versao} ${item.ano}`}
      emoji={emoji}
    >
      <p>{`${item.placa} | ${km} Km | ${item.cor} | ${preco}`}</p>
      <p>{item.observacoes}</p>
    </CardBase>
  )
}
