import { isEletronico, isVeiculo } from '@/lib/typeGuards/produtos'
import { ItemBase } from '@/lib/types'
import { CardEletronico } from './CardEletronico'
import { CardVeiculo } from './CardVeiculo'

export function CardItem({ item }: { item: ItemBase }) {
  if (isEletronico(item)) {
    return <CardEletronico item={item} emoji="🕹️" />
  }

  if (isVeiculo(item)) {
    return <CardVeiculo item={item} emoji="🚘" />
  }

  return null
}
