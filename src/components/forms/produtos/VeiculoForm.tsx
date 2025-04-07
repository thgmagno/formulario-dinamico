'use client'

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog'
import { Input } from '@/components/fields/Input'
import { Select } from '@/components/fields/Select'
import { InputNumber } from '@/components/fields/InputNumber'
import { Textarea } from '@/components/fields/Textarea'
import { InputCurrencyBRL } from '@/components/fields/InputCurrencyBRL'
import { InputPlate } from '@/components/fields/InputPlate'
import { useActionState, useEffect } from 'react'
import { veiculoAction } from '@/actions/produtos'
import { useVeiculoForm } from '@/lib/stores/useVeiculoForm'
import { BaseForm } from '../BaseForm'

export function VeiculoForm() {
  const [formState, action, isPending] = useActionState(veiculoAction, {
    errors: {},
  })

  const { setValor, ...props } = useVeiculoForm()
  const isValidForm = Object.keys(formState.errors).length === 0

  useEffect(() => {
    if (isValidForm) {
      useVeiculoForm.getState().reset()
    }
  }, [formState.errors])

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription>.</DialogDescription>
      </DialogHeader>
      <BaseForm
        title="Cadastrar Veículo"
        description="Preencha as informações do veículo."
        action={action}
        isPending={isPending}
        isValid={isValidForm}
      >
        {/* Tipo */}
        <Select
          label="Tipo"
          name="tipo"
          placeholder="Selecione"
          errorMessage={formState.errors.tipo}
          width="sm"
          required
          options={[
            { value: 'carro', label: 'Carro' },
            { value: 'moto', label: 'Moto' },
            { value: 'caminhao', label: 'Caminhão' },
            { value: 'suv', label: 'SUV' },
            { value: 'outro', label: 'Outro' },
          ]}
        />

        {/* Modelo */}
        <Input
          label="Modelo"
          name="modelo"
          placeholder="Ex: Onix 1.0 Turbo"
          value={props.modelo}
          onChange={(e) => setValor('modelo', e.target.value)}
          errorMessage={formState.errors.modelo}
          required
          width="md"
        />

        {/* Versão */}
        <Input
          label="Versão"
          name="versao"
          placeholder="Ex: LT, LTZ, Premier..."
          value={props.versao}
          onChange={(e) => setValor('versao', e.target.value)}
          errorMessage={formState.errors.versao}
          required
          width="sm"
        />

        {/* Marca */}
        <Input
          label="Marca"
          name="marca"
          placeholder="Ex: Chevrolet, Fiat, Honda..."
          value={props.marca}
          onChange={(e) => setValor('marca', e.target.value)}
          errorMessage={formState.errors.marca}
          required
          width="sm"
        />

        {/* Ano */}
        <InputNumber
          label="Ano"
          name="ano"
          placeholder="Ex: 2020"
          errorMessage={formState.errors.ano}
          maxLength={4}
          width="sm"
        />

        {/* Quilometragem */}
        <InputNumber
          label="Quilometragem"
          name="km"
          placeholder="Ex: 35000"
          errorMessage={formState.errors.km}
          thousandsSeparator
          maxLength={12}
          width="sm"
        />

        {/* Combustível */}
        <Select
          label="Combustível"
          name="combustivel"
          placeholder="Selecione"
          errorMessage={formState.errors.combustivel}
          width="sm"
          options={[
            { value: 'gasolina', label: 'Gasolina' },
            { value: 'etanol', label: 'Etanol' },
            { value: 'diesel', label: 'Diesel' },
            { value: 'flex', label: 'Flex' },
            { value: 'eletrico', label: 'Elétrico' },
            { value: 'hibrido', label: 'Híbrido' },
          ]}
        />

        {/* Cor */}
        <Input
          label="Cor"
          name="cor"
          placeholder="Ex: Prata, Preto, Vermelho..."
          value={props.cor}
          onChange={(e) => setValor('cor', e.target.value)}
          errorMessage={formState.errors.cor}
          required
          width="sm"
        />

        {/* Placa */}
        <InputPlate
          value={props.placa}
          onChange={(e) => setValor('placa', e.target.value)}
          errorMessage={formState.errors.placa}
          required
        />

        {/* Valor */}
        <InputCurrencyBRL
          width="sm"
          value={props.valor}
          onChange={(e) => setValor('valor', e.target.value)}
          errorMessage={formState.errors.valor}
          required
        />

        {/* Observações */}
        <Textarea
          label="Observações"
          name="observacoes"
          placeholder="Ex: Veículo com único dono, revisões em dia..."
          value={props.observacoes}
          onChange={(e) => setValor('observacoes', e.target.value)}
          errorMessage={formState.errors.observacoes}
        />
      </BaseForm>
    </DialogContent>
  )
}
