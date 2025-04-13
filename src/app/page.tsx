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

      <footer className="mt-10 max-w-xl p-4 text-center text-sm text-zinc-500">
        Esta aplicação usa apenas cookies/localStorage por simplicidade e
        economia. Nenhuma informação é armazenada em banco de dados.
      </footer>
    </AppPage>
  )
}
