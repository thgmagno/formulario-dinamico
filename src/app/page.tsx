import Link from 'next/link'

export default function Home() {
  return (
    <main className="wrapper">
      <section className="card">
        <h1>Formulário dinâmico</h1>
        <Link href="cadastro-de-produtos" className="section-link">
          📦 Cadastro de produtos
        </Link>
        <Link href="cadastro-multi-etapas" className="section-link">
          📝 Cadastro multi-etapas
        </Link>
        <Link href="feedback-contextual" className="section-link">
          💬 Feedback contextual
        </Link>
        <Link href="planos-personalizados" className="section-link">
          📊 Planos personalizados
        </Link>
      </section>
    </main>
  )
}
