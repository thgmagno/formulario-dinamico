import { ItemBase } from '.'
import { Experiencia } from './etapas'

export type EletronicoType = ItemBase & {
  descricao: string
  marca: string
  categoria: string
  valor: string
  voltagem: string
  garantia: string
  estoque: string
  ficha: string
}

export type VeiculoType = ItemBase & {
  tipo: string
  modelo: string
  versao: string
  marca: string
  ano: string
  km: string
  combustivel: string
  cor: string
  placa: string
  valor: string
  observacoes: string
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
