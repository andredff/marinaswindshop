import Icon from './Icon'
import Reveal from './Reveal'

const PILLARS = [
  { icon: 'wrench',  title: 'Oficina Náutica',        desc: 'Manutenção e reparos para motores, embarcações e equipamentos — com quem realmente entende.' },
  { icon: 'gears',   title: 'Peças Originais',        desc: 'Estoque amplo de peças para Yanmar, Suzuki e os principais motores e sistemas náuticos.' },
  { icon: 'badge',   title: 'Revenda Autorizada',     desc: 'Revendedor oficial Yanmar, Nautos, V.elo e outras marcas de referência no mercado náutico.' },
  { icon: 'consult', title: 'Indicação Técnica',      desc: 'Não sabe qual peça escolher? Fale com quem entende de embarcação, motor e manutenção náutica.' },
] as const

export default function Solutions() {
  return (
    <section id="solucoes" className="bg-ice text-navy py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--glow-center)' }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-gold text-[11.5px] tracking-wider-3 font-medium">LOJA · OFICINA · ESPECIALISTAS</p>

          <h2 className="mt-4 font-display text-navy text-[clamp(2.3rem,4.8vw,3.6rem)] leading-[1.1]">
            Da vela ao motor.<br className="hidden sm:block" /> Do convés ao lifestyle.
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3 font-display italic text-ocean text-[18px]">
            <span>Loja</span>
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Oficina</span>
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Lifestyle</span>
          </div>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <li className={`px-6 py-6 md:py-2 flex flex-col items-center text-center ${i !== 0 ? 'md:border-l border-navy/15' : ''}`}>
                <span className="text-gold mb-4">
                  <Icon name={p.icon} className="w-10 h-10" stroke={1.3} />
                </span>
                <h3 className="font-display text-navy text-[18px] leading-tight">{p.title}</h3>
                <p className="mt-3 text-navy/65 text-[13.5px] leading-[1.55] max-w-[26ch]">{p.desc}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
