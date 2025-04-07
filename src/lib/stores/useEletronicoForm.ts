import { create } from 'zustand'

type FormState = {
  descricao: string
  marca: string
  categoria: string
  valor: string
  voltagem: string
  garantia: string
  estoque: string
  ficha: string
  setValor: (campo: string, valor: string) => void
  reset: () => void
}

const eletronicoInitialState = {
  descricao: '',
  marca: '',
  categoria: '',
  valor: '',
  voltagem: '',
  garantia: '',
  estoque: '',
  ficha: '',
}

export const useEletronicoForm = create<FormState>((set) => ({
  ...eletronicoInitialState,
  setValor: (campo, valor) => set((state) => ({ ...state, [campo]: valor })),
  reset: () => set({ ...eletronicoInitialState }),
}))
