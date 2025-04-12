import { AppPage } from '@/components/common/AppPage'
import { EletronicoForm } from '@/components/forms/produtos/EletronicoForm'

export default async function CadastroDeEletronico() {
  return (
    <AppPage
      pageTitle="Cadastro de Eletrônico"
      href="/cadastro-de-produtos"
      showBackButton
    >
      <EletronicoForm />
    </AppPage>
  )
}
