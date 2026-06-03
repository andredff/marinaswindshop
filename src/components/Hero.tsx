import { useEffect, useRef } from 'react'
import Icon from './Icon'

const heroImg = '/assets/hero-marina.png'

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null)

  // Parallax: image scrolls at 35% of page scroll speed
  useEffect(() => {
    const handle = () => {
      if (!imgRef.current) return
      imgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <section className="relative isolate min-h-[760px] lg:min-h-[820px] overflow-hidden">
      {/* Background image — oversized vertically to allow parallax movement */}
      <img
        ref={imgRef}
        src={heroImg}
        alt="Marina ao entardecer com veleiros ancorados"
        className="absolute left-0 right-0 w-full object-cover"
        style={{ height: '120%', top: '-10%', willChange: 'transform' }}
        loading="eager"
      />

      {/* Cinematic overlays */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/30 to-navy/55" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/10 to-navy/30" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--glow-hero)' }}
      />

      {/* Sub-strip: REVENDA AUTORIZADA */}
      <div className="absolute inset-x-0 top-[88px] z-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="h-[46px] flex items-center justify-center gap-5 text-white/80 text-[11px] tracking-wider-3">
            <span className="hidden sm:inline">REVENDA AUTORIZADA</span>
            <span className="font-display font-bold tracking-wider-2 text-white">YANMAR</span>
            <span className="text-gold">•</span>
            <span className="font-display font-bold tracking-wider-2 text-white">NAUTOS</span>
            <span className="text-gold">•</span>
            <span className="font-display font-bold tracking-wider-2 text-white">V.ELO</span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline font-medium text-gold/90">RECIFE MARINA</span>
          </div>
        </div>
      </div>

      {/* Decorative seal + vertical credential (desktop) */}
      <div
        aria-hidden
        className="hidden md:flex absolute z-10 right-8 lg:right-14 top-1/2 -translate-y-1/2 flex-col items-center gap-10"
      >
        <div className="relative w-[150px] h-[150px] lg:w-[170px] lg:h-[170px]">
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-gold">
            <defs>
              <path id="seal-arc-top" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0" />
              <path id="seal-arc-bot" d="M 100,100 m 78,0 a 78,78 0 1,1 -156,0" />
            </defs>
            <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1"/>
            <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.2"/>
            <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="0.8"/>
            <text fill="currentColor" fontFamily="Georgia, serif" fontSize="11" letterSpacing="4">
              <textPath href="#seal-arc-top" startOffset="50%" textAnchor="middle">MARINAS WIND SHOP</textPath>
            </text>
            <text fill="currentColor" fontFamily="Georgia, serif" fontSize="10" letterSpacing="5">
              <textPath href="#seal-arc-bot" startOffset="50%" textAnchor="middle">RECIFE · PERNAMBUCO · BR</textPath>
            </text>
            {[0, 90, 180, 270].map((a) => (
              <line key={a} x1="100" y1="12" x2="100" y2="18" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1" transform={`rotate(${a} 100 100)`} />
            ))}
            <g transform="translate(100 100)" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M -22 10 L 22 10 L 14 18 L -14 18 Z" />
              <path d="M 0 -22 L 0 10" />
              <path d="M 0 -22 L 16 8 L 0 8 Z" fill="currentColor" fillOpacity="0.18"/>
              <path d="M 0 -22 L -14 8 L 0 8 Z" />
            </g>
            <text x="100" y="148" textAnchor="middle" fill="currentColor" fontFamily="Georgia, serif" fontStyle="italic" fontSize="13" letterSpacing="1">est. 1984</text>
          </svg>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="h-12 w-px bg-gold/70" />
          <span
            className="text-gold/90 text-[10px] tracking-wider-3 font-medium"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            N&nbsp;&nbsp;08°&nbsp;03'&nbsp;&nbsp;·&nbsp;&nbsp;RECIFE MARINA
          </span>
          <span className="h-12 w-px bg-gold/70" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10 pt-[200px] lg:pt-[230px] pb-24">
        <div className="max-w-3xl">
          <h1 className="font-display font-medium leading-[0.95] tracking-tight text-[clamp(3.2rem,9vw,8rem)]">
            <span className="block text-[#F1E7D2]" style={{ textShadow: '0 2px 18px rgba(11,29,51,0.45)' }}>
              Marinas
            </span>
            <span className="block italic text-gold" style={{ textShadow: '0 2px 22px rgba(11,29,51,0.55)' }}>
              Wind Shop
            </span>
          </h1>

          {/* Gold divider */}
          <div className="mt-8 flex items-center gap-4 max-w-[360px]">
            <span className="h-px bg-gold/70 flex-1" />
            <span className="text-gold text-[13px] tracking-wider-3 font-medium whitespace-nowrap">DESDE 1984</span>
            <span className="h-px bg-gold/70 flex-1" />
          </div>

          {/* Tagline */}
          <p
            className="mt-8 font-display italic text-[#F4EBD8] text-[clamp(1.75rem,3.5vw,2.7rem)] leading-[1.15] max-w-[22ch]"
            style={{ textShadow: '0 2px 18px rgba(11,29,51,0.5)' }}
          >
            O mar exige confiança.<br />A Wind Shop entrega.
          </p>

          {/* Value prop */}
          <p className="mt-5 text-white/65 text-[14px] leading-[1.65] max-w-[38ch]">
            Loja, oficina, peças, motores e moda náutica na Recife Marina — para quem leva o mar a sério.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover active:translate-y-[1px] transition-all text-navy font-semibold tracking-wider-2 text-[12px] px-7 h-[54px] rounded-ds shadow-soft focus-gold"
            >
              <span className="grid place-items-center w-7 h-7 rounded-full bg-white/90 text-[#25D366]">
                <Icon name="whatsapp" className="w-4 h-4" />
              </span>
              FALAR COM ESPECIALISTA
            </a>

            <a
              href="#marina"
              className="inline-flex items-center justify-center gap-3 border border-white/80 hover:bg-white/10 transition-colors text-white font-semibold tracking-wider-2 text-[12px] px-7 h-[54px] rounded-ds focus-gold"
            >
              <Icon name="pin" className="w-4 h-4" stroke={1.8} />
              VISITAR NA RECIFE MARINA
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ice" />
    </section>
  )
}
