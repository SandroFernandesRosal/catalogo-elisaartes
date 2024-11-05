import Services from '@/components/services'
import Highlight from '../components/highlight'
import Tradicional from '@/components/convites'

import Faq from '@/components/faq'
import Footer from '@/components/footer'
import Filtro from '@/components/filtro'
import Savethedate from '@/components/savethedate'
import Lembrete from '@/components/lembrete'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Highlight />
      <Services />
      <Tradicional />
      <Filtro />
      <Savethedate />
      <Lembrete />
      <Faq />
      <Footer />
    </main>
  )
}
