import { useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  formatBRL,
  type Product,
} from '../data/products'

const WHATSAPP_NUMBER = '558189426994'

/** Build a wa.me link with a message pre-filled for a given product. */
function whatsappLink(product: Product): string {
  const price = formatBRL(product.price)
  const message =
    `Olá! Tenho interesse no produto:\n\n` +
    `*${product.title}*\n` +
    `Valor: ${price}\n\n` +
    `Poderia me passar mais informações para finalizar a compra?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-white rounded-ds overflow-hidden flex flex-col h-full shadow-[0_1px_0_0_rgba(11,29,51,0.06),0_18px_40px_-24px_rgba(11,29,51,0.18)] ring-1 ring-navy/[0.05]">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand/30">
        <img
          src={product.img}
          alt={product.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.brand && (
          <span className="absolute top-3 left-3 bg-navy/80 backdrop-blur-sm text-gold text-[9px] tracking-[0.18em] font-semibold px-2.5 h-[22px] flex items-center rounded-full border border-gold/20">
            {product.brand.toUpperCase()}
          </span>
        )}
        {product.oldPrice && (
          <span className="absolute top-3 right-3 bg-gold text-navy text-[9px] tracking-[0.14em] font-semibold px-2.5 h-[22px] flex items-center rounded-full">
            OFERTA
          </span>
        )}
      </div>

      <div className="flex-1 flex flex-col px-5 pt-5 pb-5">
        <h3 className="font-display text-navy text-[20px] leading-snug">
          {product.title}
        </h3>
        <p className="mt-2 text-navy/60 text-[13px] leading-[1.55] flex-1">
          {product.desc}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-navy text-[26px] leading-none">
            {formatBRL(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-navy/40 text-[14px] line-through">
              {formatBRL(product.oldPrice)}
            </span>
          )}
        </div>

        {/* WhatsApp checkout button */}
        <a
          href={whatsappLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Comprar ${product.title} pelo WhatsApp`}
          className="mt-4 inline-flex items-center justify-center gap-2.5 h-[46px] rounded-ds bg-gold hover:bg-gold-hover active:translate-y-[1px] transition-all text-navy text-[12px] font-semibold tracking-wider-2 shadow-soft focus-gold"
        >
          <span className="grid place-items-center w-6 h-6 rounded-full bg-white/95 text-[#25D366]">
            <Icon name="whatsapp" className="w-3.5 h-3.5" />
          </span>
          COMPRAR PELO WHATSAPP
        </a>
      </div>
    </article>
  )
}

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('categoria') ?? 'todos'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered = useMemo(() => {
    if (active === 'todos') return PRODUCTS
    return PRODUCTS.filter((p) => p.category === active)
  }, [active])

  const selectCategory = (slug: string) => {
    if (slug === 'todos') {
      setSearchParams({})
    } else {
      setSearchParams({ categoria: slug })
    }
  }

  const chips = [{ slug: 'todos', label: 'Todos' }, ...PRODUCT_CATEGORIES]

  return (
    <>
      <Header />

      <main className="bg-ice min-h-screen">
        {/* ── Hero ── */}
        <section className="grain relative bg-navy overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: 'var(--glow-right)' }}
          />
          <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 pt-[120px] pb-14 lg:pb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-[11px] tracking-[0.18em] font-semibold uppercase transition-colors focus-gold rounded-sm group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5">
                <path d="M19 12H5m5-7-7 7 7 7" />
              </svg>
              Voltar
            </Link>

            <p className="mt-8 text-gold text-[11.5px] tracking-wider-3 font-medium">
              CATÁLOGO DE PRODUTOS
            </p>
            <h1 className="mt-4 font-display text-[#F1E7D2] text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] max-w-[16ch]">
              Tudo para a sua navegação
            </h1>
            <p className="mt-5 text-white/65 text-[15px] leading-[1.6] max-w-[52ch]">
              Do motor à vela, do convés ao lifestyle. Escolha seu produto e finalize a
              compra direto pelo WhatsApp com nossa equipe.
            </p>
          </div>
        </section>

        {/* ── Filter + grid ── */}
        <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-12 pb-24 lg:pb-28">
          {/* Category filter chips */}
          <div className="flex flex-wrap gap-2.5">
            {chips.map((c) => {
              const isActive = active === c.slug
              return (
                <button
                  key={c.slug}
                  onClick={() => selectCategory(c.slug)}
                  className={`h-[38px] px-5 rounded-full text-[12px] font-semibold tracking-wider-2 transition-colors focus-gold ${
                    isActive
                      ? 'bg-navy text-white'
                      : 'bg-white text-navy/70 ring-1 ring-navy/10 hover:ring-navy/25 hover:text-navy'
                  }`}
                >
                  {c.label.toUpperCase()}
                </button>
              )
            })}
          </div>

          <p className="mt-6 text-navy/45 text-[13px]">
            {filtered.length}{' '}
            {filtered.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>

          {/* Products grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 70} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-navy/50 text-[15px]">
              Nenhum produto nesta categoria por enquanto.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}
