import { z } from 'zod'

// Eletrônico
export const EletronicoSchema = z.object({
  descricao: z
    .string()
    .min(1, { message: 'Descrição é obrigatória' })
    .max(100, 'Descrição ultrapassa o limite de 100 caracteres'),

  marca: z
    .string()
    .min(1, { message: 'Marca é obrigatória' })
    .max(50, 'Marca ultrapassa o limite de 50 caracteres'),

  categoria: z.string().min(1, { message: 'Selecione a categoria do produto' }),

  valor: z
    .string()
    .refine(
      (val) => {
        const num = Number(val.replace(/\D/g, '')) / 100
        return num >= 0.01
      },
      {
        message: 'Valor mínimo é R$ 0,01',
      },
    )
    .refine((val) => !isNaN(Number(val.replace(/\D/g, ''))), {
      message: 'Valor inválido',
    })
    .transform((val) => Number(val.replace(/\D/g, '')) / 100),

  voltagem: z.string().min(1, { message: 'Selecione a voltagem do produto' }),

  garantia: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: 'Garantia deve ser um número válido',
    })
    .transform((val) => Number(val)),

  estoque: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: 'Estoque deve ser um número válido',
    })
    .transform((val) => Number(val)),

  ficha: z
    .string()
    .max(500, 'Ficha técnica ultrapassa o limite de 500 caracteres'),
})

// Veículo
export const VeiculoSchema = z.object({
  tipo: z.string().min(1, { message: 'Tipo é obrigatório' }),

  modelo: z
    .string()
    .min(1, { message: 'Modelo é obrigatório' })
    .max(100, 'Modelo ultrapassa o limite de 100 caracteres'),

  versao: z
    .string()
    .min(1, { message: 'Versão é obrigatória' })
    .max(50, 'Versão ultrapassa o limite de 50 caracteres'),

  marca: z
    .string()
    .min(1, { message: 'Marca é obrigatória' })
    .max(50, 'Marca ultrapassa o limite de 50 caracteres'),

  ano: z
    .string()
    .min(1, { message: 'Ano é obrigatório' })
    .refine((val) => /^\d{4}$/.test(val), {
      message: 'Ano deve conter 4 dígitos',
    })
    .transform((val) => Number(val)),

  km: z
    .string()
    .min(1, { message: 'Quilometragem é obrigatória' })
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: 'Quilometragem inválida',
    })
    .transform((val) => Number(val)),

  combustivel: z.string().min(1, { message: 'Combustível é obrigatório' }),

  cor: z
    .string()
    .min(1, { message: 'Cor é obrigatória' })
    .max(30, 'Cor ultrapassa o limite de 30 caracteres'),

  placa: z
    .string()
    .min(7, { message: 'Placa é obrigatória' })
    .max(8, 'Placa inválida'),

  valor: z
    .string()
    .refine(
      (val) => {
        const num = Number(val.replace(/\D/g, '')) / 100
        return num >= 0.01
      },
      {
        message: 'Valor mínimo é R$ 0,01',
      },
    )
    .refine((val) => !isNaN(Number(val.replace(/\D/g, ''))), {
      message: 'Valor inválido',
    })
    .transform((val) => Number(val.replace(/\D/g, '')) / 100),

  observacoes: z
    .string()
    .max(500, 'Observações ultrapassam o limite de 500 caracteres')
    .optional(),
})
