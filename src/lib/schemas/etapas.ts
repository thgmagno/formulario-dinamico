import { z } from 'zod'

// Dados pessoais
export const DadosPessoaisSchema = z.object({
  nome: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  telefone: z.string().min(1, { message: 'Telefone é obrigatório' }),
})

// Experiências
export const ExperienciasSchema = z.object({
  cargo: z.string().min(1, { message: 'Cargo é obrigatório' }),
  empresa: z.string().optional(),
  tecnologias: z.array(z.string()).optional(),
  periodo: z.string().min(1, { message: 'Período é obrigatório' }),
})

// Preferências
export const PreferenciasSchema = z.object({
  modeloTrabalho: z
    .string()
    .min(1, { message: 'Modelo de trabalho é obrigatório' }),
  tipoContrato: z
    .array(z.string())
    .min(1, { message: 'Tipo de contrato é obrigatório' }),
  valorHora: z.number().min(1, { message: 'Valor por hora é obrigatório' }),
  disponibilidade: z
    .number()
    .min(1, { message: 'Disponibilidade é obrigatória' }),
})
