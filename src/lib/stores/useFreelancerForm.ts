import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Experiencia } from '../types/etapas'

type DadosFormulario = {
  nome?: string
  email?: string
  telefone?: string
  experiencias?: Experiencia[]
  preferencias?: {
    modelo_trabalho?: string
    tipo_contrato?: string[]
    valor_hora?: number
    disponibilidade?: number
  }
}

type FormularioStore = {
  etapa: number
  dados: DadosFormulario
  setEtapa: (etapa: number) => void
  atualizarDados: (novos: Partial<DadosFormulario>) => void
  resetar: () => void
  atualizarExperiencia: (index: number, novos: Partial<Experiencia>) => void
  adicionarExperiencia: () => void
  removerExperiencia: (index: number) => void
}

export const useFormulario = create<FormularioStore>()(
  persist(
    (set) => ({
      etapa: 1,
      dados: {},
      setEtapa: (etapa) => set({ etapa }),
      atualizarDados: (novos) =>
        set((state) => ({ dados: { ...state.dados, ...novos } })),
      resetar: () => set({ etapa: 1, dados: {} }),
      atualizarExperiencia: (index: number, novos: Partial<Experiencia>) =>
        set((state) => ({
          dados: {
            ...state.dados,
            experiencias: state.dados.experiencias?.map((exp, i) =>
              i === index ? { ...exp, ...novos } : exp,
            ),
          },
        })),
      adicionarExperiencia: () =>
        set((state) => ({
          dados: {
            ...state.dados,
            experiencias: [...(state.dados.experiencias || []), { cargo: '' }],
          },
        })),
      removerExperiencia: (index: number) =>
        set((state) => ({
          dados: {
            ...state.dados,
            experiencias: state.dados.experiencias?.filter(
              (_, i) => i !== index,
            ),
          },
        })),
    }),
    {
      name: 'formulario-freela',
    },
  ),
)
