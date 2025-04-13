'use client'

import {
  dadosPessoaisAction,
  experienciasAction,
  preferenciasAction,
  salvarFreela,
} from '@/actions/etapas'
import React, { useActionState, useEffect, useTransition } from 'react'
import { useFormulario } from '@/lib/stores/useFreelancerForm'
import { BaseForm } from '../BaseForm'
import { Input } from '@/components/fields/Input'
import { InputPhone } from '@/components/fields/InputPhone'
import clsx from 'clsx'
import { CheckCircle, Circle } from 'lucide-react'
import { Experiencia } from '@/lib/types/etapas'
import { Select } from '@/components/fields/Select'
import MultiSelect from '@/components/fields/MultiSelect'
import { RadioGroup } from '@/components/fields/RadioGroup'
import { Slider } from '@/components/fields/Slider'
import {
  PeriodOptions,
  TechnologyOptions,
  TypeContractOptions,
  WorkOptions,
} from '@/lib/options'
import { Button } from '@/components/ui/button'
import { formatarDisponibilidade, formatarValorHora } from '@/lib/utils'
import { useRouter } from 'next/navigation'

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
    <div className="grid w-full grid-cols-2 gap-2.5 rounded-lg border p-5 text-sm md:grid-cols-4">
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
    <BaseForm action={action} isPending={isPending} isValid={isValidForm}>
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

  useEffect(() => {
    if (formState.success) {
      store.setEtapa(3)
    }
  }, [formState.success])

  return (
    <BaseForm action={action} isPending={isPending} isValid={true}>
      {store.dados.experiencias?.map((exp, index) => (
        <ExperienciaItem
          key={index}
          index={index}
          experiencia={exp}
          onChange={(nova: Experiencia) =>
            store.atualizarExperiencia(index, nova)
          }
          errors={formState.errors.experiencias?.[index]}
        />
      ))}

      {formState.errors._form && (
        <p className="bg-destructive/40 col-span-4 rounded-md p-2 text-center text-sm">
          {formState.errors._form}
        </p>
      )}

      <button
        type="button"
        onClick={() => {
          store.adicionarExperiencia()
        }}
        className="col-span-4 mt-4 rounded-lg border p-2 text-sm hover:text-blue-500"
      >
        + Adicionar experiência
      </button>
    </BaseForm>
  )
}

function ExperienciaItem({
  index,
  experiencia,
  errors,
  onChange,
}: {
  index: number
  experiencia: Experiencia
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any
  onChange: (exp: Experiencia) => void
}) {
  const store = useFormulario()

  return (
    <div className="col-span-4 grid w-full grid-cols-2 items-start gap-4 rounded-lg border p-2.5 text-sm md:grid-cols-4">
      {/* Cargo */}
      <Input
        label="Cargo"
        name={`experiencias[${index}].cargo`}
        value={experiencia.cargo || ''}
        onChange={(e) => onChange({ ...experiencia, cargo: e.target.value })}
        errorMessage={errors?.cargo?.[0]}
        required
        width="md"
      />

      {/* Empresa */}
      <Input
        label="Empresa"
        name={`experiencias[${index}].empresa`}
        value={experiencia.empresa || ''}
        onChange={(e) => onChange({ ...experiencia, empresa: e.target.value })}
        errorMessage={errors?.empresa?.[0]}
        required
        width="md"
      />

      {/* Tecnologias */}
      <MultiSelect
        label="Tecnologias"
        name={`experiencias[${index}].tecnologias`}
        value={experiencia.tecnologias?.join(',') || ''}
        onChange={(e) =>
          onChange({
            ...experiencia,
            tecnologias: e.target.value.split(',').map((t) => t.trim()),
          })
        }
        options={TechnologyOptions}
        errorMessage={errors?.tecnologias?.[0]}
        required
        width="md"
      />

      {/* Período */}
      <Select
        label="Período"
        name={`experiencias[${index}].periodo`}
        value={experiencia.periodo || 'menos-1-ano'}
        onChange={(e) => onChange({ ...experiencia, periodo: e })}
        options={PeriodOptions}
        errorMessage={errors?.periodo?.[0]}
        required
        width="md"
      />

      <button
        type="button"
        onClick={() => store.removerExperiencia(index)}
        className="text-destructive col-span-4 ml-auto self-start text-sm"
      >
        Remover
      </button>
    </div>
  )
}

