import { AppPage } from '@/components/common/AppPage'
import { MenuContainer } from '@/components/common/MenuContainer'
import { MenuLink } from '@/components/common/MenuLink'

export default function Home() {
  return (
    <AppPage pageTitle="Formulários dinâmicos">
      <MenuContainer>
        <MenuLink
          href="cadastro-de-produtos"
          emoji="📦"
          label="Cadastro de produtos"
        />
        <MenuLink
          href="cadastro-multi-etapas"
          emoji="📝"
          label="Cadastro multi-etapas"
          developing
        />
        <MenuLink
          href="feedback-contextual"
          emoji="💬"
          label="Feedback contextual"
          developing
        />
        <MenuLink
          href="planos-personalizados"
          emoji="📊"
          label="Planos personalizados"
          developing
        />
      </MenuContainer>
    </AppPage>
  )
}
