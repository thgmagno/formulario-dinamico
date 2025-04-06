'use client'

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/dialog'
import { InputCurrencyBRL } from '@/components/fields/InputCurrencyBRL'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/fields/Input'
import { Select } from '@/components/fields/Select'
import { InputNumber } from '@/components/fields/InputNumber'
import { Textarea } from '@/components/fields/Textarea'

export function EletronicoForm() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar Eletrônico</DialogTitle>
        <DialogDescription>
          Preencha as informações do produto.
        </DialogDescription>
      </DialogHeader>
      <form action="" className="grid grid-cols-4 gap-4">
        {/* Nome */}
        <Input
          label="Nome"
          name="nome"
          placeholder="Ex: Smartphone Galaxy S20"
          width="md"
        />

        {/* Marca */}
        <Input
          label="Marca"
          name="marca"
          placeholder="Ex: Samsung, Apple, Xiaomi..."
          width="sm"
        />

        {/* Categoria */}
        <Select
          label="Categoria"
          name="categoria"
          placeholder="Selecione"
          width="sm"
          options={[
            { value: 'celular', label: 'Celular' },
            { value: 'notebook', label: 'Notebook' },
            { value: 'tablet', label: 'Tablet' },
            { value: 'outros', label: 'Outros' },
          ]}
        />

        {/* Valor */}
        <InputCurrencyBRL width="sm" />

        {/* Voltagem */}
        <Select
          label="Voltagem"
          name="voltagem"
          placeholder="Selecione"
          width="sm"
          options={[
            { value: 'bivolt', label: 'Bivolt' },
            { value: '110', label: '110V' },
            { value: '220', label: '220V' },
          ]}
        />

        {/* Garantia (Meses) */}
        <InputNumber
          label="Garantia (Meses)"
          name="garantia"
          placeholder="Ex: 12"
          width="sm"
        />

        {/* Estoque */}
        <InputNumber
          label="Estoque"
          name="estoque"
          placeholder="Ex: 20"
          width="sm"
        />

        {/* Ficha técnica */}
        <Textarea
          label="Ficha técnica"
          name="ficha"
          placeholder="Ex: Tela AMOLED 6.2'', 8GB RAM, 128GB, Câmera Tripla..."
        />

        <DialogFooter className="col-span-4">
          <Button type="submit">Cadastrar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
