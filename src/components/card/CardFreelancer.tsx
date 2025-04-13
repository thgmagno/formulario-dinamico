import { FreelancerType } from '@/lib/types/produtos'
import { CardBase } from './CardBase'

interface Props {
  emoji: string
  item: FreelancerType
}

export function CardFreelancer({ item, emoji }: Props) {
  return (
    <CardBase id={item.id} title={`${item.nome} | ${item.email}`} emoji={emoji}>
      <p>{item.experiencias?.join(', ')}</p>
    </CardBase>
  )
}
