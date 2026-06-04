import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import History from '../components/History'
import Solutions from '../components/Solutions'
import AveRara from '../components/AveRara'
import Brands from '../components/Brands'
import BlogTeaser from '../components/BlogTeaser'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function LandingPage() {
  return (
    <main className="bg-ice">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Categories />
      <History />
      <Solutions />
      <AveRara />
      <Brands />
      <BlogTeaser />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
