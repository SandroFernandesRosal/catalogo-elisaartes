import Services from '@/components/services'
import Highlight from '../components/highlight'
import Tradicional from '@/components/convites'

import Faq from '@/components/faq'
import Footer from '@/components/footer'
import Filtro from '@/components/filtro'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Highlight />
      <Services />
      <Tradicional />
      <Filtro />

      <Faq />
      <Footer />
    </main>
  )
}
