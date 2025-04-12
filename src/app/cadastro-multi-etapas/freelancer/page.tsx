import { AppPage } from '@/components/common/AppPage'
import { FreelaForm } from '@/components/forms/etapas/FreelaForm'

export default async function CadastroFreelancer() {
  return (
    <AppPage
      pageTitle="Cadastro Freela/Dev"
      href="/cadastro-multi-etapas"
      showBackButton
    >
      <FreelaForm />
    </AppPage>
  )
}
