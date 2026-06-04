import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'
import Icon from './Icon'

const NAV = ['OFICINA', 'MARCAS', 'HISTÓRIA', 'TRIMARÃ AVE RARA', 'CONTATO']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  // Sticky shrink on scroll
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  // Close drawer on Escape + basic focus trap
  useEffect(() => {
    if (!open) return
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        hamburgerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = Array.from(
        drawerRef.current?.querySelectorAll('a, button') ?? [],
      ) as HTMLElement[]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handle)
    // move focus into drawer
    const firstLink = drawerRef.current?.querySelector('a') as HTMLElement | null
    firstLink?.focus()
    return () => document.removeEventListener('keydown', handle)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled ? 'shadow-[0_2px_24px_rgba(11,29,51,0.28)]' : ''
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          scrolled ? 'bg-navy/95 backdrop-blur-md' : 'bg-navy'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div
            className={`relative flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-[64px]' : 'h-[88px]'
            }`}
          >
            <Logo size={scrolled ? 'sm' : 'md'} />

            {/* Desktop nav — truly centered on the page */}
            <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-9 text-[12px] font-semibold tracking-wider-2 text-white/90">
              {NAV.map((label) => (
                <a key={label} href="#" className="nav-link hover:text-white transition-colors focus-gold rounded-sm">
                  {label}
                </a>
              ))}
            </nav>

            {/* Utility icons */}
            <div className="relative z-10 flex items-center gap-5 text-white/90">
              <button aria-label="Buscar" className="hover:text-gold transition-colors focus-gold rounded-sm p-0.5">
                <Icon name="search" />
              </button>

              {/* Hamburger */}
              <button
                ref={hamburgerRef}
                aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={open}
                aria-controls="mobile-nav"
                className="lg:hidden ml-1 text-white hover:text-gold transition-colors focus-gold rounded-sm p-0.5"
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
            id="mobile-nav"
            ref={drawerRef}
            aria-hidden={!open}
            className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              open ? 'max-h-[460px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="border-t border-white/10 py-3">
              <nav>
                {NAV.map((l) => (
                  <a
                    key={l}
                    href="#"
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 border-b border-white/[0.08] text-white/85 hover:text-gold transition-colors text-[12.5px] tracking-wider-2 font-semibold focus-gold rounded-sm"
                  >
                    {l}
                    <Icon name="arrow-right" className="w-3.5 h-3.5 text-gold/70" stroke={1.7} />
                  </a>
                ))}
              </nav>
              <a
                href="#contato"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="mt-4 mb-1 flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-hover text-navy h-[48px] rounded-ds text-[12px] font-semibold tracking-wider-2 transition-colors focus-gold"
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
