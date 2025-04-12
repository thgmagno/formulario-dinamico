import { AppPage } from '@/components/common/AppPage'
import { VeiculoForm } from '@/components/forms/produtos/VeiculoForm'

export default async function CadastroDeVeiculo() {
  return (
    <AppPage
      pageTitle="Cadastro de Veículo"
      href="/cadastro-de-produtos"
      showBackButton
    >
      <VeiculoForm />
    </AppPage>
  )
}
