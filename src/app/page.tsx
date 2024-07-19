import Services from '@/components/services'
import Highlight from '../components/highlight'
import About from '@/components/about'
import Paymant from '@/components/payment'
import Faq from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Highlight />
      <Services />
      <About />
      <Paymant />
      <Faq />
      <Footer />
    </main>
  )
}
