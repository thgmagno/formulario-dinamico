import { getItems } from '@/actions/session'
import { CardItem } from '@/components/card/CardItem'
import { CardWrapper } from '@/components/card/CardWrapper'
import { AppPage } from '@/components/common/AppPage'
import { isFreelance } from '@/lib/typeGuards/produtos'
import Link from 'next/link'

export default async function CadastroMultiEtapas() {
  const items = await getItems()

  const freelancers = items.filter(isFreelance)
  const cadastrados = [...freelancers]

  return (
    <AppPage pageTitle="Cadastro multi-etapas" showBackButton>
      <div className="grid w-full grid-cols-2 gap-4">
        <Link
          href="/cadastro-multi-etapas/freelancer"
          className="btn-menu bg-card hover:bg-card-foreground"
        >
          <span className="emoji">👨🏻‍💻</span>
          <span className="btn-label">Freela/Dev</span>
        </Link>
      </div>
      <CardWrapper
        title="Cadastrados"
        isEmpty={freelancers.length === 0}
        fallback={[
          'Nenhum cadastrado no momento.',
          'Que tal adicionar alguns para experimentar as validações dos formulários?',
        ]}
      >
        {cadastrados.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </CardWrapper>
    </AppPage>
  )
}
