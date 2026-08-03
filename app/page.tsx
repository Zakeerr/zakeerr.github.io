import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Solutions } from '@/components/solutions'
import { Reviews } from '@/components/reviews'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