function PreferenciasForm() {
  const store = useFormulario()
  const [formState, action, isPending] = useActionState(preferenciasAction, {
    errors: {},
  })

  useEffect(() => {
    if (formState.success) {
      store.setEtapa(4)
    }
  }, [formState.success])

  return (
    <BaseForm action={action} isPending={isPending} isValid={true}>
      {/* Modelo de trabalho */}
      <RadioGroup
        name="modeloTrabalho"
        value={store.dados.preferencias?.modeloTrabalho || ''}
        onChange={(val) =>
          store.atualizarDados({
            preferencias: {
              ...store.dados.preferencias,
              modeloTrabalho: val,
            },
          })
        }
        options={WorkOptions}
        label="Modelo de trabalho"
        errorMessage={formState.errors.modeloTrabalho}
        required
      />

      {/* Tipo de contrato */}
      <RadioGroup
        name="tipoContrato"
        value={store.dados.preferencias?.tipoContrato || ''}
        onChange={(val) =>
          store.atualizarDados({
            preferencias: {
              ...store.dados.preferencias,
              tipoContrato: val,
            },
          })
        }
        options={TypeContractOptions}
        label="Tipo de contrato"
        errorMessage={formState.errors.tipoContrato}
        required
      />

      {/* Valor hora */}
      <Slider
        name="valorHora"
        label="Valor hora"
        value={store.dados.preferencias?.valorHora || ''}
        onChange={(e) =>
          store.atualizarDados({
            preferencias: {
              ...store.dados.preferencias,
              valorHora: e.target.value,
            },
          })
        }
        type="currency"
        required
        min={0}
        max={100}
        step={1}
      />

      {/* Disponibilidade */}
      <Slider
        name="disponibilidade"
        label="Disponibilidade"
        value={store.dados.preferencias?.disponibilidade || ''}
        onChange={(e) =>
          store.atualizarDados({
            preferencias: {
              ...store.dados.preferencias,
              disponibilidade: e.target.value,
            },
          })
        }
        type="hoursByWeek"
        required
        min={0}
        max={44}
        step={1}
      />
    </BaseForm>
  )
}

function PreVisualizacao() {
  const { dados, resetar } = useFormulario()
  const [isPending, startTransition] = useTransition()
  const { replace } = useRouter()

  const finalizarCadastro = async () => {
    const formData = new FormData()
    formData.append('data', JSON.stringify(dados))

    startTransition(async () => {
      const res = await salvarFreela(formData)
      if (res?.success) {
        resetar()
        replace('/cadastro-multi-etapas')
      }
    })
  }

  const renderSecao = (titulo: string, conteudo: React.ReactNode) => (
    <div className="bg-input/30 mb-2.5 rounded-lg border p-3">
      <h3 className="mb-2 border-b pb-2 text-sm font-medium text-neutral-300">
        {titulo}
      </h3>
      <div className="px-2">{conteudo}</div>
    </div>
  )

  return (
    <div className="my-5 flex w-full flex-col space-y-6 rounded-2xl p-4">
      {renderSecao(
        'Dados pessoais:',
        <>
          <p>Nome: {dados.nome}</p>
          <p>E-mail: {dados.email}</p>
          <p>Telefone: {dados.telefone}</p>
        </>,
      )}

      {renderSecao(
        'Experiências:',
        <div
          className={clsx('grid gap-4', {
            'md:grid-cols-2': dados.experiencias?.length === 2,
            'md:grid-cols-3':
              dados.experiencias && dados.experiencias?.length >= 3,
          })}
        >
          {dados.experiencias?.map((exp, i) => {
            const periodoLabel = PeriodOptions.find(
              (o) => o.value === exp.periodo,
            )?.label
            return (
              <div key={i} className="md:px-2 md:odd:border-r">
                <p>Cargo: {exp.cargo}</p>
                <p>Empresa: {exp.empresa}</p>
                <p>
                  Período: <span className="lowercase">{periodoLabel}</span>
                </p>
                <p>Tecnologias: {exp.tecnologias?.join(', ')}</p>
              </div>
            )
          })}
        </div>,
      )}

      {dados.preferencias &&
        renderSecao(
          'Preferências:',
          <>
            <p>Modalidade: {dados.preferencias.modeloTrabalho}</p>
            <p>
              Contrato:{' '}
              {
                TypeContractOptions.find(
                  (o) => o.value === dados.preferencias?.tipoContrato,
                )?.label
              }
            </p>
            <p>Valor hora: {formatarValorHora(dados.preferencias.valorHora)}</p>
            <p>
              Disponibilidade:{' '}
              {formatarDisponibilidade(dados.preferencias.disponibilidade)}
            </p>
          </>,
        )}

      <Button
        onClick={finalizarCadastro}
        className="mt-3 w-full"
        variant="outline"
        size="lg"
      >
        {isPending ? 'Finalizando...' : 'Finalizar cadastro'}
      </Button>
    </div>
  )
}
