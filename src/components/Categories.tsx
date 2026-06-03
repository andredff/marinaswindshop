import Icon from './Icon'

const TRUST = [
  { icon: 'anchor',  title: 'DESDE 1984',               desc: 'Tradição e confiança\nno mercado náutico.' },
  { icon: 'shield',  title: 'REVENDA AUTORIZADA',       desc: 'Yanmar, Nautos, V.elo\ne as melhores marcas.' },
  { icon: 'headset', title: 'ATENDIMENTO ESPECIALIZADO', desc: 'Equipe pronta para orientar\nem cada detalhe.' },
  { icon: 'wrench',  title: 'OFICINA ESPECIALIZADA',    desc: 'Manutenção e reparos em motores,\nembarcações e equipamentos.' },
]

function TrustBar() {
  return (
    <div className="bg-ice pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
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
      </div>
    </div>
  )
}

const CATEGORIES = [
  { src: '/assets/categories/engine.png',  alt: 'Motor náutico Yanmar',       title: 'Motores & Peças',     desc: 'Motores de popa, centro e peças originais Yanmar, Suzuki e outros.' },
  { src: '/assets/categories/pulley.png',  alt: 'Moitão e cabo de veleiro',   title: 'Vela & Ferragens',    desc: 'Moitões, cabos, estais, ferragens e tudo para sua velejada.' },
  { src: '/assets/categories/vest.png',    alt: 'Colete salva-vidas náutico', title: 'Segurança',           desc: 'Coletes, boias, salva-vidas e equipamentos de segurança.' },
  { src: '/assets/categories/boat.png',    alt: 'Bote inflável',              title: 'Botes e Caiaques',    desc: 'Botes infláveis, caiaques e acessórios para lazer e pesca.' },
  { src: '/assets/categories/apparel.png', alt: 'Polos náuticas e boné',      title: 'Lifestyle da Marina', desc: 'Roupas, acessórios e marcas selecionadas para o seu estilo.' },
]

interface CategoryCardProps {
  src: string
  alt: string
  title: string
  desc: string
}

function CategoryCard({ src, alt, title, desc }: CategoryCardProps) {
  return (
    <article className="group bg-white rounded-ds overflow-hidden shadow-[0_1px_0_0_rgba(11,29,51,0.06),0_18px_40px_-24px_rgba(11,29,51,0.18)] flex flex-col transition-transform duration-300 hover:-translate-y-1">
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
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-2 text-navy hover:text-gold text-[12px] font-semibold tracking-wider-2 transition-colors"
        >
          VER PRODUTOS
          <span className="inline-block transition-transform group-hover:translate-x-1">
            <Icon name="arrow-right" className="w-4 h-4" stroke={1.6} />
          </span>
        </a>
      </div>
    </article>
  )
}

export default function Categories() {
  return (
    <section id="categorias" className="bg-ice pb-24 lg:pb-28">
      <TrustBar />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-16 lg:pt-20">
        <header className="text-center">
          <p className="text-gold text-[11.5px] tracking-wider-3 font-medium">TUDO PARA SUA NAVEGAÇÃO</p>
          <h2 className="mt-4 font-display text-navy text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.05]">
            Nossas categorias
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-gold/80 rounded-full" />
        </header>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
