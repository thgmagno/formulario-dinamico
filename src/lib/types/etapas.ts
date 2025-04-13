import { ItemBase } from '.'

export interface Experiencia {
  cargo: string
  empresa?: string
  tecnologias?: string[]
  periodo?: string
}

export type FreelancerType = ItemBase & {
  nome?: string
  email?: string
  telefone?: string
  experiencias?: Experiencia[]
  preferencias?: {
    modeloTrabalho?: string
    tipoContrato?: string
    valorHora?: string
    disponibilidade?: string
  }
}
