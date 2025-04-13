import { isEletronico, isFreelance, isVeiculo } from '@/lib/typeGuards/produtos'
import { ItemBase } from '@/lib/types'
import { CardEletronico } from './CardEletronico'
import { CardVeiculo } from './CardVeiculo'
import { CardFreelancer } from './CardFreelancer'

export function CardItem({ item }: { item: ItemBase }) {
  if (isEletronico(item)) {
    return <CardEletronico item={item} emoji="🕹️" />
  }

  if (isVeiculo(item)) {
    return <CardVeiculo item={item} emoji="🚘" />
  }

  if (isFreelance(item)) {
    return <CardFreelancer item={item} emoji="👨🏻‍💻" />
  }

  return null
}
