'use server'

import {
  DadosPessoaisFormState,
  ExperienciasFormState,
  PreferenciasFormState,
} from '@/lib/states/etapas'
import {
  DadosPessoaisSchema,
  ExperienciasSchema,
  PreferenciasSchema,
} from '@/lib/schemas/etapas'

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
  const parsed = ExperienciasSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  return { errors: {} }
}

export async function preferenciasAction(
  formState: PreferenciasFormState,
  formData: FormData,
): Promise<PreferenciasFormState> {
  const parsed = PreferenciasSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  return { errors: {} }
}
