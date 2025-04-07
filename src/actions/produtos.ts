'use server'

import { EletronicoSchema, VeiculoSchema } from '@/lib/schemas/produtos'
import { EletronicoFormState, VeiculoFormState } from '@/lib/states/produtos'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { addItem } from './session'

export async function eletronicoAction(
  formState: EletronicoFormState,
  formData: FormData,
): Promise<EletronicoFormState> {
  const parsed = EletronicoSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  try {
    await addItem({ key: 'eletronicos', ...parsed.data })
  } catch {
    return {
      errors: { _form: 'Falha ao conectar-se ao servidor' },
    }
  }

  revalidatePath('/')
  redirect('/cadastro-de-produtos')
}

export async function veiculoAction(
  formState: VeiculoFormState,
  formData: FormData,
): Promise<VeiculoFormState> {
  const parsed = VeiculoSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  try {
    await addItem({ key: 'veiculos', ...parsed.data })
  } catch {
    return {
      errors: { _form: 'Falha ao conectar-se ao servidor' },
    }
  }

  revalidatePath('/')
  redirect('/cadastro-de-produtos')
}
