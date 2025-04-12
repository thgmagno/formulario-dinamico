import { AppPage } from '@/components/common/AppPage'
import Link from 'next/link'

export default function CadastroMultiEtapas() {
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
    </AppPage>
  )
}
