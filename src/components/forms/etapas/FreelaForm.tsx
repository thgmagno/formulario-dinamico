'use client'

import {
  dadosPessoaisAction,
  experienciasAction,
  preferenciasAction,
} from '@/actions/etapas'
import React, { useActionState, useEffect } from 'react'
import { useFormulario } from '@/lib/stores/useFreelancerForm'
import { BaseForm } from '../BaseForm'
import { Input } from '@/components/fields/Input'
import { InputPhone } from '@/components/fields/InputPhone'
import clsx from 'clsx'
import { CheckCircle, Circle } from 'lucide-react'

export function FreelaForm() {
  const store = useFormulario()

  return (
    <>
      <EtapasHeader />
      {store.etapa === 1 && <DadosPessoaisForm />}
      {store.etapa === 2 && <ExperienciasForm />}
      {store.etapa === 3 && <PreferenciasForm />}
      {store.etapa === 4 && <PreVisualizacao />}
    </>
  )
}

function EtapasHeader() {
  const { etapa } = useFormulario()
  const etapas = [
    { id: 1, label: 'Dados Pessoais' },
    { id: 2, label: 'Experiências' },
    { id: 3, label: 'Preferências' },
    { id: 4, label: 'Pré-visualização' },
  ]

  return (
    <div className="grid w-full grid-cols-2 gap-2.5 text-sm md:grid-cols-4">
      {etapas.map((etapaItem) => {
        const isAtual = etapaItem.id === etapa
        const isConcluida = etapaItem.id < etapa

        return (
          <div
            key={etapaItem.id}
            className="flex items-center gap-2 md:justify-center"
          >
            <div
              className={clsx(
                'flex h-6 w-6 items-center justify-center rounded-full border-2',
                {
                  'bg-primary border-primary text-neutral-300': isAtual,
                  'bg-muted text-muted-foreground border-muted': !isAtual,
                  'border-green-500 bg-green-500 text-neutral-300': isConcluida,
                },
              )}
            >
              {isConcluida ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5" />
              )}
            </div>
            <span
              className={clsx(
                'min-w-fit cursor-default font-medium select-none',
                {
                  'text-primary': isAtual,
                  'text-muted-foreground': !isAtual && !isConcluida,
                  'text-green-600': isConcluida,
                },
              )}
            >
              {etapaItem.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function DadosPessoaisForm() {
  const store = useFormulario()
  const [formState, action, isPending] = useActionState(dadosPessoaisAction, {
    errors: {},
  })
  const isValidForm = Object.keys(formState.errors).length === 0

  useEffect(() => {
    if (formState.success) {
      store.setEtapa(2)
    }
  }, [formState.success])

  return (
    <BaseForm
      action={action}
      isPending={isPending}
      isValid={isValidForm}
      buttonLabel="Avançar"
    >
      {/* Nome */}
      <Input
        label="Nome"
        name="nome"
        placeholder="Insira seu nome"
        value={store.dados.nome || ''}
        onChange={(e) => store.atualizarDados({ nome: e.target.value })}
        errorMessage={formState.errors.nome}
        required
        width="full"
      />

      {/* Email */}
      <Input
        label="E-mail"
        name="email"
        placeholder="Endereço de e-mail"
        value={store.dados.email || ''}
        onChange={(e) => store.atualizarDados({ email: e.target.value })}
        errorMessage={formState.errors.email}
        required
        width="md"
      />

      {/* Telefone */}
      <InputPhone
        label="Telefone"
        name="telefone"
        placeholder="(99) 99999-9999"
        value={store.dados.telefone || ''}
        onChange={(e) => store.atualizarDados({ telefone: e.target.value })}
        errorMessage={formState.errors.telefone}
        required
        width="md"
      />
    </BaseForm>
  )
}

function ExperienciasForm() {
  const store = useFormulario()
  const [formState, action, isPending] = useActionState(experienciasAction, {
    errors: {},
  })
  const isValidForm = Object.keys(formState.errors).length === 0

  useEffect(() => {
    if (formState.success) {
      store.setEtapa(3)
    }
  }, [formState.success])

  return (
    <BaseForm
      action={action}
      isPending={isPending}
      isValid={isValidForm}
      buttonLabel="Avançar"
    >
      {store.dados.experiencias?.map((experiencia, index) => (
        <React.Fragment key={index}>
          <input type="text" />
        </React.Fragment>
      ))}
    </BaseForm>
  )
}

function PreferenciasForm() {
  const store = useFormulario()
  const [formState, action, isPending] = useActionState(preferenciasAction, {
    errors: {},
  })

  return (
    <div>
      <h1>FreelaForm</h1>
    </div>
  )
}

function PreVisualizacao() {
  return (
    <div>
      <h1>FreelaForm</h1>
    </div>
  )
}
