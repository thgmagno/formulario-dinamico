import { create } from 'zustand'

type FormState = {
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
  setValor: (campo: string, valor: string) => void
  reset: () => void
}

const veiculoInitialState = {
  tipo: '',
  modelo: '',
  versao: '',
  marca: '',
  ano: '',
  km: '',
  combustivel: '',
  cor: '',
  placa: '',
  valor: '',
  observacoes: '',
}

export const useVeiculoForm = create<FormState>((set) => ({
  ...veiculoInitialState,
  setValor: (campo, valor) => set((state) => ({ ...state, [campo]: valor })),
  reset: () => set({ ...veiculoInitialState }),
}))
