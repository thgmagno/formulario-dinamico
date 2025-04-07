import { AppPage } from '@/components/common/AppPage'
import { Provider } from './provider'

export default function CadastroMultiEtapas() {
  return (
    <AppPage pageTitle="Escolha o tipo" showBackButton>
      <Provider />
    </AppPage>
  )
}
