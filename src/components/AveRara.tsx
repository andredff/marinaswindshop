import React, { useState, useEffect, useRef } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'

// ── Count-up ─────────────────────────────────────────────
function parseStatValue(raw: string): { integer: number; suffix: string } {
  const m = raw.match(/^(\d+)(.*)$/)
  if (!m) return { integer: 0, suffix: raw }
  return { integer: parseInt(m[1]), suffix: m[2] }
}

function CountUp({ raw, duration = 1600 }: { raw: string; duration?: number }) {
  const { integer, suffix } = parseStatValue(raw)
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now: number) => {
            const p = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setCount(Math.floor(eased * integer))
            if (p < 1) requestAnimationFrame(step)
            else setCount(integer)
          }
          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [integer, duration])

  // Special cases: "18,3m" keeps decimal suffix; "4x" (no leading digit) renders as-is
  const display = raw === '18,3m' ? `${count},3m` : integer === 0 ? raw : `${count}${suffix}`

  return <span ref={ref}>{display}</span>
}

// ── Data ─────────────────────────────────────────────────
const STATS = [
  { k: '18,3m',  v: 'DE COMPRIMENTO' },
  { k: '12',     v: 'TRIPULANTES' },
  { k: '26 nós', v: 'VELOCIDADE MÁX.' },
  { k: '4x',     v: 'FITA AZUL REFENO' },
]

const SPONSORS = ['NETUNO', 'PETROBRAS', 'LUBRAX', 'SYNTOHIA', 'RECIFE VALE']

