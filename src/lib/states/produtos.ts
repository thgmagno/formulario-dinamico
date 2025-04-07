export interface EletronicoFormState {
  errors: {
    descricao?: string[]
    marca?: string[]
    categoria?: string[]
    valor?: string[]
    voltagem?: string[]
    garantia?: string[]
    estoque?: string[]
    ficha?: string[]
    _form?: string
  }
}

export interface VeiculoFormState {
  errors: {
    tipo?: string[]
    modelo?: string[]
    versao?: string[]
    marca?: string[]
    ano?: string[]
    km?: string[]
    combustivel?: string[]
    cor?: string[]
    placa?: string[]
    valor?: string[]
    observacoes?: string[]
    _form?: string
  }
}
