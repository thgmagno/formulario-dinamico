import { GoHome } from '@/components/common/GoHome'
import { Provider } from './provider'

export default function PlanosPersonalizados() {
  return (
    <main className="wrapper">
      <section className="card">
        <div className="flex items-center justify-between">
          <GoHome />
          <h2 className="flex-1">Escolha um plano</h2>
        </div>
        <Provider />
      </section>
    </main>
  )
}
