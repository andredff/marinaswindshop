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

          <div className="mt-10 md:mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {[
              { src: '/assets/logos_marcas_separadas/yamaha_logo.png', alt: 'Yamaha' },
              { src: '/assets/logos_marcas_separadas/suzuki_logo.png', alt: 'Suzuki' },
              { src: '/assets/logos_marcas_separadas/mercury_marine_logo.png', alt: 'Mercury Marine' },
              { src: '/assets/logos_marcas_separadas/yanmar_logo.png', alt: 'Yanmar' },
              { src: '/assets/logos_marcas_separadas/nautos_logo.png', alt: 'Nautos' },
              { src: '/assets/logos_marcas_separadas/velo_sailing_logo.png', alt: 'V.elo Sailing' },
              { src: '/assets/logos_marcas_separadas/osklen_logo.png', alt: 'Osklen' },
            ].map(({ src, alt }, i) => (
              <div
                key={alt}
                className="group flex items-center justify-center"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-md"
                  loading="lazy"
                />
              </div>
            ))}
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
