import Icon from './Icon'
import Reveal from './Reveal'

export default function Brands() {
  return (
    <section id="marcas" className="bg-ice py-14 md:py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-gold text-[11.5px] tracking-wider-3 font-medium">MARCAS QUE CONFIAM NA WIND SHOP</p>

          <h2 className="mt-4 font-display text-navy text-[clamp(2.3rem,4.4vw,3.4rem)] leading-[1.1]">
            Representamos o melhor do mar.
          </h2>
          <p className="mt-3 text-navy/60 text-[14px] max-w-[52ch] mx-auto leading-[1.6]">
            Revendedor autorizado de marcas nacionais e internacionais para motores, vela, ferragens, embarcações e moda náutica.
          </p>

          <div className="mt-10 md:mt-12">
            <img
              src="/assets/brands/strip.jpg"
              alt="Marcas representadas pela Marinas Wind Shop: Yanmar, Nautos, V.elo, Suzuki, Yamaha, Mercury, Osklen"
              className="w-full max-w-[1200px] mx-auto h-auto object-contain"
              loading="lazy"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#todas-as-marcas"
              className="group inline-flex items-center gap-3 h-[44px] px-6 rounded-ds border border-navy/80 text-navy hover:bg-navy hover:text-white transition-colors text-[11.5px] font-semibold tracking-wider-2 focus-gold"
            >
              CONHECER TODAS AS MARCAS
              <span className="inline-block transition-transform group-hover:translate-x-1">
                <Icon name="arrow-right" className="w-4 h-4" stroke={1.7} />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
