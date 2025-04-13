import { z } from 'zod'

// Dados pessoais
export const DadosPessoaisSchema = z.object({
  nome: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  telefone: z.string().min(1, { message: 'Telefone é obrigatório' }),
})

// Experiências
export const ExperienciaSchema = z.object({
  cargo: z.string().min(1, 'Cargo é obrigatório'),
  empresa: z.string().min(1, 'Empresa é obrigatória'),
  tecnologias: z.string().min(1, 'Informe as tecnologias'),
  periodo: z.enum(['menos-1-ano', '1-3-anos', '3-5-anos', 'mais-5-anos']),
})

// Preferências
export const PreferenciasSchema = z.object({
  modeloTrabalho: z
    .string({ required_error: 'Modelo de trabalho é obrigatório' })
    .min(1, { message: 'Modelo de trabalho é obrigatório' }),
  tipoContrato: z
    .string({ required_error: 'Tipo de contrato é obrigatório' })
    .min(1, { message: 'Tipo de contrato é obrigatório' }),
  valorHora: z.coerce
    .number()
    .min(1, { message: 'Valor por hora é obrigatório' }),
  disponibilidade: z.coerce
    .number()
    .min(1, { message: 'Disponibilidade é obrigatória' }),
})
