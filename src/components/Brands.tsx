import Icon from './Icon'

export default function Brands() {
  return (
    <section id="marcas" className="bg-ice py-14 md:py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 text-center">
        <p className="text-gold text-[11.5px] tracking-wider-3 font-medium">REPRESENTAMOS O MELHOR DO MAR</p>

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
            className="group inline-flex items-center gap-3 h-[44px] px-6 rounded-ds border border-navy/80 text-navy hover:bg-navy hover:text-white transition-colors text-[11.5px] font-semibold tracking-wider-2"
          >
            CONHECER TODAS AS MARCAS
            <span className="inline-block transition-transform group-hover:translate-x-1">
              <Icon name="arrow-right" className="w-4 h-4" stroke={1.7} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