export default function AveRara() {
  return (
    <section id="ave-rara" className="relative isolate text-navy overflow-hidden">

      {/* Cinematic hero panel */}
      <div className="grain relative isolate overflow-hidden bg-navy">
        <img
          src="/assets/trimara/ave-rara-skyline.png"
          alt="Trimarã Ave Rara navegando com vela aberta diante do skyline"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '60% center' }}
          loading="lazy"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy/35 via-navy/15 to-navy/85" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy/55 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 pt-20 md:pt-28 pb-16 md:pb-20 min-h-[620px] md:min-h-[720px] flex flex-col justify-end">
          {/* Editorial label */}
          <div className="absolute top-7 md:top-9 left-6 md:left-12 right-6 md:right-12 flex items-center justify-between text-white/85 text-[11px] tracking-wider-3">
            <span className="flex items-center gap-3">
              <span className="w-8 h-px bg-gold/80" />
              <span className="text-gold font-medium">ORGULHO QUE NOS MOVE</span>
            </span>
            <span className="hidden md:inline font-display italic text-white/70 text-[13px] normal-case tracking-normal">
              Tetracampeão Fita Azul — REFENO
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="font-display italic text-gold/90 text-[15px] md:text-[17px]">Trimarã</p>
            <h2
              className="mt-1 font-display text-[#F1E7D2] leading-[0.95] tracking-tight text-[clamp(3.4rem,10vw,8.5rem)]"
              style={{ textShadow: '0 4px 28px rgba(11,29,51,0.5)' }}
            >
              Ave <span className="italic text-gold">Rara</span>
            </h2>
            <p
              className="mt-7 font-display italic text-white/95 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.2] max-w-[34ch]"
              style={{ textShadow: '0 2px 16px rgba(11,29,51,0.55)' }}
            >
              DNA de regata. Orgulho pernambucano.
            </p>
          </div>

          {/* Stats strip — count-up on scroll */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-6 border-t border-white/15 pt-7">
            {STATS.map((s) => (
              <div key={s.k} className="px-1 md:border-r md:last:border-r-0 md:border-white/15">
                <div className="font-display text-[#F1E7D2] text-[clamp(1.6rem,3vw,2.2rem)] leading-none">
                  <CountUp raw={s.k} />
                </div>
                <div className="mt-2 text-gold/85 text-[10.5px] tracking-wider-3 font-medium">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial body */}
      <div className="bg-ice">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 grid grid-cols-12 gap-8 md:gap-12 items-start">

          {/* Copy column */}
          <Reveal className="col-span-12 md:col-span-5">
            <p className="font-display italic text-gold text-[15px]">Uma lenda do mar nordestino</p>
            <h3 className="mt-3 font-display text-navy text-[clamp(2.1rem,3.7vw,2.9rem)] leading-[1.1]">
              Tetracampeão Fita Azul<br />da maior regata do Brasil.
            </h3>
            <p className="mt-7 text-navy/70 text-[15px] leading-[1.65] max-w-[44ch]">
              Construído em fibra e madeira, o <span className="font-display italic text-navy">Ave Rara</span> é
              o trimarã pernambucano que carrega a bandeira da Marinas Wind Shop na REFENO — a maior regata
              oceânica do Brasil, organizada pelo Cabanga Iate Clube — desde 1998. Tetracampeão da Fita Azul
              e multicampeão na classe Multicasco.
            </p>
            <p className="mt-5 text-navy/65 text-[14.5px] leading-[1.65] max-w-[44ch]">
              A mesma cultura náutica que atravessa competições, oficinas e veleiros está no atendimento da Wind Shop.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#trimara-historia"
                className="group inline-flex items-center justify-center gap-3 h-[52px] px-7 bg-navy hover:bg-[#142a47] text-white transition-colors text-[12px] font-semibold tracking-wider-2 rounded-ds focus-gold"
              >
                CONHECER A HISTÓRIA
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  <Icon name="arrow-right" className="w-4 h-4" stroke={1.7} />
                </span>
              </a>
              <a
                href="#trimara-apoiar"
                className="group inline-flex items-center justify-center gap-3 h-[52px] px-7 border border-navy/85 text-navy hover:bg-navy/5 transition-colors text-[12px] font-semibold tracking-wider-2 rounded-ds focus-gold"
              >
                COMO APOIAR
              </a>
            </div>
          </Reveal>

          <div className="hidden md:block md:col-span-1" />

          {/* Photo diptych */}
          <Reveal className="col-span-12 md:col-span-6" delay={150}>
            <div className="grid grid-cols-12 gap-4 md:gap-5">
              <figure className="col-span-12 relative bg-white p-[8px] shadow-[0_28px_50px_-18px_rgba(11,29,51,0.45)]">
                <img
                  src="/assets/trimara/ave-rara-sail.png"
                  alt="Trimarã Ave Rara em alta velocidade com vela cheia"
                  loading="lazy"
                  className="block w-full h-auto aspect-[16/9] object-cover"
                />
                <figcaption className="mt-3 mb-1 px-1 flex items-center justify-between text-navy/70">
                  <span className="font-display italic text-[13.5px]">Travessia Recife → Fernando de Noronha</span>
                  <span className="text-[10.5px] tracking-wider-3">Nº 2082</span>
                </figcaption>
              </figure>

              <figure className="col-span-7 relative bg-white p-[6px] shadow-[0_20px_36px_-14px_rgba(11,29,51,0.4)]">
                <img
                  src="/assets/trimara/ave-rara-close.png"
                  alt="Tripulação a bordo do Ave Rara"
                  loading="lazy"
                  className="block w-full h-auto aspect-[4/3] object-cover"
                />
              </figure>

              <div className="col-span-5 flex flex-col justify-between py-1">
                <blockquote className="font-display italic text-navy text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.3]">
                  "A regata começa no dia que a tripulação se conhece."
                </blockquote>
                <div>
                  <div className="h-px bg-navy/20 mb-3" />
                  <p className="text-navy/55 text-[10.5px] tracking-wider-3">VICENTE GALLO NETO · CAPITÃO</p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Sponsor strip */}
      <div className="bg-navy text-white/80">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gold text-[10.5px] tracking-wider-3 font-medium whitespace-nowrap">PATROCINADORES OFICIAIS</p>
          <div className="flex-1 flex flex-wrap items-center justify-center md:justify-end gap-x-7 gap-y-3">
            {SPONSORS.map((s, i) => (
              <React.Fragment key={s}>
                {i > 0 && <span aria-hidden className="hidden md:inline w-1 h-1 rounded-full bg-gold/70" />}
                <span className="font-display tracking-wider-2 text-[12.5px] text-white/85">{s}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
