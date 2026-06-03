const TIMELINE = [
  { year: '1978', text: 'Vicente Gallo Neto começa na garagem de casa consertando pranchas de surf e windsurf.' },
  { year: '1984', text: 'A paixão pelo mar vira loja: nasce a Marinas Wind Shop em Pernambuco, para atender quem vive o mar.' },
  { year: 'Hoje', text: 'Referência em produtos, serviços e marcas náuticas, com clientes em todo o Brasil e presença na Recife Marina.' },
]

export default function History() {
  return (
    <section id="historia" className="bg-[#EFE9DC]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:min-h-[640px]">

        {/* Image diptych — top on mobile, right on desktop */}
        <div className="order-1 md:order-2 md:col-span-8 grid grid-cols-2 gap-2 md:gap-0 p-2 md:p-0">
          <figure className="relative overflow-hidden rounded-md md:rounded-none bg-navy/5 aspect-[3/4] md:aspect-auto">
            <img
              src="/assets/history/workshop.png"
              alt="Vicente Gallo Neto trabalhando em uma prancha na oficina, 1978"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </figure>
          <figure className="relative overflow-hidden rounded-md md:rounded-none bg-navy/5 aspect-[3/4] md:aspect-auto">
            <img
              src="/assets/history/marina.png"
              alt="Loja Marinas Wind Shop na Recife Marina, hoje"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </figure>
        </div>

        {/* Copy column */}
        <div className="order-2 md:order-1 md:col-span-4 px-7 md:pl-14 md:pr-10 py-12 md:py-16 flex flex-col justify-center">
          <p className="font-display italic text-gold text-[15px]">Nossa história</p>
          <h2 className="mt-3 font-display text-navy text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.08]">
            De surfista a<br />referência náutica
          </h2>
          <p className="mt-5 text-navy/70 text-[15px] leading-[1.55] max-w-[38ch]">
            Mais de 40 anos de experiência no mar,<br className="hidden sm:block" />
            em oficina, vela, motores e acessórios.
          </p>

          <ol className="mt-10 space-y-7">
            {TIMELINE.map((t, i) => (
              <li key={t.year} className="grid grid-cols-[64px_22px_1fr] items-start gap-4">
                <h3 className="font-display text-navy text-[20px] leading-none pt-1 text-center">{t.year}</h3>
                <div className="relative h-full min-h-[28px]">
                  {i > 0 && <span aria-hidden className="absolute left-1/2 -translate-x-1/2 -top-7 h-7 w-px bg-navy/25" />}
                  {i < TIMELINE.length - 1 && (
                    <span aria-hidden className="absolute left-1/2 -translate-x-1/2 top-3 bottom-[-28px] w-px bg-navy/25" />
                  )}
                  <span aria-hidden className="absolute left-1/2 -translate-x-1/2 top-[5px] w-2.5 h-2.5 rounded-full bg-gold ring-[3px] ring-[#EFE9DC]" />
                </div>
                <p className="text-navy/70 text-[13.5px] leading-[1.55] pt-[2px]">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  )
}
