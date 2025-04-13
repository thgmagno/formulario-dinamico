export interface DadosPessoaisFormState {
  success?: boolean
  errors: {
    nome?: string[]
    email?: string[]
    telefone?: string[]
    _form?: string
  }
}

export interface ExperienciasFormState {
  success?: boolean
  errors: {
    experiencias?: {
      cargo?: string[]
      empresa?: string[]
      tecnologias?: string[]
      periodo?: string[]
    }[]
    _form?: string
  }
}

export interface PreferenciasFormState {
  success?: boolean
  errors: {
    modeloTrabalho?: string[]
    tipoContrato?: string[]
    valorHora?: string[]
    disponibilidade?: string[]
    _form?: string
  }
}
