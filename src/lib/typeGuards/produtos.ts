import { ItemBase } from '../types'
import { EletronicoType, VeiculoType } from '../types/produtos'
import { FreelancerType } from '../types/etapas'

export function isEletronico(item: ItemBase): item is EletronicoType {
  return item.key === 'eletronicos'
}

export function isVeiculo(item: ItemBase): item is VeiculoType {
  return item.key === 'veiculos'
}

export function isFreelance(item: ItemBase): item is FreelancerType {
  return item.key === 'freelas'
}
