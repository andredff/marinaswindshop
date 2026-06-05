import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon, { type IconName } from './Icon'
import Reveal from './Reveal'

const TRUST: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'anchor',  title: 'DESDE 1984',               desc: 'Mais de 40 anos conectando\nPernambuco ao universo náutico.' },
  { icon: 'shield',  title: 'REVENDA AUTORIZADA',       desc: 'Revendedor oficial Yanmar, Nautos,\nV.elo e outras marcas de referência.' },
  { icon: 'headset', title: 'ATENDIMENTO CONSULTIVO',   desc: 'Não sabe qual peça precisa?\nNossa equipe indica o produto certo.' },
  { icon: 'wrench',  title: 'OFICINA NÁUTICA',          desc: 'Manutenção e reparos para motores,\nveleiros e embarcações em geral.' },
]

function TrustBar() {
  return (
    <div className="bg-ice pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t, i) => (
              <li
                key={t.title}
                className={`flex items-start gap-5 px-4 py-4 ${i !== 0 ? 'lg:border-l border-navy/10' : ''}`}
              >
                <span className="shrink-0 w-12 h-12 grid place-items-center text-gold">
                  <Icon name={t.icon} className="w-8 h-8" stroke={1.3} />
                </span>
                <div>
                  <h4 className="text-navy text-[12px] font-semibold tracking-wider-2">{t.title}</h4>
                  <p className="mt-1.5 text-navy/65 text-[13px] leading-[1.5] whitespace-pre-line">{t.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  )
}

const CATEGORIES = [
  { src: '/assets/categories/engine.png',  alt: 'Motor náutico Yanmar',       title: 'Motores & Peças',     slug: 'motores',    desc: 'Yanmar, Suzuki, Mercury e peças originais — com indicação técnica para a escolha certa.' },
  { src: '/assets/categories/pulley.png',  alt: 'Moitão e cabo de veleiro',   title: 'Vela & Ferragens',    slug: 'vela',       desc: 'Cabos, escotas, moitões, mordedores, trilhos e ferragens. Curadoria de quem tem DNA de regata.' },
  { src: '/assets/categories/vest.png',    alt: 'Colete salva-vidas náutico', title: 'Salvatagem',          slug: 'salvatagem', desc: 'Coletes, salvatagem e equipamentos homologados. Navegar bem é navegar seguro.' },
  { src: '/assets/categories/boat.png',    alt: 'Bote inflável',              title: 'Botes e Caiaques',    slug: 'botes',      desc: 'Botes infláveis, caiaques e acessórios para lazer, pesca e aventura no mar.' },
  { src: '/assets/categories/apparel.png', alt: 'Moda náutica e boné',        title: 'Moda Náutica',        slug: 'moda',       desc: 'Roupas leves, proteção e estilo para viver o mar dentro e fora d\'água.' },
]

interface CategoryCardProps {
  src: string
  alt: string
  title: string
  slug: string
  desc: string
}

function CategoryCard({ src, alt, title, slug, desc }: CategoryCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null)

  const onMouseEnter = () => {
    if (!wrapRef.current) return
    wrapRef.current.style.transition = 'transform 0.08s ease-out'
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transition = 'transform 0.08s ease-out'
    el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`
  }

  const onMouseLeave = () => {
    const el = wrapRef.current
    if (!el) return
    el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0px)'
  }

  return (
    <div
      ref={wrapRef}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ willChange: 'transform' }}
      className="h-full"
    >
      <Link
        to={`/catalogo?categoria=${slug}`}
        aria-label={`Ver produtos de ${title}`}
        className="group block bg-white rounded-ds overflow-hidden shadow-[0_1px_0_0_rgba(11,29,51,0.06),0_18px_40px_-24px_rgba(11,29,51,0.18)] flex flex-col h-full focus-gold"
      >
        <div className="relative aspect-[4/3.4] overflow-hidden bg-sand/30">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex-1 flex flex-col items-center text-center px-5 pt-6 pb-7">
          <h3 className="font-display text-navy text-[22px] leading-snug">{title}</h3>
          <p className="mt-2 text-navy/65 text-[13.5px] leading-[1.55] max-w-[28ch]">{desc}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-gold text-[11px] font-semibold tracking-wider-2 uppercase">
            Ver produtos
            <span className="inline-block transition-transform group-hover:translate-x-1">
              <Icon name="arrow-right" className="w-3.5 h-3.5" stroke={1.9} />
            </span>
          </span>
        </div>
      </Link>
    </div>
  )
}

export default function Categories() {
  return (
    <section id="categorias" className="bg-ice pb-24 lg:pb-28">
      <TrustBar />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-16 lg:pt-20">
        <Reveal>
          <div className="text-center">
            <p className="text-gold text-[11.5px] tracking-wider-3 font-medium">DO MOTOR À VELA, DO CONVÉS AO LIFESTYLE</p>
            <h2 className="mt-4 font-display text-navy text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
              O que você encontra aqui
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-16 bg-gold/80 rounded-full" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6 items-stretch">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="h-full">
              <CategoryCard {...c} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-ds bg-navy hover:bg-ocean active:translate-y-[1px] transition-all text-white text-[12px] font-semibold tracking-wider-2 shadow-soft focus-gold"
            >
              VER CATÁLOGO COMPLETO
              <Icon name="arrow-right" className="w-4 h-4" stroke={1.9} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
