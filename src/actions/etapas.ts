'use server'

import {
  DadosPessoaisFormState,
  ExperienciasFormState,
  PreferenciasFormState,
} from '@/lib/states/etapas'
import {
  DadosPessoaisSchema,
  ExperienciaSchema,
  PreferenciasSchema,
} from '@/lib/schemas/etapas'
import { Experiencia, FreelancerType } from '@/lib/types/etapas'
import {
  PeriodOptions,
  TechnologyOptions,
  TypeContractOptions,
  WorkOptions,
} from '@/lib/options'
import { formatarDisponibilidade, formatarValorHora } from '@/lib/utils'
import { addItem } from './session'
import { revalidatePath } from 'next/cache'

export async function dadosPessoaisAction(
  formState: DadosPessoaisFormState,
  formData: FormData,
): Promise<DadosPessoaisFormState> {
  const parsed = DadosPessoaisSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  return { success: true, errors: {} }
}

export async function experienciasAction(
  formState: ExperienciasFormState,
  formData: FormData,
): Promise<ExperienciasFormState> {
  const experiencias: Experiencia[] = []
  const errors: {
    cargo?: string[]
    empresa?: string[]
    tecnologias?: string[]
    periodo?: string[]
  }[] = []

  let i = 0

  if (!formData.get('experiencias[0].cargo')) {
    return {
      errors: {
        _form:
          'Por favor, informe ao menos uma experiência antes de continuar.',
      },
      success: false,
    }
  }

  while (formData.get(`experiencias[${i}].cargo`) !== null) {
    const parsed = ExperienciaSchema.safeParse({
      cargo: formData.get(`experiencias[${i}].cargo`),
      empresa: formData.get(`experiencias[${i}].empresa`),
      tecnologias: formData.get(`experiencias[${i}].tecnologias`),
      periodo: formData.get(`experiencias[${i}].periodo`),
    })

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors

      errors[i] = {
        cargo: fieldErrors.cargo,
        empresa: fieldErrors.empresa,
        tecnologias: fieldErrors.tecnologias,
        periodo: fieldErrors.periodo,
      }
    } else {
      experiencias.push({
        cargo: parsed.data.cargo,
        empresa: parsed.data.empresa,
        tecnologias: parsed.data.tecnologias.split(','),
        periodo: parsed.data.periodo,
      })
    }

    i++
  }

  if (errors.length > 0) {
    return {
      errors: { experiencias: errors },
      success: false,
    } as ExperienciasFormState
  }

  return { success: true, errors: {} }
}

export async function preferenciasAction(
  formState: PreferenciasFormState,
  formData: FormData,
): Promise<PreferenciasFormState> {
  const parsed = PreferenciasSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  return { success: true, errors: {} }
}

export async function salvarFreela(formData: FormData) {
  const formatarDadosParaExibicao = (data: FreelancerType) => {
    const experiencias = data.experiencias?.map((exp) => ({
      cargo: exp.cargo,
      empresa: exp.empresa,
      periodo: PeriodOptions.find((p) => p.value === exp.periodo)?.label,
      tecnologias: exp.tecnologias?.map(
        (tec) => TechnologyOptions.find((t) => t.value === tec)?.label,
      ),
    }))

    const preferencias = data.preferencias && {
      modeloTrabalho: WorkOptions.find(
        (o) => o.value === data.preferencias?.modeloTrabalho,
      )?.label,
      tipoContrato: TypeContractOptions.find(
        (o) => o.value === data.preferencias?.tipoContrato,
      )?.label,
      valorHora: formatarValorHora(data.preferencias.valorHora),
      disponibilidade: formatarDisponibilidade(
        data.preferencias.disponibilidade,
      ),
    }

    return {
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      experiencias,
      preferencias,
    }
  }

  const dadosFormatados = formatarDadosParaExibicao(
    JSON.parse(formData.get('data') as string),
  )

  await addItem({ key: 'freelas', ...dadosFormatados })

  revalidatePath('/')
  return { success: true }
}
