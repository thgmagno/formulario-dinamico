import { FreelancerType } from '@/lib/types/etapas'
import { CardBase } from './CardBase'
import { Badge } from '../ui/badge'

interface Props {
  emoji: string
  item: FreelancerType
}

export function CardFreelancer({ item, emoji }: Props) {
  return (
    <CardBase id={item.id} title={item.nome} emoji={emoji}>
      <p>
        {item.email} | {item.telefone}
      </p>
      <p className="my-1.5 border-y py-1.5">
        Contrato: {item.preferencias.tipoContrato}, Modalidade:{' '}
        {item.preferencias.modeloTrabalho}, Disponibilidade:{' '}
        {item.preferencias.disponibilidade}, Valor hora:{' '}
        {item.preferencias.valorHora}.
      </p>
      {item.experiencias.map((exp, index) => (
        <div
          key={`${index}-${exp.cargo}`}
          className="border-b py-1.5 last:border-none"
        >
          <p className="mb-1 capitalize">
            {exp.cargo} na empresa {exp.empresa}, {exp.periodo}.
          </p>
          <div className="flex flex-wrap gap-1">
            {exp.tecnologias?.map((tec, index) => (
              <Badge key={`${index}-${tec}`} variant="outline">
                {tec}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </CardBase>
  )
}
