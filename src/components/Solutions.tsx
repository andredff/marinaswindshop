import Icon from './Icon'

const PILLARS = [
  { icon: 'wrench',  title: 'Oficina Especializada',  desc: 'Manutenção e reparos em motores, embarcações e equipamentos.' },
  { icon: 'gears',   title: 'Peças Originais',        desc: 'Amplo estoque de peças para motores e sistemas náuticos.' },
  { icon: 'badge',   title: 'Serviço Autorizado',     desc: 'Revenda autorizada Yanmar, Nautos e V.elo.' },
  { icon: 'consult', title: 'Atendimento Consultivo', desc: 'Equipe técnica pronta para orientar a melhor escolha para você.' },
]

export default function Solutions() {
  return (
    <section id="solucoes" className="bg-ice text-navy py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,167,104,0.10), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 text-center">
        <p className="text-gold text-[11.5px] tracking-wider-3 font-medium">EXPERIÊNCIA QUE GERA CONFIANÇA</p>

        <h2 className="mt-4 font-display text-navy text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.1]">
          Mais do que produtos, entregamos soluções.
        </h2>

        <div className="mt-5 flex items-center justify-center gap-3 font-display italic text-ocean text-[18px]">
          <span>Sales</span>
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>Service</span>
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>Parts</span>
        </div>

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {PILLARS.map((p, i) => (
            <li
              key={p.title}
              className={`px-6 py-6 md:py-2 flex flex-col items-center text-center ${i !== 0 ? 'md:border-l border-navy/15' : ''}`}
            >
              <span className="text-gold mb-4">
                <Icon name={p.icon} className="w-10 h-10" stroke={1.3} />
              </span>
              <h3 className="font-display text-navy text-[18px] leading-tight">{p.title}</h3>
              <p className="mt-3 text-navy/65 text-[13.5px] leading-[1.55] max-w-[26ch]">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
