import { AppPage } from '@/components/common/AppPage'
import { Provider } from './provider'

export default function PlanosPersonalizados() {
  return (
    <AppPage pageTitle="Escolha um plano" showBackButton>
      <Provider />
    </AppPage>
  )
}
