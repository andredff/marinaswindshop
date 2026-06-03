import { useState } from 'react'
import Logo from './Logo'
import Icon from './Icon'

const NAV = ['LOJA', 'OFICINA', 'MARCAS', 'HISTÓRIA', 'TRIMARÃ AVE RARA', 'CONTATO']

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="bg-navy">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex items-center justify-between gap-6 h-[88px]">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-9 text-[12px] font-semibold tracking-wider-2 text-white/90">
              {NAV.map((label) => (
                <a key={label} href="#" className="nav-link hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </nav>

            {/* Utility icons */}
            <div className="flex items-center gap-5 text-white/90">
              <button aria-label="Buscar" className="hover:text-gold transition-colors">
                <Icon name="search" />
              </button>
              <button aria-label="Conta" className="hover:text-gold transition-colors">
                <Icon name="user" />
              </button>
              <button aria-label="Favoritos" className="hidden sm:inline-flex hover:text-gold transition-colors">
                <Icon name="heart" />
              </button>
              <button aria-label="Sacola" className="relative hover:text-gold transition-colors">
                <Icon name="cart" />
                <span className="absolute -top-1.5 -right-2 text-[10px] font-semibold bg-gold text-navy rounded-full w-4 h-4 grid place-items-center">
                  2
                </span>
              </button>

              {/* Hamburger */}
              <button
                aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={open}
                className="lg:hidden ml-1 text-white hover:text-gold transition-colors"
                onClick={() => setOpen((o) => !o)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                  {open ? (
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          <div
            className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              open ? 'max-h-[460px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="border-t border-white/10 py-3">
              <nav className="grid">
                {NAV.map((l) => (
                  <a
                    key={l}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 border-b border-white/[0.08] text-white/85 hover:text-gold transition-colors text-[12.5px] tracking-wider-2 font-semibold"
                  >
                    {l}
                    <Icon name="arrow-right" className="w-3.5 h-3.5 text-gold/70" stroke={1.7} />
                  </a>
                ))}
              </nav>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-4 mb-1 flex items-center justify-center gap-2.5 bg-gold hover:bg-[#b8954f] text-navy h-[48px] rounded-ds text-[12px] font-semibold tracking-wider-2 transition-colors"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
                FALAR COM ESPECIALISTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
