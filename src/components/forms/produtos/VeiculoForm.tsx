'use client'

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/fields/Input'
import { Select } from '@/components/fields/Select'
import { InputNumber } from '@/components/fields/InputNumber'
import { Textarea } from '@/components/fields/Textarea'
import { InputCurrencyBRL } from '@/components/fields/InputCurrencyBRL'
import { InputPlate } from '@/components/fields/InputPlate'

export function VeiculoForm() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar Veículo</DialogTitle>
        <DialogDescription>
          Preencha as informações do veículo.
        </DialogDescription>
      </DialogHeader>
      <form action="" className="grid grid-cols-4 gap-4">
        {/* Modelo */}
        <Input
          label="Modelo"
          name="modelo"
          placeholder="Ex: Onix 1.0 Turbo"
          width="md"
        />

        {/* Marca */}
        <Input
          label="Marca"
          name="marca"
          placeholder="Ex: Chevrolet, Fiat, Honda..."
          width="sm"
        />

        {/* Tipo */}
        <Select
          label="Tipo"
          name="tipo"
          placeholder="Selecione"
          width="sm"
          options={[
            { value: 'carro', label: 'Carro' },
            { value: 'moto', label: 'Moto' },
            { value: 'caminhao', label: 'Caminhão' },
            { value: 'suv', label: 'SUV' },
            { value: 'outro', label: 'Outro' },
          ]}
        />

        {/* Ano */}
        <InputNumber label="Ano" name="ano" placeholder="Ex: 2020" width="sm" />

        {/* Quilometragem */}
        <InputNumber
          label="Quilometragem"
          name="km"
          placeholder="Ex: 35000"
          width="sm"
        />

        {/* Combustível */}
        <Select
          label="Combustível"
          name="combustivel"
          placeholder="Selecione"
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
          width="sm"
        />

        {/* Placa */}
        <InputPlate />

        {/* Valor */}
        <InputCurrencyBRL width="sm" />

        {/* Observações */}
        <Textarea
          label="Observações"
          name="observacoes"
          placeholder="Ex: Veículo com único dono, revisões em dia..."
        />

        <DialogFooter className="col-span-4">
          <Button type="submit">Cadastrar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
