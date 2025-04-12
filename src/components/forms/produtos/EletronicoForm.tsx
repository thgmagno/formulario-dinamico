'use client'

import { InputCurrencyBRL } from '@/components/fields/InputCurrencyBRL'
import { Input } from '@/components/fields/Input'
import { Select } from '@/components/fields/Select'
import { InputNumber } from '@/components/fields/InputNumber'
import { Textarea } from '@/components/fields/Textarea'
import { useActionState, useEffect } from 'react'
import { eletronicoAction } from '@/actions/produtos'
import { useEletronicoForm } from '@/lib/stores/useEletronicoForm'
import { BaseForm } from '../BaseForm'

export function EletronicoForm() {
  const [formState, action, isPending] = useActionState(eletronicoAction, {
    errors: {},
  })

  const { setValor, ...props } = useEletronicoForm()
  const isValidForm = Object.keys(formState.errors).length === 0

  useEffect(() => {
    if (isValidForm) {
      useEletronicoForm.getState().reset()
    }
  }, [formState.errors])

  return (
    <BaseForm action={action} isPending={isPending} isValid={isValidForm}>
      {/* Descrição */}
      <Input
        label="Descrição"
        name="descricao"
        placeholder="Ex: Smartphone Galaxy S20"
        value={props.descricao}
        onChange={(e) => setValor('descricao', e.target.value)}
        errorMessage={formState.errors.descricao}
        required
        width="md"
      />

      {/* Marca */}
      <Input
        label="Marca"
        name="marca"
        placeholder="Ex: Samsung, Apple, Xiaomi..."
        value={props.marca}
        onChange={(e) => setValor('marca', e.target.value)}
        errorMessage={formState.errors.marca}
        required
        width="sm"
      />

      {/* Categoria */}
      <Select
        label="Categoria"
        name="categoria"
        placeholder="Selecione"
        errorMessage={formState.errors.categoria}
        required
        width="sm"
        options={[
          { value: 'celular', label: 'Celular' },
          { value: 'notebook', label: 'Notebook' },
          { value: 'tablet', label: 'Tablet' },
          { value: 'outros', label: 'Outros' },
        ]}
      />

      {/* Valor */}
      <InputCurrencyBRL
        width="sm"
        value={props.valor}
        onChange={(e) => setValor('valor', e.target.value)}
        errorMessage={formState.errors.valor}
        required
      />

      {/* Voltagem */}
      <Select
        label="Voltagem"
        name="voltagem"
        placeholder="Selecione"
        errorMessage={formState.errors.voltagem}
        width="sm"
        required
        options={[
          { value: 'bivolt', label: 'Bivolt' },
          { value: '110', label: '110V' },
          { value: '220', label: '220V' },
        ]}
      />

      {/* Garantia (Meses) */}
      <InputNumber
        label="Garantia (Meses)"
        errorMessage={formState.errors.garantia}
        name="garantia"
        placeholder="Ex: 12"
        width="sm"
      />

      {/* Estoque */}
      <InputNumber
        label="Estoque"
        name="estoque"
        placeholder="Ex: 20"
        errorMessage={formState.errors.estoque}
        width="sm"
      />

      {/* Ficha técnica */}
      <Textarea
        label="Ficha técnica"
        name="ficha"
        placeholder="Ex: Tela AMOLED 6.2'', 8GB RAM, 128GB, Câmera Tripla..."
        value={props.ficha}
        onChange={(e) => setValor('ficha', e.target.value)}
        errorMessage={formState.errors.ficha}
      />
    </BaseForm>
  )
}
