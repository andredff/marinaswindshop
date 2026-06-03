import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import History from './components/History'
import Solutions from './components/Solutions'
import AveRara from './components/AveRara'
import Brands from './components/Brands'
import Footer from './components/Footer'

export default function App() {
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
      <Footer />
    </main>
  )
}
