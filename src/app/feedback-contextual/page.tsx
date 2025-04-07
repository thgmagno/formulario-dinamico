import { AppPage } from '@/components/common/AppPage'
import { Provider } from './provider'

export default function FeedbackContextual() {
  return (
    <AppPage pageTitle="Escolha o contexto" showBackButton>
      <Provider />
    </AppPage>
  )
}
