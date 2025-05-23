import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Experiencia, FreelancerType } from '../types/etapas'

type FormularioStore = {
  etapa: number
  dados: {
    id: number
    key: string
  } & FreelancerType
  setEtapa: (etapa: number) => void
  atualizarDados: (novos: Partial<FreelancerType>) => void
  resetar: () => void
  atualizarExperiencia: (index: number, novos: Partial<Experiencia>) => void
  adicionarExperiencia: () => void
  removerExperiencia: (index: number) => void
}

const initialState = {
  email: '',
  experiencias: [],
  nome: '',
  telefone: '',
  preferencias: {
    disponibilidade: '',
    modeloTrabalho: '',
    tipoContrato: '',
    valorHora: '',
  },
}

export const useFormulario = create<FormularioStore>()(
  persist(
    (set) => ({
      etapa: 1,
      dados: {
        id: Date.now(),
        key: 'freelance',
        ...initialState,
      },
      setEtapa: (etapa) => set({ etapa }),
      atualizarDados: (novos) =>
        set((state) => ({ dados: { ...state.dados, ...novos } })),
      resetar: () =>
        set({
          etapa: 1,
          dados: { id: Date.now(), key: 'freelance', ...initialState },
        }),
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
